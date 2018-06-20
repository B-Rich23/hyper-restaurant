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
          <a href="#OurStory">Our Story</a>
          <a href="#SpecialMenu">Special Menu</a>
          <a href="#Reviews">Reviews</a>
          <a href="#ContactUs">Contact Us</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>

  )
}
