import { createFactory } from 'hono/factory';
import { zValidator } from '../filename.validator';
import { UpdatePetContext,
AddPetContext,
FindPetsByStatusContext,
FindPetsByTagsContext,
GetPetByIdContext,
UpdatePetWithFormContext,
DeletePetContext,
UploadFileContext } from './pet.context';
import {
updatePetBody,
updatePetResponse,
addPetBody,
addPetResponse,
findPetsByStatusQueryParams,
findPetsByStatusResponse,
findPetsByTagsQueryParams,
findPetsByTagsResponse,
getPetByIdParams,
getPetByIdResponse,
updatePetWithFormParams,
updatePetWithFormQueryParams,
updatePetWithFormResponse,
deletePetParams,
uploadFileParams,
uploadFileQueryParams,
uploadFileBody,
uploadFileResponse
} from './pet.zod'

const factory = createFactory();
export const updatePetHandlers = factory.createHandlers(
zValidator('json', updatePetBody),
zValidator('response', updatePetResponse),
async (c: UpdatePetContext) => {

  },
);
export const addPetHandlers = factory.createHandlers(
zValidator('json', addPetBody),
zValidator('response', addPetResponse),
async (c: AddPetContext) => {

  },
);
export const findPetsByStatusHandlers = factory.createHandlers(
zValidator('query', findPetsByStatusQueryParams),
zValidator('response', findPetsByStatusResponse),
async (c: FindPetsByStatusContext) => {

  },
);
export const findPetsByTagsHandlers = factory.createHandlers(
zValidator('query', findPetsByTagsQueryParams),
zValidator('response', findPetsByTagsResponse),
async (c: FindPetsByTagsContext) => {

  },
);
export const getPetByIdHandlers = factory.createHandlers(
zValidator('param', getPetByIdParams),
zValidator('response', getPetByIdResponse),
async (c: GetPetByIdContext) => {

  },
);
export const updatePetWithFormHandlers = factory.createHandlers(
zValidator('param', updatePetWithFormParams),
zValidator('query', updatePetWithFormQueryParams),
zValidator('response', updatePetWithFormResponse),
async (c: UpdatePetWithFormContext) => {

  },
);
export const deletePetHandlers = factory.createHandlers(
zValidator('param', deletePetParams),
async (c: DeletePetContext) => {

  },
);
export const uploadFileHandlers = factory.createHandlers(
zValidator('param', uploadFileParams),
zValidator('query', uploadFileQueryParams),
zValidator('json', uploadFileBody),
zValidator('response', uploadFileResponse),
async (c: UploadFileContext) => {

  },
);