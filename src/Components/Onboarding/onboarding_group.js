import React from 'react'
import styled from 'styled-components'
import illustation from '../../Images/illustration2.png'


const MainWrapper = styled.div`
height: 80vh;
display: flex;
 flex-direction: row;
 justify-content: space-between;

@media screen and (max-width: 820px) and (min-width: 640px){
 display: flex;
 flex-direction: column;
 justify-content: left;
 align-items: left;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    padding-top: -40px;

}

@media screen and (max-width: 768px){
    height: 100vh;
    
}
`

const LeftWrapper = styled.div`
width: 60%;
align-items: center;
justify-content: center;
transform: translate(300px, 100px);
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center
    
}
`

const RightWrapper = styled.div`
display: flex;
flex-direction: column;
width: 40%;

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`

const SectionHeader = styled.h1`
font-size: 50px;
font-family: 'DM Sans', sans-serif;
font-weight: 800;
line-height: 65px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 32px;
    line-height: 30px;
    width: 80%;

}

@media screen and (max-width: 768px){
   font-size: 25px;
   line-height: 40px;
    
}
`

const SectionContent = styled.p`
width: 50%;
padding-top: 20px;
font-size: 18px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 15px;
    width: 50%;
    padding: 30px;
    
}
@media screen and (max-width: 768px){
    font-size: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
`


const Image = styled.img`
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: none;
    
}
`

const Onboarding_group = () => {
    return (
       <MainWrapper className="">
           <LeftWrapper>
               <Image src={illustation}/>
           </LeftWrapper>
           <RightWrapper className="pt-32">
                <SectionHeader>
                    Create an invite-only place where you belong
                    
                </SectionHeader>
                <SectionContent>
                Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                </SectionContent>
            </RightWrapper>
       </MainWrapper>
    )
}

export default Onboarding_group
