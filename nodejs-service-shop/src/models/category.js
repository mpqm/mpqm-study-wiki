const { default: mongoose } = require("mongoose");

// 카테고리 스키마
const categorySchema = mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String }
})

module.exports = mongoose.model("Category", categorySchema);