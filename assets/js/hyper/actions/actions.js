
const reviewRight = (state, actions) => {
  return (
    state.globalState.reviewStatus.reviewCount === (state.globalState.reviews.length - 1) ? state.globalState.reviewStatus.reviewCount = 4 :
    {
      reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount++
      }
    }
  )
}

const intro = () => {
  console.log('Just ran my first action' );
}

const reviewLeft = (state, actions) => {

  return (
    state.globalState.reviewStatus.reviewCount === 0 ? state.globalState.reviewStatus.reviewCount = 0 :

    {
      reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount--
      }
    }
  )
}

export const actions = {
  reviewRight,
  reviewLeft,
  intro
}
