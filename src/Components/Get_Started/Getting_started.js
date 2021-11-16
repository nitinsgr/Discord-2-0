import React from 'react'
import styled from 'styled-components'
import illustration from '../../Images/illustration5.png'

const Container = styled.div`
height: 110vh;
background-color: #f6f6f6;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    justify-content: center;
    align-items: center;    
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 768px){
  height: 150vh;
}

`

const Heading = styled.h1`

padding-top: 100px;
font-family: 'Paytone One', sans-serif;
font-size: 58px;
font-weight: 900;
text-align: center;

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 28px;
    padding-top: 10px;
}

`
const SubHeading = styled.p`
font-size: 20px;
text-align: center;
width: 60%;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 15px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    padding-top: 20px;
}

@media screen and (max-width: 768px){
  font-size: 20px;
  text-align: left;
}
`

const Image = styled.img`
padding-top: 40px;
`

const JourneyHeader = styled.div`
padding-top: 50px;
padding-bottom: 50px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    padding-top: 30px;
}
`

const JourneyHeading = styled.h1`
font-size: 32px;
font-weight: 800;
font-family: 'DM Sans', sans-serif;

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 24px;
    text-align: center;
}

@media screen and (max-width: 768px){
  font-size: 18px;
}
`

const WindowButton = styled.button`
margin-top: 20px;
font-size: 20px;
border-radius: 50px;
background-color: #295DE7;
color: white;
padding: 12px 32px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) 
  {
    font-size: 15px;
    padding: 8px 24px;
}
`

const Getting_started = () => {
    return (
        <Container>
            <Heading>
                RELIABLE TECH FOR STAYING CLOSE
            </Heading>
            <SubHeading>
            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
            </SubHeading>
            
            <Image src={illustration}/>

            <JourneyHeader>
                <JourneyHeading>
                    Ready to start your journey?
                </JourneyHeading>
                <WindowButton>
                    Download for Window
                </WindowButton>
            </JourneyHeader>

        </Container>
    )
}

export default Getting_started
