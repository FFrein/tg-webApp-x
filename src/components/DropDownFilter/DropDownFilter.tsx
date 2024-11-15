import { useState } from "react";
import "./styles.css";

export const DropDownFilter : React.FC<{}> = ({})=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [filter, setFilter] = useState("new");

  return (
    <div
      className="change-lang-btn"
      onClick={toggleDropdown}
    >
      <button className="main-btn">
        <img src="./../assets/images/ico/lang.svg" alt="" />
        {filter}
      </button>
      {isOpen && (
        <div className="dropdown_wrapper">
          <div className="dropdown">
            <button className="lang-btn"onClick={() => {setFilter("new")}}>new</button>
            <button className="lang-btn"onClick={() => {setFilter("old")}}>old</button>
            <button className="lang-btn"onClick={() => {setFilter("money")}}>money</button>
            <button className="lang-btn"onClick={() => {setFilter("money")}}>money</button>
            <button className="lang-btn"onClick={() => {setFilter("bans")}}>bans</button>
          </div>
        </div>
      )}
    </div>
  );
};