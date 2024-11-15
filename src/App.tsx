import './App.css'

import { Main } from './pages/Main/Main.tsx'
import { Account } from './pages/Account/Account'
import { Settings } from './pages/Settings/Settings'
import { TaskList } from './pages/TaskList/TaskList'
import { Active } from './pages/Active/Active'
import { DeathMatch } from './pages/DeathMatch/DeathMatch'
import { Changer } from './pages/Changer/Changer'
import { TF2 } from './pages/TF2/TF2'

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Looter } from './pages/Looter/Looter.tsx'
import { Generator } from './pages/Generator/Generator.tsx'
import { Navbar } from './components/Navbar/Navbar.tsx'

function App() {

  return (
    <div className='app__wrapper'>
      <Router 
      future={{
        v7_startTransition: true,  
        v7_relativeSplatPath: false,  
      }}>
        <Routes>
            <Route path="/tasklist/*" element={<TaskList/>}/>
            <Route path="/accounts/*" element={<Account/>}/>
            <Route path="/settings/*" element={<Settings/>}/>

            <Route path="/active/*" element={<Active/>}/>
            <Route path="/dm/*" element={<DeathMatch/>}/>
            <Route path="/generator/*" element={<Generator/>}/>
            <Route path="/changer/*" element={<Changer/>}/>
            <Route path="/looter/*" element={<Looter/>}/>
            <Route path="/tf2/*" element={<TF2/>}/>
            
            <Route path="*" element={<Main/>}/>
        </Routes>
      </Router>
      
      <Navbar/>
    </div>
  )
}

export default App
