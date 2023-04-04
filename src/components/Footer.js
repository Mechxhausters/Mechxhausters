import React from 'react'
import logo from '../images/mechx.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer id="foot">
            <div id='footlogo'>
                <img src={logo} style={{ "width": "25vw" }} alt="logo.png" />
                <div id='footicons'>
                    <a href="https://youtube.com/@teammechxhausters" target='blank'>
                        <img alt="Youtube" style={{"width":"3vw"}}  src="https://static.wixstatic.com/media/11062b_c67939a99eaf442d95d3f851857ceedf~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c67939a99eaf442d95d3f851857ceedf~mv2.png" />
                    </a>
                    <a href="https://twitter.com/MechXhausters?t=c4JVjxDCrJ4ECdLqFsPTmg&s=08" target='blank'>
                        <img alt="Twitter" style={{"width":"3vw"}}  src="https://static.wixstatic.com/media/11062b_2533d1d4c31245408717d17b946bc8d8~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2533d1d4c31245408717d17b946bc8d8~mv2.png" />
                    </a>
                    <a href="https://instagram.com/mechxhausters.nitw?igshid=YmMyMTA2M2Y=" target='blank'>
                        <img alt="instagram" style={{"width":"3vw"}} src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png" />
                    </a>
                    <a href="https://www.linkedin.com/company/mechxhausters-racing-fsae/" target='blank'>
                        <img alt="linkedin" style={{"width":"3vw"}} src="https://static.wixstatic.com/media/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png" />
                    </a>
                </div>
            </div>
            <div id='address'>
                <h2><span>ADDRESS:</span> </h2>
                <br />
                <h4><span>Innovation Garage</span> </h4>
                <h4><span>National Institute of Technology Warangal</span> </h4>
                <h4><span>Hanmakonda,Telangana</span> </h4>
                <br />
                <h2><span>Contact Us:</span> </h2>
                <br />
                <h4><span>Captain: Trivikram</span> </h4>
                <h4><span>Email:fsae_mechx@nitw.ac.in</span> </h4>
                <h4><span>Phone:</span> </h4>
            </div>
            <div className="mapouter">
                    <iframe title='gmaps' style={{ "borderRadius": "20px" }} id="gmap_canvas" src="https://maps.google.com/maps?q=NIT warangal innovation garage&t=&z=12&ie=UTF8&iwloc=&output=embed">
                    </iframe>
            </div>
        </footer>
        </>
    )
}

export default Footer