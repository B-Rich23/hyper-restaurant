import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function SpecialMenu({state, actions}) {
  let loopMenu = () => {
      return state.globalState.menu.map((item) => {
          console.log(item.price)
        return(
        <div className="col-md-4">
            <div className="box">
                <div className="box-img">
                    <div className="price-circle">{item.price}</div>
                    </div>
                    <span className="box-title">{item.title}</span>
                    <p className="box-details">{item.description}</p>
                </div>
            </div>
        )
    })
  }
  return (
    <section id="SpecialMenu" className="textureBG">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>A Taste Of Autumn</h2>
        <div className="row boxes">
            {loopMenu()}
            {/* <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">{state.globalState.menu[0].price}</div>
                    </div>
                    <span className="box-title">{state.globalState.menu[0].title}</span>
                    <p className="box-details">{state.globalState.menu[0].description}</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">{state.globalState.menu[1].price}</div>
                    </div>
                    <span className="box-title">{state.globalState.menu[1].title}</span>
                    <p className="box-details">{state.globalState.menu[1].description}</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">{state.globalState.menu[2].price}</div>
                    </div>
                    <span className="box-title">{state.globalState.menu[2].title}</span>
                    <p className="box-details">{state.globalState.menu[2].description}</p>
                </div>
            </div> */}
        </div>
        <a className="full-menu" href="#">View Full Menu</a>
      </div>
    </section>
  )
}
