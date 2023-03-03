import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function NavScrollExample() {
    return (
        <>
            <Navbar bg="light" variant='light'>
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            src="https://app-city4all-qa-westeurope-001.azurewebsites.net/img/logo_inv.png"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Orders" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/orders">List Orders</NavDropdown.Item>
                                <NavDropdown.Item href="/orders">Add Order</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav.Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </Nav.Link>
                        <NavDropdown className="m-3" title="Jhonnathan Ramos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Log-Out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Breadcrumb className='m-4'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Orders
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </BrowserRouter></>
    );
}
export default NavScrollExample;