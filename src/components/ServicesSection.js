import React from 'react'
//Import Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'

//Styles
import { About, Description } from '../styles'
import styled from 'styled-components'
import { scrollReveal } from '../animation'
import { useScroll } from './useScroll'

const ServicesSection = () => {
    const [element, controls] = useScroll()
    return (
        <Services
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <Description>
                <h2>
                    Why you should <span>hire</span> me.
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>
                            I'm very efficient with my work and I get the job
                            done.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>
                            I've experience with working in a team environment.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm} />
                            <h3>Experienced</h3>
                        </div>
                        <p>
                            I've been working web development for over an year
                            now.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>I'm flexible with my salary.</p>
                    </Card>
                </Cards>
            </Description>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
    @media (max-width: 530px) {
        margin-left: 13%;
    }
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection
