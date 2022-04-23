import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { AddBill } from "../../Services/Bill"
import './Home.css'

let Home = () => {

    var [userName, setUserName] = useState('')
    var [amount, setAmount] = useState(0.0)
    var [payType, setPayType] = useState(0)

    var SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(userName, amount, payType)

        try {
            await AddBill(userName, amount, payType)
        } catch (e) {
            alert('error' + e)
        }

    }

    return <>
        <h1>Add Bill</h1>
        <Form className="bill-form" onSubmit={SubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Amount in THB" onChange={e => setAmount(+e.target.value)} />
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