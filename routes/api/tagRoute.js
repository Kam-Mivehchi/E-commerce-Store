const router = require('express').Router();
// const Tag = require('../../models/Tag');
// const Product = require('../../models/Product')
// // The `/api/tags` endpoint
// const ProductTag = require('../../models/ProductTag')
const { Tag, Product, ProductTag } = require('../../models')
router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    Tag.findAll({
        includes: [{
            model: Product,
            through: ProductTag,
        },
            // {
            //     model: Product,
            //     through: ProductTag,
            // },

            // {
            //     model: Product,
            //     // through: ProductTag,
            // },
        ],
    }).then((tags) => res.json(tags))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
});

router.post('/', (req, res) => {
    // create a new tag
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
});

module.exports = router;
