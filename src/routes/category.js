const router = require('express').Router();
let Category = require('../models/category.model');
const ParentCategory = require('../models/parent_category.model');

// GET /category/
router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST /category/add
router.route('/add').post((req, res) => {
    console.log(req.body)

    ParentCategory.find({"parent_category_name": req.body.parent_category_name})
        .then(parent_category => {
                const category_name = req.body.category_name;
                const parent_category_id = parent_category[0]._id;
                const newCategory = new Category({category_name, parent_category_id});

                newCategory.save()
                    .then(() => res.json('Category added!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        )
        .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * POST /groups/:id
 * @param remove Category with id :id
 */
router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
      .then(() => res.json('Category deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;