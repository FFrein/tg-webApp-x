import { Link, useLocation } from 'react-router-dom';
import './styles.css';

export const TabButtons: React.FC<{ tabs: string[]}> = ({ tabs }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname.includes(path);
    
    return (
        <div className="tab-buttons">
            {tabs.map((tab, index) => (
                
                <Link to={tab.split(" ")[0]} key={index}>
                    <p className={`tab-btn ${isActive(tab.split(" ")[0])? 'active' : ''}`}>{tab}</p>
                </Link>
            ))}
        </div>
    );
};
