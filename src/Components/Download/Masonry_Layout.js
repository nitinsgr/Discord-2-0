import React from 'react'
import styled from 'styled-components'
import Illustration from '../../Images/CardIos.png'
import Android from '../../Images/Illustration7.png'
import Linux from '../../Images/illustration8.png'
import Mac from '../../Images/illustration10.png'

const MainWrapper = styled.div`
height: 100vh;
`

const CardIos = styled.div`
margin-top: 20px;
margin-left: 20px;
height: 600px;
width: 400px;
border-radius: 20px;
background-color: #F9F9F9;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const CardIosHeading = styled.h2`
font-size: 24px;
font-weight: 800;

`

const CardIosButton = styled.button`
padding: 12px 16px;
color: white;
background-color: black;
border-radius: 50px;
cursor: pointer;
`

const CardIosImage = styled.img`
width: 50%;
margin-top: 40px;
`

const CardAndroid = styled.div`
margin-top: 20px;
margin-left: 20px;
height: 600px;
width: 500px;
border-radius: 20px;
background-color: #F9F9F9;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const CardLinux = styled.div`
margin-top: 20px;
margin-left: 20px;
height: 500px;
width: 500px;
border-radius: 20px;
background-color: #F9F9F9;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateX(100px);
`

const CardMac = styled.div`
margin-left: 20px;
height: 500px;
width: 500px;
border-radius: 20px;
background-color: #F9F9F9;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(50px);
`

const CardAndroidImage = styled.img`
width: 40%;
padding-top: 30px;
`
const CardLinuxImage = styled.img`
width: 70%;
padding-top: 30px;
transform: translateY(40px);
`

const CardAndroidHeading = styled.h2`
font-size: 24px;
font-weight: 800;

`

const CardAndroidButton = styled.button`
padding: 12px 16px;
color: white;
background-color: black;
border-radius: 50px;
cursor: pointer;
`

const CardMacHeading = styled.h2`
font-size: 24px;
font-weight: 800;
`

const CardMacButton = styled.button`
padding: 12px 16px;
color: white;
background-color: black;
border-radius: 50px;
cursor: pointer;
`

const CardMacImage = styled.img``

const LinksWrapper = styled.div`
height: 40vh;
background-color: #5865F2;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

const LinkHeading = styled.h1`
font-size: 52px;
color: white;
font-weight: 800;


`

const LinkContent = styled.p`
font-size: 24px;
color: white;
`




const Masonry_Layout = () => {
    return (
        <MainWrapper>
                <div className="grid grid-cols-6 gap-4 align-middle">
            <div className="col-start-3 col-span-4 ...">
                  <CardIos>
                <CardIosHeading>
                    IOS
                </CardIosHeading>
                <CardIosButton>
                    Download
                </CardIosButton>
                <CardIosImage src={Illustration}/>
              </CardIos>
            </div>
            <div className="col-start-2 col-end-3 ...">
            <CardAndroid>
                <CardIosHeading>
                    Android
                </CardIosHeading>
                <CardIosButton>
                    Download
                </CardIosButton>
                

                <CardAndroidImage src={Android} />  
              
              </CardAndroid>
            </div>
            <div className="col-end-6 col-span-2 ...">
                <CardLinux>
                    <CardAndroidHeading>
                        Linux
                    </CardAndroidHeading>
                    <CardAndroidButton>
                        Download
                    </CardAndroidButton>
                    <CardLinuxImage src={Linux}/>
                </CardLinux>
            </div>
            <div className="col-start-4 pb-40  col-end-3 col-span-4 ...">
                <CardMac>
                    <CardMacHeading>
                        Mac os
                    </CardMacHeading>
                    <CardMacButton>
                        Download
                    </CardMacButton>
                    <CardMacImage src={Mac}/>
                </CardMac>
            </div>
            </div>

            <LinksWrapper>
            
              <LinkHeading>
               Feeling Experimental?
              </LinkHeading>

              <LinkContent>
              Try our Public Test Build and test new features before they launch
              </LinkContent>
            
            </LinksWrapper>

            
        </MainWrapper>
    )
}

export default Masonry_Layout
