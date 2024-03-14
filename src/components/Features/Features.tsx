import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './Features.css'
interface Features {
    features: string[] | undefined
    id: number
}
const Features: React.FC<Features> = ({features, id}) => {
    return (
        <div className='features mb-2' data-testid={`features-container-${id}`}>
            {
                features?.map((item,idx) => <Badge pill className="p-2" key={idx}>{item}</Badge>)
            }
        </div>
    );
};
export default Features;