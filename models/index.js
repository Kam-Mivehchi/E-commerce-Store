//imports the models from direct
const Categories = require('./categories')
const Products = require('./product')
const Tags = require('./tags')
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
Products.belongsToMany(Tags, {
    through: ProductTags,
    foreignKey: 'product_id',
})
//tag belongs to many Products
Tags.belongsToMany(Products, {
    through: ProductTags,
    foreignKey: 'tag_id',
})



///exports the models
module.exports = {
    Categories,
    Products,
    Tags,
    ProductsTags,

}l