require('normalize.css/normalize.css')
require('../styles/stylesheets/main.scss')
import '../../bower_components/campus-labs-bootstrap/dist/css/cl.bootstrap.css'
import React from 'react'
import Footer from '../components/footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App