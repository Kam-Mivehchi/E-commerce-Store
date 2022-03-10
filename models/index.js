//imports the models from direct
const Categories = require('./categories');
const Tag = require('./tag')
const Products = require('./product');
const ProductTags = require('./productTags')


//product belongs to a category
Products.belongsTo(Categories, {
    foreignKey: 'category_id',
})
//category has many product models
Categories.hasMany(Products, {
    foreignKey: 'category_id',
});

//product belongs to many Tags
Products.belongsToMany(Tag, {
    through: ProductTags,
    foreignKey: 'product_id',
})
//tag belongs to many Products
Tag.belongsToMany(Products, {
    through: ProductTags,
    foreignKey: 'tag_id',
})



///exports the models
module.exports = {
    Categories,
    Products,
    Tag,
    ProductTags,

};