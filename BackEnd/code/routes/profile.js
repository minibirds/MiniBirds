const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
let User = require('../models').User;
const { verify } = require('./middlewares');
let router = express.Router();
router.use(cors());

// 프로필 저장 폴더가 없을 경우 생성
fs.readdir('profiles', (error)=>{
    if (error) {
        console.error('profiles 폴더가 없어 profiles 폴더를 서버의 디스크에 생성합니다');
        fs.mkdirSync('profiles');
    }
});

// 미들웨어 객체
let upload = multer({
    storage: multer.diskStorage({
        // 파일 저장 경로 설정
        destination(req, file, cb) {
            cb(null, 'profiles/');
        },
        // 파일 이름 설정
        filename(req, file, cb) {
            // 파일 확장자 추출
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
        },
    }),
    // 파일 사이즈 제한 설정
    limits: {fileSize : 5 * 1024 * 1024}
});

router.post('/img', upload.single('img'), async (req, res)=> {
//    console.log(req.file);
    res.json({ url : `/profiles/${req.file.filename}`});
});

module.exports = router;