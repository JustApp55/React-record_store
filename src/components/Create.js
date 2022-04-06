import React from 'react'
import {createRecord} from '../services/getRequests'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const nav = useNavigate()
    const createTheRecord = e => {
        const record = {
            AlbumTitle: e.target.albumTitle.value,
            Artist: e.target.artist.value,
            CoverArt: e.target.artist.value,
            year: e.target.year.value,
            genre: e.target.genre.value
        }
        console.log(record)
        createRecord(record)
        nav('/')
    }
    return (
        <div>
            <h1>Create Record</h1>
            <form onSubmit={createTheRecord}>
               AlbumTitle: <input type='text' name='albumTitle' /> <br/>
               Artist: <input type='text' name='artist' /> <br/>
               CoverArt <input type='text' name='coverArt' /> <br/>
               Year: <input type='text' name='year' /> <br/>
               Genre: <input type='text' name='genre' /> <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}
