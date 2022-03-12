const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models')
router.get('/', async (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    try {
        const data = await Tag.findAll({
            include: [{
                model: Product,
                through: ProductTag,
            },

            ],
        })
        if (!data) {
            res.status(404).json({ message: "No Tags found :/" })
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const data = await Tag.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Product,
                through: ProductTag,
            },

            ],
        })
        if (!data) {
            res.status(404).json({ message: "No tags found with that id :/" })
        }
        res.status(200).json(data)
    }
    catch (err) {

        res.status(500).json(err);
    }

});

router.post('/', async (req, res) => {
    try {
        const data = await Tag.create(req.body)

        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await Tag.update(req.body, {
            where: {
                id: req.params.id
            },

        })

        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await Tag.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!data) {
            res.status(404).json({ message: "No Tag was found with that id :/" })
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
