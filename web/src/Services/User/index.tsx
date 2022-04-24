import { UserClient } from "../../proto/svc/User_apiServiceClientPb"
import { GetAllUsersRequest } from "../../proto/svc/user_api_pb"
import { authInterceptor } from "../Middleware"

var userService = new UserClient('http://localhost:5000', null, {
    'unaryInterceptors': [authInterceptor]
})

const GetUserNames = async (): Promise<string[]> => {

    let req = new GetAllUsersRequest()

    try {
        let resp = await userService.getAll(req, {})
        return resp.getUserIdsList()
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export {
    GetUserNames
}