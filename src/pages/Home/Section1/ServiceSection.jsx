import React from 'react'
import SubHeading from '../../../components/SubHeading/SubHeading'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import useServices from '../../../hooks/servicesHooks/useServices'

const ServiceSection = () => {
    const { services } = useServices()
    return (
        <div>
            <div className='py-4 flex justify-center'>
                <SubHeading title={`Our Services`} description={`Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.`} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
                {
                    services.map((service, index) => <React.Fragment key={index + 1}>
                        <ServiceCard services={service} />
                    </React.Fragment>)
                }
            </div>
        </div>
    )
}

export default ServiceSection