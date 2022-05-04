import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PDialog } from "../../Components/Dialog";
import { APIStatus } from "../../Components/Dialog/enum";
import { Login } from "../../Services/Auth";
import { GetToken } from "../../Utils";
import './Form.css'


let LoginPage = () => {

    var isLogin = GetToken()
    var navigate = useNavigate()
    var [userName, setUserName] = useState('')
    var [password, setPassword] = useState('')
    var [rememberMe, setRememberMe] = useState(false)

    var [openDialog, setOpenDialog] = useState(false);
    var [addBillErr, setAddBillErr] = useState(null as any);
    var [apiStatus, setAPIStatus] = useState(APIStatus.NONE);

    var HandleClose = () => {
        setOpenDialog(false);
    }

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(userName, password, rememberMe)

        setOpenDialog(true);
        setAPIStatus(APIStatus.PROCESSING);

        try {
            let response = await Login(userName, password)

            if (rememberMe) {
                localStorage.setItem('token', response.getToken())
            } else {
                sessionStorage.setItem('token', response.getToken())
            }
            setAPIStatus(APIStatus.COMPLETED);
            navigate("/")
        } catch (e) {
            setAPIStatus(APIStatus.FAILED)
            setAddBillErr(e)
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
        <PDialog open={openDialog} err={addBillErr} onClose={HandleClose} status={apiStatus} />
    </>
}

export default LoginPage