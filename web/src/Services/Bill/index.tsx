import { Bill } from "../../proto/svc/bill/bill_pb";
import { BillClient } from "../../proto/svc/Bill_apiServiceClientPb";
import { AddBillRequest, AddBillResponse, GetAllBillRequest } from "../../proto/svc/bill_api_pb";
import { authInterceptor } from "../Middleware";

var billService = new BillClient('http://localhost:5000', null, {
    'unaryInterceptors': [authInterceptor]
})


var AddBill = async (usernames: string[], amount: number, payType: number, description: string): Promise<AddBillResponse> => {
    var request = new AddBillRequest();

    request.setPayType(payType);
    request.setAmount(amount);
    request.setPayeeListList(usernames);
    request.setDescription(description);

    try {
        var response = await billService.add(request, {})

        console.log('add successed')
        return response
    } catch (e) {
        console.log(e)
        throw e;
    }
}

const GetMyBills = async (): Promise<Bill[]> => {
    var req = new GetAllBillRequest();
    req.setOnlyMe(true);

    try {
        var resp = await billService.getAll(req, {})
        console.log('get all successed')
        return resp.getBillListList()
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export {
    AddBill,
    GetMyBills
}