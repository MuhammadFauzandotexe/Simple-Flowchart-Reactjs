import React from 'react';

const CostumeNode = ({ data }) => {
    const nodeStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: data.color, // Use the color from the data object
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={nodeStyle}>
            {data.label}
        </div>
    );
};

export default CostumeNode;
