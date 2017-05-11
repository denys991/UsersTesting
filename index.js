var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static('./'));

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
        rightAnswer: 'tree'
    },
    {
        topic: 'Rock',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 'apple'
    },
    {
        topic: 'Rock',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 'world'
    },
    {
        topic: 'Rock1',
        question: 'What is ROCK?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 'world'
    },
    {
        topic: 'Sky',
        question: 'What is SKY?',
        answer: ['tree', 'apple', 'world', 'sky'],
        rightAnswer: 'sky'
    }
];

server.post('/tests', function (req, res) {
    var testList = tests.filter(function (elem, item) {
        return elem.topic == req.body.name
    });

    res.send(testList);
});

server.get('/get-topic', function (req, res) {
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

server.post('/save-test', function (req, res) {
    var test = req.body;
    tests.push(test);
    res.send(tests);
});

server.listen(3000, function () {
    console.log('Server started')
});