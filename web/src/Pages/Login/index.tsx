import { MouseEventHandler, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Loggingin } from "../../Services/Auth";
import './Form.css'


let Login = () => {

    var isLogin = localStorage.getItem('token')
    var navigate = useNavigate()
    var [userName, setUserName] = useState('')
    var [password, setPassword] = useState('')
    var [rememberMe, setRememberMe] = useState(false)

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(userName, password, rememberMe)

        try {
            let response = await Loggingin(userName, password)

            if (rememberMe) {
                localStorage.setItem('token', response.getToken())
            } else {
                sessionStorage.setItem('token', response.getToken())
            }
            navigate("/")
        } catch (e) {
            alert('invalid username or password')
        }

    }

    useEffect(() => {
        if (isLogin) {
            return navigate("/");
        }
    }, [isLogin]);

    return <>
        <Form className="login-form" onSubmit={SubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRememberMe">
                <Form.Check type="checkbox" label="Remember me" onChange={e => setRememberMe(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default Login