import * as jspb from 'google-protobuf'

import * as proto_svc_bill_bill_pb from '../../proto/svc/bill/bill_pb';


export class AddBillRequest extends jspb.Message {
  getPayType(): proto_svc_bill_bill_pb.PayType;
  setPayType(value: proto_svc_bill_bill_pb.PayType): AddBillRequest;

  getPayeeListList(): Array<string>;
  setPayeeListList(value: Array<string>): AddBillRequest;
  clearPayeeListList(): AddBillRequest;
  addPayeeList(value: string, index?: number): AddBillRequest;

  getAmount(): number;
  setAmount(value: number): AddBillRequest;

  getDescription(): string;
  setDescription(value: string): AddBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBillRequest): AddBillRequest.AsObject;
  static serializeBinaryToWriter(message: AddBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBillRequest;
  static deserializeBinaryFromReader(message: AddBillRequest, reader: jspb.BinaryReader): AddBillRequest;
}

export namespace AddBillRequest {
  export type AsObject = {
    payType: proto_svc_bill_bill_pb.PayType,
    payeeListList: Array<string>,
    amount: number,
    description: string,
  }
}

export class AddBillResponse extends jspb.Message {
  getStatusCode(): number;
  setStatusCode(value: number): AddBillResponse;

  getErrDesc(): string;
  setErrDesc(value: string): AddBillResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBillResponse): AddBillResponse.AsObject;
  static serializeBinaryToWriter(message: AddBillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBillResponse;
  static deserializeBinaryFromReader(message: AddBillResponse, reader: jspb.BinaryReader): AddBillResponse;
}

export namespace AddBillResponse {
  export type AsObject = {
    statusCode: number,
    errDesc: string,
  }
}

export class GetBillRequest extends jspb.Message {
  getBillId(): string;
  setBillId(value: string): GetBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillRequest): GetBillRequest.AsObject;
  static serializeBinaryToWriter(message: GetBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillRequest;
  static deserializeBinaryFromReader(message: GetBillRequest, reader: jspb.BinaryReader): GetBillRequest;
}

export namespace GetBillRequest {
  export type AsObject = {
    billId: string,
  }
}

export class GetBillResponse extends jspb.Message {
  getBill(): proto_svc_bill_bill_pb.Bill | undefined;
  setBill(value?: proto_svc_bill_bill_pb.Bill): GetBillResponse;
  hasBill(): boolean;
  clearBill(): GetBillResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillResponse): GetBillResponse.AsObject;
  static serializeBinaryToWriter(message: GetBillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillResponse;
  static deserializeBinaryFromReader(message: GetBillResponse, reader: jspb.BinaryReader): GetBillResponse;
}

export namespace GetBillResponse {
  export type AsObject = {
    bill?: proto_svc_bill_bill_pb.Bill.AsObject,
  }
}

export class GetAllBillRequest extends jspb.Message {
  getOnlyMe(): boolean;
  setOnlyMe(value: boolean): GetAllBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllBillRequest): GetAllBillRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllBillRequest;
  static deserializeBinaryFromReader(message: GetAllBillRequest, reader: jspb.BinaryReader): GetAllBillRequest;
}

export namespace GetAllBillRequest {
  export type AsObject = {
    onlyMe: boolean,
  }
}

export class GetAllBillResponse extends jspb.Message {
  getBillListList(): Array<proto_svc_bill_bill_pb.Bill>;
  setBillListList(value: Array<proto_svc_bill_bill_pb.Bill>): GetAllBillResponse;
  clearBillListList(): GetAllBillResponse;
  addBillList(value?: proto_svc_bill_bill_pb.Bill, index?: number): proto_svc_bill_bill_pb.Bill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllBillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllBillResponse): GetAllBillResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllBillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllBillResponse;
  static deserializeBinaryFromReader(message: GetAllBillResponse, reader: jspb.BinaryReader): GetAllBillResponse;
}

export namespace GetAllBillResponse {
  export type AsObject = {
    billListList: Array<proto_svc_bill_bill_pb.Bill.AsObject>,
  }
}

