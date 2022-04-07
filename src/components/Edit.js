import '../App.css'
import {useNavigate, useParams} from 'react-router-dom'
import {React, useState, useEffect} from 'react'
import { editRecord, getRecord } from '../services/getRequests'

export default function Edit() {
const {id} = useParams()
const nav = useNavigate()
const [data, setData] = useState({})

useEffect(() => {
    getRecord(id)
    .then(res => setData(res.data))
}, [])


const editTheRecord = e => {
    e.preventDefault()
    console.log("editRecord")
    let updatedRecord = {
        artist: e.target.artist.value,
        albumTitle: e.target.albumTitle.value,
        coverArt: e.target.coverArt.value,
        genre: e.target.genre.value,
        year: e.target.year.value
    }
    console.log(updatedRecord)
    editRecord(id, updatedRecord)
    nav(`/${id}`)
 }
 
    return (
        <div className="edit">
            <h1>Edit Record</h1>
            <form onSubmit={editTheRecord} id="edrec">
               Artist: <input type='text' name='artist' defaultValue={data.artist} /> <br/>
               Album Title: <input type='text' name='albumTitle' defaultValue={data.albumTitle} /> <br/>
               Cover Art: <input type='text' name='coverArt' defaultValue={data.coverArt} /> <br/>
               Genre: <input type='text' name='genre' defaultValue={data.genre} /> <br/>
               Year: <input type='number' name='year' defaultValue={data.year} /> <br/>
                <input type='submit' value='Update Record' />
            </form>
        </div>
    )
 }

 



