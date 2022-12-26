import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0%{
    color:#A0D468;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#FFCE54;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
`

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
`
export const HeroTitle = styled.h2`
  position: relative;
  font-size: 64px;
  font-weight: 600;
  text-align: center;

  span {
    display: block;
  }
`
export const HeroSubTitle = styled.p`
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  max-width: 800px;
  color: #bbbac4;
`

export const AnimationText = styled.div`
  animation: ${rotate} 5s linear infinite;
  display: initial;
`
export const PointerLight = styled.div`
  width: 46px;
  height: 50px;
  background-image: url('/assets/pointer_light.gif');
  background-size: contain;
  border: none;
  position: absolute;
  bottom: 43%;
  right: 0%;
`
