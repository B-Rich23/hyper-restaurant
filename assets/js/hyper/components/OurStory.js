import { h, app } from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <h5 className="comp-title">Our Story</h5>
              <h2>Cooking is the art of adjustment</h2>
              <p>Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.
              </p>
              <div className="quote">"Hands down the best steaks in Walnut Creek!" - <strong>Sean Dorsey</strong></div>
{/* Reservation button*/}

              <button type="button" href="#" className="reserve-btn" data-toggle="modal" data-target="#exampleModal">Reserve</button>
{/* Reservation Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title justify-content-center" id="exampleModalLabel">Reservation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-row">
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault01">First name</label>
                          <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="John" required/>
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="validationDefault02">Last name</label>
                          <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Smith" required/>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Party Size</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="validationDefault05">Phone</label>
                          <input type="text" class="form-control" id="validationDefault05" placeholder="Phone" required/>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                          <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="submit">Submit</button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
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
