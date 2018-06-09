import { h, app } from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          Logo
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Party Platters</a>
          <a href="#">Locations</a>
          <a href="#">Rewards</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>

  )
}
