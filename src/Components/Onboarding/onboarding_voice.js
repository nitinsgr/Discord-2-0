import React from 'react'
import styled from 'styled-components'
import illustration from '../../Images/illustration3.png'

const MainWrapper = styled.div`
height: 90vh;
display: flex;
justify-content: space-evenly;
flex-direction: row;
background-color: #f6f6f6;
padding: 30px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    padding: 0;
    height: 80vh;
}

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


`

const LeftWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: flex;
    flex-direction: column;
  
    transform: translateX(0px);
    padding-left: 0px;
    transform: translateX(-20px);
}

@media screen and (max-width: 768px){
    transform: translateX(0px);
    width: 80%;
}
`

const RightWrapper = styled.div`
transform: translateX(-100px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: translateY(50px);
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: none;
    
    
}
@media screen and (max-width: 768px){
  transform: translateX(0px);

}
`

const LeftHeader = styled.h1`
font-size: 48px;
font-family: 'DM Sans', sans-serif;
font-weight: 700;
padding-top: 100px;
line-height: 70px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 32px;
    line-height: 50px;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    
}

@media screen and (max-width: 768px){
    font-size: 28px;
    line-height: 40px;
    justify-content: left;
    align-items: left;
    
}
`

const LeftContent = styled.p`
width: 50%;
justify-content: left;
align-items: left;
text-align: left;
font-size:20px;
font-weight: 400;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
 font-size: 15px;
 width: 100%;

    
}

@media screen and (max-width: 768px){
    font-size: 18px;
    width: 100%;
}

`

const Image = styled.img`
width: 100%;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: none;
    
}

@media screen and (max-width: 768px){
    width: 80%;
   
}
`


const Onboarding_voice = () => {
    return (
        <MainWrapper className="justify-items-center pb-20">
        
        <LeftWrapper className=" flex flex-col pb-10 pt-0 pl-20 ">
            <LeftHeader>
                Where hanging  out is easy
            </LeftHeader>
            <LeftContent className="pt-5">
            Grab a seat in a voice channel when you’re free. 
            Friends in your server can see you’re around and instantly pop in to talk without having to call.
            </LeftContent>
        </LeftWrapper>

        <RightWrapper className="">
            <Image src={illustration}/>
        </RightWrapper>
        

      </MainWrapper>
    )
}

export default Onboarding_voice
