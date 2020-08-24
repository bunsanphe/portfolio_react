import React from "react";

function Home(){
    return(
        <div class="container-lg py-4">
         <div class="row">
            <div class="col-lg-9">
                <div class="content-box">
                     <h1>About Me</h1>
                     <div class="row">
                        <div class="col-lg-4">
                             <img src="./Assets/Images/PP_Home_v2.png" class="img-fluid self-image" alt="Self Photo">
                        </div>
                        <div class="col-lg-8">
                                <p>My name is Bunsan, but I go by Heng.  I currently reside in Bellevue, WA.  I like to travel and explore the many different facets of life, particularly the convergence of nature, technology, and humanity.</p>
                                <p>I’ve always been interested in technology and design, but my interest in humans led me to a degree in psychology in my early days.  I have since then, taken courses in graphic design and full stack development.  I believe technology and web development is a great way to enhance the human experience by getting people together and/or expressing themselves.</p>  
                                <p>In my spare time when I’m not working on a project or on the computer, I enjoy hiking, snowboarding, and playing basketball.</p>
                        </div>  
                     </div>
                </div>    
            </div>
        </div>
    </div>
    )
}

export default Home;