"use client";

import { useEffect } from "react";
import { emojiCursor } from "cursor-effects";

export default function FireCursor() {

  useEffect(() => {

    const Cursor: any = emojiCursor;

    new Cursor({
      emoji: ["🔥","✨","⚡"]
    });

  }, []);

  return null;
}