let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// 声明一个数据集 对象
let studentsSchema = new Schema({
    name: String,
    age: Number
});
// 将数据模型暴露出去
module.exports = mongoose.model('Students', studentsSchema);