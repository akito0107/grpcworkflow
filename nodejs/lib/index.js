const {UserService, UserClient} = require('./workflowproto/user_pb');
const {GetUserRequest, UserResponse} = require("./workflowproto/user_grpc_pb");

module.exports = {
  UserService,
  UserClient,
  GetUserRequest,
  UserResponse,
};