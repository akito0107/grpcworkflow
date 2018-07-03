// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var workflowproto_user_pb = require('../workflowproto/user_pb.js');

function serialize_GetUserRequest(arg) {
  if (!(arg instanceof workflowproto_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetUserRequest(buffer_arg) {
  return workflowproto_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserResponse(arg) {
  if (!(arg instanceof workflowproto_user_pb.UserResponse)) {
    throw new Error('Expected argument of type UserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_UserResponse(buffer_arg) {
  return workflowproto_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getUser: {
    path: '/User/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: workflowproto_user_pb.GetUserRequest,
    responseType: workflowproto_user_pb.UserResponse,
    requestSerialize: serialize_GetUserRequest,
    requestDeserialize: deserialize_GetUserRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
