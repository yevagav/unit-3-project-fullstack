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
        {name: 'Great Skin', img: 'https://i.imgur.com/CTDuXtH.jpg', category: categories[0], price: 38.00},
        {name: 'The Minimalist', img: 'https://i.imgur.com/hrRPjwW.png', category: categories[0], price: 38.00 },
        {name: 'Brush No.1', img: 'https://i.imgur.com/rP3vECG.png', category: categories[0], price: 30.00},
        {name: 'What The Founation', img: 'https://i.imgur.com/857OVNj.png', category: categories[0], price: 44.00},
        {name: 'The Face Pencil', img: 'https://i.imgur.com/jhGbfsR.png', category: categories[0], price: 25.00},
        {name: 'Bronze Balm', img: 'https://i.imgur.com/Z86ZHQV.jpg', category: categories[1], price: 30.00},
        {name: 'Flush Balm', img: 'https://i.imgur.com/jAo7exB.png', category: categories[1], price: 28.00},
        {name: 'Day Glow', img: 'https://i.imgur.com/DMP9NGr.png', category: categories[1], price: 30.00},
        {name: 'The Best Blush', img: 'https://i.imgur.com/b2xbk86.png', category: categories[1], price: 28.00},
        {name: 'Clean Lash', img: 'https://i.imgur.com/eRlybFR.png', category: categories[2], price: 26.00},
        {name: 'Brow 1980', img: 'https://i.imgur.com/mw25ebA.png', category: categories[2], price: 24.00},
        {name: 'The Best Eyeshadow', img: 'https://i.imgur.com/IyyrdFs.png', category: categories[2], price: 25.00},
        {name:'Siganture Lip', img: 'https://i.imgur.com/gCfFKoz.png', category: categories[3], price: 26.00 },
        {name: 'Shade Slick', img: 'https://i.imgur.com/s9Crqr7.png', category: categories[3], price: 24.00},
        {name: 'Cool Gloss', img: 'https://i.imgur.com/CBryE4k.png', category: categories[3], price: 22.00},
    ]);

    console.log(items)

    process.exit();

})();
