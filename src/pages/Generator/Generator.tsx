import './styles.css'

import { GeneratorSettings } from '../GeneratorSettings/GeneratorSettings'
import { GeneratorLogList } from '../GeneratorLogList/GeneratorLogList'
import { Route, Routes } from 'react-router-dom'
import { MenuHeader } from '../../components/MenuHeader/MenuHeader'
import { MenuTopButtons } from '../../components/MenuTopButtons/MenuTopButtons'
import { TabButtons } from '../../components/TabButtons/TabButtons'
import { PlayButton } from '../../components/PlayButton/PlayButton'

export const Generator : React.FC<{}> = ()=>{
    return(
        <div className='generator'>
            <MenuHeader/>

            <MenuTopButtons/>

            <TabButtons tabs={["Settings","Log list"]} active={0}/>

            <Routes>
                <Route path="/Settings" element={<GeneratorSettings />} />
                <Route path="/Log/" element={<GeneratorLogList />} />
            </Routes>

            <PlayButton/>
        </div>
    )
}