import './styles.css'

import mail from '../../assets/ico/mail.svg'
import proxy from '../../assets/ico/proxy.svg'
import { MenuTopButton } from '../MenuTopButton/MenuTopButton'

export const MenuTopButtons : React.FC<{}> = ()=>{
    return(
        <div className='menu__top-buttons'>
            <MenuTopButton name={'123'} img={proxy} amount={'0'}/>
            <MenuTopButton name={'123'} img={mail} amount={'0'}/>
        </div>
    )
}