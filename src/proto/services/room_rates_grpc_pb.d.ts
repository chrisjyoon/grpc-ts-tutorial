// package: services.room_rates.v1
// file: services/room_rates.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_room_rates_pb from "../services/room_rates_pb";

interface IRoomRateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRoomTypes: IRoomRateServiceService_IGetRoomTypes;
    getRoomRateSettings: IRoomRateServiceService_IGetRoomRateSettings;
}

interface IRoomRateServiceService_IGetRoomTypes extends grpc.MethodDefinition<services_room_rates_pb.GetRoomTypesRequest, services_room_rates_pb.GetRoomTypesResponse> {
    path: "/services.room_rates.v1.RoomRateService/GetRoomTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_room_rates_pb.GetRoomTypesRequest>;
    requestDeserialize: grpc.deserialize<services_room_rates_pb.GetRoomTypesRequest>;
    responseSerialize: grpc.serialize<services_room_rates_pb.GetRoomTypesResponse>;
    responseDeserialize: grpc.deserialize<services_room_rates_pb.GetRoomTypesResponse>;
}
interface IRoomRateServiceService_IGetRoomRateSettings extends grpc.MethodDefinition<services_room_rates_pb.GetRoomRateSettingsRequest, services_room_rates_pb.GetRoomRateSettingsResponse> {
    path: "/services.room_rates.v1.RoomRateService/GetRoomRateSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_room_rates_pb.GetRoomRateSettingsRequest>;
    requestDeserialize: grpc.deserialize<services_room_rates_pb.GetRoomRateSettingsRequest>;
    responseSerialize: grpc.serialize<services_room_rates_pb.GetRoomRateSettingsResponse>;
    responseDeserialize: grpc.deserialize<services_room_rates_pb.GetRoomRateSettingsResponse>;
}

export const RoomRateServiceService: IRoomRateServiceService;

export interface IRoomRateServiceServer extends grpc.UntypedServiceImplementation {
    getRoomTypes: grpc.handleUnaryCall<services_room_rates_pb.GetRoomTypesRequest, services_room_rates_pb.GetRoomTypesResponse>;
    getRoomRateSettings: grpc.handleUnaryCall<services_room_rates_pb.GetRoomRateSettingsRequest, services_room_rates_pb.GetRoomRateSettingsResponse>;
}

export interface IRoomRateServiceClient {
    getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
    getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
    getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
}

export class RoomRateServiceClient extends grpc.Client implements IRoomRateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    public getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    public getRoomTypes(request: services_room_rates_pb.GetRoomTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomTypesResponse) => void): grpc.ClientUnaryCall;
    public getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
    public getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
    public getRoomRateSettings(request: services_room_rates_pb.GetRoomRateSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_room_rates_pb.GetRoomRateSettingsResponse) => void): grpc.ClientUnaryCall;
}
