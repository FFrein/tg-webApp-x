import { SettingsInput } from '../../components/SettingsInput/SettingsInput'

import proxy from '../../assets/ico/proxy.svg'
import account from '../../assets/ico/account-supervisor-circle.svg'
import server from '../../assets/ico/server.svg'
import webkey from '../../assets/ico/webkey.svg'
import avatarlog from '../../assets/ico/avatarlog.svg'
import maFile from '../../assets/ico/maFile.svg'
import lock from '../../assets/ico/lock-closed.svg'


export const GeneratorSettings : React.FC<{}> = ()=>{
    return(
        <div className='generator-settings'>

            <div className='menu__form'>
                <SettingsInput img={account} placeholder={"Number of accounts"}/>
                <SettingsInput img={server} placeholder={'Threads'}/>
                <SettingsInput img={proxy} placeholder={'Accounts per proxy'}/>
            </div>

            <div className='menu__form'>
                <SettingsInput img={webkey} placeholder={'Website key'}/>
            </div>

            <div className='menu__form'>
                {/*Обернуть в HOC и добавить переключатель? */}
                <SettingsInput img={account} placeholder={'Login charter'}/>
                <SettingsInput img={lock} placeholder={'Password charter'}/>
                <SettingsInput img={avatarlog} placeholder={'Avatar'}/>
                <SettingsInput img={maFile} placeholder={'MaFiles'}/>
            </div>
        </div>
    )
}