import { h, app } from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="logo"><i class="fab fa-pinterest-p"></i></div>
        <nav className="menu">
            <a href="#">Our Story</a>
            <a href="#">Special Menu</a>
            <a href="#">Reviews</a>
            <a href="#">Contact Us</a>
            <a href="#">Our Story</a>
        </nav>
      </div>
    </footer>
  )
}
