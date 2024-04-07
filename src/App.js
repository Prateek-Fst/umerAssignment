import React from 'react'
import DashBoard from './components/DashBoard'
import Assignment from './components/Assignment'
import "./App.css"
import Card from './components/Card'

export default function App() {
  return (
    <div className="main">
      <DashBoard/>
      <Assignment/>
      <Card/>
    </div>
  )
}
