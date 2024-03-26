const express= require('express')
const Tshirt= require('../models/tshirt')

const router = express.Router()

//Index
router.get('/', async(req,res)=>{
  try{
    res.json(await Tshirt.find({}))
  }catch(error){

    console.log(error)
    res.status(400).json(error)
  }
})

//Delete
router.delete('/:id', async(req,res)=>{
  try{
    res.json(await Tshirt.findByIdAndDelete(req.params.id))
  }catch(error){
    res.status(400).json(error)
  }
})

//Update
router.put('/:id', async(req,res)=>{
  try{
    res.json(await Tshirt.findByIdAndUpdate(req.params.id,req.body,{new:true}))
  }catch(error){

    console.log(error)
    res.status(400).json(error)
  }
})

//Create
router.post('/', async(req,res)=>{
  try{
    res.json(await Tshirt.create(req.body))
  }catch(error){
    res.status(400).json(error)
  }
})

//Search new shirts
router.get('/search', async(req,res)=>{
  try{
    console.log(`isNew: ${req.query.isNew}`)
    res.json(await Tshirt.find({new:req.query.isNew}))
  }catch(error){
    console.log("from request" + error)
    res.status(400).json(error)
  }
})

//Show
router.get('/:id', async(req,res)=>{
  try{
    console.log("find by id")
    res.json(await Tshirt.findById(req.params.id))
  }catch(error){
    res.status(400).json(error)
  }
})



module.exports = router