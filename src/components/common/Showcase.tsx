import { HighlightedSource } from '@/components/common/HighlightedSource'
import { clean } from '@/utils/clean'

interface Props {
  title: string
  component: React.FC
  showCode: boolean
  children?: React.ReactNode
}

export const Showcase: React.FC<Props> = (props: Props) => {
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
