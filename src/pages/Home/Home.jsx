import React from 'react'
import ServiceSection from './Section1/ServiceSection'
import EventSection from './Section2/EventSection'
import PricingList from './Section3/PricingList'

export default function Home() {
    return (
        <div>
            <div className='space-y-8 px-5 py-8'>
                <ServiceSection />
                <EventSection />
                <PricingList />
            </div>
        </div>
    )
}
