import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <ContactStyle
            id="contact"
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <Socials>
                <a
                    href="https://www.linkedin.com/in/subhajitsarkar911/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className="fa fa-linkedin-square fa-2x"
                        aria-hidden="true"
                    ></i>
                </a>
                <a
                    href="mailto:sarkarsubhajit911@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </a>
                <a
                    href="https://twitter.com/Subhaji98203536"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className="fa fa-twitter-square fa-2x"
                        aria-hidden="true"
                    ></i>
                </a>
                <a
                    href="https://github.com/Nick9499"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className="fa fa-github-square fa-2x"
                        aria-hidden="true"
                    ></i>
                </a>
            </Socials>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 1%;
    background-color: #333;
`
const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
        color: wheat;
    }
`

export default ContactUs
