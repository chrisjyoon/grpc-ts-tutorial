// package: services.room_rates.v1
// file: services/room_rates.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetRoomTypesRequest extends jspb.Message { 
    getHotelCode(): string;
    setHotelCode(value: string): GetRoomTypesRequest;
    getRateCode(): string;
    setRateCode(value: string): GetRoomTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoomTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoomTypesRequest): GetRoomTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoomTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoomTypesRequest;
    static deserializeBinaryFromReader(message: GetRoomTypesRequest, reader: jspb.BinaryReader): GetRoomTypesRequest;
}

export namespace GetRoomTypesRequest {
    export type AsObject = {
        hotelCode: string,
        rateCode: string,
    }
}

export class GetRoomTypesResponse extends jspb.Message { 
    clearRoomTypesList(): void;
    getRoomTypesList(): Array<string>;
    setRoomTypesList(value: Array<string>): GetRoomTypesResponse;
    addRoomTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoomTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoomTypesResponse): GetRoomTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoomTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoomTypesResponse;
    static deserializeBinaryFromReader(message: GetRoomTypesResponse, reader: jspb.BinaryReader): GetRoomTypesResponse;
}

export namespace GetRoomTypesResponse {
    export type AsObject = {
        roomTypesList: Array<string>,
    }
}
