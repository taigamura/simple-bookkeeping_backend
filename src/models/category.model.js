
const mongoose = require('mongoose');
const ParentCategory = require('./parent_category.model');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        parent_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            ref: ParentCategory
        },
        parent_category_name: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            ref: ParentCategory
        },
        category_name: {
            type: String,
            unique: true
        }
    }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
