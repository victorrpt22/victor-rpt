import {useState} from 'react'
import NavBar from './components/navbar/navbar'
import Home from './components/home/home'
const App = () => {

     return(
    <div className='container'>
        <NavBar />
        <Home/>
        <h1 className='text-center'>Portafolio en construcción.</h1>
    </div>)
}
export default App