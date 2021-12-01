import "./History.css";

export function History(props) {
  const words = props.words;

  const content = words.map((word, i) => (
    <li className="ListItem" key={i} onClick={() => props.onWordClick(word)}>
      {word}
    </li>
  ));

  return (
    <div className="History">
      <h2>History</h2>
      <ol>{content}</ol>
    </div>
  );
}
