import React from "react";
import axios from 'axios';
import './App.css';
import { DictionaryEntry, Form, Header, Error } from "./Components";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wordObject: null, word: "", exists: true}

    this.handleInputChange = this.handleInputChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const word = this.state.word;

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => {
      const data = res.data[0];
      this.setState({wordObject: data, exists: true});
    }).catch(err => {
      if (err.response.status === 404) {
        this.setState({exists: false})
      }
    })
  }

  handleInputChange(event) {    
    const target = event.target;

    this.setState(
      {word: target.value}
    )
  }

  render() {
    let content;
    
    if (!this.state.exists) {
      content = Error(this.state.word);
    } else if (this.state.wordObject !==null) {
      content = DictionaryEntry(this.state.wordObject);
    } else {
      content = <div></div>;
    }

    return (
      <div className="App">
        <Header />
        <Form word={this.state.word} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
        {content}
      </div>
    );
  }
}


export default App;
