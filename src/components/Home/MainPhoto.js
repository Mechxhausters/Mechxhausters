import React from 'react'
import './MainPhoto.css'
import img1 from '../../images/mechx.png'

const MainPhoto = () => {
    return (
        <>
            <div className="main">
                <div className='imgmain'>
                </div>
                <div className="centertext">
                    <div className="imgleft">
                    <img className='imglef' src={img1} width={200} alt="" />
                    </div>
                    <div className="verline"></div>
                    <div className="txt"><div className='txtin'> DESIGN <br /> BUILD <br /> RACE</div></div>
                </div>
            </div>
        </>
    )
}

export default MainPhoto