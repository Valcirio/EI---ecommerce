const { Router } = require('express')

const router = Router()

router.get('/produto', (req, res)=>{
    console.log('produtos')
})

module.exports = router