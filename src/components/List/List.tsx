import React from 'react';
import Card from '../Card/Card';
import Title from '../Title/Title';
import { MainProps } from '../../interfaces/CommonProps';
const List: React.FC<MainProps> = ({data}) => {
    return (
        <>
        {
            data.map((el,idx) => {
                return (
                    <section className="list container mt-4" key={idx}>
                        <Title title={el.title} section={true} position='center'/>
                            <ul className='container'>
                                <Card items={el.items}/>
                            </ul>
                    </section>
                )
            })
        }
        </>
    );
};
export default List;