import {useState, useEffect} from 'react'
import { getRecords } from '../services/getRequests'

export default function Songs() {
    const [label, setLabel] = useState([])

    useEffect(() =>{
        getRecords()
        .then(res => setLabel(res.data))
    }, [])
    console.log(label)

    return (
        <div className="song">
            <h1 className="index">Record Labels</h1>
            <ul className="label">
                {label.map((label) =>{
                    return(
                     <li> <a href={`/${label._id}`}> {label.albumTitle} <br/> </a>                          
                            <h3>{label.artist}</h3> <br/>
                         <img style={{height:'200px', width: '200px'}} src={label.coverArt} alt="" /> <br/>
                         <h3>{label.year}</h3> <br/>
                         <h3>{label.genre}</h3>
                     </li>
                    )
                })}
            </ul>
        </div>
    )

}




