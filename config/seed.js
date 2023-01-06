require('dotenv').config();
require('./database');


const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Complexion', sortOrder: 10},
        {name: 'Cheeks', sortOrder: 20},
        {name: 'Eyes', sortOrder: 30 },
        {name: 'Lips', sortOrder: 40},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Great Skin', img: './images/great-skin-0.jpeg', category: categories[0], price: 38.00},
        {name: 'The Minimalist', img: './images/minimalist-0.webp', category: categories[0], price: 38.00 },
        {name: 'Brush No.1', img: './images/brushno1-0.webp', category: categories[0], price: 30.00},
        {name: 'What The Founation', img: './images/wtf-0.webp', category: categories[0], price: 44.00},
        {name: 'The Face Pencil', img: './images/wtfp-0.webp', category: categories[0], price: 25.00},
        {name: 'Bronze Balm', img: './images/bronzebalm-1.webp', category: categories[1], price: 30.00},
        {name: 'Flush Balm', img: './images/flushbalm-1.webp', category: categories[1], price: 28.00},
        {name: 'Day Glow', img: './images/dayglow-1.webp', category: categories[1], price: 30.00},
        {name: 'The Best Blush', img: './images/thebestblush-1.webp', category: categories[1], price: 28.00},
        {name: 'Clean Lash', img: './images/cleanlash-2.webp', category: categories[2], price: 26.00},
        {name: 'Brow 1980', img: './images/brow1980-2.webp', category: categories[2], price: 24.00},
        {name: 'The Best Eyeshadow', img: './images/jonesroad-2.webp', category: categories[2], price: 25.00},
        {name:'Siganture Lip', img: './images/siglip-3.webp', category: categories[3], price: 26.00 },
        {name: 'Shade Slick', img: './images/shadeslick-3.webp', category: categories[3], price: 24.00},
        {name: 'Cool Gloss', img: './images/cool3.webp', category: categories[3], price: 22.00},
    ]);

    console.log(items)

    process.exit();

})();
