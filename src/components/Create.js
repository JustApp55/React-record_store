import '../App.css'
import React from 'react'
import {createRecord} from '../services/getRequests'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const nav = useNavigate()
    const createTheRecord = e => {
        const record = {
            artist: e.target.artist.value,
            albumTitle: e.target.albumTitle.value,
            coverArt: e.target.artist.value,
            genre: e.target.genre.value,
            year: e.target.year.value
        }
        console.log(record)
        createRecord(record)
        nav('/')
    }
    return (
        <div className="create">
            <h1 className="crr">Create Record</h1>
            <form onSubmit={createTheRecord} id="new">
               Artist: <input type='text' name='artist' /> <br/>
               AlbumTitle: <input type='text' name='albumTitle' /> <br/>
               CoverArt <input type='text' name='coverArt' /> <br/>
               Genre: <input type='text' name='genre' /> <br/>
               Year: <input type='text' name='year' /> <br/>
                <input type='submit' value='New Record'/>
            </form>
        </div>
    )
}
