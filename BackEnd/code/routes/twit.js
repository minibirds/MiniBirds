const express = require('express');

let User = require('../models').User;
let Post = require('../models').Post;
const { verify } = require('./middlewares');
let router = express.Router();

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
})

module.exports = router;