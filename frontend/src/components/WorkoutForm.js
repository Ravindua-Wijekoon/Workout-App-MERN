import { useState } from "react"

const WorkoutForm = () =>{

    const [title , setTitle] = useState('')
    const [load , setLoad] = useState('')
    const [reps , setReps] = useState('')
    const [error , setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps}
        const response = await fetch('/api/workouts', {
            method:'POST',
            body: JSON.stringify(workout), //workout convert to jason file
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            alert('New Workout Added successfull')
        }

    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
            />

            <label>Load (Kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load} 
            />

            <label>No of Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps} 
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div> }

        </form>
    )
}

export default WorkoutForm