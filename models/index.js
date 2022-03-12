//imports the models from direct
const Category = require('./Category');
const Tag = require('./tag')
const Product = require('./Product');
const ProductTag = require('./ProductTag')


//product belongs to a category
Product.belongsTo(Category, {
    foreignKey: 'category_id',

})
//category has many product models
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

//product belongs to many Tags
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});
//tag belongs to many Products
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});



///exports the models
module.exports = {
    Category,
    Product,
    ProductTag,
    Tag,

};