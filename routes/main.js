const express = require('express')
const router = express.Router()



router.get('/', (req,res,next)=>{

    const data = req.context

    res.render('home', data)
})
router.get('/blog', (req,res,next)=>{

   const data = req.context

    res.render('blog', data)
})
router.get('/contact', (req,res,next)=>{

   const data = req.context

    res.render('contact', data)
})
module.exports = router