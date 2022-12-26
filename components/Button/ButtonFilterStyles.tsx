import styled from 'styled-components'

type ButtonSelectedProps = {
  selectedButton: string
}
type ButtonProps = {
  isSelected: boolean
}

export const Buttons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin: 10px 0;
  background: #ffffff;
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  width: 600px;
  height: 45px;
  border-radius: 40px;
  margin: 0 auto;
  overflow: hidden;
  margin: 45px auto;
`

export const Button = styled.button<ButtonProps>`
  width: 150px;
  height: 35px;
  border-radius: 20px;
  color: ${({ isSelected }) =>
    isSelected ? 'rgb(14, 11, 61)' : 'rgb(108, 111, 147)'};
  font-size: 15px;
  cursor: pointer;
  z-index: 3;
`

export const ButtonSelected = styled.div<ButtonSelectedProps>`
  z-index: 2;
  position: absolute;
  width: 150px;
  height: 35px;
  border-radius: 40px;
  top: 5px;
  left: ${({ selectedButton }) => {
    switch (selectedButton) {
      case 'All':
        return '40px'
      case 'Personels':
        return '225px'
      case 'Formations':
        return '410px'
      default:
        break
    }
  }};
  box-shadow: rgb(113 116 152 / 10%) 0px 18px 31px,
    rgb(113 116 152 / 7%) 0px 8px 16.2244px,
    rgb(113 116 152 / 5%) 0px 8px 8.46625px;
  background: #e8eaf6;
  transition: left 200ms cubic-bezier(0.6, 0.6, 0, 1) 0s,
    all 0.5s cubic-bezier(0.6, 0.6, 0, 1) 0s;
`
