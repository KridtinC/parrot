/**
 * @fileoverview gRPC-Web generated client stub for svc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_svc_auth_api_pb from '../../proto/svc/auth_api_pb';


export class AuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/svc.Auth/Login',
    grpcWeb.MethodType.UNARY,
    proto_svc_auth_api_pb.LoginRequest,
    proto_svc_auth_api_pb.LoginResponse,
    (request: proto_svc_auth_api_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    proto_svc_auth_api_pb.LoginResponse.deserializeBinary
  );

  login(
    request: proto_svc_auth_api_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_svc_auth_api_pb.LoginResponse>;

  login(
    request: proto_svc_auth_api_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_svc_auth_api_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<proto_svc_auth_api_pb.LoginResponse>;

  login(
    request: proto_svc_auth_api_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_svc_auth_api_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/svc.Auth/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/svc.Auth/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

}

