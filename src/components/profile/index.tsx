import { ProfileDiv } from './style'
import IMG from '../../assets/profile.jpeg'
import { useState } from 'react'
import Cards from '../Cards'

export default function Profile () {

  return (
    <>
    <ProfileDiv>
      <div className="img">
        <picture>
          <img src={IMG} alt="homem de barba na foto do perfil" />
        </picture>
      </div>
      
      <h2>Alexandre Medina</h2>
      <p>Front-end Developer</p>
    </ProfileDiv>
    </>
    
  )
}