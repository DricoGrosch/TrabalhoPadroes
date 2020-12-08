const express = require('express');
const { request } = require('express');
const CheckListController = require('./Controllers/CheckListController');


const routes = express.Router()

routes.post('/checklist', CheckListController.criarCheckList)


module.exports = routes