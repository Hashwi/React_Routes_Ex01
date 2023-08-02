import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import EventsNavigation from '../components/EventsNavigation'

export default function Root() {
  return (
   <>
    <MainNavigation/>
   <EventsNavigation/>
  
   <main>
    <Outlet/>
   </main>
   </>
  )
}