import styled from 'styled-components'

export const Windows = styled.div`
  position: relative;
  width: 100%;
  margin: 100px 0;

  video {
    height: 322px;
    object-fit: cover;
    object-position: top;
    width: 100%;
    border-radius: 1px;
    @media screen and (max-width: 500px) {
      height: 350px;
    }
  }
`

export const BigTitle = styled.h3`
  text-align: center;
  color: black;
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 50px;
`

export const WindowStyles = styled.div`
  position: relative;
  width: 700px;
  height: 365px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background-color: #e9e7f5;
  box-shadow: rgb(113 116 152 / 27%) 0px 18px 31px,
    rgb(113 116 152 / 7%) 0px 8px 16.2244px,
    rgb(113 116 152 / 5%) 0px 8px 8.46625px;
  @media screen and (max-width: 720px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 400px;
  }
`
export const WrapperCircle = styled.div`
  position: absolute;
  top: 5px;
  left: 2%;
`
export const Header = styled.div`
  position: relative;
  text-align: center;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  background: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
`

export const Title = styled.span`
  font-size: 12px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  line-height: 24px;
  width: 133px;
  height: 24px;
  background-color: rgb(247, 249, 252);
  color: rgb(83, 84, 121);
`

export const BackImg = styled.img`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: -1;
`
