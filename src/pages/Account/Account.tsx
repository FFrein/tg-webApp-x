import "./styles.css"

import { AccountsList } from '../../components/AccountsList/AccountsList'

export const Account = ()=>{
    return(
        <>
        <div className="accounts-amount-block">
            <h3 className="accounts-amount-block__title">2117</h3>
            <p className="accounts-amount-block__text">Accounts</p>
        </div>

        <AccountsList/>
        </>
    )
}