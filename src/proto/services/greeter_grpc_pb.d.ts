// package: services.greeter.v1
// file: services/greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_greeter_pb from "../services/greeter_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<services_greeter_pb.HelloRequest, services_greeter_pb.HelloReply> {
    path: "/services.greeter.v1.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<services_greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<services_greeter_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<services_greeter_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<services_greeter_pb.HelloRequest, services_greeter_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: services_greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: services_greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: services_greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: services_greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
