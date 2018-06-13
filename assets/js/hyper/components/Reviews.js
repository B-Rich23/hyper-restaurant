import { h, app } from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="chef-img">
                <img src="../img/chef.jpg" />
            </div>

          </div>
          <div className="col-md-4">
            <h5 className="comp-title">Reviews</h5>
            <h2>Chef Masters</h2>
            <h4>A breathtaking steakhouse experience!</h4>
            <p>Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.
            </p>
            <div className="author"><strong>Rich Belini</strong> - winner of Chef Masters</div>
            <div className="arrows"></div>
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right ready"></i>

          </div>
        </div>
      </div>
    </section>
  )
}
