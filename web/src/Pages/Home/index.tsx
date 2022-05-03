import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, InputLabel, Radio, RadioGroup } from "@mui/material"
import { RpcError } from "grpc-web"
import { useEffect, useState } from "react"
import { AddBill } from "../../Services/Bill"
import { GetUserNames } from "../../Services/User"
import './Home.css'

let HomePage = () => {

    var [userNames, setUserNames] = useState([] as string[])
    var [selectedUserNames, setSelectedUserNames] = useState([] as string[])
    var [amount, setAmount] = useState(0.0)
    var [payType, setPayType] = useState(0)
    var [desc, setDesc] = useState('');

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        console.log(selectedUserNames, amount, payType)

        try {
            await AddBill(selectedUserNames, amount, payType, desc)
        } catch (e) {
            if (e instanceof RpcError) {
                alert(e.message)
            } else {
                alert('unknown error' + e)
            }
        }

    }

    const updateUserList = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            setSelectedUserNames((prev) => prev.filter(user => user !== event.target.name))
            return
        }
        setSelectedUserNames((prev) => [...prev, event.target.name])
    }

    useEffect(() => {
        const fetchUsers = async () => {

            try {
                let resp = await GetUserNames()
                setUserNames(resp)
            } catch (e) {
                if (e instanceof RpcError) {
                    alert(e.message)
                } else {
                    alert('unknown error' + e)
                }
            }

        }

        fetchUsers()
    }, [])

    return <>
        <h2>Add Bill</h2>
        <form className="bill-form" onSubmit={SubmitForm}>
            <FormControl required>
                <FormLabel component="legend">User Name</FormLabel>
                <FormGroup>
                    {
                        userNames.map((user) => {
                            return <FormControlLabel
                                key={user}
                                control={
                                    <Checkbox onChange={updateUserList} name={user} />
                                }
                                label={user}
                            />
                        })
                    }
                </FormGroup>
            </FormControl>
            <FormControl required>
                <InputLabel htmlFor="bill-desc">Description</InputLabel>
                <Input id="bill-desc" type="text" aria-describedby="bill-desc-helper" onChange={e => setDesc(e.target.value)} required />
                <FormHelperText id="bill-desc-helper">Description of this bill.</FormHelperText>
            </FormControl>
            <FormControl required>
                <InputLabel htmlFor="bill-amount">Amount</InputLabel>
                <Input id="bill-amount" type="number" aria-describedby="bill-amount-helper" onChange={e => setAmount(+e.target.value)} required />
                <FormHelperText id="bill-amount-helper">Amount of this bill.</FormHelperText>
            </FormControl>
            <FormControl required>
                <FormLabel id="bill-paytype">Pay Type</FormLabel>
                <RadioGroup
                    defaultValue="halved"
                    name="bill-paytype-group"
                >
                    <FormControlLabel value="halved" control={<Radio />} label="Halved" onChange={e => setPayType(1)} />
                    <FormControlLabel value="advanced" control={<Radio />} label="Advanced" onChange={e => setPayType(2)} />
                </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    </>
}

export default HomePage