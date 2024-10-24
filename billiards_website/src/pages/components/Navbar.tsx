import { Navbar, Nav, NavbarBrand, NavDropdown } from "react-bootstrap"
const Navigationbar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-black">
               
                    <Nav className="nav-body">
                        <NavbarBrand>
                        <img src="assets/sunandmoon.png" alt="sun and moon png" height="50" width="50"/> Billares Sol y Luna
                        </NavbarBrand>
                        <Nav.Item>                            
                                 Home                            
                        </Nav.Item>
                        <Nav.Item>                            
                                 Galleria                           
                        </Nav.Item>
                        <NavDropdown title={"Mas informacion"}>
                             <Nav.Item> Contactos </Nav.Item>
                        </NavDropdown>
                    </Nav>
                

            </Navbar>

        </>
    )
}
export default Navigationbar