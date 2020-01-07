const express = require('express');
const router = express.Router();

/* GET posts index /posts . */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts')
});

router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new')
});

router.post('/', (req, res, next) => {
  res.send('CREATE /posts')
});

router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id')
});

router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit')
});

router.get('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id')
});

router.get('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id')
});

module.exports = router;
