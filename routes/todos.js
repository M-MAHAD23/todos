const express = require('express')
const router = express.Router()
const todoSchema = require('../models/todoSchema')

// GETTING BACK ALL THE TOURS
router.get('/',async (req,res)=>{
   try{
      const tours = await todoSchema.find();
      res.json(tours);
   }catch(err){
      res.json({message:err})
   }
})
// PUTTING A TOUR IN OUR DATABASE
router.post ('/',async(req,res)=>{
   const todo = new todoSchema({
      todoTitle: req.body.todoTitle,
      todoSubtitle: req.body.todoSubtitle,
      todoCase: req.body.todoCase
   })
   //todoSchema.create(req.body)
   try{
      const savedtodo = await todo.save()
      res.json(savedtodo);
   }catch(err){
      res.json({message: err})
   }
})

// FIND SPECIFIC TOUR
router.get('/:tourId',async(req,res)=>{
   try{
      const tour = await todoSchema.findById(req.params.tourId)
      res.json(tour)
   }catch(err){
      res.json({message:err})
   }
})

// DELETING A SPECIFIC TOUR
router.delete('/:tourId',async(req,res)=>{
   try{
      const removedTour = await todoSchema.remove({_id: req.params.tourId})
      res.json(removedTour)
   }catch(err){
      res.json({message:err})
   }
})

// UPDATING A SPECIFIC TOUR
router.patch('/update/:tourId',async(req,res)=>{
   try{
      // const updateOne = await todoSchema.updateOne(
      //    {_id: req.params.tourId},
      //    {
      //     $set:{todoTitle: req.body.todoTitle}
      //    }
      //   )
      // console.log(updateOne)
      const updateOne=await todoSchema.findByIdAndUpdate(req.params.tourId,req.body,{
         new:true,
         runValidators:true
      })
      console.log(updateOne);
      res.json(updateOne);

   }catch(err){
      res.json({message:err})
   }
})

module.exports = router