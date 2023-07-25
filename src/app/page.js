"use client";
import Prism from "prismjs";
import "prismjs/components/prism-css.min.js";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
const codeString = `
body {
  background-color: #f0f0f2;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`;

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="foo">
      <div style={{ border: "1px solid red" }}>HELLO</div>
      <pre>
        <code className="language-css">{codeString}</code>
      </pre>
      <div className="flex justify-between w-500">
        <div className="bg-gray-200 p-2 m-2 w-20">1</div>
        <div className="bg-gray-200 p-2 m-2">2</div>
        <div className="bg-gray-200 p-2 m-2">3</div>
        <div className="bg-gray-200 p-2 m-2">4</div>
      </div>
    </main>
  );
}
