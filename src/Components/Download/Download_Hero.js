import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: #23272a;
height: 60vh;
`

const ImageWrapper = styled.div``

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
transform: translateX(100px);
`

const ContentHeading = styled.h1`
font-size: 62px;
font-family: 'Paytone One', sans-serif;
font-weight: 900;
font-variant-position: left;
color: white;
font-stretch: 10px;
letter-spacing: 2px;
line-height: 80px;
`

const ContentSubHeadng = styled.p`
color: white;
padding-top: 20px;
width:  65%;
font-size: 20px;

`

const Button = styled.button`
margin-top: 20px;
padding: 16px 32px;
border-radius: 50px;
font-size: 20px;
color: white;
background-color: #5865F2;
`

const ButtonWrapper = styled.div`
margin-top: 20px;
`

const Download_Hero = () => {
    return (
        
        <MainWrapper>

            <ContentWrapper>
                <ContentHeading>
                    GET DISCORD <br/>
                    FOR ANY <br/>
                    DEVICE
                </ContentHeading>
                <ContentSubHeadng>
                An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.
                </ContentSubHeadng>
                <ButtonWrapper>
                <Button>
                    Download for Windows
                </Button>
                </ButtonWrapper>
               
            </ContentWrapper>
            


            <ImageWrapper>
                s

            </ImageWrapper>

          
        </MainWrapper>
      
    )
}

export default Download_Hero
