"use client";

import { useEffect, useCallback } from "react";

interface UseTextProtectionOptions {
  enabled?: boolean;
  blockCopy?: boolean;
  blockCut?: boolean;
  blockSelect?: boolean;
  addCopyrightNotice?: boolean;
  copyrightText?: string;
  selector?: string;
}

export function useTextProtection({
  enabled = true,
  blockCopy = false,
  blockCut = true,
  blockSelect = true,
  addCopyrightNotice = true,
  copyrightText = "© Ebrar Optik - Tüm hakları saklıdır.",
  selector = ".protected-content",
}: UseTextProtectionOptions = {}) {
  const handleCopy = useCallback(
    (e: ClipboardEvent) => {
      if (!enabled) return;

      const target = e.target as HTMLElement;
      const protectedElement = target.closest(selector);

      if (protectedElement) {
        if (blockCopy) {
          e.preventDefault();
          return;
        }

        if (addCopyrightNotice) {
          e.preventDefault();
          const selection = window.getSelection()?.toString() || "";
          const modifiedText = `${selection}\n\n---\n${copyrightText}`;
          e.clipboardData?.setData("text/plain", modifiedText);
        }
      }
    },
    [enabled, blockCopy, addCopyrightNotice, copyrightText, selector]
  );

  const handleCut = useCallback(
    (e: ClipboardEvent) => {
      if (!enabled) return;

      const target = e.target as HTMLElement;
      const protectedElement = target.closest(selector);

      if (protectedElement && blockCut) {
        e.preventDefault();
      }
    },
    [enabled, blockCut, selector]
  );

  useEffect(() => {
    if (!enabled) return;

    // Add CSS for text selection protection
    const styleId = "text-protection-styles";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    if (blockSelect) {
      styleEl.textContent = `
        ${selector} {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        ${selector} input,
        ${selector} textarea,
        ${selector} [contenteditable="true"] {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `;
    }

    // Add event listeners
    document.addEventListener("copy", handleCopy, { passive: false });
    document.addEventListener("cut", handleCut, { passive: false });

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, [enabled, blockSelect, handleCopy, handleCut, selector]);

  return { selector };
}

// Hook for keyboard shortcut protection
export function useKeyboardProtection(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+A (Select All) on protected content
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        const target = e.target as HTMLElement;
        if (target.closest(".protected-content")) {
          // Allow select all in form elements
          if (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable
          ) {
            return;
          }
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled]);
}
