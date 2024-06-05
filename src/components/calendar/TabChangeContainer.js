import React from 'react'
import { Calendar, Tabs } from 'antd-mobile'
function TabChangeContainer() {
    return (
        <div>
            <Tabs>
                <Tabs.Tab title='Thai 2D' key='fruits'>

                    <h4 className='text-center mt-3'>Thai 2D Calendar</h4>
                    <Calendar/>
                </Tabs.Tab>
                <Tabs.Tab title='Crypto 2D' key='vegetables'>
                    <h4 className='text-center mt-3'>Crypto 2D Calendar</h4>
                    <Calendar/>
                </Tabs.Tab>

            </Tabs>
        </div>
    )
}

export default TabChangeContainer

