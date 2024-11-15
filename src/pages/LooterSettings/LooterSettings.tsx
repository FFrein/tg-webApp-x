import './styles.css'

import { SettingsInput } from '../../components/SettingsInput/SettingsInput'

import account from '../../assets/ico/account-supervisor-circle.svg'
import server from '../../assets/ico/server.svg'
import game from '../../assets/ico/game.svg'
import proxy from '../../assets/ico/proxy.svg'

export const LooterSettings : React.FC<{}> = ()=>{
    return(
        <div className='changer'>
            
            <div className='menu__form'>
                <SettingsInput img={server} placeholder={'Threads'}/>
                <SettingsInput img={proxy} placeholder={"Accounts per proxy"}/>
            </div>

            <div className='menu__form'>
                <SettingsInput img={account} placeholder={"Number of accounts"}/>
            </div>

            <div className='menu__form'>
                <SettingsInput img={game} placeholder={"Enter game id"}/>
            </div>
        </div>
    )
}