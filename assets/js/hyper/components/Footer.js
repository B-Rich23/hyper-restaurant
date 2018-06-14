import { h, app } from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="logo"><i class="fab fa-pinterest-p"></i></div>
        <nav className="menu">
            <a className="ourStory" href="#">Our Story</a>
            <a href="#">Special Menu</a>
            <a href="#">Reviews</a>
            <a href="#">Contact Us</a>
            <a href="#">Our Story</a>
        </nav>
        <ul className="social-media">
          <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="https://plus.google.com/"><i class="fab fa-google-plus-g"></i></a></li>
          <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://www.yelp.com/"><i class="fab fa-yelp"></i></a></li>
        </ul>
        <div className="copyright">
        &copy; 2018 Prime Beef Steak Restaurant
        </div>
      </div>
    </footer>
  )
}
