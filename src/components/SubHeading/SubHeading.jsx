import React from 'react'

const SubHeading = ({ title, description }) => {
    return (
        <div className=''>
            <h3 className='text-center font-bold'>{title}</h3>
            <p className='text-center'>{description}</p>
        </div>
    )
}

export default SubHeading