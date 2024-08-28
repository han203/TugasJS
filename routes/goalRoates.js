const express = require('express');
const router = express.Router();
const { getGoals, setGoals } = require ("../controllers/goalControllers");

router.get('/', getGoals);

router.post('/', setGoals);

module.export = router;