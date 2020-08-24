import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white">
      <div class="container-lg">
      <a class="navbar-brand">Bunsan Heng Phe</a>
        <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link" href="../index.html">About</a>
            <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
            <a class="nav-item nav-link active" href="contact.html">Contact <span class="sr-only">(current)</span></a>
          </div>
        </div>
    </nav>
  );
}

export default Nav;