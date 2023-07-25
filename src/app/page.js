"use client";
import "prism-themes/themes/prism-ghcolors.css";
import Prism from "prismjs";
import "prismjs/components/prism-css.min.js";
import { useEffect } from "react";
import { HighlightedSource } from "../components/HighlightedSource";

const codeString = `<div class="flex justify-between">
  <div class="bg-gray-200 p-2 m-2">1</div>
  <div class="bg-gray-200 p-2 m-2">2</div>
  <div class="bg-gray-200 p-2 m-2">3</div>
  <div class="bg-gray-200 p-2 m-2">4</div>
  <div class="bg-gray-200 p-2 m-2">5</div>
</div>`;

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="bg-gray-200 p-2 m-2">1</div>
        <div className="bg-gray-200 p-2 m-2">2</div>
        <div className="bg-gray-200 p-2 m-2">3</div>
        <div className="bg-gray-200 p-2 m-2">4</div>
        <div className="bg-gray-200 p-2 m-2">5</div>
      </div>
      <HighlightedSource code={codeString} lang="html" />
    </main>
  );
}
