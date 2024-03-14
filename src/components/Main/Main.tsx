import React from 'react';
import List from '../List/List';
import './Main.css'
import { MainProps } from '../../interfaces/CommonProps';

const Main: React.FC<MainProps> = ({ data }) => {
    return(
        <main className='wrapper-main'>
            <List data={data}/>
        </main>
    )
};
export default Main;