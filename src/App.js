import {useState} from 'react'
import Navigation from './components/navigation/navigation'
import PageContent from './components/page-content/pageContent'
const App = () => {

     return(
    <div id="page-top">
        <Navigation />
        <PageContent/>
    </div>)
}
export default App