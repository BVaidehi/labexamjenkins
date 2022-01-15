const { request, response } = require("express")
const express = require("express");
const router = express.Router();
const db = require("../db");
const utils = require("../utils");

router.get("/all", (request, response) => {
    const connection = db.openConnection();
    const statement = `select * from book`;
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result));
        connection.end();
    })
})

router.post("/add", (request, response) => {
    const connection = db.openConnection();
    const { book_id, book_title, publisher_name, author_name } = request.body;
    const statement = `insert into book (book_id, book_title, publisher_name, author_name) values (${book_id},'${book_title}','${publisher_name}','${author_name}')`;
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result));
        connection.end();
    })
})

router.put("/update", (request, response) => {
    const connection = db.openConnection();
    const { book_id, publisher_name, author_name } = request.body;
    const statement = `update book set publisher_name='${publisher_name}',author_name='${author_name}' where book_id= ${book_id}`;
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result));
        connection.end();
    })
})


router.delete("/delete", (request, response) => {
    const connection = db.openConnection();
    const { book_id } = request.body;
    const statement = `delete from book where  book_id= ${book_id}`;
    connection.query(statement, (error, result) => {
        response.send(utils.createResult(error, result));
        connection.end();
    })
})


module.exports = router;