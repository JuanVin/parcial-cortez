"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
let mysql = require('mysql');
exports.pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instrumentos'
});
