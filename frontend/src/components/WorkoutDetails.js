import Model from 'react-modal'
import { useState } from "react"


const WornoutDetails = ({workout}) =>{

    const [title , setTitle] = useState('')
    const [load , setLoad] = useState('')
    const [reps , setReps] = useState('')

    const deleteWorkout = async () =>{

        
        const response =   await fetch('/api/workouts/'+workout._id,{
            method:'DELETE'
        })

        if(response.ok){
            console.log('Workout Successfully Deleted')
        }
    }

    const [updateVisible , setUpdateVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)

    const updateWorkout = async (e) => {
        e.preventDefault()

        const updatedWorkout = {
            title: title !== '' ? title : workout.title,
            load: load !== '' ? load : workout.load,
            reps: reps !== '' ? reps : workout.reps
        };
            const response = await fetch(`/api/workouts/`+workout._id, {
                method: 'PATCH',
                body: JSON.stringify(updatedWorkout),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                console.log('Workout Successfully Updated')
            } else {
                alert('Error updating workout');
            }
            setUpdateVisible(false)
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (Kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <div className="button-sec" >
                <span className="update" onClick={() => setUpdateVisible(true)} >Update</span>
                <span className="delete" onClick={() => setDeleteVisible(true)} >Delete</span>   
            </div>
            <Model
                isOpen={deleteVisible}
                onRequestClose={() => setDeleteVisible(false)}
                style={{
                overlay: {
                    backgroundColor: 'rgba(145, 141, 141, 0.75)'
                },
                content: {
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center', 
                  border: '0px solid #ccc',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                }
              }}>

                <div className="delete-box">
                    <div className='align-box'>
                        <h4>Do you want to Delete this Workout ?</h4>
                        <div className="buttons">
                            <button className='delete' onClick={deleteWorkout} >Delete</button>
                            <button className='cancel' onClick={() => setDeleteVisible(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
                
            </Model>
            <Model 
            isOpen={updateVisible} 
            onRequestClose={() => setUpdateVisible(false)} 
            style={{
                overlay: {
                    backgroundColor: 'rgba(145, 141, 141, 0.75)'
                },
                content: {
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center', 
                  border: '0px solid #ccc',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                }
              }}>

                <form className="update-form" onSubmit={updateWorkout}>
                    <h3>Update Workout</h3>

                    <label>Exercise Title:</label>
                    <input 
                        type="text"
                        placeholder={workout.title}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        
                    />

                    <label>Load (Kg):</label>
                    <input 
                        type="number"
                        placeholder={workout.load}
                        onChange={(e) => setLoad(e.target.value)}
                        value={load} 
                    />

                    <label>No of Reps:</label>
                    <input 
                        type="number"
                        placeholder={workout.reps}
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />
                    <div className='buttons'>
                    <button type="submit" className='update'>Update</button>
                    <button onClick={() => setUpdateVisible(false)} className='cancel'>Cancel</button>
                    </div>
                </form>

            </Model>
            
        </div>
    )
}

export default WornoutDetails