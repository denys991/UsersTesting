var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static('../'));

var users = [];
var tests = [
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Nature',
        question: 'What is bambook?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Rock',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Rock',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Rock',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Rock1',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    },
    {
        topic: 'Sky',
        question: 'What is SKY?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 1
    }
];

server.post('/getTests', function (req, res) {
    var testList = [];
    tests.forEach(function (elem, item) {
        if (elem.topic == req.body.name) {
            testList.push(elem);
        }
    });
    res.send(testList);
});

server.get('/getTopic', function (req, res) {
    var topicList = [];

    function checkAvailability(arr, val) {
        return arr.some(function(arrVal) {
            return val === arrVal;
        });
    }

    tests.forEach(function (elem, item) {
        if (!checkAvailability(topicList, elem.topic)) {
            topicList.push(elem.topic);
        }
    });
    res.send(topicList);
});

server.post('/addUser', function (req, res) {
    var user = req.body;
    users.push(user);
    res.send(users);
});

server.listen(3000, function () {
    console.log('Server started')
});