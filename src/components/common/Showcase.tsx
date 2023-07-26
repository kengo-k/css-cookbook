import { HighlightedSource } from "@/components/common/HighlightedSource";
import { FC } from "react";

export interface ShowcaseItem {
  Component: React.FC;
  code: string;
  lang: string;
}

export interface ShowcaseProps {
  title: string;
  item: ShowcaseItem;
}

const Showcase: FC<ShowcaseProps> = ({ title, item }) => {
  const { Component, code, lang } = item;
  return (
    <>
      <span>{title}</span>
      <figure className="border-2 border-gray-50 bg-gray-50 rounded-lg p-4">
        <Component />
        <HighlightedSource code={code} lang={lang} />
      </figure>
    </>
  );
};

export default Showcase;
