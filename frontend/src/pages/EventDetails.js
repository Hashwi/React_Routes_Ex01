import React from 'react'
import { Link, json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';

export default function EventDetails() {
  const data = useRouteLoaderData('event-detail');
    
  return (
    <>
  <EventItem event={data.event} />
    <p><Link to = '..' relative='path'>Back</Link></p>

    </>
  )
}

export async function loader ({request, params}){
  const id = params.id
  const response = await fetch('http://localhost:8080/events/' + id);
  console.log(response)

  if (!response.ok){
    throw json({message: 'Could Not Fetch Details For Selected Event.'}, {
      status: 500
    })
  } else{
    return response
  }
 
}

export async function action({ params, request }) {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}