import styled from 'styled-components'

export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  h1 {
    font-weight: 700;
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
`
