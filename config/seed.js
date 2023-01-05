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
        {name: 'Great Skin', img: 'public/images/great-skin-0.jpeg', category: categories[0], price: 38.00},
        {name: 'The Minimalist', img: 'public/images/minimalist-0.webp', category: categories[0], price: 38.00 },
        {name: 'Brush No.1', img: 'public/images/brushno1-0.webp', category: categories[0], price: 30.00},
        {name: 'What The Founation', img: 'public/images/wtf-0.webp', category: categories[0], price: 44.00},
        {name: 'The Face Pencil', img: 'public/images/wtfp-0.webp', category: categories[0], price: 25.00},
        {name: 'Bronze Balm', img: 'public/images/bronzebalm-1.webp', category: categories[1], price: 30.00},
        {name: 'Flush Balm', img: 'public/images/flushbalm-1.webp', category: categories[1], price: 28.00},
        {name: 'Day Glow', img: 'public/images/dayglow-1.webp', category: categories[1], price: 30.00},
        {name: 'The Best Blush', img: 'public/images/thebestblush-1.webp', category: categories[1], price: 28.00},
        {name: 'Clean Lash', img: 'public/images/cleanlash-2.webp', category: categories[2], price: 26.00},
        {name: 'Brow 1980', img: '/Users/yevagavrilov/Desktop/ga/software_homework/unit_3/unit-3-project-fullstack/public/images/brow1980-2.webp', category: categories[2], price: 24.00},
        {name: 'The Best Eyeshadow', img: 'public/images/jonesroad-2.webp', category: categories[2], price: 25.00},
        {name:'Siganture Lip', img: 'public/images/siglip-3.webp', category: categories[3], price: 26.00 },
        {name: 'Shade Slick', img: 'public/images/shadeslick-3.webp', category: categories[3], price: 24.00},
        {name: 'Cool Gloss', img: 'public/images/cool3.webp', category: categories[3], price: 22.00},
    ]);

    console.log(items)

    process.exit();

})();
