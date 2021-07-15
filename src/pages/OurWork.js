import React from 'react'
import styled from 'styled-components'

//Images
import eCommerce from '../img/eCommerce.png'
import eCommerce1 from '../img/eCommerce1.png'
import project1 from '../img/project1.png'
import project11 from '../img/project11.png'
import project2 from '../img/project2.png'
import project22 from '../img/project22.png'
import project3 from '../img/project3.png'
import project4 from '../img/project4.png'
import project44 from '../img/project44.png'
import hulu1 from '../img/hulu1.png'
import hulu11 from '../img/hulu11.png'
import instagram1 from '../img/Instagram1.png'
import instagram11 from '../img/Instagram11.png'
import slack1 from '../img/Slack1.png'
import slack11 from '../img/Slack11.png'
import docs1 from '../img/docs1.png'
import docs11 from '../img/docs11.png'

//Animations
import { motion } from 'framer-motion'
import {
    sliderContainer,
    slider,
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
    const [element, controls] = useScroll()
    const [element2, controls2] = useScroll()
    const [element3, controls3] = useScroll()
    const [element4, controls4] = useScroll()
    const [element5, controls5] = useScroll()
    const [element6, controls6] = useScroll()
    const [element7, controls7] = useScroll()
    const [element8, controls8] = useScroll()

    return (
        <Work
            style={{ background: '#fff' }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <h2>eCommerce Application</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>
                                Technologies used: React, Redux, Node Js,
                                Express, MongoDB
                            </li>
                            <li>A basic eCommerce Application</li>
                            <li>
                                With functionalities like add to cart, payment
                                integration, authentication etc.
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://github.com/Nick9499/shopCart-fullstack"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={eCommerce} alt="theracer" />
                        </a>
                        <a
                            href="https://github.com/Nick9499/shopCart-fullstack"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={eCommerce1} alt="therace2r" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>

            <Movie
                ref={element}
                variants={fade}
                animate={controls}
                initial="hidden"
            >
                <h2>Resort Application</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>Technologies used: React, Contentful</li>
                            <li>
                                A basic resort application with images of all
                                kinds of availabele rooms.
                            </li>
                            <li>
                                Searching room facility on room type, no. of
                                guest, room price, etc
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://resort-app-101.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project1} alt="theracer" />
                        </a>
                        <a
                            href="https://resort-app-101.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project11} alt="therace2r" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element5}
                variants={fade}
                animate={controls5}
                initial="hidden"
            >
                <h2>Hulu Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>Next App</h4>
                        <ul>
                            <li>
                                Technologies used: React, CSS3, NextJS, TMDB
                                Api, Tailwind CSS, Material-Ui
                            </li>
                            <li>A clone of Hulu website</li>
                            <li>
                                Different categories created with the help of
                                TMDB API{' '}
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://hulu-clone-seven-ashen.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={hulu1} alt="theracer" />
                        </a>
                        <a
                            href="https://hulu-clone-seven-ashen.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={hulu11} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element7}
                variants={fade}
                animate={controls7}
                initial="hidden"
            >
                <h2>Slack Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>
                                Technologies used: React, CSS3, Material-Ui,
                                Styled Components, Firebase
                            </li>
                            <li>A clone of Slack.</li>
                            <li>With group creation and live messaging.</li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://slack-clone-40d7f.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={slack1} alt="theracer" />
                        </a>
                        <a
                            href="https://slack-clone-40d7f.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={slack11} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element6}
                variants={fade}
                animate={controls6}
                initial="hidden"
            >
                <h2>Instagram Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>
                                Technologies used: React, CSS3, Firebase,
                                Material-Ui
                            </li>
                            <li>A clone of Instagram.</li>
                            <li>
                                With authentication, comment and image upload.
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://instagram-clone-9309d.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={instagram1} alt="theracer" />
                        </a>
                        <a
                            href="https://instagram-clone-9309d.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={instagram11} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element2}
                variants={fade}
                animate={controls2}
                initial="hidden"
            >
                <h2>Turbo Offers</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>A Website fro selling or buying house</h4>
                        <ul>
                            <li>Technologies used: HTML5, CSS3, javaScript</li>
                            <li>
                                A basic website to showcase relevant information
                                about a company called Turbo Offers who wants to
                                use the website as a medium to buy and sell
                                house.
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="http://myturbooffer.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project2} alt="theracer" />
                        </a>
                        <a
                            href="http://myturbooffer.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={project22}
                                alt="therace2r"
                                style={{ marginLeft: '25%' }}
                            />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element3}
                variants={fade}
                animate={controls3}
                initial="hidden"
            >
                <h2>Spotify Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>
                                Technologies used: React, Context Api, Spotify
                                Api
                            </li>
                            <li>A clone of spotify website</li>
                            <li>All the playlists are accessible</li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://spotify-101.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project3} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>
            <Movie
                ref={element4}
                variants={fade}
                animate={controls4}
                initial="hidden"
            >
                <h2>Tinder Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>React App</h4>
                        <ul>
                            <li>
                                Technologies used: React, Node Js, Express,
                                MongoDB
                            </li>
                            <li>A clone of Tinder website</li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://tinder-clone-101.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project4} alt="theracer" />
                        </a>
                        <a
                            href="https://tinder-clone-101.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project44} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>

            <Movie
                ref={element8}
                variants={fade}
                animate={controls8}
                initial="hidden"
            >
                <h2>Google Docs Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <MovieDetails>
                    <Description>
                        <h4>Next App</h4>
                        <ul>
                            <li>
                                Technologies used: React, CSS3, Material-Ui,
                                Tailwind CSS, Firebase, NextJS, Next-Auth
                            </li>
                            <li>A clone of Google Docs.</li>
                            <li>
                                With file creation, deletion,editing,
                                authentication.
                            </li>
                        </ul>
                    </Description>
                    <Image variants={photoAnim}>
                        <a
                            href="https://github.com/Nick9499/Google-docs-clone"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={docs1} alt="theracer" />
                        </a>
                        <a
                            href="https://github.com/Nick9499/Google-docs-clone"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={docs11} alt="theracer" />
                        </a>
                    </Image>
                </MovieDetails>
            </Movie>

            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }

    h2 {
        padding: 1rem 0rem;
    }
`
const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 120%;
        height: 70vh;
        object-fit: cover;
        @media (max-width: 800px) {
            height: 100%;
            object-fit: cover;
        }
    }
`

const MovieDetails = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Description = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h4 {
        color: darkgreen;
        padding-bottom: 5%;
    }
    li {
        font-size: 120%;
        margin-left: 3%;
        line-height: 200%;
    }
`

const Image = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork
