import { h, app } from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      {/* <nav class="navbar navbar-expand-lg navbar-secondary bg-black">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link items" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link items" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link items" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}

<nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <a class="navbar-brand logo" href="#TopImg"><i class="fab fa-pinterest-p"></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a id="item1" class="nav-link" href="#">Menu <span class="sr-only">(current)</span></a>
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
        <a id="item5" class="nav-link" href="#">Reservations</a>
      </li>
    </ul>
  </div>
</nav>

{/* <div className="container">
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
      </div> */}
    </header>

  )
}
