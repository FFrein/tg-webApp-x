import { MenuHeader } from '../../components/MenuHeader/MenuHeader'
import { PlayButton } from '../../components/PlayButton/PlayButton'
import { TabButtons } from '../../components/TabButtons/TabButtons'
import './styles.css'


export const DeathMatch = ()=>{
    return(
        <div>
            <MenuHeader/>
            <TabButtons tabs={[]} active={0}/>
            <PlayButton/>
        </div>
    )
}