import { h, app } from 'hyperapp'
import { globalState } from '../state/globalState';

export default function SpecialMenu({state, actions}) {
    const menu = state.globalState.menu;
//   let menuImage = () => {
//     const boxImgs = document.querySelectorAll('.box-img');
//     boxImgs.forEach((img) => {
//         console.log(img);
//         return img.style.set('height', '400px')

//         // return img.set('background-image', item.image)
//     })

//   }
// const boxImg = document.querySelector('.box-img');

//   let loopMenu = () => {
//       return state.globalState.menu.map((item) => {
//           console.log(item.image);

        // boxImg.set('height', '100px')

        // return img.set('background-image', item.image)
//         return(
//         <div className="col-md-4">
//             <div className="box">
//                 <div className="box-img"style="background-image:url('http://www.example.com/img.png')">
//                     <div className="price-circle">{item.price}</div>
//                     </div>
//                     <span className="box-title">{item.title}</span>
//                     <p className="box-details">{item.description}</p>

//                 </div>
//             </div>

//         )
//     })

//   }
  return (
    <section id="SpecialMenu" className="textureBG">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>A Taste Of Summer</h2>
        <div className="row boxes">
            {/* {loopMenu()} */}
            {/* {menuImage()} */}
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
        <a className="full-menu" href="#">View Full Menu</a>
      </div>
    </section>
  )
}
