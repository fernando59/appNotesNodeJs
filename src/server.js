const express = require("express");
const cors = require('cors')
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session');
const flash = require('connect-flash')
const passport = require('passport');
const mySQLStore = require('express-mysql-session')(session);
const { database } =require('./db/keys');
require('./helpers/passport')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            coin: '/api/coin',
            front: '/'
        }

        this.middlewares()
        this.routes()

    }

    config(){
    }
    listen() {
        this.app.listen(this.port)
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(express.static("public"));
        this.app.use(express.json())
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs',exphbs({
                defaultLayout:'main',
                layoutsDir:path.join(this.app.get('views'),'layouts'),
                partialsDir:path.join(this.app.get('views'),'partials'),
                extname:'.hbs'
        }))
        
        this.app.set('view engine', 'hbs');
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(session({
            secret: process.env.SECRET_KEY,
            resave: false,
            saveUninitialized: true,
            store: new mySQLStore(database)
        }));
        this.app.use(flash())
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        this.app.use((req, res, next) => {
            this.app.locals.message = req.flash('message');
            this.app.locals.success = req.flash('success');
            this.app.locals.user = req.user;
            next();
          });

    }

    routes() {
        this.app.use(this.paths.front, require('./routes/frontRouter'))
        this.app.use(this.paths.front, require('./routes/authRouter'))
    }
}


module.exports = Server