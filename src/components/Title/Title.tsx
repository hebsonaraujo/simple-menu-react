import React from 'react';
import './Title.css'
interface Title {
    title: string,
    position: string,
    section: boolean
}
const Title: React.FC<Title> = ({title,position,section}) => {
    return (
        <div className='title'>
            <h5 id={`${section ? title : ''}`} className={`${position} ${section ? 'section' :''}`}>
                {title}
            </h5>
        </div>
    );
};
export default Title;