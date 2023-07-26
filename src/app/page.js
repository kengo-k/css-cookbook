"use client";

import { FlexBasis1 } from "@/components/FlexExamples";
import { HighlightedSource } from "@/components/HighlightedSource";
import "prism-themes/themes/prism-ghcolors.css";
import Prism from "prismjs";
import "prismjs/components/prism-css.min.js";
import { useEffect } from "react";

export const Showcase = ({ title, item }) => {
  const { Component, code, lang } = item;
  return (
    <>
      <div>{title}</div>
      <Component />
      <HighlightedSource code={code} lang={lang} />
    </>
  );
};

export const MarginSample1 = {
  Component: () => {
    return <div class="bg-gray-200 p-2 my-2">Lorem ipsum</div>;
  },
  code: `<div class="bg-gray-200 p-2 my-2">Lorem ipsum</div>`,
  lang: "html",
};

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main class="container mx-auto font-serif">
      <h2 class="text-2xl">Flex Basis</h2>
      <div class="flex flex-row items-center">
        <div class="basis-3/4">
          <FlexBasis1.Component />
        </div>
        <div class="basis-1/4">
          <HighlightedSource code={FlexBasis1.code} lang="html" />
        </div>
      </div>

      <h2 class="text-2xl">Header Example1</h2>

      <h3 class="mt-4">Goal:</h3>
      <div class="bg-gray-200">
        <header class="text-gray-600 body-font">
          <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="ml-3 text-xl">My Awesome Site</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">Link1</a>
              <a class="mr-5 hover:text-gray-900">Link2</a>
              <a class="mr-5 hover:text-gray-900">Link3</a>
              <a class="mr-5 hover:text-gray-900">Link4</a>
            </nav>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
            </button>
          </div>
        </header>
      </div>

      <Showcase title={"HELLO"} item={MarginSample1} />

      {/* <div class="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>
      <div class="bg-gray-200 p-2 my-2 w-1/3 ml-auto">Lorem ipsum</div>
      <div class="bg-gray-200 p-2 my-2 w-1/4 mx-auto">Lorem ipsum</div> */}

      {/* <h3 class="mt-4">Step0:</h3>
      <div class="bg-gray-200">
        <header>
          <a>My Awesome Site</a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Link1</a>
            <a class="mr-5 hover:text-gray-900">Link2</a>
            <a class="mr-5 hover:text-gray-900">Link3</a>
            <a class="mr-5 hover:text-gray-900">Link4</a>
          </nav>
          <button>Login</button>
        </header>
      </div> */}
    </main>
  );
}
