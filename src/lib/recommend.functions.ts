import { createServerFn } from "@tanstack/react-start";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { projects } from "./projects";

export type Rec = { index: number; reason: string };

export const recommendProjects = createServerFn({ method: "POST" })
  .inputValidator((d: { interests: string }) => ({ interests: String(d.interests ?? "").slice(0, 500).trim() }))
  .handler(async ({ data }): Promise<{ recs: Rec[]; error?: string }> => {
    if (!data.interests) return { recs: [], error: "Please describe your interests." };
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) return { recs: [], error: "AI is not configured." };
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });
    const catalog = projects.map((p, i) => `${i}. ${p.name} [${p.tag}] — ${p.problem} ${p.value} Tech: ${p.tech.join(", ")}`).join("\n");
    try {
      const result = streamText({
        model: provider.responses("openai/gpt-6-astra"),
        system: `You recommend projects from Atharva's portfolio. Only use these projects:\n${catalog}\nReply with 1-3 lines, each exactly: <index>|<one short sentence why it matches>. No other text.`,
        prompt: `Visitor interests: ${data.interests}`,
        maxRetries: 0,
        providerOptions: { openai: { store: false, forceReasoning: true, reasoningEffort: "low" } },
      });
      const text = await result.text;
      const recs = text.split("\n").map((l) => l.split("|")).filter((x) => x.length >= 2)
        .map(([i, r]) => ({ index: Number((i ?? "").trim()), reason: (r ?? "").trim() }))
        .filter((r) => Number.isInteger(r.index) && projects[r.index]).slice(0, 3);
      return recs.length ? { recs } : { recs: [], error: "No clear match — try describing your interests differently." };
    } catch (e) {
      console.error(e);
      const status = (e as { statusCode?: number }).statusCode;
      return { recs: [], error: status === 429 ? "Too many requests, please try again shortly." : status === 402 ? "AI credits exhausted." : "Recommendation failed. Please try again." };
    }
  });
