import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Bar.css'
import { CommonProps } from '../../interfaces/CommonProps'

const Bar: React.FC<CommonProps> = ({titles}) => {
  return (
    <>
      <Navbar className="bar" >
          <Container>
            <Nav className="m-auto">
              {titles.map((item,idx) => <Nav.Link className="mx-1" key={idx} href={`#${item}`}>{item}</Nav.Link>)}
            </Nav>
          </Container>
      </Navbar>
   </>
  );
};
export default Bar;
