import React, { useState } from "react";
import './account.scss';

interface NavProps {
  navItem: string;
  onChangeItem: (item: string) => void;
}

const ProfileHeader: React.FC<NavProps> = ({ navItem, onChangeItem }) => {
  const [activeItem, setActiveItem] = useState(navItem);

  interface NavItems {
    [key: string]: string;
  }

  const navItems: NavItems = {
    "Заметки": "Новая заметка",
    "Консультации": "Записать",
    "Видео": "Рекомендовать",
    "Мероприятия": "Рекомендовать",
  };

  const changeContent = (item: string) => {
    onChangeItem(item);
    setActiveItem(item);
  };

  return (
    <div className="navigation">
        <ul>
          {Object.keys(navItems).map((item, index) => (
            <li
              onClick={() => changeContent(item)}
              className={`navigation-item ${activeItem === item ? 'navigation-item-active' : ''}`}
              key={index}
            >
              {index >= 0 && index <= 2 ? (
                <>
                {item} <img className='navigation-line' src='./images/line.svg'/>
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
        <div className="navigation-button-wrapper">
          <span className="navigation-btn-name">
            {navItems[navItem]}
          </span>
          <button className='navigation-button' type="button"><img src='./images/new-note.svg'></img></button>
        </div>
      
    </div>
  );
}

export default ProfileHeader;
