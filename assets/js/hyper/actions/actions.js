export const actions = {
  reviewRight,
  reviewLeft,
  intro
}

function reviewRight (state, actions) {
  return (
    state.globalState.reviewStatus.reviewCount === (state.globalState.reviews.length - 1) ? state.globalState.reviewStatus.reviewCount = 4 :
    {
      reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount++
      }
    }
  )
}

function intro(){
  console.log('Just ran my first action' );
}

function reviewLeft (state, actions){

  return (
    state.globalState.reviewStatus.reviewCount === 0 ? state.globalState.reviewStatus.reviewCount = 0 :

    {
      reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount--
      }
    }
  )
}
