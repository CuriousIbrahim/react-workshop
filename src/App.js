import React from "react";
import axios from "axios";
import "./App.css";
import { DictionaryEntry, Form, Header, Error, History } from "./Components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordObject: null,
      word: "",
      exists: true,
      words: [],
      isError: false,
      errorDescription: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const word = this.state.word;

    if (word.length === 0) {
      this.setState({
        isError: true,
        errorDescription: "Do not leave input empty",
      });

      return;
    }

    this.handleSearch(word, true);
  }

  handleSearch(word, addToList = false) {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        const data = res.data[0];

        if (addToList) {
          this.addToWordsList(word);
        }

        this.setState({ wordObject: data, isError: false });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.setState({
            isError: true,
            errorDescription: `The word ${this.state.word} does not exist`,
          });
        }
      });
  }

  addToWordsList(word) {
    this.state.words.push(word);

    if (this.state.words.length > 5) {
      this.state.words.shift();
    }
  }

  handleInputChange(event) {
    const target = event.target;

    this.setState({ word: target.value });
  }

  render() {
    let content;

    if (this.state.isError) {
      content = Error(this.state.errorDescription);
    } else if (this.state.wordObject !== null) {
      content = DictionaryEntry(this.state.wordObject);
    } else {
      content = <div></div>;
    }

    const { words } = this.state;

    const reversedWords = words.slice().reverse();

    return (
      <div className="App">
        <div className="Main">
          <div className="Search">
            <Header />
            <Form
              word={this.state.word}
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
            />
            {content}
          </div>
          <History words={reversedWords} onWordClick={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default App;
