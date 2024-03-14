import React from 'react';
import './Price.css'
interface Price {
    preco: number
}
const Price: React.FC<Price> = ({preco}) => {
    const isBigger = preco > 30 ? true : false;
    return (
        <span className='price'>
            R$ {preco} - {isBigger ? '$$$$' : '$'}
        </span>
    );
};
export default Price;