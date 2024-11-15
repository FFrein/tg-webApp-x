import './styles.css'

export const SettingsInput : React.FC<{img:string, placeholder:string}> = ({img, placeholder})=>{

    return(
    <div className='input-section'>
        <img className='input-section__img'  src={img} alt="input img"/>
        <input className='input-section__input' type='text' placeholder={placeholder}/>
    </div>
    )
}