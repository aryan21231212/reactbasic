import React from 'react'
import shoe from '/public/images/shoe_image.png'
import amazon from '/public/images/amazon.png'
import flipkart from '/public/images/flipkart.png'

const Section = () => {
    return (
        <>
            <div id='section' className='d-flex justify-content-center'>
                <div id='left'>
                    <div id='big'>
                        <h1 className='big'>YOUR FEET</h1>
                        <h1 className='big'>DESERVE</h1>
                        <h1 className='big'>THE BEST</h1>
                    </div>
                    <div id='para'>
                        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div id='but'>
                        <button id='shop'>Shop Now</button>
                        <button id='cat'>Category</button>
                    </div>
                    <div id='last' className='mt-4'>
                        <p id='grey'>Also Available On</p>
                        <div className='d-flex align-items-center gap-3'>
                            <span><img src={flipkart} alt="" /></span>
                            <span><img className='mt-1' src={amazon} alt="" /></span>
                        </div>
                    </div>

                </div>
                <div id='shoe'>
                    <img src={shoe} alt="" />
                </div>
            </div>
        </>

    )
}

export default Section