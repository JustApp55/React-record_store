import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { editRecord, getRecord } from '../services/getRequests'

export default function Edit() {
const nav = useNavigate()
const {id} = useParams
const [data, setData] = useState({})

useEffect(() => {
    getRecord(id)
    .then(res => setData(res.data))
}, [])

const editTheRecord = e => {
    e.preventDefault()
    const updatedRecord = {description: e.target.record.value}
    editRecord(id, updatedRecord)
    nav(`/${id}`)
}

    return (
        <div>
            <h1>Edit Record</h1>
            <form onSubmit={editTheRecord}>
               Album Title: <input type='text' name='albumTitle' defaualValue={data.albumTitle} /> <br/>
               Artist: <input type='text' name='artist' defaualValue={data.artist} /> <br/>
               Cover Art: <input type='text' name='coverArt' defaualValue={data.coverArt} /> <br/>
               Genre: <input type='text' name='genre' defaualValue={data.genre} /> <br/>
               Year: <input type='text' name='year' defaualValue={data.year} /> <br/>
                <input type='submit' />

            </form>
        </div>
    )
}
