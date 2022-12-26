import React from 'react'
import {
  HeroStyles,
  HeroSubTitle,
  HeroTitle,
  PointerLight,
  AnimationText,
} from './HeroStyles'

const Hero = () => {
  return (
    <HeroStyles>
      <HeroTitle>
        <span>Développeur</span> JavaScript <AnimationText>React</AnimationText>
        <PointerLight />
      </HeroTitle>
      <HeroSubTitle>
        Vous retrouverez ici mes différents projets de formations et personnels.
      </HeroSubTitle>
    </HeroStyles>
  )
}

export default Hero
