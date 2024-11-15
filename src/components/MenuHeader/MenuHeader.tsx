import './styles.css'

import cloclWhite from '../../assets/ico/clocl-white.svg'

export const MenuHeader : React.FC<{}> = ()=>{
    return(
        <div className='menu-header'>
        <div  className='menu-header__data'>
            <img src={cloclWhite} alt="" className='menu-header__img'/>
            <p className='menu-header__text'>Gena</p>
        </div>

        <p className='menu-header__invactive'>Invactive</p>
    </div>
    )
}