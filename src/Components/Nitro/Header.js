import React from 'react'
import styled from 'styled-components'
import Nitro from '../../Images/Nitro.png'

const Container = styled.div`

`

const MainWrapper = styled.div`
display:flex;
height: 80vh;
background: linear-gradient(45deg, #B983FF, #5865F2);
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 100px;
`
const ContentWrapper = styled.p`
width: 50%;
font-size: 20px;
color : white;
padding-top: 20px;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
`

const YearButton = styled.button`
font-size: 20px;
background-color: black;
color : white;
padding: 15px 30px;
border-radius: 50px;

`

const MonthButton = styled.button`
font-size: 20px;
color: white;
background-color: black;
border-radius: 50px;
padding: 15px 30px;
`

const ImageContainer = styled.img`
transform: translateY(-50px);
`

const PerkContainer = styled.div`
display: flex;
height: 120vh;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;


`

const PerkHeading = styled.h1`
font-family: 'Paytone One', sans-serif;
font-weight: 900;
font-size: 40px;
width: 60%;
text-align: center;
`

const EmojiContainer = styled.div`
font-size: 15px;
background: linear-gradient(#2FDD92, #B1E693);
border-radius: 20px ;
width:350px;
height: 320px;

display: flex;
padding: 20px;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
font-weight: 800;
`

const GridContainer = styled.div``


const PersonalProfileContainer = styled.div`
font-size: 15px;
color: black;
background: linear-gradient(#5865F2, #5C7AEA);
font-weight: 800;
border-radius: 20px ;
padding: 20px;
width:350px;
height: 320px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;

`

const SupportContainer = styled.div`
font-size: 15px;
color: black;
background: linear-gradient(#3E00FF, #5C7AEA);
border-radius: 20px ;
width:350px;
height: 320px;

display: flex;
font-weight: 800;
padding: 20px;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;

`

const RepContainer = styled.div`
font-size: 15px;
padding: 20px;
color: black;
background: linear-gradient(#B983FF, #94B3FD);
border-radius: 20px ;
width:350px;
height: 320px;

font-weight: 800;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`

const UploadContainer = styled.div`
font-size: 15px;
color: black;
background: linear-gradient(#FFD371, #FF4848);
border-radius: 20px ;
width:350px;
font-weight: 800;
height: 320px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`

const VideoContainer = styled.div`
font-size: 15px;
color: black;
border-radius: 20px ;
font-weight: 800;
background: linear-gradient(#ED50F1, #FDB9FC);
width:350px;
height: 320px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`

const NitroHeader = () => {
    return (
        <Container>
          <MainWrapper>
             <ImageContainer src={Nitro}/>
             <ContentWrapper>
             Get an enhanced Discord experience for one low monthly cost. 
             Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.
             </ContentWrapper>
             <ButtonWrapper className="gap-5 pt-12">
                <YearButton>
                    $99.99 per year
                </YearButton>
                <MonthButton>
                    $9.99 per month
                </MonthButton>
             </ButtonWrapper>
          </MainWrapper>

          <PerkContainer>
              <PerkHeading>
              DISCORD NITRO ENHANCES YOUR ALL-IN-ONE DISCORD VOICE, VIDEO, AND TEXT CHAT.
              </PerkHeading>

              <GridContainer>
              <div class="grid grid-cols-3 gap-5 pt-10">
                <div>
                    <EmojiContainer>
                       <p>Better Emoji</p>
                       <p>Collect a make your own custom and animated emojis</p>
                    </EmojiContainer>
                </div>
                <div>
                    <PersonalProfileContainer>
                        <p>Personal Profile</p>
                        <p>Use an animated avatar and claim a custom tag</p>
                    </PersonalProfileContainer>
                </div>
                <div>
                    <SupportContainer>
                        <p>Support a server</p>
                        <p>Get 2 Server Boost and 30% off extra boosts</p>
                    </SupportContainer>
                </div>
                <div>
                    <RepContainer>
                        <p>Rep Your Support</p>
                        <p>Profile badge how long you've supported Discord</p>
                    </RepContainer>
                </div>
                <div>
                    <UploadContainer>
                        <p>Bigger Uploads</p>
                        <p>100Mb upload size for high-quality file sharing</p>
                    </UploadContainer>
                </div>
                <div>
                    <VideoContainer>
                        <p>HD Video</p>
                        <p>Hi-res video, screenshare, and Go Live streaming.</p>
                    </VideoContainer>
                </div>
                </div>
              </GridContainer>
          </PerkContainer>
        </Container>
      
    )
}

export default NitroHeader
