"use client";

import * as React from "react";
import { Maximize, Minimize, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

const MIN_SCALE = 1;
const MAX_SCALE = 4;

/** Click-to-expand image viewer: opens a fullscreen overlay with zoom and pan. */
export function ZoomableImage({
  src,
  alt,
  className,
  thumbnailClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  thumbnailClassName?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [scale, setScale] = React.useState(MIN_SCALE);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const dragRef = React.useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  React.useEffect(() => {
    function onChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function clampScale(next: number) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
  }

  function zoomBy(delta: number) {
    setScale((s) => {
      const next = clampScale(s + delta);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  }

  function reset() {
    setScale(MIN_SCALE);
    setPos({ x: 0, y: 0 });
  }

  function close() {
    if (document.fullscreenElement) document.exitFullscreen?.();
    setOpen(false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) overlayRef.current?.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    zoomBy(e.deltaY > 0 ? -0.5 : 0.5);
  }

  function onPointerDown(e: React.PointerEvent) {
    if (scale <= MIN_SCALE) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current) return;
    setPos({ x: dragRef.current.origX + (e.clientX - dragRef.current.startX), y: dragRef.current.origY + (e.clientY - dragRef.current.startY) });
  }
  function onPointerUp() {
    dragRef.current = null;
    setDragging(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          reset();
          setOpen(true);
        }}
        className={cn("group relative block w-full cursor-zoom-in overflow-hidden rounded-xl", thumbnailClassName)}
        aria-label={`Expand map: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={cn("h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]", className)} loading="lazy" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/15 group-hover:opacity-100">
          <span className="rounded-full bg-black/60 p-2 text-white">
            <ZoomIn className="size-5" />
          </span>
        </span>
      </button>

      {open && (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex flex-col bg-black/95">
          <div className="flex items-center justify-between gap-2 p-3">
            <p className="max-w-[60%] truncate text-sm text-stone-300">{alt}</p>
            <div className="flex items-center gap-1.5">
              <button onClick={() => zoomBy(-0.5)} className="rounded-full p-2 text-stone-200 hover:bg-white/10" aria-label="Zoom out">
                <ZoomOut className="size-5" />
              </button>
              <span className="w-11 text-center font-mono text-xs text-stone-400">{Math.round(scale * 100)}%</span>
              <button onClick={() => zoomBy(0.5)} className="rounded-full p-2 text-stone-200 hover:bg-white/10" aria-label="Zoom in">
                <ZoomIn className="size-5" />
              </button>
              <button onClick={reset} className="rounded-full p-2 text-stone-200 hover:bg-white/10" aria-label="Reset zoom">
                <RotateCcw className="size-4" />
              </button>
              <button onClick={toggleFullscreen} className="rounded-full p-2 text-stone-200 hover:bg-white/10" aria-label="Toggle fullscreen">
                {isFullscreen ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
              </button>
              <button onClick={close} className="rounded-full p-2 text-stone-200 hover:bg-white/10" aria-label="Close">
                <X className="size-5" />
              </button>
            </div>
          </div>
          <div
            className={cn("relative flex-1 overflow-hidden touch-none select-none", scale > MIN_SCALE ? (dragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-out")}
            onClick={(e) => {
              if (scale === MIN_SCALE && e.target === e.currentTarget) close();
            }}
            onWheel={onWheel}
            onDoubleClick={() => (scale > MIN_SCALE ? reset() : zoomBy(1))}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <div className="flex h-full w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                draggable={false}
                className="max-h-[85vh] w-auto max-w-[90vw] select-none object-contain"
                style={{
                  transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
                  transition: dragRef.current ? "none" : "transform 150ms ease-out",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
