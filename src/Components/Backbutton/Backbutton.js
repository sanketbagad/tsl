import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backbutton = () => {
    const history = useNavigate()

  return (
    <a href="#" onClick={() => history(-1)} style={{display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none'}}>
    <div style={{cursor: 'pointer', color: 'blue', gap: '1rem'}}>
        <i className="fas fa-arrow-left"></i>
    </div>
    <p style={{fontStyle: 'normal', fontWeight:400, fontSize: '14px', lineHeight: '19px'}}>Back</p>
    </a>
  )
}

export default Backbutton