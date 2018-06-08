import { h, app } from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section className="TopImg">
      <div className="title">
        <h5>
        Welcome
        </h5>
        <h1>
        Prime Beef Steak Restaurant
        </h1>
      </div>
      <div className="contact-info">
        <div>Book a Table Directly:</div>
        <h2>415-444-5555</h2>
        <div className="hours">
        Opening Hours <strong>Mon - Fri: 12pm - 10pm</strong>
        <strong>Weekends: 11pm - 11pm</strong>
        </div>
      </div>
    </section>
  )
}
