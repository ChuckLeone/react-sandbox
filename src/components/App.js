require('normalize.css/normalize.css')
require('../styles/stylesheets/main.scss')
import '../../bower_components/campus-labs-bootstrap/dist/css/cl.bootstrap.css'
import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="cl-page-header">
        <div className="container-fluid">
          

              
              <div className="row">
                <div className="col-sm-12">
                  <Header />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <Nav />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <h1>Simple Todo List</h1>
                  <AddTodo />
                  <VisibleTodoList />
                  <Footer />
                </div>
              </div>


          
        </div>
      </div>
    </div>
  </div>
)
export default App