import React from 'react'
import styled from 'styled-components'
import Background from '../Images/background.png'
import illustation from '../Images/illustation.png'

const MainWrapper = styled.div`
background-color: #295DE7;
padding-bottom: 8px;
background-image: url(${Background});
justify-content: center;

&::after{
  background-image: url(${illustation});
  z-index: 1;
}

@media screen and (max-width: 820px) and (min-width: 640px){
  max-width: 100%;
}

`

const SecondWrapper = styled.div`
height: 60vh;

@media screen and (max-width:640px){
  background-color: #295DE7;
  height: 100vh;
};

@media screen and (max-width: 820px) and (min-width: 640px){
  height: 70vh;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    height: 100vh;
}
`

const ContentWrapper = styled.div`
padding-top: 120px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const MainHeader = styled.h1`
font-family: 'Paytone One', sans-serif;
font-size: 70px;
align-items: center;
text-align: center;
font-weight: 800;
color: white;

z-index: 1;

@media screen and (max-width: 820px) and (min-width: 640px){
  font-size: 50px;
}
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 50px;
}
`

const TextWrapper = styled.p`
justify-content: center;
margin-top: 40px;
width: 45%;
text-align: center;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
@media screen and (max-width: 820px) and (min-width: 640px){
  font-size: 18px;
  width: 80%;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 15px;
    text-align: left;
}

`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
justify-content: space-between;
margin: 20px;
align-items: center;

@media screen and (max-width: 640px){
  display: flex;
  flex-direction: column;

}



`

const WindowsButton = styled.button`
border-radius: 50px;
background-color: white;
color: darkblue;
padding: 15px 20px;
font-size: 20px;
display: flex;
flex-direction: row;

@media screen and (max-width: 640px){
  font-size: 15px;

}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 15px;
    padding: 8px 16px;
}


@media screen and (max-width: 820px) and (min-width: 640px){
  font-size: 15px;
}


&:hover{
  box-shadow: 1px 2px 2px 2px;
  transition: 1ms all ease-in;
}

@media screen and (max-width: 768px){
  font-size: 15px;
  padding: 8px 16px;
}

`

const BrowserButton = styled.button`
border-radius: 50px;
background-color: black;
color: white;
padding: 15px 20px;
font-size: 20px;

@media screen and (max-width: 640px){
  font-size: 15px;

}
@media screen and (max-width: 820px) and (min-width: 640px){
  font-size: 15px;
}

&:hover{
  box-shadow: 1px 1px 10px 1px gray;
  transition: 1ms all ease-in;
}
`


export default function Hero() {
  return (
    <MainWrapper className="md:pb-0 ">
      <SecondWrapper>
        <ContentWrapper>
          <MainHeader>IMAGINE A PLACE...</MainHeader>
          <TextWrapper>...where you can belong to a school club, a gaming group, or a worldwide art community. 
            Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</TextWrapper>   
            <ButtonWrapper className="flex lg:flex-row sm:flex-col xs:flex-col pt-10">
               <WindowsButton className="">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  pr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                 Download for windows
               </WindowsButton>
               <BrowserButton className=""> 
                  Open Discord in your Browser
               </BrowserButton>
            </ButtonWrapper>
        </ContentWrapper>
      </SecondWrapper>
    </MainWrapper>
  )
}
