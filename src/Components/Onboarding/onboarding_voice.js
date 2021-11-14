import React from 'react'
import styled from 'styled-components'
import illustration from '../../Images/illustration3.png'

const MainWrapper = styled.div`
height: 90vh;
background-color: #f6f6f6;
padding: 30px;
`

const LeftWrapper = styled.div`
transform: translateX(320px);
justify-content: center;
`

const RightWrapper = styled.div`
justify-content:center;
align-items: center;
transform: translateX(-250px);
`

const LeftHeader = styled.div`
font-size: 48px;
font-family: 'DM Sans', sans-serif;
font-weight: 700;
padding-top: 100px;
line-height: 70px;
`

const LeftContent = styled.p`
width: 32%;
justify-content: left;
align-items: left;
text-align: left;
font-size:20px;
font-weight: 400;
`

const Image = styled.img`
justify-content: center;
width: 800px;
`


const Onboarding_voice = () => {
    return (
        <MainWrapper className="flex flex-row justify-items-center">
        
        <LeftWrapper className=" flex flex-col pb-10 pt-0 pl-20">
            <LeftHeader>
                Where hanging <br/>
                out is easy
            </LeftHeader>
            <LeftContent className="pt-5">
            Grab a seat in a voice channel when you’re free. 
            Friends in your server can see you’re around and instantly pop in to talk without having to call.
            </LeftContent>
        </LeftWrapper>

        <RightWrapper className="justify-items-center flex flex-col align-middle">
            <Image src={illustration}/>
        </RightWrapper>
        

      </MainWrapper>
    )
}

export default Onboarding_voice
