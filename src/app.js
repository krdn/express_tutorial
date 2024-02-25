"use strict";

const express = require('express');
const app = express();

// 라우팅 모듈 설정
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/", home);

module.exports = app; // 이 파일을 모듈로 만들어서 외부에서 사용할 수 있게 함