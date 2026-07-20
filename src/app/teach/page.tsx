import type { Metadata } from "next";
import { TeachingMode } from "@/components/teaching-mode";

export const metadata: Metadata = { title: "Teaching Mode — The Prophet Elijah" };

export default function TeachPage() {
  return <TeachingMode />;
}
