"use client";

import { useEffect } from "react";

export default function GalleryRedirectPage() {
  useEffect(() => {
    window.location.replace("/moments/");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-kg-cream px-4">
      <p className="text-sm text-kg-muted">Redirecting to Moments…</p>
    </main>
  );
}
