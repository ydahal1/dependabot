/* eslint-disable no-unused-vars */
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/', (req, res) => {
  res.send('Hello world');
});

router.delete('/', (req, res) => {
  const { id } = req.params;
  res.send('Hello world');
});

router.put('/stop', (req, res) => {
  const { id } = req.params;
  res.send('Hello world');
});

router.put('/pause', (req, res) => {
  const { id } = req.params;
  res.send('Hello world');
});

module.exports = router;
