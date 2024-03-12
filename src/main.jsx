import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import GifExpertApp from './GifExpertApp.jsx'
import AddCategory from './Components/AddCategory.jsx'
import { TaskList } from './Components/TaskList.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TaskList /> */}
    <GifExpertApp />
  </React.StrictMode>,
)