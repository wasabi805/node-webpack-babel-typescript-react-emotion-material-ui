import express from 'express'

const router = express.Router()

export default ( app )=>{
    console.log('what is app', app)
    router.get('/', (req, res)=>{
        console.log('what is the req')
    })


    return router
}