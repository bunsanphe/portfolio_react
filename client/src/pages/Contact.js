import React from 'react';
import {Container, Col, Row, Form, Card, Button} from "react-bootstrap"

function Contact(){
    return(
      <Container>
          <Row>
              <Col lg={9}>
                  <h1>Contact</h1>
              </Col>
           </Row>   
              <Row>
                  <Form>
                      <Form.Group controlId="formBasicName">
                          <Form.Label>Name </Form.Label>
                          <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email Adddress </Form.Label>
                          <Form.Control type="email" placeholder="example@gmail.com" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows="6" />
                        </Form.Group>
                  </Form>
              </Row>
              
              <Row>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Contact</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                  <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="bunsan-phe-4547a629"><a class="LI-simple-link" href='https://www.linkedin.com/in/bunsan-phe-4547a629?trk=profile-badge'>Bunsan Phe</a></div>
                  <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                  </Col>         
            </Row>
      </Container>
//         <div class="container-lg py-4">
//             <div class="row">
//                  <div class="col-lg-9">
//             <div class="content-box">
//                  <h1>Contact</h1>
//                  <div class="row">
//                     <form>
//                         <div class="form-group">
//                             <label for="exampleFormControlInput1">Name</label>
//                             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith">
//                           </div>
//                         <div class="form-group">
//                           <label for="exampleFormControlInput1">Email address</label>
//                           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com">
//                         </div>
//                         <div class="form-group">
//                           <label for="exampleFormControlTextarea1">Message</label>
//                           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         </div>
//                         <div class="form-group">
//                         <button type="submit" class="btn" style="background-color: maroon">Submit</button>
//                       </div>
//                       </form>
//                    </div>

//                    <div class="row">
//                    <div class="col">
//                    <div class="card" style="width: 280px; height: 100%;">
//                     <div class="card-body">
//                       <h5 class="card-title">Contact</h5>
//                       <p class="card-text">Email: bunsanphe@gmail.com</p>
//                       <p class="card-text" id="phoneNumber">Cell: <a href="tel:206-371-4407">206-371-4407</a></p>
//                       <p class="card-text" id="gitHubLink">Website: <a href="https://github.com/bunsanphe">Github Profile</a></p>
//                       <p class="card-text" id="resume">Resume: <a href="https://drive.google.com/file/d/17J2aD3E9AOyI89jA3KnTdyhrdZYeImLP/view?usp=sharing">Link</a></p>
                      
//                     </div>
//                   </div>
//                 </div>

//               <div class="col">
//                     <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="bunsan-phe-4547a629"><a class="LI-simple-link" href='https://www.linkedin.com/in/bunsan-phe-4547a629?trk=profile-badge'>Bunsan Phe</a></div>
//                     <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
//                   </div>
//                   </div>    
//                 </div>
//         </div>
//     </div>
// </div>
    );
}

export default Contact;
