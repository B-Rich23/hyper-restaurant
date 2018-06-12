import { h, app } from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
      <div className="container">
        <div className="title">
          <h5>
          Welcome
          </h5>
          <h1>
          Prime Beef Steak <br />Restaurant
          </h1>
        </div>
        <div className="contact-info">
          <div className="booking">Book a Table Directly:</div>
          <h2>925-444-5555</h2>
          <div className="hours">
          Opening Hours <strong>Mon - Fri: 12pm - 10pm</strong>
          <strong> Weekends: 11am - 11pm</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
