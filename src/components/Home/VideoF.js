import React from 'react'
import './VideoF.css'
const VideoF = () => {
  return (
    <>
    <div className="total" style={{
        "height":"90vh",
        "display":"flex",
        "flexDirection":"column",
        "alignItems":"center",
        "backgroundPosition":"center",
        "background":"url("+process.env.PUBLIC_URL+'/bgvid.jpeg',
        "borderTop":"4px red solid"
        }}>
        <div className="para" style={{"height":"20vh","display":"flex","justifyContent":"center","alignItems":"center","padding":"0 15px","color":"white"}}>
            <h2>THE JOURNEY IS JUST AS IMPORTANT AS THE DESTINATION</h2>
            <h2> IT'S ABOUT THE PEOPLE YOU MEET, THE LESSONS YOU LEARN, AND THE EXPERIENCES YOU HAVE</h2>
        </div>
        <div className="vid" style={{"height":"70vh","display":"flex","justifyContent":"center","alignItems":"center"}}>
        <iframe style={{"height":"90%","width":"calc(1.77*0.9*70vh)","borderRadius":"20px","boxShadow":"0 0 23px red"}} src="https://www.youtube.com/embed/wam2JWJnDB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </>
  )
}

export default VideoF