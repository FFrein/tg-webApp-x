import './styles.css'

import { MenuHeader } from '../../components/MenuHeader/MenuHeader';
import { MenuTopButtons } from '../../components/MenuTopButtons/MenuTopButtons';
import { TabButtons } from '../../components/TabButtons/TabButtons';

import { PlayButton } from '../../components/PlayButton/PlayButton';
import { Route, Routes } from 'react-router-dom';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { ChangerSettings } from '../ChangerSettings/ChangerSettings';

export const Changer = ()=>{
    return(
        <div className='changer'>
            <MenuHeader/>
            <MenuTopButtons/>
            <TabButtons tabs={["Settings","Accounts"]} active={0}/>


            <Routes>
                <Route path="/Settings/" element={<ChangerSettings/>} />
                <Route path="/Accounts" element={<EmptyList text={"You haven't uploaded any accounts yet"}/>} />
            </Routes>

            <PlayButton/>
        </div>
    );
}