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
}
`

const LeftWrapper = styled.div`
width: 60%;
align-items: center;
justify-content: center;
transform: translate(300px, 100px);
`

const RightWrapper = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`

const SectionHeader = styled.h1`
font-size: 50px;
font-family: 'DM Sans', sans-serif;
font-weight: 800;
line-height: 65px;
`

const SectionContent = styled.p`
width: 50%;
padding-top: 20px;
font-size: 18px;
`

const Image = styled.img``

const Onboarding_group = () => {
    return (
       <MainWrapper className="">
           <LeftWrapper>
               <Image src={illustation}/>
           </LeftWrapper>
           <RightWrapper className="pt-32">
                <SectionHeader>
                    Create an <br/>
                    invite-only <br/>
                    place where you <br/>
                    belong
                    
                </SectionHeader>
                <SectionContent>
                Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                </SectionContent>
            </RightWrapper>
       </MainWrapper>
    )
}

export default Onboarding_group
