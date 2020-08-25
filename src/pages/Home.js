import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Image from 'react-bootstrap/Image'

function Home(){
    return(

        <Container>
            <Row>
                <Col size="lg-9">
                    <div className="content-box">
                        <h1>About Me</h1>
                        <Row>
                            <Col size="lq-4">
                                <Image src="../images/PP_Home_v2.png" fluid alt="Self Photo" />
                            </Col>
                            <Col size="lg-8">
                                <p>My name is Bunsan, but I go by Heng.  I currently reside in Bellevue, WA.  I like to travel and explore the many different facets of life, particularly the convergence of nature, technology, and humanity.</p>
                                <p>I’ve always been interested in technology and design, but my interest in humans led me to a degree in psychology in my early days.  I have since then, taken courses in graphic design and full stack development.  I believe technology and web development is a great way to enhance the human experience by getting people together and/or expressing themselves.</p>  
                                <p>In my spare time when I’m not working on a project or on the computer, I enjoy hiking, snowboarding, and playing basketball.</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;