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
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams
} from '../swaggerPetstoreOpenAPI30.schemas';


/**
 * Update an existing pet by Id.
 * @summary Update an existing pet.
 */
export type updatePetResponse200 = {
  data: Pet
  status: 200
}

export type updatePetResponse400 = {
  data: void
  status: 400
}
    
export type updatePetResponseComposite = updatePetResponse200 | updatePetResponse400;
    
export type updatePetResponse = updatePetResponseComposite & {
  headers: Headers;
}

export const getUpdatePetUrl = () => {


  

  return `https://petstore3.swagger.io/api/v3/pet`
}

export const updatePet = async (pet: Pet, options?: RequestInit): Promise<updatePetResponse> => {
  
  const res = await fetch(getUpdatePetUrl(),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      pet,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: updatePetResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as updatePetResponse
}


/**
 * Add a new pet to the store.
 * @summary Add a new pet to the store.
 */
export type addPetResponse200 = {
  data: Pet
  status: 200
}

export type addPetResponse400 = {
  data: void
  status: 400
}
    
export type addPetResponseComposite = addPetResponse200 | addPetResponse400;
    
export type addPetResponse = addPetResponseComposite & {
  headers: Headers;
}

export const getAddPetUrl = () => {


  

  return `https://petstore3.swagger.io/api/v3/pet`
}

export const addPet = async (pet: Pet, options?: RequestInit): Promise<addPetResponse> => {
  
  const res = await fetch(getAddPetUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      pet,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: addPetResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as addPetResponse
}


/**
 * Multiple status values can be provided with comma separated strings.
 * @summary Finds Pets by status.
 */
export type findPetsByStatusResponse200 = {
  data: Pet[]
  status: 200
}

export type findPetsByStatusResponse400 = {
  data: void
  status: 400
}
    
export type findPetsByStatusResponseComposite = findPetsByStatusResponse200 | findPetsByStatusResponse400;
    
export type findPetsByStatusResponse = findPetsByStatusResponseComposite & {
  headers: Headers;
}

export const getFindPetsByStatusUrl = (params?: FindPetsByStatusParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["status"];

    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) => normalizedParams.append(key, v === null ? 'null' : v.toString()));
      return;
    }
      
    
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://petstore3.swagger.io/api/v3/pet/findByStatus?${stringifiedParams}` : `https://petstore3.swagger.io/api/v3/pet/findByStatus`
}

export const findPetsByStatus = async (params?: FindPetsByStatusParams, options?: RequestInit): Promise<findPetsByStatusResponse> => {
  
  const res = await fetch(getFindPetsByStatusUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: findPetsByStatusResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as findPetsByStatusResponse
}


/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags.
 */
export type findPetsByTagsResponse200 = {
  data: Pet[]
  status: 200
}

export type findPetsByTagsResponse400 = {
  data: void
  status: 400
}
    
export type findPetsByTagsResponseComposite = findPetsByTagsResponse200 | findPetsByTagsResponse400;
    
export type findPetsByTagsResponse = findPetsByTagsResponseComposite & {
  headers: Headers;
}

export const getFindPetsByTagsUrl = (params?: FindPetsByTagsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["tags"];

    if (value instanceof Array && explodeParameters.includes(key)) {
      value.forEach((v) => normalizedParams.append(key, v === null ? 'null' : v.toString()));
      return;
    }
      
    
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://petstore3.swagger.io/api/v3/pet/findByTags?${stringifiedParams}` : `https://petstore3.swagger.io/api/v3/pet/findByTags`
}

export const findPetsByTags = async (params?: FindPetsByTagsParams, options?: RequestInit): Promise<findPetsByTagsResponse> => {
  
  const res = await fetch(getFindPetsByTagsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: findPetsByTagsResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as findPetsByTagsResponse
}


/**
 * Returns a single pet.
 * @summary Find pet by ID.
 */
export type getPetByIdResponse200 = {
  data: Pet
  status: 200
}

export type getPetByIdResponse400 = {
  data: void
  status: 400
}
    
export type getPetByIdResponseComposite = getPetByIdResponse200 | getPetByIdResponse400;
    
export type getPetByIdResponse = getPetByIdResponseComposite & {
  headers: Headers;
}

export const getGetPetByIdUrl = (petId: number,) => {


  

  return `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const getPetById = async (petId: number, options?: RequestInit): Promise<getPetByIdResponse> => {
  
  const res = await fetch(getGetPetByIdUrl(petId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: getPetByIdResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as getPetByIdResponse
}


/**
 * Updates a pet resource based on the form data.
 * @summary Updates a pet in the store with form data.
 */
export type updatePetWithFormResponse200 = {
  data: Pet
  status: 200
}

export type updatePetWithFormResponse400 = {
  data: void
  status: 400
}
    
export type updatePetWithFormResponseComposite = updatePetWithFormResponse200 | updatePetWithFormResponse400;
    
export type updatePetWithFormResponse = updatePetWithFormResponseComposite & {
  headers: Headers;
}

export const getUpdatePetWithFormUrl = (petId: number,
    params?: UpdatePetWithFormParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://petstore3.swagger.io/api/v3/pet/${petId}?${stringifiedParams}` : `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const updatePetWithForm = async (petId: number,
    params?: UpdatePetWithFormParams, options?: RequestInit): Promise<updatePetWithFormResponse> => {
  
  const res = await fetch(getUpdatePetWithFormUrl(petId,params),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: updatePetWithFormResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as updatePetWithFormResponse
}


/**
 * Delete a pet.
 * @summary Deletes a pet.
 */
export type deletePetResponse200 = {
  data: void
  status: 200
}

export type deletePetResponse400 = {
  data: void
  status: 400
}
    
export type deletePetResponseComposite = deletePetResponse200 | deletePetResponse400;
    
export type deletePetResponse = deletePetResponseComposite & {
  headers: Headers;
}

export const getDeletePetUrl = (petId: number,) => {


  

  return `https://petstore3.swagger.io/api/v3/pet/${petId}`
}

export const deletePet = async (petId: number, options?: RequestInit): Promise<deletePetResponse> => {
  
  const res = await fetch(getDeletePetUrl(petId),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: deletePetResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as deletePetResponse
}


/**
 * Upload image of the pet.
 * @summary Uploads an image.
 */
export type uploadFileResponse200 = {
  data: ApiResponse
  status: 200
}

export type uploadFileResponse400 = {
  data: void
  status: 400
}
    
export type uploadFileResponseComposite = uploadFileResponse200 | uploadFileResponse400;
    
export type uploadFileResponse = uploadFileResponseComposite & {
  headers: Headers;
}

export const getUploadFileUrl = (petId: number,
    params?: UploadFileParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage?${stringifiedParams}` : `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage`
}

export const uploadFile = async (petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: RequestInit): Promise<uploadFileResponse> => {
  
  const res = await fetch(getUploadFileUrl(petId,params),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
    body: JSON.stringify(
      uploadFileBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: uploadFileResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as uploadFileResponse
}


