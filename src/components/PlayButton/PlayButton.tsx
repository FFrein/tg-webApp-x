import './styles.css'

import play from '../../assets/ico/play.svg'

export const PlayButton : React.FC<{}> = ()=>{
    return(
        <div className='play-button'>
            <img src={play} alt="play" className='play-img'/>
        </div>
    )
}