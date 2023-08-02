import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EventDetails() {
    const params = useParams()
  return (
    <>
    <h1>Event Details</h1>
    <p>Event ID: {params.id}</p>
    <p><Link to = '..' relative='path'>Back</Link></p>

    </>
  )
}
