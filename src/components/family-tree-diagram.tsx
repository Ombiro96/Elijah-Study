import Link from "next/link";
import type { FamilyTree, FamilyTreePerson } from "@/data/types";
import { ChevronDown } from "lucide-react";

function computeDepth(members: FamilyTreePerson[]): Map<string, number> {
  const byId = new Map(members.map((m) => [m.id, m]));
  const depth = new Map<string, number>();

  function resolve(id: string, trail: Set<string>): number {
    if (depth.has(id)) return depth.get(id)!;
    const m = byId.get(id);
    if (!m || !m.parents?.length || trail.has(id)) {
      depth.set(id, 0);
      return 0;
    }
    trail.add(id);
    const d = 1 + Math.max(...m.parents.map((p) => (byId.has(p) ? resolve(p, trail) : -1)));
    depth.set(id, d);
    return d;
  }

  for (const m of members) resolve(m.id, new Set());
  return depth;
}

function MemberCard({ member }: { member: FamilyTreePerson }) {
  const content = (
    <div className="rounded-lg border border-gold-500/30 bg-card px-3 py-2 text-center shadow-sm transition-colors hover:border-gold-500/60">
      <p className="font-heading text-sm font-semibold sm:text-base">{member.name}</p>
      {member.role && <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">{member.role}</p>}
      {member.note && <p className="mt-1 text-[10px] italic text-gold-700 dark:text-gold-400">{member.note}</p>}
    </div>
  );
  return member.personId ? (
    <Link href={`/people/${member.personId}`} className="block w-44 shrink-0 sm:w-52">
      {content}
    </Link>
  ) : (
    <div className="w-44 shrink-0 sm:w-52">{content}</div>
  );
}

export function FamilyTreeDiagram({ tree }: { tree: FamilyTree }) {
  const depth = computeDepth(tree.members);
  const maxDepth = Math.max(...Array.from(depth.values()));
  const rows: FamilyTreePerson[][] = Array.from({ length: maxDepth + 1 }, () => []);
  for (const m of tree.members) rows[depth.get(m.id)!].push(m);

  return (
    <div className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-6">
      <div className="flex flex-col items-center gap-2">
        {rows.map((row, i) => (
          <div key={i} className="flex w-full flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4">
              {row.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
            {i < rows.length - 1 && (
              <ChevronDown className="my-2 size-5 text-gold-500/60" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
