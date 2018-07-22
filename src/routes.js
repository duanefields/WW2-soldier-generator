import React from 'react'
import { Route } from 'react-router-dom'
import { Generator, About } from './components'

export default function routes() {
  return (
    <div>
      <Route exact path="/" component={Generator}/>
      <Route exact path="/about" component={About}/>
    </div>
  )
}
