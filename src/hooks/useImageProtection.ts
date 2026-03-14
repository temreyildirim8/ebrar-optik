"use client";

import { useEffect, useRef } from "react";

interface UseImageProtectionOptions {
  enabled?: boolean;
  blockContextMenu?: boolean;
  blockDrag?: boolean;
  onContextMenuBlocked?: () => void;
}

export function useImageProtection({
  enabled = true,
  blockContextMenu = true,
  blockDrag = true,
  onContextMenuBlocked,
}: UseImageProtectionOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    const element = elementRef.current;

    const handleContextMenu = (e: MouseEvent) => {
      if (blockContextMenu) {
        e.preventDefault();
        onContextMenuBlocked?.();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if (blockDrag) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Prevent long-press context menu on mobile
      if (blockContextMenu && e.touches.length > 0) {
        // Store touch start time
        const touchStartTime = Date.now();
        element.dataset.touchStartTime = String(touchStartTime);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!blockContextMenu || !element.dataset.touchStartTime) return;

      const touchDuration = Date.now() - Number(element.dataset.touchStartTime);
      // If touch duration > 500ms, it's likely a long press
      if (touchDuration > 500) {
        e.preventDefault();
        onContextMenuBlocked?.();
      }
      delete element.dataset.touchStartTime;
    };

    // Add event listeners with passive: false where needed
    element.addEventListener("contextmenu", handleContextMenu, { passive: false });
    element.addEventListener("dragstart", handleDragStart, { passive: false });
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchend", handleTouchEnd, { passive: false });

    // Prevent selection on the element
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";

    return () => {
      element.removeEventListener("contextmenu", handleContextMenu);
      element.removeEventListener("dragstart", handleDragStart);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);

      // Reset styles
      element.style.userSelect = "";
      element.style.webkitUserSelect = "";
    };
  }, [enabled, blockContextMenu, blockDrag, onContextMenuBlocked]);

  return elementRef;
}
