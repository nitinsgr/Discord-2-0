import React from 'react'
import styled from 'styled-components'
import illustation from '../../Images/illustration4.png'


const MainWrapper = styled.div`
height: 80vh;
display: flex;
 flex-direction: row;
 justify-content: space-between;

@media screen and (max-width: 820px) and (min-width: 640px){
 display: flex;
 flex-direction: column;
}
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    display: flex;
    flex-direction: column;
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
    transform: translate(0, 0);
    display: none;
}
`

const RightWrapper = styled.div`
display: flex;
flex-direction: column;
width: 40%;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
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
    font-size: 30px;
    line-height: 40px;
    width: 80%;
}
`

const SectionContent = styled.p`
width: 50%;
padding-top: 20px;
font-size: 20px;
font-weight: 400;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 18px;
    width: 80%;  
    text-align: left;
    
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

@media screen and (max-width: 768px){
    
}
`

const Onboarding_moderation = () => {
    return (
       <MainWrapper className="pt-20">
           <LeftWrapper>
               <Image src={illustation}/>
           </LeftWrapper>
           <RightWrapper className="pt-20">
                <SectionHeader>
                    From few to a fandom
                </SectionHeader>
                <SectionContent>
                Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                </SectionContent>
            </RightWrapper>
       </MainWrapper>
    )
}

export default Onboarding_moderation