var express = require('express');
var router = express.Router();
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUIZZES' });
});

router.get('/credits', (req,res,next) => {
	res.render('credits',{ title: 'Credits' });
});

router.get('/quizzes', (req,res,next) => {
	models.quiz.findAll()
		.then(quiz =>{
			res.render('quizzes', {array: quiz});
				})
		.catch(error=> next(error));
});

module.exports = router;
