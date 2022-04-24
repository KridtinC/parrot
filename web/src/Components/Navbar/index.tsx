import { RpcError } from "grpc-web"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { GetToken, ResetToken } from "../../Utils"

const ParrotNav = () => {

    var navigate = useNavigate()
    const Logout = async (e: any) => {
        try {
            ResetToken()
            navigate("/login")
        } catch (e) {
            if (e instanceof RpcError) {
                alert(e.message)
            } else {
                alert('unknown error' + e)
            }
        }
    }

    return <Navbar expand="lg" variant="dark" bg="dark" style={{ height: "8vh" }} sticky="top">
        <Container>
            <Navbar.Brand href="/">Parrot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/receipt">Receipt</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    {
                        GetToken() ? <Button variant="secondary" onClick={Logout}>Logout</Button> : <></>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export {
    ParrotNav
}