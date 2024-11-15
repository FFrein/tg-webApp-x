import { Route, Routes } from 'react-router-dom'
import { EmptyList } from '../../components/EmptyList/EmptyList'
import { MenuHeader } from '../../components/MenuHeader/MenuHeader'
import { PlayButton } from '../../components/PlayButton/PlayButton'
import { TabButtons } from '../../components/TabButtons/TabButtons'
import './styles.css'
import { AccountsList } from '../../components/AccountsList/AccountsList'


export const DeathMatch = ()=>{
    return(
        <div className='death-match'>
            <MenuHeader/>
            <TabButtons tabs={["Virtual machines","Accounts"]} active={0}/>
            <PlayButton/>

            <Routes>
                <Route path="/Virtual" element={<EmptyList text={"You haven't connected any virutal machines yet."}/>} />
                <Route path="/Accounts" element={<AccountsList/>} />
            </Routes>
        </div>
    )
}