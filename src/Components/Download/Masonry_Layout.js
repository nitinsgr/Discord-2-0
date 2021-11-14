import React from 'react'
import styled from 'styled-components'
import Illustration from '../../Images/CardIos.png'

const MainWrapper = styled.div`
height: 80vh;
display: flex;
flex-direction: row;
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
width: 70%;
margin-top: 40px;
`

const Masonry_Layout = () => {
    return (
        <MainWrapper>
            <CardIos>
                <CardIosHeading>
                    IOS
                </CardIosHeading>
                <CardIosButton>
                    Download
                </CardIosButton>
                <CardIosImage src={Illustration}/>
              </CardIos>
        </MainWrapper>
    )
}

export default Masonry_Layout
