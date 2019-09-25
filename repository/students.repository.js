let Students = require('../models/students');

const findAll = () => {
    return new Promise((resolve, reject) => {
        Students.find(function (err, result) {
            if (err) {
                console.error(err);
                return reject(err);
            }
            let studentList = JSON.parse(JSON.stringify(result));
            return resolve(studentList);
        });
    });
};

const findByName = async name => {
    return new Promise((resolve, reject) => {
      Students.findOne({name: name}, function (err, result) {
          if (err) {
              console.error(err);
              return reject(err);
          }
          let student = JSON.parse(JSON.stringify(result));
          return resolve(student);
      })
    })
};

const createStudent = async student => {
  return new Promise((resolve, reject) => {
    Students.create(student, function (err, result) {
        if (err) return false;
        return true;
    })
  })
};

const updateStudent = async condition => {
    return new Promise(() => {
        Students.updateOne({id: condition.id}, {age: condition.age}, function (err) {
            return !err;
        })
    })
};

const deleteByName = async name => {
    return new Promise((resolve, reject) => {
        Students.deleteMany({name: name}, function (err, result) {
            if (err) {
                console.error(err);
                return reject(err);
            }
        })
    })
};

module.exports = {findAll, findByName, createStudent, updateStudent, deleteByName};
