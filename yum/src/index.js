import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import { StateProvider } from './Redux/StateProvider'
import reducer from './Redux/reducer'
import { initialState } from './Redux/initialState';

ReactDOM.render (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer} >
        <App/>
      </StateProvider>
    </Router> , 
    document.getElementById("root")
);