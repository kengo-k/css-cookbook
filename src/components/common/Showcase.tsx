import { FC } from 'react'

import { HighlightedSource } from '@/components/common/HighlightedSource'
import { clean } from '@/utils/clean'

interface ShowcaseItem {
  Component: React.FC
  code: string
  lang: string
}

export const createShowcaseItem = (item: ShowcaseItem): ShowcaseItem => {
  return { Component: item.Component, code: item.code, lang: item.lang }
}

export interface ShowcaseProps {
  title?: string
  item: ShowcaseItem
  showCode?: boolean
}

const Showcase: FC<ShowcaseProps> = ({ title, item, showCode }) => {
  const { Component, code, lang } = item
  return (
    <>
      {title && <span className="mt-2 inline-block">{title}</span>}
      <figure className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-lg p-4 font-serif">
        <Component />
        {showCode && <HighlightedSource code={code} lang={lang} />}
      </figure>
    </>
  )
}

interface Props {
  title: string
  component: React.FC
  showCode: boolean
  children?: React.ReactNode
}

export const Showcase2: React.FC<Props> = (props: Props) => {
  const { component: Component, title, showCode } = props
  const code = clean(Component) ?? ''
  return (
    <>
      <div className="mx-4 mt-2">
        {title && <span className="mt-2 inline-block">{title}</span>}
        <figure className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-lg p-4 font-serif">
          <Component />
          {showCode && <HighlightedSource code={code} lang="html" />}
        </figure>
      </div>
      <article className="mt-4">{props.children}</article>
    </>
  )
}

export default Showcase
