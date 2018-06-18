let companyInfo = {
  title: 'PRIME BEEF STEAK',
  title2: 'RESTAURANT',
  phone: '925-444-5555',
  location:'WALNUT CREEK, CA'

}

let menu = [
  {
    title: 'BBQ Grilled Ribeye',
    description:'16oz. Dry-Aged Prime Ribeye Steak, Baked Potato or Steak-Frites, Side of Vegetables',
    price: '$35'
  },
  {
    title: 'Salmon Tartare',
    description:'Raw Salmon, Avocado, Olives, Tarragon, Lemon-Poppy Seed Dressing',
    price: '$30'
  },
  {
    title: 'Cedar-Plank Grilled Lobster',
    description:'Grilled Maine Lobster, Garlic Butter Aoli, Crostini, Side Salad',
    price: '$45'
  }
]

let reviews = [
  {
    company: 'CHEF MASTERS',
    highlight: 'A breathtaking steakhouse experience!',
    author: 'Rich Belini',
    authorInfo: '- winner of Chef Masters',
    review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
  },
  {
    company: 'TOP COOK',
    highlight: 'Delectable delights abound!',
    author: 'Sasha Murphy',
    authorInfo: '- host of Top Cook',
    review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
  },
  {
    company: 'KITCHEN WARS',
    highlight: 'Must stop steak shop!',
    author: 'Terry Sanders',
    authorInfo: '- producer of Kitchen Wars',
    review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
  },
  {
    company: 'THE FOODIE CHANNEL',
    highlight: 'A steak experience par excellence!',
    author: 'Katrina Oliver',
    authorInfo: '- executive chef on The Foodie Channel',
    review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
  },
  {
    company: 'CHEF GLADIATORS',
    highlight: 'Your taste buds will thank me!',
    author: 'Hank Espinoza',
    authorInfo: '- reigning gladiator on Chef Gladiators',
    review: 'Lorem ipsum dolor amet salvia keytar disrupt etsy cloud bread before they sold out kombucha unicorn chartreuse hexagon single-origin coffee paleo beard fixie taxidermy. Shoreditch affogato neutra brooklyn, food truck polaroid irony lomo narwhal. Marfa normcore 8-bit wayfarers kickstarter ethical XOXO tousled wolf keytar offal ugh.'
  }
]

let quotes = [
{
  author: 'Hedda Sterne',
  quote: '"For me, cooking is an extension of love."'
},
{
  author: 'David Chang',
  quote: '"Food, to me, is always about cooking and eating with those you love and care for."'
},
{
  author: 'Geoffrey Zakarian',
  quote: '"I love hospitality, and I love cooking. The kitchen is where I feel most at ease and where I feel most like myself."'
}
]


export const globalState = {
  count: 0,
  companyInfo,
  menu,
  reviews
}

