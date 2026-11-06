import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { recommendProjects, type Rec } from "@/lib/recommend.functions";
import { projects } from "@/lib/projects";

export function Recommender({ onOpen }: { onOpen: (i: number) => void }) {
  const run = useServerFn(recommendProjects);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<{ recs: Rec[]; error?: string } | null>(null);
  return (
    <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-6">
      <p className="text-xs uppercase tracking-wider text-primary">AI project finder</p>
      <h3 className="mt-2 text-lg font-semibold">What are you interested in?</h3>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={async (e) => { e.preventDefault(); setBusy(true); setRes(null); try { setRes(await run({ data: { interests: q } })); } catch { setRes({ recs: [], error: "Something went wrong." }); } setBusy(false); }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} required maxLength={500} placeholder="e.g. CRM analytics, marketing funnels, inventory…" className="flex-1 rounded-lg border border-border bg-background px-4 py-3" />
        <button disabled={busy} className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60">{busy ? "Thinking…" : "Recommend"}</button>
      </form>
      {res?.error && <p className="mt-4 text-sm text-destructive">{res.error}</p>}
      <div className="mt-4 space-y-3">
        {res?.recs.map((r) => (
          <button key={r.index} onClick={() => onOpen(r.index)} className="block w-full rounded-lg border border-border p-4 text-left hover:border-primary/50">
            <p className="font-medium">{projects[r.index]?.name}</p>
            <p className="text-sm text-muted-foreground">{r.reason}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
