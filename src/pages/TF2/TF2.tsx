import { MenuHeader } from '../../components/MenuHeader/MenuHeader';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import { SettingsInput } from '../../components/SettingsInput/SettingsInput';
import { TabButtons } from '../../components/TabButtons/TabButtons';

import server from '../../assets/ico/server.svg'
import ticket from '../../assets/ico/ticket.svg'

import './styles.css'
import { Route, Routes } from 'react-router-dom';
import { AccountsList } from '../../components/AccountsList/AccountsList';
import { TF2Settings } from '../TF2Settings/TF2Settings';


export const TF2 = ()=>{
    return(
        <div>
            <MenuHeader/>
            <TabButtons tabs={["Settings","Accounts"]} active={0}/>

            <Routes>
                <Route path="/Settings" element={<TF2Settings/>} />
                <Route path="/Accounts" element={<AccountsList/>} />
            </Routes>

            <PlayButton/>
        </div>
    );
}