interface Props {
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
