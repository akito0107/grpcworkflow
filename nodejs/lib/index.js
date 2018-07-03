const { UserService, UserClient } = require('./workflowproto/user_grpc_pb');
const { UserResponse, GetUserRequest } = require('./workflowproto/user_pb');
const grpc = require('grpc')

module.exports = {
  UserService,
  UserClient,
  GetUserRequest,
  UserResponse,
  grpc,
};