import React, {useState} from "react";
import Remote from './Remote/Remote';
import './account.scss';

interface ProfileHeaderProps {
    name: string;
    patronymic: string;
    img: string;
    age: number;
    sex: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, patronymic, img, age, sex }) => {
    
    const [dropdown, setDropdown] = useState(false);

    return (
       <div className="profile-header">
        <div className="profile-header-info">
            <img className="profile-header-img" src={img} alt="profile-header-img" />
            <div className="profile-header-info-data">
                <p className="profile-header-info-data-name">{name + ' ' + patronymic}</p>
                <p className="profile-header-info-data-age">{age + ' лет, ' + sex}</p>
            </div>
        </div>
        <Remote dropdown={dropdown} dropController={setDropdown}/>
       </div>
    )
}

export default ProfileHeader;
