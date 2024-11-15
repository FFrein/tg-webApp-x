import './styles.css';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import cloclWhite from '../../assets/ico/clocl-white.svg';

export const MenuHeader: React.FC = () => {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <div className="menu-header">
            <div className="menu-header__data">
                <img src={cloclWhite} alt="" className="menu-header__img" onClick={() => navigate(-1)}/>
                <p className="menu-header__text">Gena</p>
            </div>

            <p className="menu-header__invactive">Invactive</p>
        </div>
    );
};
