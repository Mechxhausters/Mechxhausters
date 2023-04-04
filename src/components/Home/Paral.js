import React from 'react'

const Paral = () => {
  const st = {
    "position":"absolute",
      "height":"100%",
      "width":"100vw",
      "backgroundImage":'url(' + process.env.PUBLIC_URL+ '/IMG_5505.jpg)',
      "backgroundSize": "cover",
      "backgroundAttachment": "fixed",
      "backgroundPosition": "center 2vh",
      "backgroundRepeat": " no-repeat",
      "filter": "saturate(6) brightness(0.9)",
      "overflow-y":"auto",
  }
  
  return (
    <>
      <div className="total" style={{"position":"relative","height":"85vh"}}>
        <div className="para" style={st}></div>
        <div className="ig" style={{"position":"absolute","height":"100%"}}>
        <iframe title='ig' style={{"height":"90%","margin":" 30px","borderRadius":"20px"}} src="https://www.instagram.com/p/ChzAsylOEer/embed" frameborder="0"></iframe>
        </div>
      </div>
    </>
  )
}

export default Paral