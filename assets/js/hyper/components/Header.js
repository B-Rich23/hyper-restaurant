import { h, app } from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>

      <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <a class="navbar-brand logo" href="#TopImg"><i class="fab fa-pinterest-p"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="item1" class="nav-link" href="../pdfs/prime-steak-menu.pdf" target="_blank">Menu <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a id="item1" class="nav-link" href="#OurStory">Our Story</a>
            </li>
            <li class="nav-item active">
              <a id="item2" class="nav-link" href="#SpecialMenu">Special Menu</a>
            </li>
            <li class="nav-item active">
              <a id="item3" class="nav-link" href="#Reviews">Reviews</a>
            </li>
            <li class="nav-item active">
              <a id="item4" class="nav-link" href="#ContactUs">Contact Us </a>
            </li>
            <li class="nav-item active">
              <a id="item5" class="nav-link reserve-btn" data-toggle="modal" data-target="#exampleModal">Reservations</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>

  )
}
