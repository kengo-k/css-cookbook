export function HighlightedSource(props) {
  return (
    <pre className="line-numbers" style={{ overflow: "auto" }}>
      <code className={`language-${props.lang}`}>{props.code}</code>
    </pre>
  );
}
