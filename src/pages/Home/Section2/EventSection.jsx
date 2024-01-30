import React from 'react'
import SubHeading from '../../../components/SubHeading/SubHeading'
import testImg from '../../../assets/bg/BG.png'
import useEvent from '../../../hooks/eventHooks/useEvent'

const EventSection = () => {
    const { events } = useEvent()
    return (
        <div>
            <SubHeading title={`Event Items`} description={`Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.`} />
            <div className="my-4 px-5 flex justify-center items-center">
                <div className='grid grid-cols-1  lg:grid-cols-3 gap-4'>
                    <div>
                        <img src={events[0].img} className='h-[445px]' alt="" />
                    </div>
                    <div className='space-y-3'>
                        <div>
                            <img src={events[1].img} alt="" />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <img src={events[2].img} alt="" />
                            </div>
                            <div>
                                <img src={`https://i1.adis.ws/i/canon/c09a2183_04d89cb8355c485e8a4f1142b2cb06da?$media-collection-full-dt-jpg$`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div>
                            <img src={`https://img.freepik.com/premium-photo/concept-production-pubs-concert-events-camera-shooting-beams-from-spotlights-lights-blue-tones_51903-329.jpg`} className='h-[200px] w-full' alt="" />
                        </div>
                        <div>
                            <img src={`https://i1.adis.ws/i/canon/c09a2183_04d89cb8355c485e8a4f1142b2cb06da?$media-collection-full-dt-jpg$`} className='h-[235px] w-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection