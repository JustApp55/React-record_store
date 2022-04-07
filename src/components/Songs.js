import {useState, useEffect} from 'react'
import { getRecords } from '../services/getRequests'
import {useNavigate} from 'react-router-dom'

export default function Songs() {
    const nav = useNavigate()
    const [labels, setLabels] = useState([])

    useEffect(() =>{
        getRecords()
        .then(res => setLabels(res.data))
    }, [])
    console.log(labels)

    return (
        <div className="song">
            <h1 className="index">Record Labels</h1>
                <button onClick={()=> {nav("/create")}} >New Record</button>
            <ul className="label">
                {labels.map((label) =>{
                    return(
                     <li> <a href={`/${label._id}`}> {label.albumTitle} </a>                          
                            <h3>{label.artist}</h3> 
                         <img style={{height:'200px', width: '200px'}} src={label.coverArt} alt="" /> 
                         <h3>{label.genre}</h3> 
                         <h3>{label.year}</h3>
                     </li>
                    )
                })}
            </ul>
        </div>
    )

}




