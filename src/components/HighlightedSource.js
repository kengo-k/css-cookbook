export function HighlightedSource(props) {
  return (
    <pre>
      <code className={`language-${props.lang}`}>{props.code}</code>
    </pre>
  );
}
