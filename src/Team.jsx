import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(0)
    const handleAdd = () =>{
        const newTeam = team + 1;
        if(newTeam > 11){
            return 'Break';
        }
        setTeam(newTeam)
    }
    const handleRemove = () =>{
        
        setTeam(team -1)
    }
    const teamStyle = {
        border: '2px solid yellowgreen',
        margin: '20px',
        padding: '15',
        borderRadius: '20px',
        boxShadow: '5px 5px 5px yellowgreen'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}