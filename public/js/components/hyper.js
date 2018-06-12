webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(10);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(6);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(9);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuotes = __webpack_require__(7);

var _RandomQuotes2 = _interopRequireDefault(_RandomQuotes);

var _Reviews = __webpack_require__(8);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

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
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", className: "textureBG" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      "Contact!"
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
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platters"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
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
            "a",
            { href: "#", className: "reserve-btn" },
            "Reserve"
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { className: "chef-img" },
            (0, _hyperapp.h)("img", { src: "../img/chef.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { className: "comp-title" },
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Chef Masters"
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "A breathtaking steakhouse experience!"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Rich Belini"
            ),
            " - winner of Chef Masters"
          ),
          (0, _hyperapp.h)("div", { className: "arrows" }),
          (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
          (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right" })
        )
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
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "SpecialMenu", className: "textureBG" },
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "h5",
                { className: "comp-title" },
                "Special Menu"
            ),
            (0, _hyperapp.h)(
                "h2",
                null,
                "A Taste Of Autumn"
            ),
            (0, _hyperapp.h)(
                "div",
                { className: "row boxes" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$35"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "box-title" },
                            "BBQ Grilled Ribeye"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "box-details" },
                            "16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables"
                        )
                    )
                ),
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$35"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "box-title" },
                            "BBQ Grilled Ribeye"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "box-details" },
                            "16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables"
                        )
                    )
                ),
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$35"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "box-title" },
                            "BBQ Grilled Ribeye"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "box-details" },
                            "16oz. Dry-Aged Prime Ribeye Steak, baked potato or steak-frites, side of vegetables"
                        )
                    )
                )
            ),
            (0, _hyperapp.h)(
                "a",
                { className: "full-menu", href: "#" },
                "View Full Menu"
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
          "Prime Beef Steak ",
          (0, _hyperapp.h)("br", null),
          "Restaurant"
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
          "925-444-5555"
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

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
],[11]);