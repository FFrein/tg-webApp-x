import "./styles.css"

import { Navbar } from '../../components/Navbar/Navbar'
import { AccountsList } from '../../components/AccountsList/AccountsList'

export const Account = ()=>{
    return(
        <>
        <AccountsList/>
        <Navbar/>
        </>
    )
}