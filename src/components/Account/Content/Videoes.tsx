import React from "react";
import './content.scss';

interface VideoInfo {
    img: string;
    name: string;
    author: string;
    date?: string;

}

interface VideoesProps {
    videoes: VideoInfo[];
}

const Videoes: React.FC<VideoesProps> = ({ videoes }) => {
    return (
        <ul className="videoes">
            {videoes.map((info, index) => (
                <li key={index}>
                    <div className="video">
                        <img className='video-img' src={info.img} alt={info.name} />
                        <div className="video-info">
                            <div className="video-name">{info.name}</div>
                            <div className="video-author">{info.author}</div>  
                        </div>
                        <div className="video-date">{info.date}</div>
                    </div>
                </li>
            ))}
        </ul>   
    );
}

export default Videoes;
