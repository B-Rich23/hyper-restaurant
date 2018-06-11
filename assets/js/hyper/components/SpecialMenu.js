import { h, app } from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" className="textureBG">
      <div className="container">
        <h5 className="comp-title">Special Menu</h5>
        <h2>A Taste Of Autumn</h2>
        <div className="row boxes">
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">$35</div>
                    </div>
                    <span className="box-title">BBQ Grilled Ribeye</span>
                    <p className="box-details">16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">$35</div>
                    </div>
                    <span className="box-title">BBQ Grilled Ribeye</span>
                    <p className="box-details">16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                    <div className="box-img">
                        <div className="price-circle">$35</div>
                    </div>
                    <span className="box-title">BBQ Grilled Ribeye</span>
                    <p className="box-details">16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables</p>
                </div>
            </div>
        </div>
        <a className="full-menu" href="#">View Full Menu</a>
      </div>
    </section>
  )
}
