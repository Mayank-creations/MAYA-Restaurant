export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  id: string
  label: string
  image: string
  left: MenuItem[]
  right: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'japanese',
    label: 'Japanese',
    image: '/foodImg/japanese.png',
    left: [
      { name: 'Otoro Nigiri', description: 'Fatty bluefin tuna | Aged soy | Wasabi', price: '$38' },
      { name: 'Hokkaido Uni', description: 'Sea urchin | Dashi gel | Micro shiso', price: '$28' },
      { name: 'Wagyu Tataki', description: 'A5 wagyu | Ponzu | Truffle oil', price: '$45' },
      { name: 'Chawanmushi', description: 'Steamed egg custard | Ikura | Yuzu', price: '$22' },
      { name: 'Miso Black Cod', description: 'Saikyo miso | Ginger | Scallion', price: '$36' },
    ],
    right: [
      { name: 'Toro Tartare', description: 'Bluefin belly | Truffle | Quail egg', price: '$32' },
      { name: 'Ebi Tempura', description: 'Tiger prawns | Dashi broth | Daikon', price: '$24' },
      { name: 'Ramen Tonkotsu', description: 'Pork broth | Chashu | Soft egg | Nori', price: '$26' },
      { name: 'Matcha Parfait', description: 'Ceremonial matcha | Azuki | Mochi', price: '$18' },
      { name: 'Sake Steamed Clams', description: 'Manila clams | Dashi | Yuzu butter', price: '$29' },
    ],
  },
  {
    id: 'punjabi',
    label: 'Punjabi',
    image: '/foodImg/punjabi.png',
    left: [
      { name: 'Butter Chicken', description: 'Tandoori chicken | Tomato | Cream | Fenugreek', price: '$24' },
      { name: 'Dal Makhani', description: 'Black lentils | Butter | Cream | Slow cooked 24hr', price: '$18' },
      { name: 'Lamb Rogan Josh', description: 'Slow braised lamb | Kashmiri chilli | Cardamom', price: '$28' },
      { name: 'Amritsari Fish', description: 'Battered fish | Ajwain | Green chutney', price: '$22' },
      { name: 'Sarson da Saag', description: 'Mustard greens | Makki roti | White butter', price: '$16' },
    ],
    right: [
      { name: 'Tandoori Platter', description: 'Chicken tikka | Seekh kebab | Mint chutney', price: '$32' },
      { name: 'Chole Bhature', description: 'Spiced chickpeas | Fried bread | Pickle', price: '$16' },
      { name: 'Paneer Tikka', description: 'Cottage cheese | Bell pepper | Tandoor', price: '$20' },
      { name: 'Lassi', description: 'Yogurt | Rose | Cardamom | Pistachios', price: '$8' },
      { name: 'Gulab Jamun', description: 'Milk dumplings | Rose syrup | Saffron', price: '$10' },
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese',
    image: '/foodImg/chinese.png',
    left: [
      { name: 'Peking Duck', description: 'Crispy duck | Hoisin | Cucumber | Pancake', price: '$42' },
      { name: 'Dim Sum Basket', description: 'Har gow | Siu mai | Char siu bao', price: '$22' },
      { name: 'Kung Pao Chicken', description: 'Sichuan pepper | Peanuts | Dried chilli', price: '$24' },
      { name: 'Mapo Tofu', description: 'Silken tofu | Pork | Doubanjiang | Sichuan oil', price: '$20' },
      { name: 'Wonton Soup', description: 'Pork wontons | Ginger broth | Bok choy', price: '$16' },
    ],
    right: [
      { name: 'Char Siu Pork', description: 'BBQ pork | Honey glaze | Steamed bun', price: '$26' },
      { name: 'Beef Ho Fun', description: 'Flat rice noodles | Wok hei | Bean sprouts', price: '$22' },
      { name: 'Salt & Pepper Squid', description: 'Crispy squid | Garlic | Chilli | Lime', price: '$24' },
      { name: 'Egg Fried Rice', description: 'Jasmine rice | Egg | Spring onion | Soy', price: '$14' },
      { name: 'Mango Pudding', description: 'Fresh mango | Coconut cream | Lychee', price: '$12' },
    ],
  },
  {
    id: 'mediterranean',
    label: 'Mediterranean',
    image: '/foodImg/mediterranean.png',
    left: [
      { name: 'Lamb Souvlaki', description: 'Grilled lamb | Tzatziki | Pita | Tomato', price: '$28' },
      { name: 'Burrata', description: 'Fresh burrata | Heirloom tomato | Basil oil', price: '$22' },
      { name: 'Branzino', description: 'Sea bass | Lemon | Capers | Herb crust', price: '$36' },
      { name: 'Hummus Platter', description: 'House hummus | Olive oil | Za\'atar | Pita', price: '$16' },
      { name: 'Moussaka', description: 'Spiced lamb | Eggplant | Béchamel | Feta', price: '$26' },
    ],
    right: [
      { name: 'Grilled Octopus', description: 'Charred octopus | Lemon | Paprika | Olives', price: '$32' },
      { name: 'Spanakopita', description: 'Spinach | Feta | Phyllo | Dill', price: '$18' },
      { name: 'Risotto ai Funghi', description: 'Wild mushroom | Truffle | Parmesan | Thyme', price: '$28' },
      { name: 'Baklava', description: 'Phyllo | Walnut | Honey | Rose water', price: '$12' },
      { name: 'Tiramisu', description: 'Mascarpone | Espresso | Ladyfinger | Cocoa', price: '$14' },
    ],
  },
]