const router = require('express').Router();
let Record = require('../models/record.model');
const User = require('../models/user.model');
const Category = require('../models/category.model')

// GET /record/
router.route('/').get((req, res) => {
    Record.find()
        .then(record => res.json(record))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST /record/add
router.route('/add').post( async (req, res) => {
    console.log(req.body)

    const user_id = await User.findOne({"username": req.body.username}, {_id: 1});
    const date = req.body.date;
    const category_id = await Category.findOne({"category_name": req.body.category_name}, {_id: 1});
    const amount = req.body.amount;

    const newRecord = new Record({user_id, category_id, date, amount});

    newRecord.save()
        .then(() => res.json('Record added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * POST /groups/:id
 * @param remove Record with id :id
 */
router.route('/:id').delete((req, res) => {
    Record.findByIdAndDelete(req.params.id)
      .then(() => res.json('Record deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;