import { Request, RpcError, StatusCode } from "grpc-web";
import { Navigate, useNavigate } from "react-router-dom";
import { GetToken, ResetToken } from "../../Utils";

class AuthInterceptor {

    intercept(request: any, invoker: any) {
        const metadata = request.getMetadata()
        metadata.Authorization = 'Bearer ' + GetToken()
        console.log("incoming request: " + request.getMethodDescriptor().getName())

        return invoker(request).then((response: any) => {
            console.log("response status from gRPC: " + response.getStatus().code);
            return response;
        }, (err: any) => {
            if (err instanceof RpcError) {
                console.log("rpc error: " + err.message)
                if (err.code === StatusCode.UNAUTHENTICATED) {
                    console.log("Unauthenticated, redirect to login")
                    ResetToken()
                    window.location.href = "/login"
                }
            } else {
                console.log("unknown error response " + err)
            }
            throw err
        });
    }
}

var authInterceptor = new AuthInterceptor()

export {
    authInterceptor
}