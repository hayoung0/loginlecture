"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

//라우터 사용할 수 있도록 외부로 내보내기 해주는 명령어
module.exports = router;
