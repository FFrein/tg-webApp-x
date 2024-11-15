import './styles.css'

import { MenuHeader } from '../../components/MenuHeader/MenuHeader';
import { MenuTopButtons } from '../../components/MenuTopButtons/MenuTopButtons';
import { SettingsInput } from '../../components/SettingsInput/SettingsInput';
import { TabButtons } from '../../components/TabButtons/TabButtons';

import account from '../../assets/ico/account-supervisor-circle.svg'
import server from '../../assets/ico/server.svg'
import { PlayButton } from '../../components/PlayButton/PlayButton';

export const Changer = ()=>{
    return(
        <div className='changer'>
            <MenuHeader/>
            <MenuTopButtons/>
            <TabButtons tabs={[]} active={0}/>
            
            <div className='menu__form'>
                <SettingsInput img={account} placeholder={"Number of accounts"}/>
                <SettingsInput img={server} placeholder={'Threads'}/>
            </div>

            <PlayButton/>
        </div>
    );
}