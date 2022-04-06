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
        <div>
            <h1 className="index">Record Labels</h1>
            <ul>
                {label.map((label) =>{
                    return(
                     <li> <a href={`/${label._id}`}> {label.albumTitle} <br/> </a>                          
                            {label.artist} <br/>
                         <img style={{height:'180px', width: '180px'}} src={label.coverArt} alt="" /> <br/>
                            {label.year} <br/>
                            {label.genre}
                     </li>
                    )
                })}
            </ul>
        </div>
    )

}




