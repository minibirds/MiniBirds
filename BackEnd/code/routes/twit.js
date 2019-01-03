const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
let User = require('../models').User;
let Post = require('../models').Post;
const { verify } = require('./middlewares');
let router = express.Router();

fs.readdir('uploads', (error)=>{
    if (error) {
        console.error('uploads 폴더가 없어 uploads 폴더를 서버의 디스크에 생성합니다');
        fs.mkdirSync('uploads');
    }
});

// 미들웨어 객체
let upload = multer({
    storage: multer.diskStorage({
        // 파일 저장 경로 설정
        destination(req, file, cb) {
            cb(null, 'uploads/');
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
    res.json({ url : `/img/${req.file.filename}`});
});


router.post('/:id', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, 'entry_minibirds');
        if(auth < 0) throw err;
        if(auth == req.params.id) { // 인증성공
            let post = await Post.create({
                userId: req.params.id,
                content: req.body.content,
                img: req.body.img
            });
            if(post) {
                res.status(201).json({
                    post
                });
            } else {
                err.status = 500;
                err.message = '트윗 추가를 실패했습니다';
                throw err;
            }
        } else {
            err.status = 401;
            err.message = '올바르지 않은 사용자입니다';
            throw err;
        }
    } catch (err) {
        res.json({
            status: err.status,
            message: err.message
        })
    }
});

// userId 와 postId로 게시물을 검색하여 삭제하는 API
router.delete('/:userId/:postId', async (req, res)=>{
    let err = {};
    let token = req.cookies.sign;
    try {
        let auth = verify(token, 'entry_minibirds');
        if(auth < 0) throw err;
        if(auth == req.params.userId) {
            let post = await Post.findOne({
                where: {userId: req.params.userId, postId: req.params.postId}
            });
            if(post) {
                Post.destroy({
                    where: {postId: req.params.postId}
                });
                res.json({'message':'게시물을 삭제하였습니다'});
            } else {
                err.status = 404;
                err.message = '삭제하려는 게시물을 찾을 수 없습니다';
                throw err;
            }
        }
    } catch (err) {
        res.json({
            status: err.status,
            message: err.message
        })
    }
});

module.exports = router;