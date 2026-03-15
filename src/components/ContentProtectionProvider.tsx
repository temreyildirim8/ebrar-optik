"use client";

import {
  useTextProtection,
  useKeyboardProtection,
} from "@/hooks/useTextProtection";

export function ContentProtectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enable text protection - blocks selection and adds copyright on copy
  useTextProtection({
    enabled: true,
    blockCopy: false, // Allow copy but add notice
    blockCut: true, // Block cut
    blockSelect: true, // Block text selection
    addCopyrightNotice: true,
    copyrightText:
      "© Ebrar Optik - Tüm hakları saklıdır. İzinsiz kullanım yasaktır.",
  });

  // Block Ctrl+A select all on protected content
  useKeyboardProtection(true);

  return <>{children}</>;
}
