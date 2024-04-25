const { Router } = require('express')

const router = Router()

router.get('/user', (req, res)=>{
    console.log('users')
})

module.exports = router