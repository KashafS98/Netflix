import React from 'react'
import { Container, Overlay } from './SignIn.style.js'
import img from '../../assets/sign-in-bg.jpg'
import SignInCard from './components/SignInCard.js'
import logo from '../../assets/logo.png'
import Footer from './components/Footer.js'

export default function SignIn() {
    return (
        <Container background={img}>
            <Overlay>
                <img src={logo} />
                <SignInCard />
                <Footer/>
            </Overlay>
        </Container>
    )
}
