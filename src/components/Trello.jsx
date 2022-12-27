import React from 'react'

import Badge from './Badge';
import TrelloItem from './TrelloItem'
import TrelloContainer from './TrelloContainer';
import Checkbox from './Checkbox';
import { img } from './TrelloPic'


const Contents = [
    "Delete all references from the wiki", "Remove analytics code",
    "Do a mobile first layout", "Check the meta tags",
    "Think more tasks for this example"
];


const Trello = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white '>
            <div className="md:col-span-2 xl:col-span-3">
                <h3 className="text-lg font-semibold">Task summaries of recent sprints</h3>
            </div>

            <div className=' md:col-span-2 xl:col-span-1'>

                <TrelloContainer title="Tasks TO DO">

                    <TrelloItem text={Contents[0]} />
                    <TrelloItem text={Contents[1]} />
                    <TrelloItem text={Contents[2]} >
                        <Checkbox number="3/5" />
                        {img}
                    </TrelloItem>
                    <TrelloItem text={Contents[3]} />
                    <TrelloItem text={Contents[4]} >
                        <Checkbox number="0/3" />
                    </TrelloItem>

                </TrelloContainer>

            </div>

            <div>
                <TrelloContainer title="Tasks in DEVELOPMENT">

                    <TrelloItem text={Contents[0]} />
                    <TrelloItem text={Contents[1]} />
                    <TrelloItem text={Contents[2]} >
                        <Badge number="2" />
                    </TrelloItem>
                    <TrelloItem text={Contents[3]} />
                    <TrelloItem text={Contents[4]} >
                        <Checkbox number="0/3" />
                    </TrelloItem>
                </TrelloContainer>

            </div>

            <div>
                <TrelloContainer title="Tasks in QA">

                    <TrelloItem text={Contents[0]} />
                    <TrelloItem text={Contents[1]} />
                    <TrelloItem text={Contents[2]} />
                    <TrelloItem text={Contents[3]} />
                    <TrelloItem text={Contents[4]} >
                        <Checkbox number="0/3" />
                    </TrelloItem>
                </TrelloContainer>
            </div >

        </div>
    )
}

export default Trello