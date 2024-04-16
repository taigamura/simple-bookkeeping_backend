
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        category_name: {
            type: String,
            unique: true
        },
        parent_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            ref: "ParentCategory"
        }
    }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
