// package: 
// file: workflowproto/user.proto

import * as workflowproto_user_pb from "../workflowproto/user_pb";
import {grpc} from "grpc-web-client";

type UserGetUser = {
  readonly methodName: string;
  readonly service: typeof User;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflowproto_user_pb.GetUserRequest;
  readonly responseType: typeof workflowproto_user_pb.UserResponse;
};

export class User {
  static readonly serviceName: string;
  static readonly GetUser: UserGetUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class UserClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getUser(
    requestMessage: workflowproto_user_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: workflowproto_user_pb.UserResponse|null) => void
  ): void;
  getUser(
    requestMessage: workflowproto_user_pb.GetUserRequest,
    callback: (error: ServiceError, responseMessage: workflowproto_user_pb.UserResponse|null) => void
  ): void;
}

