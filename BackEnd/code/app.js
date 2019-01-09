const express = require('express');
const path = require('path');
const morgan = require('morgan');
// .env 파일을 읽어 process.env 객체에 넣음
require('dotenv').config();
const sequelize = require('./models').sequelize;

const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const twitRouter = require('./routes/twit');
const followingRouter = require('./routes/following');
const followerRouter = require('./routes/follower');
const profileRouter = require('./routes/profile');

const logger = require('./logger');
const app = express();
sequelize.sync();

app.set('port', process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, './node-slate/images')));
app.use('/api', express.static(path.join(__dirname, 'api-docs')));
app.use(express.json());
app.use(express.urlencoded({ extended : false , limit: '50mb'}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/twit', twitRouter);
app.use('/following',followingRouter);
app.use('/follower',followerRouter);
app.use('/profile', profileRouter);

// 해당 라우터가 없을시 404 Error 발생
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    logger.info(req.method +' '+ req.url + ' Error: ' + err.message);
    next(err);
});

// 에러 핸들러
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render(error);
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

//TODO 코드 최적화하기(async await 활용하기)