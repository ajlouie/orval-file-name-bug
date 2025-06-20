/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.27-SNAPSHOT
 */

import {
  McpServer
} from '@modelcontextprotocol/sdk/server/mcp.js';
  
import {
  StdioServerTransport
} from '@modelcontextprotocol/sdk/server/stdio.js';  

import {
  updatePetHandler,
  addPetHandler,
  findPetsByStatusHandler,
  findPetsByTagsHandler,
  getPetByIdHandler,
  updatePetWithFormHandler,
  deletePetHandler,
  uploadFileHandler,
  getInventoryHandler,
  placeOrderHandler,
  getOrderByIdHandler,
  deleteOrderHandler,
  createUserHandler,
  createUsersWithListInputHandler,
  loginUserHandler,
  logoutUserHandler,
  getUserByNameHandler,
  updateUserHandler,
  deleteUserHandler
} from './handlers';
import {
  updatePetBody,
  addPetBody,
  findPetsByStatusQueryParams,
  findPetsByTagsQueryParams,
  getPetByIdParams,
  updatePetWithFormParams,
  updatePetWithFormQueryParams,
  deletePetParams,
  uploadFileParams,
  uploadFileQueryParams,
  uploadFileBody,
  placeOrderBody,
  getOrderByIdParams,
  deleteOrderParams,
  createUserBody,
  createUsersWithListInputBody,
  loginUserQueryParams,
  getUserByNameParams,
  updateUserParams,
  updateUserBody,
  deleteUserParams
} from './tool-schemas.zod';

const server = new McpServer({
  name: 'swaggerPetstoreOpenAPI30Server',
  version: '1.0.0',
});


server.tool(
  'updatePet',
  'Update an existing pet.',
  {
    bodyParams: updatePetBody
  },
  updatePetHandler
);

server.tool(
  'addPet',
  'Add a new pet to the store.',
  {
    bodyParams: addPetBody
  },
  addPetHandler
);

server.tool(
  'findPetsByStatus',
  'Finds Pets by status.',
  {
    queryParams: findPetsByStatusQueryParams
  },
  findPetsByStatusHandler
);

server.tool(
  'findPetsByTags',
  'Finds Pets by tags.',
  {
    queryParams: findPetsByTagsQueryParams
  },
  findPetsByTagsHandler
);

server.tool(
  'getPetById',
  'Find pet by ID.',
  {
    pathParams: getPetByIdParams
  },
  getPetByIdHandler
);

server.tool(
  'updatePetWithForm',
  'Updates a pet in the store with form data.',
  {
    pathParams: updatePetWithFormParams,
    queryParams: updatePetWithFormQueryParams
  },
  updatePetWithFormHandler
);

server.tool(
  'deletePet',
  'Deletes a pet.',
  {
    pathParams: deletePetParams
  },
  deletePetHandler
);

server.tool(
  'uploadFile',
  'Uploads an image.',
  {
    pathParams: uploadFileParams,
    queryParams: uploadFileQueryParams,
    bodyParams: uploadFileBody
  },
  uploadFileHandler
);

server.tool(
  'getInventory',
  'Returns pet inventories by status.',
  getInventoryHandler
);

server.tool(
  'placeOrder',
  'Place an order for a pet.',
  {
    bodyParams: placeOrderBody
  },
  placeOrderHandler
);

server.tool(
  'getOrderById',
  'Find purchase order by ID.',
  {
    pathParams: getOrderByIdParams
  },
  getOrderByIdHandler
);

server.tool(
  'deleteOrder',
  'Delete purchase order by identifier.',
  {
    pathParams: deleteOrderParams
  },
  deleteOrderHandler
);

server.tool(
  'createUser',
  'Create user.',
  {
    bodyParams: createUserBody
  },
  createUserHandler
);

server.tool(
  'createUsersWithListInput',
  'Creates list of users with given input array.',
  {
    bodyParams: createUsersWithListInputBody
  },
  createUsersWithListInputHandler
);

server.tool(
  'loginUser',
  'Logs user into the system.',
  {
    queryParams: loginUserQueryParams
  },
  loginUserHandler
);

server.tool(
  'logoutUser',
  'Logs out current logged in user session.',
  logoutUserHandler
);

server.tool(
  'getUserByName',
  'Get user by user name.',
  {
    pathParams: getUserByNameParams
  },
  getUserByNameHandler
);

server.tool(
  'updateUser',
  'Update user resource.',
  {
    pathParams: updateUserParams,
    bodyParams: updateUserBody
  },
  updateUserHandler
);

server.tool(
  'deleteUser',
  'Delete user resource.',
  {
    pathParams: deleteUserParams
  },
  deleteUserHandler
);

const transport = new StdioServerTransport();

server.connect(transport).then(() => {
  console.error('MCP server running on stdio');
}).catch(console.error);
