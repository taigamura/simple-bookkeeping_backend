const router = require('express').Router();
let ParentCategory = require('../models/parent_category.model');

// GET /parent_category/
router.route('/').get((req, res) => {
    ParentCategory.find()
        .then(parent_category => res.json(parent_category))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST /parent_category/add
router.route('/add').post((req, res) => {
    console.log(req.body)
    console.log(req.body.parent_category_name)
    
    if (req.body.parent_category_name == undefined) {res.status(400).json('Error: parent_category_name must be specified')};
    const parent_category_name = req.body.parent_category_name;

    const newParentCategory = new ParentCategory({parent_category_name});

    newParentCategory.save()
        .then(() => res.json('ParentCategory added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * POST /groups/:id
 * @param remove ParentCategory with id :id
 */
router.route('/:id').delete((req, res) => {
    ParentCategory.findByIdAndDelete(req.params.id)
      .then(() => res.json('ParentCategory deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;