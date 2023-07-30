export interface Props {
  lang: string
  code: string
}

export const HighlightedSource = (props: Props) => {
  return (
    <pre className="line-numbers" style={{ overflow: 'auto' }}>
      <code className={`language-${props.lang}`}>{props.code}</code>
    </pre>
  )
}

export const init = (component: React.FC) => {
  return { Component: component, code: '', lang: '' }
}
