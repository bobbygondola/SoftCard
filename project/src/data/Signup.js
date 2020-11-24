import React from 'react'
import HeroSection from '../components/HeroSection'
import {homeObjThree} from './Data'

function Signup() {
    return (
        <>
            <HeroSection {...homeObjThree} />
        </>
    )
}

export default Signup