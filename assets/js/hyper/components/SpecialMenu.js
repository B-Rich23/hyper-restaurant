import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function SpecialMenu({state, actions}) {
    const menu = state.globalState.menu;
  return (
    <section id="SpecialMenu" className="textureBG">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>A Taste Of Summer</h2>
        <div className="container">
            <div className="row boxes">
                <div className="col-md-4">
                    <div className="box">
                        <div id="box1" className="box-img">
                            <div className="price-circle">{menu[0].price}</div>
                        </div>
                        <span className="box-title">{menu[0].title}</span>
                        <p className="box-details">{menu[0].description}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div id="box2" className="box-img">
                            <div className="price-circle">{menu[1].price}</div>
                        </div>
                        <span className="box-title">{menu[1].title}</span>
                        <p className="box-details">{menu[1].description}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div id="box3" className="box-img">
                            <div className="price-circle">{menu[2].price}</div>
                        </div>
                        <span className="box-title">{menu[2].title}</span>
                        <p className="box-details">{menu[2].description}</p>
                    </div>
                </div>
            </div>
        </div>
        <a className="full-menu" href="./pdfs/prime-steak-menu.pdf" target="_blank">View Full Menu</a>
      </div>
    </section>
  )
}
