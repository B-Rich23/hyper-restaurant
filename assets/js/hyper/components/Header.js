import { h, app } from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Our Story</a>
          <a href="#">Special Menu</a>
          <a href="#">Reviews</a>
          <a href="#">Contact Us</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>

  )
}
