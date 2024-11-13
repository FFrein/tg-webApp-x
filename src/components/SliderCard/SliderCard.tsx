import "./styles.css"

export const SliderCard : React.FC<{ numbers:number, img:string, title:string, subtitle:string, background:string, className:string }> = ({ numbers, img, title, subtitle, background, className }) => {
    return (
        <div 
            className={`slider-card__wrapper ${className}` }
            style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="slider-card">
                <div className="machines">
                    <p className="machines-count">{numbers}/16</p>
                </div>

                <div className="info-block">
                    <img src={img} className="card-image" />
                    <h4 className="info-block__title">{title}</h4>
                    <p className="info-block__subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};