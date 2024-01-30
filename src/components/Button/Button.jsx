import React from 'react';

const MyButton = ({ title, width }) => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #CB9201, #CB9201 100%, #000000)', // Gradient from CB9201 to #000000
        color: 'white',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: width,
    };

    return (
        <button className="text-center" style={gradientStyle}>
            {title}
        </button>
    );
};

export default MyButton;
