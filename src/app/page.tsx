"use client";

import { HighlightedSource } from "@/components/HighlightedSource";
import "prism-themes/themes/prism-ghcolors.css";
import Prism from "prismjs";
import "prismjs/components/prism-css.min.js";
import { useEffect } from "react";

const Showcase = ({ title, item }) => {
  const { Component, code, lang } = item;
  return (
    <>
      <div>{title}</div>
      <Component />
      <HighlightedSource code={code} lang={lang} />
    </>
  );
};

const MarginSample1 = {
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2">Lorem ipsum</div>;
  },
  code: `<div class="bg-gray-200 p-2 my-2">Lorem ipsum</div>`,
  lang: "html",
};

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="container mx-auto font-serif">
      <Showcase title={"HELLO"} item={MarginSample1} />
    </main>
  );
}
