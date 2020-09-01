import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Image from 'react-bootstrap/Image'
import Gaea from "../images/Gaea_screenshot.png"
function Portfolio(){
    return(
        <Container>
            <Row>
                <Col size="lg-4">
                    <div className="content-box">
                        <h1>Portfolio</h1>
                        <div className="images">
                            <Col size="lg-6">
                                <div className="porttext">
                                    <a href="https://saharanath.github.io/Project1/">
                                        Gaea - Hiking Trail
                                    </a>
                                    <img src={Gaea} class="img-fluid" alt=" "></img>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    //     <div class="container-lg py-4">
    //      <div class="row">
    //         <div class="col-lg-9">
    //             <div class="content-box">
    //                  <h1>Portfolio</h1>

    //                     <div class="pimages">
    //                     <div class="row">
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                             <a href="https://saharanath.github.io/Project1/">
    //                                 Gaea - Hiking Trail
    //                             </div>
    //                             <img src="Images/Gaea_screenshot.png" class="img-fluid" alt=" ">
    //                             </a>
    //                         </div>
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                                 <a href="https://bunsanphe.github.io/password_generator/">
    //                                 Password Generator
    //                             </div>
    //                             <img src="Images/password_gen_screenshot.png" class="img-fluid" alt=" ">
    //                                 </a>
    //                         </div>
    //                     </div>  
    //                     <div class="row">
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                                 <a href="https://bunsanphe.github.io/timed_quiz/">
    //                                 Psychology Quiz
    //                             </div>
    //                              <img src="Images/quiz_screenshot.png" class="img-fluid" alt=" ">
    //                                 </a>
    //                         </div>
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                                 <a href="https://bunsanphe.github.io/work_day_scheduler/">
    //                                 Daily Planner
    //                             </div>
    //                             <img src="Images/planner_screenshot.png" class="img-fluid" alt=" ">
    //                                 </a>
    //                         </div>
    //                     </div> 
    //                     <div class="row">
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                                 <a href="#">
    //                                 TBA
    //                             </div>
    //                              <img src="https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="img-fluid" alt=" ">
    //                                 </a>
    //                         </div>
    //                         <div class="col-lg-6 d-flex justify-content-center">
    //                             <div class="porttext">
    //                                 <a href="#">
    //                                 TBA
    //                             </div>
    //                             <img src="https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="img-fluid" alt=" ">
    //                                 </a>
    //                         </div>
    //                     </div> 
    //                     </div>  
    //             </div>    
    //         </div>
    //      </div>
    // </div>
    )
}

export default Portfolio;