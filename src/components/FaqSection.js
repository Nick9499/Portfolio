import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'

const FaqSection = () => {
    const [element, controls] = useScroll()
    return (
        <Faq
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="What Languages do I know?">
                    <div className="answer">
                        <p>
                            Having knowledge C,C++, Ruby, python and javaScript.
                            I am most prficient in javaScript.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What frameworks I've previously worked with?">
                    <div className="answer">
                        <p>
                            Having worked experience in react redux and used
                            mongo along with them in few project in css and ui
                            libraries also worked with bootstrap, material UI
                        </p>
                    </div>
                </Toggle>
                <Toggle title="How much backend knowledge do I have?">
                    <div className="answer">
                        <p>
                            Worked on backend in few projects usually using node
                            and express with mongo and with focused on full
                            stack dev on cloud and more
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What are my previous experiences?">
                    <div className="answer">
                        <p>
                            Worked on freelencing projects for more than 3 month
                            and experienced real time work scenario as a react
                            intern for 2 month in company name.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection
