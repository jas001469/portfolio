const express=require('express')
const router = express.Router()
const Account = require('../models/Account')    

router.get('/',async(req,res)=>{
    const accounts = await Account.find({})
    res.render('account/index', {accounts})
})

router.get('/new',async(req,res)=>{
    res.render('account/new')
})

router.post('/',async(req,res)=>{
    req.flash('success','Succesfuly made new account')
    const account = new Account(req.body.Account)
  await account.save()
  req.flash('success','Succesfuly made new account')
  res.redirect(`/accounts/${account._id}`)
})

router.get('/:id', async(req,res)=>{
    const account = await Account.findById(req.params.id).populate('transactions')
    if(!account){
        req.flash('error','cannot find the account')
        return res.redirect('/accounts')
    }
    res.render('account/show', {account})
})

router.get('/:id/edit',async(req,res)=>{
    const account = await Account.findById(req.params.id)
    if(!account){
        req.flash('error','cannot find the account')
        return res.redirect('/accounts')
    }
    res.render('account/edit',{account})

})

router.put('/:id', async(req,res)=>{
    const{id}=req.params;
    const account = await Account.findByIdAndUpdate(id,{...req.body.Account})
    req.flash('success','Succesfully updated account! ')
    res.redirect(`/accounts/${account._id}`)
})

router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    await Account.findByIdAndDelete(id);
    req.flash('success','successfully deleted account')
    res.redirect('/accounts')
})

module.exports = router;