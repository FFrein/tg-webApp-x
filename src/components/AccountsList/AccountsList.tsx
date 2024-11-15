import "./styles.css"

import { useEffect, useState } from "react"

import {Account} from "../Account/Account"
import {FilterBar} from "../FilterBar/FilterBar"

import settingsGray from '../../assets/ico/settings.svg'

export const AccountsList = ()=>{
    const [getAccounts, setAccounts] = useState<String[]>([]);
    
    useEffect(()=>{
        setAccounts([
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes",
            "MargieHagenes"
        ]);
    },[])

    return(
        <div>
            <FilterBar/>

            <div className="account-list">
            {getAccounts.map((a)=>{
                return a ? <Account key={a.toString()} img={settingsGray} name={a.toString()}/>  : <></>              
            })}
            </div>
        </div>
    )
}