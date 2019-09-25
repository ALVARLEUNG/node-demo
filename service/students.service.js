let StudentsRepository = require('../repository/students.repository');

const searchAllStudents = async () => {
    let studentList = await StudentsRepository.findAll();
    return studentList;
};

const searchStudentByName = async name => {
    let student = await StudentsRepository.findByName(name);
    return student;
};

const saveStudent = async body => {
    let student = {
        name: body.name,
        age: body.age
    };
    return await StudentsRepository.createStudent(student);
};

const updateStudent = async body =>{
    let condition = {
        id: body.id,
        age: body.age
    };
    return await StudentsRepository.updateStudent(condition);
};

const deleteStudent = async name => {
    await StudentsRepository.deleteByName(name);
};

module.exports = {searchAllStudents, searchStudentByName, saveStudent, updateStudent, deleteStudent};
