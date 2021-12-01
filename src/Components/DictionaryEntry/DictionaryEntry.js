import "./DictionaryEntry.css";

export function DictionaryEntry(wordObject) {
    return (
      <div className="DictionaryEntry">
        <h2>{wordObject.word}</h2>
        <h3>{wordObject.phonetic}/</h3>
        <p>{wordObject.origin}</p>
        <div className="Meanings">
          {wordObject.meanings.map(meaning => {
            return (
              <div className="Meaning">
                <p>{meaning.definitions[0].definition}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }