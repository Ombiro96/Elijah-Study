import type { Certainty } from "@/data/types";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BookOpen, Landmark, GraduationCap, Church, HelpCircle } from "lucide-react";

const config: Record<
  Certainty,
  { label: string; icon: React.ElementType; className: string; explanation: string }
> = {
  biblical: {
    label: "Biblical text",
    icon: BookOpen,
    className: "bg-gold-100 text-stone-800 border-gold-300 dark:bg-gold-700/20 dark:text-gold-200 dark:border-gold-700/40",
    explanation: "An explicit statement made by the biblical text itself.",
  },
  "historical-background": {
    label: "Historical background",
    icon: Landmark,
    className: "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-700/30 dark:text-stone-200 dark:border-stone-600/40",
    explanation: "Uncontroversial background from the ancient Near Eastern historical context, often from archaeology or extra-biblical records.",
  },
  "scholarly-consensus": {
    label: "Scholarly consensus",
    icon: GraduationCap,
    className: "bg-[#3f5c53]/10 text-[#2f453e] border-[#3f5c53]/30 dark:bg-[#5d8377]/15 dark:text-[#a8c9bd] dark:border-[#5d8377]/30",
    explanation: "A widely held scholarly reconstruction (e.g. regnal chronology), not stated verbatim in the text but broadly agreed upon.",
  },
  "theological-tradition": {
    label: "Theological tradition",
    icon: Church,
    className: "bg-[#8a4a35]/10 text-[#6b3a29] border-[#8a4a35]/30 dark:bg-[#b06a4e]/15 dark:text-[#e0b7a1] dark:border-[#b06a4e]/30",
    explanation: "A longstanding Christian theological reading, held broadly but not a direct statement of the text.",
  },
  speculative: {
    label: "Speculative",
    icon: HelpCircle,
    className: "bg-clay-500/10 text-clay-600 border-clay-500/30 dark:bg-clay-500/15 dark:text-[#e29d8f] dark:border-clay-500/30",
    explanation: "A plausible but unproven inference — flagged explicitly so it is never mistaken for settled fact.",
  },
};

export function CertaintyBadge({ level, className }: { level: Certainty; className?: string }) {
  const c = config[level];
  const Icon = c.icon;
  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
          c.className,
          className
        )}
      >
        <Icon className="size-3" />
        {c.label}
      </TooltipTrigger>
      <TooltipContent className="max-w-64">{c.explanation}</TooltipContent>
    </Tooltip>
  );
}
