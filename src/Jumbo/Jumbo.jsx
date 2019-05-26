import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import './Jumbo.css';


const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol >
          <MDBJumbotron  className="jumbostyle">
            <MDBCol  className="text-white text-center py-5 px-4 my-5" >
              <MDBCol className="py-5" >
                <MDBCardTitle  className='naslov' className="h1-responsive pt-3 m-5 font-bold" >CAPITAL GREEN</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;