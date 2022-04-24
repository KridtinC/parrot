import { RpcError } from "grpc-web"
import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { AddBill } from "../../Services/Bill"
import { GetUserNames } from "../../Services/User"
import './Home.css'

let Home = () => {

    // var [userName, setUserName] = useState('')
    var [userNames, setUserNames] = useState([] as string[])
    var selectedUserNames = [] as string[]
    var [amount, setAmount] = useState(0.0)
    var [payType, setPayType] = useState(0)

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        console.log(selectedUserNames, amount, payType)

        try {
            await AddBill(selectedUserNames, amount, payType)
        } catch (e) {
            if (e instanceof RpcError) {
                alert(e.message)
            } else {
                alert('unknown error' + e)
            }
        }

    }

    const updateUserList = (isChecked: boolean, filteredUserName: string) => {
        console.log(selectedUserNames + 'before')
        if (!isChecked) {
            selectedUserNames = selectedUserNames.filter(user => user != filteredUserName)
            console.log(selectedUserNames + 'after')
            return
        }
        selectedUserNames.push(filteredUserName)
        console.log(selectedUserNames + 'after')
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
        <h1>Add Bill</h1>
        <Form className="bill-form" onSubmit={SubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter username" onChange={e => setUserName(e.target.value)} /> */}
                <div className="bill-form-usernames">
                    {
                        userNames.map((userName) => {
                            return <Form.Check key={userName} type="checkbox" id={userName} label={userName} name='usernames' onChange={e => updateUserList(e.target.checked, e.target.id)} />
                        })
                    }
                </div>

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Amount in THB" onChange={e => setAmount(+e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPayType">
                <Form.Label>Pay Type</Form.Label>
                <Form.Check
                    type='radio'
                    id='halved'
                    label='Halved'
                    name='pay_type'
                    onChange={e => setPayType(1)}
                />
                <Form.Check
                    type='radio'
                    id='advanced'
                    label='Advanced'
                    name='pay_type'
                    onChange={e => setPayType(2)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default Home