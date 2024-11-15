import "./styles.css"

import homeGray from '../../assets/ico/homg-gray.svg'
import settingsGray from '../../assets/ico/settings.svg'
import taskListGray from '../../assets/ico/tasklist-gray.svg'
import accountsGray from '../../assets/ico/acc-gray.svg'

export const Navbar = ()=>{
    return(
        <nav className="navigation">
            <ul className="nav-buttons">
                <a href="#/">
                    <li className="nav-btn">
                        <img src={homeGray}/>
                        <p>Home</p>
                    </li>
                </a>
                <a href="#/accounts">
                    <li className="nav-btn">
                        <img src={accountsGray}/>
                        <p>Accounts</p>
                    </li>
                </a>
                <a href="#/tasklist/Proxy">
                    <li className="nav-btn">
                        <img src={taskListGray}/>
                        <p>TaskList</p>
                    </li>
                </a>
                <a href="#/settings">
                    <li className="nav-btn" >
                        <img src={settingsGray}/>
                        <p>Settings</p>
                    </li>
                </a>
            </ul>
        </nav>
    )
}