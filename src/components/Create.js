import React from 'react'
import {createRecord} from '../services/getRequests'

export default function Create() {
    const nav = useNavigate()
    const createTheRecord = e => {
        const record = {description: document.querySelector("#rcd").value}
        createRecord(record)
        nav('/')
    }
    return (
        <div>
            <h1>Create Record</h1>
            <form onSubmit={createTheRecord}>
                <input type='text' name='description' id='rcd' />
                <input type='submit'/>
            </form>
        </div>
    )
}
