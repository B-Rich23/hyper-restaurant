webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'PRIME BEEF STEAK',
  title2: 'RESTAURANT',
  phone: '925-444-5555',
  location: 'WALNUT CREEK, CA'

};

var menu = [{
  title: 'BBQ Grilled Ribeye',
  description: '16oz. Dry-Aged Prime Ribeye Steak, Baked Potato or Steak-Frites, Side of Vegetables',
  price: '$35',
  image: "linear-gradient(135deg,rgba(0,0,0,.0) 0,#000 300%),url(../img/steak-frites.jpg)"
}, {
  title: 'Salmon Tartare',
  description: 'Raw Salmon, Avocado, Olives, Tarragon, Lemon-Poppy Seed Dressing',
  price: '$30',
  image: "linear-gradient(135deg,rgba(0,0,0,.0) 0,#000 300%),url(../img/salmon-tartare.jpg)"
}, {
  title: 'Cedar-Plank Grilled Lobster',
  description: 'Grilled Maine Lobster, Garlic Butter Aoli, Crostini, Side Salad',
  price: '$45',
  image: "linear-gradient(135deg,rgba(0,0,0,.0) 0,#000 300%),url(../img/grilled-lobster.jpg)"
}];

var reviews = [{
  company: 'CHEF MASTERS',
  highlight: 'A breathtaking steakhouse experience!',
  author: 'Rich Belini',
  authorInfo: '- winner of Chef Masters',
  review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
}, {
  company: 'TOP COOK',
  highlight: 'Delectable delights abound!',
  author: 'Sasha Murphy',
  authorInfo: '- host of Top Cook',
  review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
}, {
  company: 'BATTLE KITCHEN',
  highlight: 'Must stop steak shop!',
  author: 'Terry Sanders',
  authorInfo: '- producer of Battle Kitchen',
  review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
}, {
  company: 'FOODIE CHANNEL',
  highlight: 'A steak experience par excellence!',
  author: 'Katrina Oliver',
  authorInfo: '- executive chef on Foodie Channel',
  review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
}, {
  company: 'CHEF WARS',
  highlight: 'Your taste buds will thank me!',
  author: 'Hank Espinoza',
  authorInfo: '- reigning gladiator on Chef Wars',
  review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
}];

