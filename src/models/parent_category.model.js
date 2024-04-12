
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentCategorySchema = new Schema(
    {
        parent_category_name: String,
        child_category: [{type: Schema.Types.ObjectId, ref: "Category"}]
    }
);

const ParentCategory = mongoose.model('ParentCategory', parentCategorySchema);

module.exports = ParentCategory;
