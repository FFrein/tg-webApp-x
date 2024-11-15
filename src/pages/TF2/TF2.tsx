import { MenuHeader } from '../../components/MenuHeader/MenuHeader';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import { SettingsInput } from '../../components/SettingsInput/SettingsInput';
import { TabButtons } from '../../components/TabButtons/TabButtons';

import server from '../../assets/ico/server.svg'
import ticket from '../../assets/ico/ticket.svg'

import './styles.css'


export const TF2 = ()=>{
    return(
        <div>
            <MenuHeader/>
            <TabButtons tabs={[]} active={0}/>
            <PlayButton/>
            <div className='menu__form'>
                <SettingsInput img={server} placeholder={"Threads"}/>
            </div>
            <div className='menu__form'>
                <SettingsInput img={ticket} placeholder={"Buying Tour of Duty Ticket (~1$)"}/>
            </div>
        </div>
    );
}