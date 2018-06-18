import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" className="textureBG">
      <div className="container">
        <div className="box">
          <h5 className="comp-title">Contact Us</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="title">
              {state.globalState.companyInfo.location}
              </div>
              <h6 className="address">
              12345 South Broadway<br/>Walnut Creek, CA 94596
              </h6>
              <p>
              <strong>Email: </strong><a href="mailTo:info@primebeefsteak.com">info@primebeefsteak.com</a>
              </p>
              <div id="map">
              </div>
            </div>
            <div className="col-md-6">
                <h6 className="address">
                Phone:
                </h6>
                <div className="title">
                {state.globalState.companyInfo.phone}
                </div>
                <h6 className="mealTime">                  Lunch Services:
                </h6>
                <p>
                Monday - Friday 12pm - 1:30pm<br/>
                Saturday &amp; Sunday from 11am - 1:30pm
                </p>
                <h6 className="mealTime">                  Dinner Services:
                </h6>
                <p>
                Daily bookings Monday - Thursday from 5pm - 10pm<br/>
                Friday - Sunday from 5pm - 11pm
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
