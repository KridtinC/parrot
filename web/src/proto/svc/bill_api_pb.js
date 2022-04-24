/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_svc_bill_bill_pb = require('../../proto/svc/bill/bill_pb.js');
goog.exportSymbol('proto.svc.AddBillRequest', null, global);
goog.exportSymbol('proto.svc.AddBillResponse', null, global);
goog.exportSymbol('proto.svc.GetAllBillRequest', null, global);
goog.exportSymbol('proto.svc.GetAllBillResponse', null, global);
goog.exportSymbol('proto.svc.GetBillRequest', null, global);
goog.exportSymbol('proto.svc.GetBillResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.AddBillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.svc.AddBillRequest.repeatedFields_, null);
};
goog.inherits(proto.svc.AddBillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.AddBillRequest.displayName = 'proto.svc.AddBillRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.svc.AddBillRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.AddBillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.AddBillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.AddBillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.AddBillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payeeListList: jspb.Message.getRepeatedField(msg, 2),
    amount: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.AddBillRequest}
 */
proto.svc.AddBillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.AddBillRequest;
  return proto.svc.AddBillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.AddBillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.AddBillRequest}
 */
proto.svc.AddBillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.svc.bill.PayType} */ (reader.readEnum());
      msg.setPayType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPayeeList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.AddBillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.AddBillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.AddBillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.AddBillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayeeListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bill.PayType pay_type = 1;
 * @return {!proto.svc.bill.PayType}
 */
proto.svc.AddBillRequest.prototype.getPayType = function() {
  return /** @type {!proto.svc.bill.PayType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.svc.bill.PayType} value */
proto.svc.AddBillRequest.prototype.setPayType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string payee_list = 2;
 * @return {!Array<string>}
 */
proto.svc.AddBillRequest.prototype.getPayeeListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.svc.AddBillRequest.prototype.setPayeeListList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.svc.AddBillRequest.prototype.addPayeeList = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.svc.AddBillRequest.prototype.clearPayeeListList = function() {
  this.setPayeeListList([]);
};


/**
 * optional float amount = 3;
 * @return {number}
 */
proto.svc.AddBillRequest.prototype.getAmount = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.svc.AddBillRequest.prototype.setAmount = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.svc.AddBillRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.svc.AddBillRequest.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.AddBillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.svc.AddBillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.AddBillResponse.displayName = 'proto.svc.AddBillResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.AddBillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.AddBillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.AddBillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.AddBillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    errDesc: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.AddBillResponse}
 */
proto.svc.AddBillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.AddBillResponse;
  return proto.svc.AddBillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.AddBillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.AddBillResponse}
 */
proto.svc.AddBillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatusCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.AddBillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.AddBillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.AddBillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.AddBillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getErrDesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 status_code = 1;
 * @return {number}
 */
proto.svc.AddBillResponse.prototype.getStatusCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.svc.AddBillResponse.prototype.setStatusCode = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string err_desc = 2;
 * @return {string}
 */
proto.svc.AddBillResponse.prototype.getErrDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.svc.AddBillResponse.prototype.setErrDesc = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.GetBillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.svc.GetBillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.GetBillRequest.displayName = 'proto.svc.GetBillRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.GetBillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.GetBillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.GetBillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetBillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    billId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.GetBillRequest}
 */
proto.svc.GetBillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.GetBillRequest;
  return proto.svc.GetBillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.GetBillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.GetBillRequest}
 */
proto.svc.GetBillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.GetBillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.GetBillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.GetBillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetBillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBillId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string bill_id = 1;
 * @return {string}
 */
proto.svc.GetBillRequest.prototype.getBillId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.svc.GetBillRequest.prototype.setBillId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.GetBillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.svc.GetBillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.GetBillResponse.displayName = 'proto.svc.GetBillResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.GetBillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.GetBillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.GetBillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetBillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bill: (f = msg.getBill()) && proto_svc_bill_bill_pb.Bill.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.GetBillResponse}
 */
proto.svc.GetBillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.GetBillResponse;
  return proto.svc.GetBillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.GetBillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.GetBillResponse}
 */
proto.svc.GetBillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_svc_bill_bill_pb.Bill;
      reader.readMessage(value,proto_svc_bill_bill_pb.Bill.deserializeBinaryFromReader);
      msg.setBill(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.GetBillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.GetBillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.GetBillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetBillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBill();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_svc_bill_bill_pb.Bill.serializeBinaryToWriter
    );
  }
};


/**
 * optional bill.Bill bill = 1;
 * @return {?proto.svc.bill.Bill}
 */
proto.svc.GetBillResponse.prototype.getBill = function() {
  return /** @type{?proto.svc.bill.Bill} */ (
    jspb.Message.getWrapperField(this, proto_svc_bill_bill_pb.Bill, 1));
};


/** @param {?proto.svc.bill.Bill|undefined} value */
proto.svc.GetBillResponse.prototype.setBill = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.svc.GetBillResponse.prototype.clearBill = function() {
  this.setBill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.svc.GetBillResponse.prototype.hasBill = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.GetAllBillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.svc.GetAllBillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.GetAllBillRequest.displayName = 'proto.svc.GetAllBillRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.GetAllBillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.GetAllBillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.GetAllBillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetAllBillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    onlyMe: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.GetAllBillRequest}
 */
proto.svc.GetAllBillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.GetAllBillRequest;
  return proto.svc.GetAllBillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.GetAllBillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.GetAllBillRequest}
 */
proto.svc.GetAllBillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyMe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.GetAllBillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.GetAllBillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.GetAllBillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetAllBillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnlyMe();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool only_me = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.svc.GetAllBillRequest.prototype.getOnlyMe = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.svc.GetAllBillRequest.prototype.setOnlyMe = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.svc.GetAllBillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.svc.GetAllBillResponse.repeatedFields_, null);
};
goog.inherits(proto.svc.GetAllBillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.svc.GetAllBillResponse.displayName = 'proto.svc.GetAllBillResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.svc.GetAllBillResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.svc.GetAllBillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.svc.GetAllBillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.svc.GetAllBillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetAllBillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    billListList: jspb.Message.toObjectList(msg.getBillListList(),
    proto_svc_bill_bill_pb.Bill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.svc.GetAllBillResponse}
 */
proto.svc.GetAllBillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.svc.GetAllBillResponse;
  return proto.svc.GetAllBillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.svc.GetAllBillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.svc.GetAllBillResponse}
 */
proto.svc.GetAllBillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_svc_bill_bill_pb.Bill;
      reader.readMessage(value,proto_svc_bill_bill_pb.Bill.deserializeBinaryFromReader);
      msg.addBillList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.svc.GetAllBillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.svc.GetAllBillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.svc.GetAllBillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.svc.GetAllBillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBillListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_svc_bill_bill_pb.Bill.serializeBinaryToWriter
    );
  }
};


/**
 * repeated bill.Bill bill_list = 1;
 * @return {!Array<!proto.svc.bill.Bill>}
 */
proto.svc.GetAllBillResponse.prototype.getBillListList = function() {
  return /** @type{!Array<!proto.svc.bill.Bill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_svc_bill_bill_pb.Bill, 1));
};


/** @param {!Array<!proto.svc.bill.Bill>} value */
proto.svc.GetAllBillResponse.prototype.setBillListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.svc.bill.Bill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.svc.bill.Bill}
 */
proto.svc.GetAllBillResponse.prototype.addBillList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.svc.bill.Bill, opt_index);
};


proto.svc.GetAllBillResponse.prototype.clearBillListList = function() {
  this.setBillListList([]);
};


goog.object.extend(exports, proto.svc);
