import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function Reviews({state, actions}) {
  let currentReview = () => {
    return(
      <div>
        <h2>{state.globalState.reviews[state.globalState.reviewStatus.reviewCount].company}</h2>
        <h4>{state.globalState.reviews[state.globalState.reviewStatus.reviewCount].highlight}</h4> <p>{state.globalState.reviews[state.globalState.reviewStatus.reviewCount].review}
        </p>
        <div className="author"><strong>{state.globalState.reviews[state.globalState.reviewStatus.reviewCount].author}</strong> {state.globalState.reviews[state.globalState.reviewStatus.reviewCount].authorInfo}
        </div>
      </div>)


  }
// }
  // let loopReviews = () => {
  //   return state.globalState.reviews.map((item) => {

  //     return(
  //         <h2>{item.company}</h2>
  //         <h4>{item.highlight}</h4>
  //         <p>{item.review}
  //         </p>
  //         <div className="author"><strong>{item.author}</strong> {item.authorInfo}</div>

  //     )
  //   })
  // }

  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="chef-img">
                <img src="../img/chef.jpg" />
            </div>

          </div>
          <div className="col-md-4 comp-title">
            <h5>Reviews</h5>
            {currentReview()}
            <div className="arrows"></div>
            <i onclick={actions.reviewLeft} className={`fas fa-arrow-left ${(state.globalState.reviewStatus.reviewCount > 0) ? 'ready' : ''}`}></i>
            <i onclick={actions.reviewRight} className={`fas fa-arrow-right ${(state.globalState.reviewStatus.reviewCount ===  (state.globalState.reviews.length - 1)) ? '' : 'ready'}`}></i>
          </div>
        </div>
      </div>
    </section>
  )
}
