import React from 'react'
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FiPhoneCall } from 'react-icons/fi';
export default function Navbarr() {
  return (
    <Container>
    <div className='navbarr'>
        <div className='logo'>
            <img src='https://preview.colorlib.com/theme/course/images/logo.png'/>
        </div>
    <div className='navtexts'>
        <div>Home</div>
        <div>Add</div>
        <div>Courses</div>
        <div>Elements</div>
        <div>News</div>
        <div>Contact</div>

    </div>
    <div className='phone'>
        <FiPhoneCall/><h4>+43 4566 7788 2457</h4>
    </div>
    </div>

    </Container>
  )
}
