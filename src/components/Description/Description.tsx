import React from 'react';
interface Description {
    description: string | undefined
}
const Description: React.FC<Description> = ({description}) => {
        return (
            <p>
                {description}
            </p>
        );
};
export default Description;