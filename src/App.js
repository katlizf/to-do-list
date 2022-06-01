import './App.css'
import Main from './Components/Main'
import Header from './Components/Header'
import About from './Components/About'
import Team from './Components/Team'
import Details from './Components/Details'
import { Route, Routes } from 'react-router-dom'

function App() {

    return (
        <div className="App">
            <Header />
            {/* <Main /> */}
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/addTask' element={<Main />} />
                <Route path='/team/*' element={<Team />} />
                <Route path='/details/:pokemon' element={<Details />} />
            </Routes>
        </div>
    )
}

export default App