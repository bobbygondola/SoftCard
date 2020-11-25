import React from 'react'
import HeroSection from '../components/HeroSection'
import Pricing from '../components/Pricing'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Products() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Products