import React from 'react'
import ingressive from '../assets/ingressive.svg'
import zuri from '../assets/zurilogo.svg'


function Footer() {
  return (
    <footer>
        <div className="footer">
            <img src={zuri} alt="zuri logo" />
            <p >HNG Internship 9 Frontend Task</p>
            <img src={ingressive} alt="ingressive logo" />
            

        </div>
    </footer>
  )
}

export default Footer