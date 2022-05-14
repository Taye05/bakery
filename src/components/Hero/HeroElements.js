import styled from "styled-components";
import Bakery from "../../Images/bakery.jpg"

export const HeroContainer = styled.div `
  background: url(${Bakery});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
`

export const HeroContent = styled.div `
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 13000px) / 2);
`

export const HeroItems = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center: 
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px){
      width: 100%;
  }
` 

export const HeroH1 = styled.h1 `
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px 7px 5px #FC86AA;
  letter-spacing: 3px;
`

export const HeroP = styled.p `
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`

export const HeroBtn = styled.button `
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #000133;
  color: #fff;
  transition0.2s ease-out;

  &:hover {
      background: #FC86AA;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #fff;

  }
`