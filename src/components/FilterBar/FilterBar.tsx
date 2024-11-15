import "./style.css"

import clockTimeFiveOutline from '../../assets/ico/clock-time-five-outline.svg'
import filter from '../../assets/ico/filter.svg'
import formatListChecks from '../../assets/ico/format-list-checks.svg'
import { DropDownFilter } from "../DropDownFilter/DropDownFilter"

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
                <DropDownFilter/>
            </div>

        </div>
    )
}