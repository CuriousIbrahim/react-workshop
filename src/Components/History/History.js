export function History(props) {
  const words = props.words;

  const content = words.map((word, i) => (
    <li key={i} onClick={() => props.onWordClick(word)}>
      <a href="#">{word}</a>
    </li>
  ));

  return (
    <div className="History">
      <h2>History</h2>
      <ol>{content}</ol>
    </div>
  );
}
