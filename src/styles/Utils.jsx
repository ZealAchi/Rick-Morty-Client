import styled, { keyframes }  from 'styled-components'
export  const Container=styled.div`
//padding-top:15px;

`
export const NbBase=styled.div`
 border-bottom: 2px solid #29894e;
      background: #2f9e59;
      position: relative;
      color: #FFF;
      z-index: 1;
`
export const NbWrapper=styled.div`
  align-items: center;
      max-width: 1040px;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;
      height: 50px;
`


export const NbBrand=styled.a` 
  
      font-family: Josefin Sans;
      text-decoration: none;
      align-items: center;
      font-weight: 400;
      font-size: 20px;
      display: flex;
      color: #FFF;
      & > div {
        margin-left: 5px;
        height: 15px;
      }
    
      `

export const NbSpacer=styled.div` 
      flex: 1;

    `
export const NbDesktop=styled.div` 
 align-items: center;
      display: none;
  
      @media (min-width: 600px) {
        display: flex;
      }
  `

export const Link=styled.a` 
   text-transform: uppercase;
      font-family: Josefin Sans;
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      color: inherit;
      height: 10px;
 
  `
  export const Separator=styled.div` 
  border-left: 1px solid rgba(255, 255, 255, 0.2);
 margin: 0 15px;
 height: 30px;
`
export const NbMobilMenu=styled.div` 
 box-shadow: 0 0 30px rgba(0,0,0,0.5);
      border-bottom: 2px solid #29894e;
      background: #2f9e59;
  
      transform: {transform};
      position: absolute;
      transition: 320ms;
      padding: 0 20px;
      top: 52px;
      right: 0;
      left: 0;
`
const transform = keyframes`
/*  if (menu) {
        "translateY(0)"
      } else {
        "translateY(-120%)"
      }*/
      ${props => console.log(props)
      }
`;

export const NbMobileLink=styled.div` 
  text-decoration: none;
      font-size: 18px;
      padding: 15px 0;
      display: block;
      color: white;
  
      & + * {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }
`
export const NbMobilDiv=styled.div` 
 display: none;
      height: 24px;
  
      @media (max-width: 599px) {
        display: block;
      }
  
      & svg {
        fill: currentColor;
      }
    `
export const Limiter=styled.div` 
  width: 100%;
  margin: 0 auto;
`
export const ContainerLogin=styled.div`
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #2f9e59;
    background: -webkit-linear-gradient(-135deg, #2f9e59, #4158d0);
    background: -o-linear-gradient(-135deg, #2f9e59, #4158d0);
    background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
    background: linear-gradient(-135deg, #2f9e59, #4158d0);
    `
    export const WrapLogin=styled.div`
      @media (max-width: 700px) {
    padding: 100px 15px 33px 15px;
      }
      @media (max-width: 768px) {
    padding:100px 80px 33px 80px;
      }
            @media (max-width: 992px) {
    padding:100px 80px 33px 80px;
      }
  

    padding: 100px 15px 33px 15px;
    width: 960px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 177px 130px 33px 95px;`



export const LoginImage=styled.div`
    will-change: transform;
    transform: perspective(300px) rotateX(0deg) rotateY(0deg);
    @media (max-width: 768px) {


    display: none;
}

@media (max-width: 992px) {

    width: 35%;
}
`
export const From=styled.div`
`

