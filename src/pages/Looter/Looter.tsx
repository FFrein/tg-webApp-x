import './styles.css'

import { PlayButton } from '../../components/PlayButton/PlayButton'
import { Route, Routes } from 'react-router-dom'
import { LooterSettings } from '../LooterSettings/LooterSettings'
import { MenuHeader } from '../../components/MenuHeader/MenuHeader'
import { TabButtons } from '../../components/TabButtons/TabButtons'
import { MenuTopButtons } from '../../components/MenuTopButtons/MenuTopButtons'
import { AccountsList } from '../../components/AccountsList/AccountsList'

export const Looter : React.FC<{}> = ()=>{
    return(
        <div className='changer'>
            <MenuHeader/>
            <MenuTopButtons/>
            <TabButtons tabs={["Settings","Accounts"]} active={0} />
            <Routes>
                <Route path="/Settings" element={<LooterSettings/>} />
                <Route path="/Accounts" element={<AccountsList/>} />
            </Routes>
            <PlayButton/>
        </div>
    )
}