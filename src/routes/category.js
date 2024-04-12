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

    ParentCategory.find({parent_category_name: req.body.parent_category_name})
        .then(parent_category => {
                parent_category.child_category = parent_category.child_category.concat(req.body.category_name);
            }
        )
        .catch(err => res.status(400).json('Error: ' + err));

    const category_name = req.body.category_name;
    
    if (req.body.category_name == undefined || req.body.parent_category_name == undefined) {
        res.status(400).json('Error: all fields must be specified')
    };

    const newCategory = new Category({parent_category_name, category_name});

    newCategory.save()
        .then(() => res.json('Category added!'))
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