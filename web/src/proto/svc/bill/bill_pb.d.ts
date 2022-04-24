import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Bill extends jspb.Message {
  getBillId(): string;
  setBillId(value: string): Bill;

  getAmount(): number;
  setAmount(value: number): Bill;

  getDescription(): string;
  setDescription(value: string): Bill;

  getPayType(): PayType;
  setPayType(value: PayType): Bill;

  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): Bill;
  hasCreatedOn(): boolean;
  clearCreatedOn(): Bill;

  getPayerId(): string;
  setPayerId(value: string): Bill;

  getReceiptId(): string;
  setReceiptId(value: string): Bill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bill.AsObject;
  static toObject(includeInstance: boolean, msg: Bill): Bill.AsObject;
  static serializeBinaryToWriter(message: Bill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bill;
  static deserializeBinaryFromReader(message: Bill, reader: jspb.BinaryReader): Bill;
}

export namespace Bill {
  export type AsObject = {
    billId: string,
    amount: number,
    description: string,
    payType: PayType,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payerId: string,
    receiptId: string,
  }
}

export enum PayType { 
  BILLTYPEINVALID = 0,
  BILLTYPEHALVED = 1,
  BILLTYPEADVANCED = 2,
}
