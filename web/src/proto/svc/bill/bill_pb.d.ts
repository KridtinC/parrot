import * as jspb from 'google-protobuf'



export class Bill extends jspb.Message {
  getBillId(): string;
  setBillId(value: string): Bill;

  getPayerId(): string;
  setPayerId(value: string): Bill;

  getPayeeId(): string;
  setPayeeId(value: string): Bill;

  getAmount(): number;
  setAmount(value: number): Bill;

  getPayType(): PayType;
  setPayType(value: PayType): Bill;

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
    payerId: string,
    payeeId: string,
    amount: number,
    payType: PayType,
  }
}

export enum PayType { 
  BILLTYPEINVALID = 0,
  BILLTYPEHALVED = 1,
  BILLTYPEADVANCED = 2,
}
