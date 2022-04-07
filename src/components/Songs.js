import '../App.css'
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
                     <li className="li"> <a href={`/${label._id}`}> {label.artist} </a>                          
                            <h3>{label.albumTitle}</h3> 
                         <img style={{height:'250px', width: '250px'}} src={label.coverArt} alt="" /> 
                    {/* <div className="index1">
                         <h3>{label.genre} - </h3> 
                         <h3 className="index2">{label.year}</h3>
                    </div> */}
                     </li>
                    )
                })}
            </ul>
        </div> 
    )

}




