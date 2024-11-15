import './styles.css'

import { MenuHeader } from '../../components/MenuHeader/MenuHeader'
import { MenuTopButtons } from '../../components/MenuTopButtons/MenuTopButtons'
import { TabButtons } from '../../components/TabButtons/TabButtons'
import { SettingsInput } from '../../components/SettingsInput/SettingsInput'

import account from '../../assets/ico/account-supervisor-circle.svg'
import server from '../../assets/ico/server.svg'
import game from '../../assets/ico/game.svg'
import proxy from '../../assets/ico/proxy.svg'
import { PlayButton } from '../../components/PlayButton/PlayButton'

export const Looter : React.FC<{}> = ()=>{
    return(
        <div className='changer'>
            <MenuHeader/>
            <MenuTopButtons/>
            <TabButtons tabs={["Settings","Accounts"]} active={0} />
            
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

            <PlayButton/>
        </div>
    )
}