import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { getRecord, deleteRecord } from '../services/getRequests'

export default function Show() {
    const nav = useNavigate()
    const {id} = useParams()
    const [record, setRecord] = useState({})

    useEffect(() =>{
        getRecord(id)
        .then(res => setRecord(res.data))
    }, [])
    
    const deleteTheRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    return (
        <div className="show">
            <h1>Now Playing</h1>
            <h3>{record.albumTitle}</h3> <br/>
            <h3>{record.artist}</h3> <br/>
            <img style={{height:'200px', width: '200px'}} src={record.coverArt} alt=""/> <br/>
            <h3>{record.year}</h3> <br/>
            <h3>{record.genre}</h3> <br></br>
            <button onClick={() => {nav(`/${id}/edit`)}}> Edit Record</button>
            <button onClick={deleteTheRecord}>Delete</button>                                   
        </div>
    )
}