var quotes = [{
  author: 'Hedda Sterne',
  quote: '"For me, cooking is an extension of love."'
}, {
  author: 'David Chang',
  quote: '"Food, to me, is always about cooking and eating with those you love and care for."'
}, {
  author: 'Geoffrey Zakarian',
  quote: '"I love hospitality, and I love cooking. The kitchen is where I feel most at ease and where I feel most like myself."'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  menu: menu,
  reviews: reviews,
  quotes: quotes,
  reviewStatus: {
    reviewCount: 0
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var reviewRight = function reviewRight(state, actions) {
  return state.globalState.reviewStatus.reviewCount === state.globalState.reviews.length - 1 ? state.globalState.reviewStatus.reviewCount = 4 : {
    reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount++
    }
  };
};

var intro = function intro() {
  console.log('Just ran my first action');
};

var reviewLeft = function reviewLeft(state, actions) {

  return state.globalState.reviewStatus.reviewCount === 0 ? state.globalState.reviewStatus.reviewCount = 0 : {
    reviewStatus: {
      reviewCount: state.globalState.reviewStatus.reviewCount--
    }
  };
};

var actions = exports.actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft,
  intro: intro
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuotes = __webpack_require__(8);

var _RandomQuotes2 = _interopRequireDefault(_RandomQuotes);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

var _vanillaModal = __webpack_require__(15);

var _vanillaModal2 = _interopRequireDefault(_vanillaModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuotes2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

var _globalState = __webpack_require__(1);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'ContactUs', className: 'textureBG' },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'box' },
        (0, _hyperapp.h)(
          'h5',
          { className: 'comp-title' },
          'Contact Us'
        ),
        (0, _hyperapp.h)(
          'div',
          { className: 'row' },
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'title' },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              'h6',
              { className: 'address' },
              '12345 South Broadway',
              (0, _hyperapp.h)('br', null),
              'Walnut Creek, CA 94596'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              (0, _hyperapp.h)(
                'strong',
                null,
                'Email: '
              ),
              (0, _hyperapp.h)(
                'a',
                { href: 'mailTo:info@primebeefsteak.com' },
                'info@primebeefsteak.com'
              )
            ),
            (0, _hyperapp.h)(
              'div',
              { id: 'logo' },
              (0, _hyperapp.h)('i', { 'class': 'fab fa-pinterest-p' })
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'h6',
              { className: 'address' },
              'Phone:'
            ),
            (0, _hyperapp.h)(
              'div',
              { className: 'title' },
              state.globalState.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              'h6',
              { className: 'mealTime' },
              '                  Lunch Services:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Monday - Friday 12pm - 1:30pm',
              (0, _hyperapp.h)('br', null),
              'Saturday & Sunday from 11am - 1:30pm'
            ),
            (0, _hyperapp.h)(
              'h6',
              { className: 'mealTime' },
              '                  Dinner Services:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Daily bookings Monday - Thursday from 5pm - 10pm',
              (0, _hyperapp.h)('br', null),
              'Friday - Sunday from 5pm - 11pm'
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "logo" },
        (0, _hyperapp.h)("i", { "class": "fab fa-pinterest-p" })
      ),
      (0, _hyperapp.h)(
        "nav",
        { className: "menu" },
        (0, _hyperapp.h)(
          "a",
          { className: "ourStory", href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#OurStory" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Reviews" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#ContactUs" },
          "Contact Us"
        ),
        (0, _hyperapp.h)(
          "a",
          { "class": "reserve-btn", "data-toggle": "modal", "data-target": "#exampleModal" },
          "Reservations"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { className: "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://twitter.com/" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.facebook.com/" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://plus.google.com/" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.instagram.com/" },
            (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.yelp.com/" },
            (0, _hyperapp.h)("i", { "class": "fab fa-yelp" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "copyright" },
        "\xA9 2018 Prime Beef Steak Restaurant"
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "nav",
      { "class": "navbar navbar-expand-lg navbar-dark bg-black" },
      (0, _hyperapp.h)(
        "a",
        { "class": "navbar-brand logo", href: "#TopImg" },
        (0, _hyperapp.h)("i", { "class": "fab fa-pinterest-p" })
      ),
      (0, _hyperapp.h)(
        "button",
        { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        (0, _hyperapp.h)("span", { "class": "navbar-toggler-icon" })
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "collapse navbar-collapse justify-content-end", id: "navbarNav" },
        (0, _hyperapp.h)(
          "ul",
          { "class": "navbar-nav" },
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item" },
            (0, _hyperapp.h)(
              "a",
              { id: "item1", "class": "nav-link", href: "../docs/prime-steak-menu.pdf", target: "_blank" },
              "Menu ",
              (0, _hyperapp.h)(
                "span",
                { "class": "sr-only" },
                "(current)"
              )
            )
          ),
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item active" },
            (0, _hyperapp.h)(
              "a",
              { id: "item1", "class": "nav-link", href: "#OurStory" },
              "Our Story"
            )
          ),
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item active" },
            (0, _hyperapp.h)(
              "a",
              { id: "item2", "class": "nav-link", href: "#SpecialMenu" },
              "Special Menu"
            )
          ),
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item active" },
            (0, _hyperapp.h)(
              "a",
              { id: "item3", "class": "nav-link", href: "#Reviews" },
              "Reviews"
            )
          ),
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item active" },
            (0, _hyperapp.h)(
              "a",
              { id: "item4", "class": "nav-link", href: "#ContactUs" },
              "Contact Us "
            )
          ),
          (0, _hyperapp.h)(
            "li",
            { "class": "nav-item active" },
            (0, _hyperapp.h)(
              "a",
              { id: "item5", "class": "nav-link reserve-btn", "data-toggle": "modal", "data-target": "#exampleModal" },
              "Reservations"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { className: "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            "\"Hands down the best steaks in Walnut Creek!\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Sean Dorsey"
            )
          ),
          (0, _hyperapp.h)(
            "button",
            { type: "button", href: "#", className: "reserve-btn", "data-toggle": "modal", "data-target": "#exampleModal" },
            "Reserve"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "modal fade", id: "exampleModal", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
            (0, _hyperapp.h)(
              "div",
              { "class": "modal-dialog", role: "document" },
              (0, _hyperapp.h)(
                "div",
                { "class": "modal-content" },
                (0, _hyperapp.h)(
                  "div",
                  { "class": "modal-header" },
                  (0, _hyperapp.h)(
                    "h5",
                    { "class": "modal-title text-center", id: "exampleModalLabel" },
                    "Reservation"
                  ),
                  (0, _hyperapp.h)(
                    "button",
                    { type: "button", "class": "close", "data-dismiss": "modal", "aria-label": "Close" },
                    (0, _hyperapp.h)(
                      "span",
                      { "aria-hidden": "true" },
                      "\xD7"
                    )
                  )
                ),
                (0, _hyperapp.h)(
                  "div",
                  { "class": "modal-body" },
                  (0, _hyperapp.h)(
                    "form",
                    null,
                    (0, _hyperapp.h)(
                      "div",
                      { "class": "form-row" },
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-4 mb-3" },
                        (0, _hyperapp.h)(
                          "label",
                          { "for": "validationDefault01" },
                          "First name"
                        ),
                        (0, _hyperapp.h)("input", { type: "text", "class": "form-control", id: "validationDefault01", placeholder: "First name", required: true })
                      ),
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-4 mb-3" },
                        (0, _hyperapp.h)(
                          "label",
                          { "for": "validationDefault02" },
                          "Last name"
                        ),
                        (0, _hyperapp.h)("input", { type: "text", "class": "form-control", id: "validationDefault02", placeholder: "Last name", required: true })
                      ),
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-4 mb-3" },
                        (0, _hyperapp.h)(
                          "div",
                          { "class": "form-group" },
                          (0, _hyperapp.h)(
                            "label",
                            { "for": "exampleFormControlSelect1" },
                            "Party Size"
                          ),
                          (0, _hyperapp.h)(
                            "select",
                            { "class": "form-control", id: "exampleFormControlSelect1" },
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "1"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "2"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "3"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "4"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "5"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "6"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "7"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "8"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "9"
                            ),
                            (0, _hyperapp.h)(
                              "option",
                              null,
                              "10"
                            )
                          )
                        )
                      )
                    ),
                    (0, _hyperapp.h)(
                      "div",
                      { "class": "form-row" },
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-6 mb-3" },
                        (0, _hyperapp.h)(
                          "label",
                          { "for": "exampleInputEmail1" },
                          "Email address"
                        ),
                        (0, _hyperapp.h)("input", { type: "email", "class": "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter email", required: true })
                      ),
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-6 mb-3" },
                        (0, _hyperapp.h)(
                          "label",
                          { "for": "validationDefault05" },
                          "Phone"
                        ),
                        (0, _hyperapp.h)("input", { type: "text", "class": "form-control", id: "validationDefault05", placeholder: "Phone", required: true })
                      )
                    ),
                    (0, _hyperapp.h)(
                      "div",
                      { "class": "form-group" },
                      (0, _hyperapp.h)(
                        "div",
                        { "class": "form-check" },
                        (0, _hyperapp.h)("input", { "class": "form-check-input", type: "checkbox", value: "", id: "invalidCheck2", required: true }),
                        (0, _hyperapp.h)(
                          "label",
                          { "class": "form-check-label", "for": "invalidCheck2" },
                          "Agree to terms and conditions"
                        )
                      )
                    ),
                    (0, _hyperapp.h)(
                      "button",
                      { "class": "btn reserve", type: "submit" },
                      "Submit"
                    )
                  )
                ),
                (0, _hyperapp.h)(
                  "div",
                  { "class": "modal-footer" },
                  (0, _hyperapp.h)(
                    "button",
                    { type: "button", "class": "btn exit", "data-dismiss": "modal" },
                    "Close"
                  )
                )
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)("div", { className: "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuotes;

var _hyperapp = __webpack_require__(0);

function RandomQuotes(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuotes', style: { backgroundImage: 'linear-gradient(120deg,rgba(0,0,0,.0) 0,#000 200%),url(../img/spices.jpg)' } },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"For me, cooking is an extension of love."'
      ),
      (0, _hyperapp.h)(
        'span',
        { className: 'author' },
        ' - Hedda Sterne'
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

var _globalState = __webpack_require__(1);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  // window.onload = () => {

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(
        'h2',
        null,
        state.globalState.reviews[state.globalState.reviewStatus.reviewCount].company
      ),
      (0, _hyperapp.h)(
        'h4',
        null,
        state.globalState.reviews[state.globalState.reviewStatus.reviewCount].highlight
      ),
      ' ',
      (0, _hyperapp.h)(
        'p',
        null,
        state.globalState.reviews[state.globalState.reviewStatus.reviewCount].review
      ),
      (0, _hyperapp.h)(
        'div',
        { className: 'author' },
        (0, _hyperapp.h)(
          'strong',
          null,
          state.globalState.reviews[state.globalState.reviewStatus.reviewCount].author
        ),
        ' ',
        state.globalState.reviews[state.globalState.reviewStatus.reviewCount].authorInfo
      )
    );
  };
  // }
  // let loopReviews = () => {
  //   return state.globalState.reviews.map((item) => {

  //     return(
  //         <h2>{item.company}</h2>
  //         <h4>{item.highlight}</h4>
  //         <p>{item.review}
  //         </p>
  //         <div className="author"><strong>{item.author}</strong> {item.authorInfo}</div>

  //     )
  //   })
  // }

  return (0, _hyperapp.h)(
    'section',
    { id: 'Reviews' },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'row' },
        (0, _hyperapp.h)(
          'div',
          { className: 'col-md-8' },
          (0, _hyperapp.h)(
            'div',
            { className: 'chef-img' },
            (0, _hyperapp.h)('img', { src: '../img/chef.jpg' })
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { className: 'col-md-4' },
          (0, _hyperapp.h)(
            'h5',
            { className: 'comp-title' },
            'Reviews'
          ),
          currentReview(),
          (0, _hyperapp.h)('div', { className: 'arrows' }),
          (0, _hyperapp.h)('i', { onclick: actions.reviewLeft, className: 'fas fa-arrow-left ' + (state.globalState.reviewStatus.reviewCount > 0 ? 'ready' : '') }),
          (0, _hyperapp.h)('i', { onclick: actions.reviewRight, className: 'fas fa-arrow-right ' + (state.globalState.reviewStatus.reviewCount === state.globalState.reviews.length - 1 ? '' : 'ready') })
        )
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

var _globalState = __webpack_require__(1);

function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    var menu = state.globalState.menu;
    return (0, _hyperapp.h)(
        'section',
        { id: 'SpecialMenu', className: 'textureBG' },
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'h5',
                { className: 'comp-title' },
                'Special Menu'
            ),
            (0, _hyperapp.h)(
                'h2',
                null,
                'A Taste Of Summer'
            ),
            (0, _hyperapp.h)(
                'div',
                { className: 'container' },
                (0, _hyperapp.h)(
                    'div',
                    { className: 'row boxes' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'col-md-4' },
                        (0, _hyperapp.h)(
                            'div',
                            { className: 'box' },
                            (0, _hyperapp.h)(
                                'div',
                                { id: 'box1', className: 'box-img' },
                                (0, _hyperapp.h)(
                                    'div',
                                    { className: 'price-circle' },
                                    menu[0].price
                                )
                            ),
                            (0, _hyperapp.h)(
                                'span',
                                { className: 'box-title' },
                                menu[0].title
                            ),
                            (0, _hyperapp.h)(
                                'p',
                                { className: 'box-details' },
                                menu[0].description
                            )
                        )
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'col-md-4' },
                        (0, _hyperapp.h)(
                            'div',
                            { className: 'box' },
                            (0, _hyperapp.h)(
                                'div',
                                { id: 'box2', className: 'box-img' },
                                (0, _hyperapp.h)(
                                    'div',
                                    { className: 'price-circle' },
                                    menu[1].price
                                )
                            ),
                            (0, _hyperapp.h)(
                                'span',
                                { className: 'box-title' },
                                menu[1].title
                            ),
                            (0, _hyperapp.h)(
                                'p',
                                { className: 'box-details' },
                                menu[1].description
                            )
                        )
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'col-md-4' },
                        (0, _hyperapp.h)(
                            'div',
                            { className: 'box' },
                            (0, _hyperapp.h)(
                                'div',
                                { id: 'box3', className: 'box-img' },
                                (0, _hyperapp.h)(
                                    'div',
                                    { className: 'price-circle' },
                                    menu[2].price
                                )
                            ),
                            (0, _hyperapp.h)(
                                'span',
                                { className: 'box-title' },
                                menu[2].title
                            ),
                            (0, _hyperapp.h)(
                                'p',
                                { className: 'box-details' },
                                menu[2].description
                            )
                        )
                    )
                )
            ),
            (0, _hyperapp.h)(
                'a',
                { className: 'full-menu', href: './docs/prime-steak-menu.pdf', target: '_blank' },
                'View Full Menu'
            )
        )
    );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title,
          (0, _hyperapp.h)("br", null),
          state.globalState.companyInfo.title2
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { className: "booking" },
          "Book a Table Directly:"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          state.globalState.companyInfo.phone
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "hours" },
          "Opening Hours ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Mon - Fri: 12pm - 10pm"
          ),
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekends: 11am - 11pm"
          )
        )
      )
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(2);

var _globalState = __webpack_require__(1);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);