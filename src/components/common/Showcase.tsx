import { HighlightedSource } from "@/components/common/HighlightedSource";
import { FC } from "react";

interface ShowcaseItem {
  Component: React.FC;
  code: string;
  lang: string;
}

export const createShowcaseItem = (item: ShowcaseItem): ShowcaseItem => {
  return { Component: item.Component, code: item.code, lang: item.lang };
};

export interface ShowcaseProps {
  title?: string;
  item: ShowcaseItem;
  showCode?: boolean;
}

const Showcase: FC<ShowcaseProps> = ({ title, item, showCode }) => {
  const { Component, code, lang } = item;
  return (
    <>
      {title && <span className="mt-2 inline-block">{title}</span>}
      <figure className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-lg p-4 font-serif">
        <Component />
        {showCode && <HighlightedSource code={code} lang={lang} />}
      </figure>
    </>
  );
};

export default Showcase;
