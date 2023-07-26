"use client";

import Showcase, { createShowcaseItem } from "@/components/common/Showcase";
import "prism-themes/themes/prism-ghcolors.css";
import Prism from "prismjs";
import "prismjs/components/prism-css.min.js";
import { useEffect } from "react";

const MarginSample1 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2">Lorem ipsum</div>;
  },
  code: `<div class="bg-gray-200 p-2 my-2">Lorem ipsum</div>`,
  lang: "html",
});

const MarginSample2 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>;
  },
  code: `<div class="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>`,
  lang: "html",
});

const MarginSample3 = createShowcaseItem({
  Component: () => {
    return (
      <div className="bg-gray-200 p-2 my-2 w-1/2 mx-auto">Lorem ipsum</div>
    );
  },
  code: `<div className="bg-gray-200 p-2 my-2 w-1/2 mx-auto">Lorem ipsum</div>`,
  lang: "html",
});

const MarginSample4 = createShowcaseItem({
  Component: () => {
    return (
      <div className="bg-gray-200 p-2 my-2 w-1/2 ml-auto">Lorem ipsum</div>
    );
  },
  code: `<div className="bg-gray-200 p-2 my-2 w-1/2 ml-auto">Lorem ipsum</div>`,
  lang: "html",
});

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="container mx-auto">
      <h2>Basics of margin</h2>
      <section>
        <div>
          <Showcase title={"Step1: Initial div"} item={MarginSample1} />
          <article className="mt-6">
            This is the most basic div. A background color is set to visually
            understand the area occupied by the div. From this example, it is
            clear that the div occupies the full width.
          </article>
        </div>

        <div>
          <Showcase title={"Step2: Add w-1/2"} item={MarginSample2} />
          <article className="mt-6">
            By specifying w-1/2, the width of the area becomes half.
          </article>
        </div>

        <div>
          <Showcase title={"Step3: Align to center"} item={MarginSample3} />
          <article className="mt-6">
            By specifying mx-auto, the area occupied by the element is centered.
          </article>
        </div>

        <div>
          <Showcase title={"Step4: Align to left"} item={MarginSample4} />
          <article className="mt-6">
            By specifying ml-auto, the area occupied by the element is
            right-aligned.
          </article>
        </div>
      </section>
    </main>
  );
}
