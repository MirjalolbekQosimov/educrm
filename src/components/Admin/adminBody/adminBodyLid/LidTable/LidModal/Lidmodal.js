import React, { useState } from 'react';
import "./lidmodal.css"


function Lidmodal({ isOpen, onClose, children }) {


    const modalStyle = {
        opacity: isOpen ? '1' : '0',
        // transition: '0.5s all',
        // position: 'fixed',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // padding: '20px',
        // backgroundColor: '#fff',
        // boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        zIndex: isOpen ? '1000' : '0',
        // borderRadius: '10px',
    };
    return (
        <div>
            <div style={modalStyle} className='modalBoxLid'>
                {children}
                <button className='closeModal' onClick={onClose}>Close</button>
                
            </div>
        </div>
    )
}

export default Lidmodal