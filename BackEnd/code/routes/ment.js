const express = require('express');
const cors = require('cors');
require('dotenv').config();

let Post = require('../models').Post;
let User = require('../models').User;
let Ment = require('../models').Mention;
const { verify } = require('./middlewares');

const router = express.Router();
router.use(cors());

// 멘션을 추가하는 API
router.post('/', async(req,res)=>{
    let err = {};
    let token = req.get('token');
    try {
        let auth = verify(token, process.env.JWT_SECRET);
        if(auth) {
            let user = await User.findOne({
                where : {id: auth}
            });
            let post = await Post.findOne({
                where : {postId: req.body.postId, userId: auth}
            });
            if(user && post) {
                let ment = await Ment.create({
                    userId: auth,
                    postId: req.body.postId,
                    content: req.body.content
                });
                if(ment) res.json(ment);
            } else {
                err.status = 404;
                err.message = '해당하는 게시물 또는 사용자가 존재하지 않습니다';
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

// 멘션을 가져오는 API
router.get('/:postId', async (req, res)=>{
   let err = {};
   try {
       let ments = await Ment.findAll({
           where: {postId: req.params.postId}
       });
       if(ments) {
           res.json(ments);
       }
   } catch (err) {
       res.json({
           message: err.message,
           status: err.status
       })
   }
});
//TODO 멘션 삭제 API

module.exports  = router;