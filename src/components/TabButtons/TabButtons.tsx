import { Link } from 'react-router-dom';
import './styles.css';

export const TabButtons: React.FC<{ tabs: string[]; active: number }> = ({ tabs, active }) => {
    return (
        <div className="tab-buttons">
            {tabs.map((tab, index) => (
                
                <Link to={tab.split(" ")[0]} key={index}>
                    <p className={`tab-btn ${index === active ? 'active' : ''}`}>{tab}</p>
                </Link>
            ))}
        </div>
    );
};
