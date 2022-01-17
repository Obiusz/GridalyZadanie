import React, { useState } from 'react'
import Click from './Click';

export default function App() {
  return (
    <div className='main'>
      <div onClick={Click} className='dark'></div>
    </div>
  )
}

