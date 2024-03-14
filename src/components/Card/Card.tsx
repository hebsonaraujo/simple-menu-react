import React from 'react';
import Title from '../Title/Title';
import './Card.css'
import Description from '../Description/Description';
import Icon from '../Icon/Icon';
import Features from '../Features/Features';
import VisualizationIcon from '../../icons/EyeIcon';
import { ListItems } from '../../interfaces/CommonProps';
import Price from '../Price/Price';

const Card: React.FC<ListItems> = ({items}) => {
    return (
        <>
        {
            items.map((item,idx) => {
                return (
                    <li key={idx} className='card'>
                        <Features features={item.features} id={idx}/>
                        <Title title={item.nome} section={false} position={'left'} />
                        {item.img && <VisualizationIcon/>}
                        <Description description={item.description}/>
                        <Price preco={item.preco}/>
                    </li>
                )
            })
        }
        </>
    );
};
export default Card;