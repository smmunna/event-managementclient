import React from 'react'
import PriceListCard from '../../../components/PriceListCard/PriceListCard'
import SubHeading from '../../../components/SubHeading/SubHeading'

const PricingList = () => {
    return (
        <div>
            <SubHeading title={`Event Items`} description={`Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.`} />

            <div className='flex justify-center'>
                <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div>
                        <PriceListCard title={`Enterprise`} price={15} />
                    </div>
                    <div>
                        <PriceListCard title={`Forever`} price={25} />
                    </div>
                    <div>
                        <PriceListCard title={`Business Pack`} price={9} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PricingList