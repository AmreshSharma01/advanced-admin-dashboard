import React, { useState } from 'react'
import RecentActivitiesContainer from './RecentActivitiesContainer'
import RecentActivitiesItem from './RecentActivitiesItem'
import RA_Links from './RA_Links'

const linkStyle = 'font-medium text-gray-800 dark:text-gray-50'

const paragraphs = {
    paragraph1: (
        <div>
            <RA_Links link="Nick Mark" /> mentioned <RA_Links link="Sara Smith" /> in a new post
        </div>),
    paragraph2: (
        <div>
            The post <RA_Links link="Post Name" /> was removed by <RA_Links link="Nick Mark" />
        </div>
    ),
    paragraph3: (
        <div>
            <RA_Links link="240+" /> users have subscribed to <RA_Links link="Newsletter #1" />
        </div>
    )

}



const RecentActivities = () => {

    const isLastItem = false;

    return (

        <div className=' flex flex-col bg-gray-50 dark:bg-primary-dark w-full shadow-lg rounded px-0'>

            <div className='px-4 py-2 flex flex-row flex-wrap justify-between'>
                <div className='self-center font-semibold text-base text-gray-900 dark:text-gray-50'>Recent Activities</div>
                <button className='px-3 border-x-2 text-white font-bold  text-xs bg-primary-light dark:bg-gray-100 dark:text-black py-1 rounded border-transparent'>SEE ALL</button>
            </div>
            {/* <div className='w-full block'> */}
            {/* <div className='block overflow-x-auto  w-full '> */}

            <RecentActivitiesContainer heading="Today" >
                <RecentActivitiesItem icon="RAicon1" paragraph={paragraphs.paragraph1} />
                <RecentActivitiesItem className="dark:border-none" icon="RAicon2" paragraph={paragraphs.paragraph2} isLastItem={true} />
            </RecentActivitiesContainer>

            <RecentActivitiesContainer heading="Yesterday">
                <RecentActivitiesItem icon="RAicon3" paragraph={paragraphs.paragraph3} isLastItem={true} />
            </RecentActivitiesContainer>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}


export default RecentActivities