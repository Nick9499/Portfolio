import React from 'react'

import { About, Description, Hide } from '../styles'
//Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Hi, I am Subhajit and
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I am a <span>frontend</span> developer
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>

                <motion.button variants={fade}>
                    <a
                        href="#contact"
                        style={{ textDecoration: 'none', color: 'wheat' }}
                    >
                        Contact Me
                    </a>
                </motion.button>
            </Description>

            <Wave />
        </About>
    )
}

//Styled Components

export default AboutSection
