import React from 'react'
import './Track1.css'

const Track1 = () => {
  return (
    <>
        <div className='track' style={{"height":"40vh","backgroundColor":"#202124"}}>
            <div className="img" style={{"backgroundImage":process.env.PUBLIC_URL+'/tirebg.png'}}></div>
            <div className="text">
                <div className="mem mem1">24 MEMBERS</div>
                <div className="line"></div>
                <div className="mem mem2">6 DEPARTMENTS</div>
                <div className="line"></div>
                <div className="mem mem3">1 CAR</div>
            </div>
        </div>
    </>
    // 24+ members
    // 6 departments
    // 1 car
  )
}

export default Track1