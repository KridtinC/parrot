import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { RpcError } from "grpc-web"
import { useEffect, useState } from "react"
import { Bill } from "../../proto/svc/bill/bill_pb"
import { GetMyBills } from "../../Services/Bill"
import './Bill.css'

const BillPage = () => {

    var [myBills, setMyBills] = useState([] as Bill[])

    useEffect(() => {
        const fetchMyBills = async () => {

            try {
                let resp = await GetMyBills()
                setMyBills(resp)
            } catch (e) {
                if (e instanceof RpcError) {
                    alert(e.message)
                } else {
                    alert('unknown error' + e)
                }
            }

        }

        fetchMyBills()
    }, [])

    return <>
        <h2>Bill</h2>
        <TableContainer component={Paper} className="my-bills-form">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Pay Type</TableCell>
                        <TableCell align="right">Created On</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myBills.map((row) => {
                        console.log(row)
                        return <TableRow
                            key={row.getBillId()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.getDescription()}
                            </TableCell>
                            <TableCell align="right">{row.getAmount()}</TableCell>
                            <TableCell align="right">{row.getPayType()}</TableCell>
                            <TableCell align="right">{new Date(+row.getCreatedOn().toString() * 1000).toLocaleString()}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default BillPage
