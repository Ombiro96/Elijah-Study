"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  NotebookText,
  BookOpenText,
  List,
  X,
} from "lucide-react";
import { slides } from "@/data/slides";
import { Button } from "@/components/ui/button";
import { ScriptureTagList } from "@/components/scripture-tag";
import { cn } from "@/lib/utils";

const weekLabel: Record<number, string> = {
  0: "Introduction",
  1: "Week 1",
  2: "Week 2",
  3: "Week 3",
  4: "Week 4",
};

export function TeachingMode() {
  const [index, setIndex] = React.useState(0);
  const [showNotes, setShowNotes] = React.useState(true);
  const [readingMode, setReadingMode] = React.useState(false);
  const [showPicker, setShowPicker] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const slide = slides[index];

  const goNext = React.useCallback(() => setIndex((i) => Math.min(i + 1, slides.length - 1)), []);
  const goPrev = React.useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (readingMode) return;
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); goNext(); }
      else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); goPrev(); }
      else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(slides.length - 1);
      else if (e.key.toLowerCase() === "n") setShowNotes((s) => !s);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, readingMode]);

  React.useEffect(() => {
    function onChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  if (readingMode) {
    return (
      <div ref={containerRef} className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-heading text-2xl font-semibold">Reading Mode</p>
          <Button variant="outline" size="sm" onClick={() => setReadingMode(false)}>
            <BookOpenText className="mr-1.5 size-4" /> Exit Reading Mode
          </Button>
        </div>
        <div className="space-y-12">
          {slides.map((s) => (
            <div key={s.id} id={s.id} className="border-b border-border/60 pb-10 last:border-0">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
                {s.kicker}
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold">{s.title}</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {s.notes && <p className="mt-3 rounded-lg bg-muted/50 p-3 text-sm italic text-muted-foreground">{s.notes}</p>}
              {s.scriptureRefs && <div className="mt-3"><ScriptureTagList refs={s.scriptureRefs} /></div>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[70vh] flex-col bg-background",
        isFullscreen && "min-h-screen justify-center"
      )}
    >
      {/* Progress bar */}
      <div className="h-1 w-full bg-muted">
        <div
          className="h-full bg-gold-gradient transition-all"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-16">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
          {slide.kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
          {slide.title}
        </h1>
        <ul className="mt-8 space-y-3 text-left text-lg text-muted-foreground sm:text-xl">
          {slide.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" />
              {b}
            </li>
          ))}
        </ul>
        {slide.scriptureRefs && (
          <div className="mt-6">
            <ScriptureTagList refs={slide.scriptureRefs} />
          </div>
        )}
      </div>

      {showNotes && slide.notes && (
        <div className="mx-auto mb-4 w-full max-w-2xl rounded-lg border border-gold-500/30 bg-gold-100/40 px-4 py-3 text-sm text-stone-700 dark:bg-gold-700/10 dark:text-gold-200">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"><NotebookText className="size-3.5" /> Speaker Notes</p>
          {slide.notes}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-2 border-t border-border/60 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" onClick={goPrev} disabled={index === 0} aria-label="Previous slide">
            <ChevronLeft className="size-5" />
          </Button>
          <span className="font-mono text-xs text-muted-foreground">{index + 1} / {slides.length}</span>
          <Button variant="ghost" size="icon" onClick={goNext} disabled={index === slides.length - 1} aria-label="Next slide">
            <ChevronRight className="size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="sm" onClick={() => setShowPicker(true)}>
            <List className="mr-1.5 size-4" /> Slides
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowNotes((s) => !s)}>
            <NotebookText className="mr-1.5 size-4" /> Notes ({showNotes ? "on" : "off"})
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setReadingMode(true)}>
            <BookOpenText className="mr-1.5 size-4" /> Reading Mode
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
            {isFullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          </Button>
        </div>
      </div>

      {showPicker && (
        <div className="absolute inset-0 z-20 flex items-start justify-center overflow-y-auto bg-background/95 p-6 backdrop-blur-sm">
          <div className="w-full max-w-lg">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-heading text-xl font-semibold">Jump to a slide</p>
              <Button variant="ghost" size="icon" onClick={() => setShowPicker(false)}><X className="size-5" /></Button>
            </div>
            <div className="space-y-1">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setIndex(i); setShowPicker(false); }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-muted",
                    i === index && "bg-muted"
                  )}
                >
                  <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">{weekLabel[s.week]}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="pb-3 text-center font-mono text-[11px] text-muted-foreground">
        ← → to navigate · N to toggle notes · Esc to exit fullscreen
      </p>
    </div>
  );
}
