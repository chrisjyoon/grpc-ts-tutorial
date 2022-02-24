// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_greeter_pb = require('../services/greeter_pb.js');

function serialize_services_greeter_v1_HelloReply(arg) {
  if (!(arg instanceof services_greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type services.greeter.v1.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_greeter_v1_HelloReply(buffer_arg) {
  return services_greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_greeter_v1_HelloRequest(arg) {
  if (!(arg instanceof services_greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type services.greeter.v1.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_greeter_v1_HelloRequest(buffer_arg) {
  return services_greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/services.greeter.v1.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: services_greeter_pb.HelloRequest,
    responseType: services_greeter_pb.HelloReply,
    requestSerialize: serialize_services_greeter_v1_HelloRequest,
    requestDeserialize: deserialize_services_greeter_v1_HelloRequest,
    responseSerialize: serialize_services_greeter_v1_HelloReply,
    responseDeserialize: deserialize_services_greeter_v1_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
