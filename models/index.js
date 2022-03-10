//imports the models from direct
const Categories = require('./Category');
const Tag = require('./Tag')
const Products = require('./Product');
const ProductTags = require('./ProductTag')


//product belongs to a category
Products.belongsTo(Categories,)
//category has many product models
Categories.hasMany(Products,);

//product belongs to many Tags
Products.belongsToMany(Tag, {
    through: ProductTags,

});
//tag belongs to many Products
Tag.belongsToMany(Products, {
    through: ProductTags,

});



///exports the models
module.exports = {
    Categories,
    Products,
    ProductTags,
    Tag,

};