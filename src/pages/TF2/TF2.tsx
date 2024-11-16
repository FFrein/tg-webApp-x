import { MenuHeader } from '../../components/MenuHeader/MenuHeader';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import { TabButtons } from '../../components/TabButtons/TabButtons';

import './styles.css'
import { Route, Routes } from 'react-router-dom';
import { AccountsList } from '../../components/AccountsList/AccountsList';
import { TF2Settings } from '../TF2Settings/TF2Settings';


export const TF2 = ()=>{
    return(
        <div>
            <MenuHeader/>
            <TabButtons tabs={["Settings","Accounts"]}/>

            <Routes>
                <Route path="/Settings" element={<TF2Settings/>} />
                <Route path="/Accounts" element={<AccountsList/>} />
            </Routes>

            <PlayButton/>
        </div>
    );
}