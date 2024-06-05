import React from 'react'
import { Tabs } from 'antd-mobile'
function TabContainer() {
  return (
    <Tabs>
    <Tabs.Tab title='Thai 2D' key='fruits'>
     
    <h4 className='text-center mt-3'>Thai 2D</h4>
     <div className='d-flex justify-content-between mx-3 rounded-3 py-2 px-4 mt-3' style={{ backgroundColor: "rgb(194, 192, 192)" }}>
                <div style={{ height: "120px", width: "120px" }} className='rounded-circle live-number d-flex justify-content-center align-items-center' >
                    <h1 className='text-center text-primary' style={{ fontSize: "60px" }}>43</h1>
                </div>

                <div>
                    <span className="text-primary">12-02-2024</span>

                    <div className='mt-2'>
                        <span>Set </span>

                        <div>23,23423,3</div>
                    </div>
                    <div className='mt-2'>
                        <span> Value</span>

                        <div>23,23423,3</div>
                    </div>
                </div>


            </div>

            <div className='row mt-5 text-white d-flex justify-content-between mx-4'>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
            </div>
    </Tabs.Tab>
    <Tabs.Tab title='Crypto 2D' key='vegetables'>
    <h4 className='text-center mt-3'>Crypto 2D</h4>

      <div className='d-flex justify-content-between mx-3 rounded-3 py-2 px-4 mt-3' style={{ backgroundColor: "rgb(194, 192, 192)" }}>
                <div style={{ height: "120px", width: "120px" }} className='rounded-circle live-number d-flex justify-content-center align-items-center' >
                    <h1 className='text-center text-primary' style={{ fontSize: "60px" }}>43</h1>
                </div>

                <div>
                    <span className="text-primary">12-02-2024</span>

                    <div className='mt-2'>
                        <span>Set </span>

                        <div>23,23423,3</div>
                    </div>
                    <div className='mt-2'>
                        <span> Value</span>

                        <div>23,23423,3</div>
                    </div>
                </div>


            </div>

            <div className='row mt-5 text-white d-flex justify-content-between mx-4'>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
            </div>

            <div className='row mt-2 text-white d-flex justify-content-between mx-4'>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
                <div className='col-5 rounded-4 py-3 px-3 bg-primary text-center'>
                    <p style={{ fontSize: "16px" }}>
                        comming soon
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        12:00 PM
                    </p>
                </div>
            </div>
    </Tabs.Tab>
    
  </Tabs>
  )
}

export default TabContainer