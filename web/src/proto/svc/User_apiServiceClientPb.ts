/**
 * @fileoverview gRPC-Web generated client stub for svc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_svc_user_api_pb from '../../proto/svc/user_api_pb';


export class UserClient {
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

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/svc.User/Get',
    grpcWeb.MethodType.UNARY,
    proto_svc_user_api_pb.GetUserRequest,
    proto_svc_user_api_pb.GetUserResponse,
    (request: proto_svc_user_api_pb.GetUserRequest) => {
      return request.serializeBinary();
    },
    proto_svc_user_api_pb.GetUserResponse.deserializeBinary
  );

  get(
    request: proto_svc_user_api_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_svc_user_api_pb.GetUserResponse>;

  get(
    request: proto_svc_user_api_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_svc_user_api_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<proto_svc_user_api_pb.GetUserResponse>;

  get(
    request: proto_svc_user_api_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_svc_user_api_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/svc.User/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/svc.User/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

}

