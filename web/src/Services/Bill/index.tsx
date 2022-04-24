import { BillClient } from "../../proto/svc/Bill_apiServiceClientPb";
import { AddBillRequest, AddBillResponse } from "../../proto/svc/bill_api_pb";
import { GetToken } from "../../Utils";
import { authInterceptor } from "../Middleware";

var billService = new BillClient('http://localhost:5000', null, {
    'unaryInterceptors': [authInterceptor]
})


var AddBill = async (usernames: string[], amount: number, payType: number): Promise<AddBillResponse> => {
    var request = new AddBillRequest();

    request.setPayType(payType);
    request.setAmount(amount);
    request.setPayeeListList(usernames);

    try {
        var response = await billService.add(request, {})

        console.log('add successed')
        return response
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export {
    AddBill
}