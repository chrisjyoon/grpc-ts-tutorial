// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_room_rates_pb = require('../services/room_rates_pb.js');

function serialize_services_room_rates_v1_GetRoomTypesRequest(arg) {
  if (!(arg instanceof services_room_rates_pb.GetRoomTypesRequest)) {
    throw new Error('Expected argument of type services.room_rates.v1.GetRoomTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_room_rates_v1_GetRoomTypesRequest(buffer_arg) {
  return services_room_rates_pb.GetRoomTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_room_rates_v1_GetRoomTypesResponse(arg) {
  if (!(arg instanceof services_room_rates_pb.GetRoomTypesResponse)) {
    throw new Error('Expected argument of type services.room_rates.v1.GetRoomTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_room_rates_v1_GetRoomTypesResponse(buffer_arg) {
  return services_room_rates_pb.GetRoomTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoomRateServiceService = exports.RoomRateServiceService = {
  getRoomTypes: {
    path: '/services.room_rates.v1.RoomRateService/GetRoomTypes',
    requestStream: false,
    responseStream: false,
    requestType: services_room_rates_pb.GetRoomTypesRequest,
    responseType: services_room_rates_pb.GetRoomTypesResponse,
    requestSerialize: serialize_services_room_rates_v1_GetRoomTypesRequest,
    requestDeserialize: deserialize_services_room_rates_v1_GetRoomTypesRequest,
    responseSerialize: serialize_services_room_rates_v1_GetRoomTypesResponse,
    responseDeserialize: deserialize_services_room_rates_v1_GetRoomTypesResponse,
  },
};

exports.RoomRateServiceClient = grpc.makeGenericClientConstructor(RoomRateServiceService);
