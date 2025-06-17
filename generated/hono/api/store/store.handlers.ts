import { createFactory } from 'hono/factory';
import { zValidator } from '../filename.validator';
import { GetInventoryContext,
PlaceOrderContext,
GetOrderByIdContext,
DeleteOrderContext } from './store.context';
import {
getInventoryResponse,
placeOrderBody,
placeOrderResponse,
getOrderByIdParams,
getOrderByIdResponse,
deleteOrderParams
} from './store.zod'

const factory = createFactory();
export const getInventoryHandlers = factory.createHandlers(
zValidator('response', getInventoryResponse),
async (c: GetInventoryContext) => {

  },
);
export const placeOrderHandlers = factory.createHandlers(
zValidator('json', placeOrderBody),
zValidator('response', placeOrderResponse),
async (c: PlaceOrderContext) => {

  },
);
export const getOrderByIdHandlers = factory.createHandlers(
zValidator('param', getOrderByIdParams),
zValidator('response', getOrderByIdResponse),
async (c: GetOrderByIdContext) => {

  },
);
export const deleteOrderHandlers = factory.createHandlers(
zValidator('param', deleteOrderParams),
async (c: DeleteOrderContext) => {

  },
);