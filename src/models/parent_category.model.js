
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentCategorySchema = new Schema(
    {
        parent_category_name: {
            type: String,
            unique: true
        }
    }
);

const ParentCategory = mongoose.model('ParentCategory', parentCategorySchema);

module.exports = ParentCategory;
