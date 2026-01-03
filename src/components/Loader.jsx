import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className='font-normal text-xl text-center text-white'>{Math.round(progress)}% Loaded</p>
    </Html>
  )
}

export default Loader