import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const quotes = {
  quote: "Inflammable means flammable? What a country!",
  character: "Dr. Nick",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
  characterDirection: "Right",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: quotes
    };
    this.getCard = this.getCard.bind(this);
  }

getCard() {
  
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({
        card: data[0]
      });
    });
}

render () {
  return (
    <div className="App">
      <QuoteCard card={this.state.card} />
      <button type="button" onClick={this.getCard}>Get quote</button>
    </div>
  );
}
}

export default App;
