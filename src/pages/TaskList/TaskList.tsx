import { Route, Routes } from "react-router-dom"
import { MenuHeader } from "../../components/MenuHeader/MenuHeader"
import { TabButtons } from "../../components/TabButtons/TabButtons"
import { ProxyList } from "../../components/ProxyList/ProxyList"
import { MailList } from "../../components/MailList/MailList"

import flag from '../../assets/ico/flag.svg'
import { useState } from "react"

export const TaskList = ()=>{

    const [proxy] = useState([{address:'192.292.421', image:flag},{address:'192.292.421', image:flag},{address:'192.292.421', image:flag},{address:'192.292.421', image:flag},{address:'192.292.421', image:flag},{address:'192.292.421', image:flag}])

    return(
        <>
        <MenuHeader/>
        <TabButtons tabs={["Proxy (10)", "Mail (254)"]}/>
            <Routes>
                <Route path="Proxy" element={<ProxyList proxy={proxy}/>}/>
                <Route path="Mail" element={<MailList mails={["asdasdasd@mail.ru"]} error={0}/>}/>
            </Routes>
        </>
    )   
}