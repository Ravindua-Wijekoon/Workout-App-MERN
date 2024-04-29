const mongoose = require('mongoose')
const Workout = require('../models/workoutmodels')

//get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}

//get a single workout
const getWorkout = async (req, res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout not found"})
    }

    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: "workout not found"})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
     const {id} = req.params

    //check id is in correct type
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout not found"})
     }

     const workout = await Workout.findOneAndDelete({_id:id})

     //check id is on db
     if (!workout){
        return res.status(404).json({error: 'workout not found'})
     }
     res.status(200).json(workout)
}

//update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout not found"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body})

    if (!workout){
        return res.status(404).json({error: "workout not found"})
    }

    res.status(200).json(workout)
}

module.exports = {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout}