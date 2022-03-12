const router = require('express').Router();
//destructure each of the models on import
const { Product, Category } = require('../../models')

//api/categories...
//asychronously get data
router.get('/', async (req, res) => {
    // find all categories

    try {
        const allCategories = await Category.findAll({
            //one way to include product model
            include: [{ model: Product }]
        })
        //if no categories inform user
        if (!allCategories) {
            res.status(404).json({ message: "No Categories found :/" })
        }
        res.status(200).json(allCategories)
    }
    catch (err) {
        res.status(500).json(err)
    }

});
router.get('/:id', async (req, res) => {
    try {
        const oneCategory = await Category.findOne({
            where: {
                id: req.params.id,
            },
            //do not have to specify data type
            include: Product,

        })
        if (!oneCategory) {
            res.status(404).json({ message: "No Categories found with that id :/" })
        }
        res.status(200).json(oneCategory)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

});

router.post('/', async (req, res) => {
    try {

        const createCategory = await Category.create(req.body)
        res.status(200).json(createCategory)


    }
    // create a new category
    catch (err) {

        res.status(500).json(err)
    };
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {

        const updateCategory = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (updateCategory == 0) {
            res.status(404).json({ message: "Please add an item to update :/" })
        }
        res.status(200).json(updateCategory)
    }
    catch (err) {

        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {

        const deleteCategory = await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(deleteCategory)
    }
    catch (err) {

        res.status(500).json(err)
    }
});


module.exports = router