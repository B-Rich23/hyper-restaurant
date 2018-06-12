import { h, app } from 'hyperapp'

export default function RandomQuotes({state, actions}) {
  return (
    <section id="RandomQuotes" style={{ backgroundImage: 'linear-gradient(120deg,rgba(0,0,0,.0) 0,#000 200%),url(../img/spices.jpg)'}}>
      <div className="container">
      <h1>"For me, cooking is an extension of love."</h1>
      <span className="author"> - Hedda Sterne</span>
      </div>
    </section>
  )
}
