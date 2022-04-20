import { BillClient } from "../../proto/svc/Bill_apiServiceClientPb";
import { AddBillRequest, AddBillResponse } from "../../proto/svc/bill_api_pb";

var billService = new BillClient('http://localhost:5000')


var AddBill = async (username: string, amount: number, payType: number): Promise<AddBillResponse> => {
    var request = new AddBillRequest();

    request.setPayType(payType);
    request.setAmount(amount);
    request.setPayeeListList([username]);

    try {
        var response = await billService.add(request, {
            'authorization': 'Bearer ' + localStorage.getItem('token')
        })

        console.log('add successed')
        return response
    } catch (e) {
        console.log(e)
        throw console.error(e);
    }
}

export {
    AddBill
}