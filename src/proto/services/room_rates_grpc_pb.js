// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_room_rates_pb = require('../services/room_rates_pb.js');

function serialize_services_room_rates_v1_GetRoomRateSettingsRequest(arg) {
  if (!(arg instanceof services_room_rates_pb.GetRoomRateSettingsRequest)) {
    throw new Error('Expected argument of type services.room_rates.v1.GetRoomRateSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_room_rates_v1_GetRoomRateSettingsRequest(buffer_arg) {
  return services_room_rates_pb.GetRoomRateSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_room_rates_v1_GetRoomRateSettingsResponse(arg) {
  if (!(arg instanceof services_room_rates_pb.GetRoomRateSettingsResponse)) {
    throw new Error('Expected argument of type services.room_rates.v1.GetRoomRateSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_room_rates_v1_GetRoomRateSettingsResponse(buffer_arg) {
  return services_room_rates_pb.GetRoomRateSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  getRoomRateSettings: {
    path: '/services.room_rates.v1.RoomRateService/GetRoomRateSettings',
    requestStream: false,
    responseStream: false,
    requestType: services_room_rates_pb.GetRoomRateSettingsRequest,
    responseType: services_room_rates_pb.GetRoomRateSettingsResponse,
    requestSerialize: serialize_services_room_rates_v1_GetRoomRateSettingsRequest,
    requestDeserialize: deserialize_services_room_rates_v1_GetRoomRateSettingsRequest,
    responseSerialize: serialize_services_room_rates_v1_GetRoomRateSettingsResponse,
    responseDeserialize: deserialize_services_room_rates_v1_GetRoomRateSettingsResponse,
  },
};

exports.RoomRateServiceClient = grpc.makeGenericClientConstructor(RoomRateServiceService);
