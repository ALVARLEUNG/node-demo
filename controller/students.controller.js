let express = require('express');
let router = express.Router();
let studentsService = require('../service/students.service');

/* GET all students. */
router.get('/', async function (req, res) {
    let result = await studentsService.searchAllStudents();
    res.send(result);
});

/*GET student by name*/
router.get('/name/:name', async function (req, res) {
    let result = await studentsService.searchStudentByName(req.params.name);
    res.send(result);
});

/*POST save student */
router.post('/', async function (req, res) {
    if (studentsService.saveStudent(req.body)) {
        res.send('保存成功')
    } else {
        res.send('保存失败')
    }
});

/*PUT update student */
router.put('/', async function (req, res) {
    if (studentsService.updateStudent(req.body)) {
        res.send('更新成功')
    } else {
        res.send('更新失败')
    }
});

/*DELETE delete student*/
router.delete('/:name', async function (req, res) {
    studentsService.deleteStudent(req.params.name);
    res.send('删除成功')
});

module.exports = router;
