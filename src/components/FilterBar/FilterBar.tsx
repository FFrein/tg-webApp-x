import "./style.css"

import clockTimeFiveOutline from '../../assets/ico/clock-time-five-outline.svg'
import filter from '../../assets/ico/filter.svg'
import formatListChecks from '../../assets/ico/format-list-checks.svg'

export const FilterBar = ()=>{
    return(
        <div className="filter-bar">
            <div className="filter-btn">
                <img className="filter-btn-img" src={formatListChecks} alt="img"/>
                <p className="filter-btn-name">All</p>
            </div>

            <div className="filter-btn">
                <img className="filter-btn-img" src={filter} alt="img"/>
                <p className="filter-btn-name">Filter</p>
            </div>

            <div className="filter-btn">
                <img className="filter-btn-img" src={clockTimeFiveOutline} alt="img"/>
                <select name="filter" id="filter">
                    <option value="new">new</option>
                    <option value="old">old</option>
                    <option value="money-asc">money up</option>
                    <option value="money-dsc">money down</option>
                    <option value="bans">bans</option>
                </select>
            </div>
        </div>
    )
}