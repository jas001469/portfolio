const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const userRoutes = require('./routes/user')
const accountsRoutes = require('./routes/account')
const transactionsRoutes = require('./routes/transaction')

mongoose.connect("mongodb://127.0.0.1:27017/BorrowEase")
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


app.use(express.urlencoded({extended:true})) // it is used to parse the body
app.use(methodOverride('_method'))//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(express.static(path.join(__dirname,'public')))

const sessionconfig = {
    secret:'thisshouldbeabettersecret!',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires: Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }
}

app.use(session(sessionconfig))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash('success')
    res.locals.error=req.flash('error')
    next()
})

app.use('/', userRoutes)
app.use('/accounts',accountsRoutes)
app.use('/accounts/:id/transactions',transactionsRoutes)


app.get('/',(req,res)=>{
    res.render('home');
})


app.listen(1469,()=>{
    console.log('Serving at Port 1469');
})