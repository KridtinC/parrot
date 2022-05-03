import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { RpcError } from "grpc-web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Services/Auth";
import { GetToken } from "../../Utils";
import './Form.css'


let LoginPage = () => {

    var isLogin = GetToken()
    var navigate = useNavigate()
    var [userName, setUserName] = useState('')
    var [password, setPassword] = useState('')
    var [rememberMe, setRememberMe] = useState(false)

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(userName, password, rememberMe)

        try {
            let response = await Login(userName, password)

            if (rememberMe) {
                localStorage.setItem('token', response.getToken())
            } else {
                sessionStorage.setItem('token', response.getToken())
            }
            navigate("/")
        } catch (e) {
            if (e instanceof RpcError) {
                alert(e.message)
            } else {
                alert('unknown error' + e)
            }
        }

    }

    useEffect(() => {
        if (isLogin) {
            return navigate("/");
        }
    }, [isLogin, navigate]);

    return <>
        <h2>Login</h2>
        <form className="login-form" onSubmit={SubmitForm}>
            <FormControl required>
                <InputLabel htmlFor="login-username">Username</InputLabel>
                <Input id="login-username" type="text" onChange={e => setUserName(e.target.value)} required />
            </FormControl>
            <FormControl required>
                <InputLabel htmlFor="login-password">Password</InputLabel>
                <Input id="login-password" type="password" onChange={e => setPassword(e.target.value)} required />
            </FormControl>
            <FormControl required>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={e => setRememberMe(e.target.checked)} />
                        }
                        label="Remember me"
                    />
                </FormGroup>
            </FormControl>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    </>
}

export default LoginPage