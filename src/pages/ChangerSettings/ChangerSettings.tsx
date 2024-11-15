import './styles.css'

import { SettingsInput } from '../../components/SettingsInput/SettingsInput';

import account from '../../assets/ico/account-supervisor-circle.svg'
import server from '../../assets/ico/server.svg'

export const ChangerSettings = ()=>{
    return(
        <div className='changer-settings'>
            <div className='menu__form'>
                <SettingsInput img={account} placeholder={"Number of accounts"}/>
                <SettingsInput img={server} placeholder={'Threads'}/>
            </div>
        </div>
    );
}