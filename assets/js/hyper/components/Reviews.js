import { h, app } from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <h5 className="comp-title">Our Story</h5>
              <h2>Cooking is the art of adjustment</h2>
              <p>Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.
              </p>
              <div className="quote">"Hands down the best steaks in Walnut Creek!" - <strong>Sean Dorsey</strong></div>
              <a href="#" className="reserve-btn">Reserve</a>

          </div>
          <div className="col-md-6">
              <div className="video-img">
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
