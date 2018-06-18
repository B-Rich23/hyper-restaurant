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


export const globalState = {
  count: 0,
  companyInfo,
  menu
}

