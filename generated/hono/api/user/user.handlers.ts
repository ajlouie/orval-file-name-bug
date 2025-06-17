import { createFactory } from 'hono/factory';
import { zValidator } from '../filename.validator';
import { CreateUserContext,
CreateUsersWithListInputContext,
LoginUserContext,
LogoutUserContext,
GetUserByNameContext,
UpdateUserContext,
DeleteUserContext } from './user.context';
import {
createUserBody,
createUserResponse,
createUsersWithListInputBody,
createUsersWithListInputResponse,
loginUserQueryParams,
loginUserResponse,
,
getUserByNameParams,
getUserByNameResponse,
updateUserParams,
updateUserBody,
deleteUserParams
} from './user.zod'

const factory = createFactory();
export const createUserHandlers = factory.createHandlers(
zValidator('json', createUserBody),
zValidator('response', createUserResponse),
async (c: CreateUserContext) => {

  },
);
export const createUsersWithListInputHandlers = factory.createHandlers(
zValidator('json', createUsersWithListInputBody),
zValidator('response', createUsersWithListInputResponse),
async (c: CreateUsersWithListInputContext) => {

  },
);
export const loginUserHandlers = factory.createHandlers(
zValidator('query', loginUserQueryParams),
zValidator('response', loginUserResponse),
async (c: LoginUserContext) => {

  },
);
export const logoutUserHandlers = factory.createHandlers(
async (c: LogoutUserContext) => {

  },
);
export const getUserByNameHandlers = factory.createHandlers(
zValidator('param', getUserByNameParams),
zValidator('response', getUserByNameResponse),
async (c: GetUserByNameContext) => {

  },
);
export const updateUserHandlers = factory.createHandlers(
zValidator('param', updateUserParams),
zValidator('json', updateUserBody),
async (c: UpdateUserContext) => {

  },
);
export const deleteUserHandlers = factory.createHandlers(
zValidator('param', deleteUserParams),
async (c: DeleteUserContext) => {

  },
);