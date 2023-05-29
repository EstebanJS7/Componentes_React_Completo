import React from 'react'
import "./Banner.css"
import ButtonForms from './ButtonForms'

function Banner() {
  return (
    <div className='banner'>
        <div className="titlebanner">
            Work less,<br/>
                achieve more.
        
        </div>
        <div className="textbanner">
            <p>Our technology is the key to unlocking higher sales and<br/>
            better service. We stand behind it whith a satisfaction <br/>
            guarantee-try it risk-free and see the results for yourself!</p>
            <ButtonForms transparent={false} background="#9FE2BF" textColor="white" showSymbol={false} border={false} disabled={false}  height='35px'>
                    GET STARTED
            </ButtonForms>
        </div>
    </div>
  )
}

export default Banner