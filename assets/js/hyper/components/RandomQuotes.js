import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function RandomQuotes({state, actions}) {
  const currentQuote = () => Math.floor(Math.random() * state.globalState.quotes.length);
  let newQuote = currentQuote();

  return (
    <section id="RandomQuotes" style={{ backgroundImage: 'linear-gradient(120deg,rgba(0,0,0,.0) 0,#000 200%),url(../img/spices.jpg)'}}>
      <div className="container">
      <h1>{state.globalState.quotes[newQuote].quote}</h1>
      <span className="author"> - {state.globalState.quotes[newQuote].author}</span>
      </div>
    </section>
  )
}
