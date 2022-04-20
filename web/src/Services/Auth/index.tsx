import { AuthClient } from "../../proto/svc/Auth_apiServiceClientPb";
import { LoginRequest, LoginResponse } from "../../proto/svc/auth_api_pb";

var authService = new AuthClient('http://localhost:5000')

var Loggingin = async (username: string, password: string): Promise<LoginResponse> => {
  var request = new LoginRequest();

  request.setUserId(username);
  request.setPassword(password);

  try {
    var response = await authService.login(request, {})
    console.log('login successed')
    return response

  } catch (e) {
    console.log(e)
    throw console.error(e);
  }
}

export {
  Loggingin
}