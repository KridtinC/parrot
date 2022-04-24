/**
 * @fileoverview gRPC-Web generated client stub for svc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_svc_bill_api_pb from '../../proto/svc/bill_api_pb';


export class BillClient {
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

  methodDescriptorAdd = new grpcWeb.MethodDescriptor(
    '/svc.Bill/Add',
    grpcWeb.MethodType.UNARY,
    proto_svc_bill_api_pb.AddBillRequest,
    proto_svc_bill_api_pb.AddBillResponse,
    (request: proto_svc_bill_api_pb.AddBillRequest) => {
      return request.serializeBinary();
    },
    proto_svc_bill_api_pb.AddBillResponse.deserializeBinary
  );

  add(
    request: proto_svc_bill_api_pb.AddBillRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_svc_bill_api_pb.AddBillResponse>;

  add(
    request: proto_svc_bill_api_pb.AddBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.AddBillResponse) => void): grpcWeb.ClientReadableStream<proto_svc_bill_api_pb.AddBillResponse>;

  add(
    request: proto_svc_bill_api_pb.AddBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.AddBillResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/svc.Bill/Add',
        request,
        metadata || {},
        this.methodDescriptorAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/svc.Bill/Add',
    request,
    metadata || {},
    this.methodDescriptorAdd);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/svc.Bill/Get',
    grpcWeb.MethodType.UNARY,
    proto_svc_bill_api_pb.GetBillRequest,
    proto_svc_bill_api_pb.GetBillResponse,
    (request: proto_svc_bill_api_pb.GetBillRequest) => {
      return request.serializeBinary();
    },
    proto_svc_bill_api_pb.GetBillResponse.deserializeBinary
  );

  get(
    request: proto_svc_bill_api_pb.GetBillRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_svc_bill_api_pb.GetBillResponse>;

  get(
    request: proto_svc_bill_api_pb.GetBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.GetBillResponse) => void): grpcWeb.ClientReadableStream<proto_svc_bill_api_pb.GetBillResponse>;

  get(
    request: proto_svc_bill_api_pb.GetBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.GetBillResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/svc.Bill/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/svc.Bill/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorGetAll = new grpcWeb.MethodDescriptor(
    '/svc.Bill/GetAll',
    grpcWeb.MethodType.UNARY,
    proto_svc_bill_api_pb.GetAllBillRequest,
    proto_svc_bill_api_pb.GetAllBillResponse,
    (request: proto_svc_bill_api_pb.GetAllBillRequest) => {
      return request.serializeBinary();
    },
    proto_svc_bill_api_pb.GetAllBillResponse.deserializeBinary
  );

  getAll(
    request: proto_svc_bill_api_pb.GetAllBillRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_svc_bill_api_pb.GetAllBillResponse>;

  getAll(
    request: proto_svc_bill_api_pb.GetAllBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.GetAllBillResponse) => void): grpcWeb.ClientReadableStream<proto_svc_bill_api_pb.GetAllBillResponse>;

  getAll(
    request: proto_svc_bill_api_pb.GetAllBillRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_svc_bill_api_pb.GetAllBillResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/svc.Bill/GetAll',
        request,
        metadata || {},
        this.methodDescriptorGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/svc.Bill/GetAll',
    request,
    metadata || {},
    this.methodDescriptorGetAll);
  }

}

