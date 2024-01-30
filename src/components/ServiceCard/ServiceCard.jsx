import React from 'react'

const ServiceCard = ({ services }) => {
    const { title, img, description } = services
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure><img src={img} className="p-5 w-[450px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    {
                        description.map((d, index) => <React.Fragment key={index + 1}>
                            <p>✔ {d?.service_name}</p>
                        </React.Fragment>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceCard