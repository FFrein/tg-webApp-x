import "./styles.css"

import homeGray from '../../assets/ico/homg-gray.svg'
import settingsGray from '../../assets/ico/settings.svg'
import taskListGray from '../../assets/ico/tasklist-gray.svg'
import accountsGray from '../../assets/ico/acc-gray.svg'

import homeBlue from '../../assets/ico/homg-blue.svg'
import taskListBlue from '../../assets/ico/tasklist-blue.svg'
import accountsBlue from '../../assets/ico/acc-blue.svg'

 
import { useLocation } from "react-router-dom"

export const Navbar = ()=>{
    const location = useLocation();

    const isActive = (path: string) => location.pathname.endsWith(path);
    const isActiveContain = (path: string) => location.pathname.includes(path);

    return(
        <nav className="navigation">
            <ul className="nav-buttons">
                <a href="#/">
                    <li className="nav-btn">
                        <img src={isActive("/")? homeBlue : homeGray}/>
                        <p className={`btn-text ${isActive("/")? "blue": ""}`}>Home</p>
                    </li>
                </a>
                <a href="#/accounts">
                    <li className="nav-btn">
                        <img src={isActive("accounts")? accountsBlue : accountsGray}/>
                        <p className={`btn-text ${isActive("accounts")? "blue": ""}`}>Accounts</p>
                    </li>
                </a>
                <a href="#/tasklist/Proxy">
                    <li className="nav-btn">
                        <img src={isActiveContain("tasklist")? taskListBlue : taskListGray}/>
                        <p className={`btn-text ${isActiveContain("tasklist")? "blue": ""}`}>TaskList</p>
                    </li>
                </a>
                <a href="#/settings">
                    <li className="nav-btn" >
                        <img src={settingsGray}/>
                        <p className={`btn-text ${isActive("settings")? "blue": ""}`}>Settings</p>
                    </li>
                </a>
            </ul>
        </nav>
    )
}