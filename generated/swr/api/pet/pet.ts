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
import axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import useSwr from 'swr';
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr';

import useSWRMutation from 'swr/mutation';
import type {
  SWRMutationConfiguration
} from 'swr/mutation';

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
export const updatePet = (
    pet: Pet, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.put(
      `https://petstore3.swagger.io/api/v3/pet`,
      pet,options
    );
  }



export const getUpdatePetMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: Pet }): Promise<AxiosResponse<Pet>> => {
    return updatePet(arg, options);
  }
}
export const getUpdatePetMutationKey = () => [`https://petstore3.swagger.io/api/v3/pet`] as const;

export type UpdatePetMutationResult = NonNullable<Awaited<ReturnType<typeof updatePet>>>
export type UpdatePetMutationError = AxiosError<void>

/**
 * @summary Update an existing pet.
 */
export const useUpdatePet = <TError = AxiosError<void>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof updatePet>>, TError, Key, Pet, Awaited<ReturnType<typeof updatePet>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUpdatePetMutationKey();
  const swrFn = getUpdatePetMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Add a new pet to the store.
 * @summary Add a new pet to the store.
 */
export const addPet = (
    pet: Pet, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.post(
      `https://petstore3.swagger.io/api/v3/pet`,
      pet,options
    );
  }



export const getAddPetMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: Pet }): Promise<AxiosResponse<Pet>> => {
    return addPet(arg, options);
  }
}
export const getAddPetMutationKey = () => [`https://petstore3.swagger.io/api/v3/pet`] as const;

export type AddPetMutationResult = NonNullable<Awaited<ReturnType<typeof addPet>>>
export type AddPetMutationError = AxiosError<void>

/**
 * @summary Add a new pet to the store.
 */
export const useAddPet = <TError = AxiosError<void>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof addPet>>, TError, Key, Pet, Awaited<ReturnType<typeof addPet>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAddPetMutationKey();
  const swrFn = getAddPetMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Multiple status values can be provided with comma separated strings.
 * @summary Finds Pets by status.
 */
export const findPetsByStatus = (
    params?: FindPetsByStatusParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet[]>> => {
    return axios.get(
      `https://petstore3.swagger.io/api/v3/pet/findByStatus`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getFindPetsByStatusKey = (params?: FindPetsByStatusParams,) => [`https://petstore3.swagger.io/api/v3/pet/findByStatus`, ...(params ? [params]: [])] as const;

export type FindPetsByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByStatus>>>
export type FindPetsByStatusQueryError = AxiosError<void>

/**
 * @summary Finds Pets by status.
 */
export const useFindPetsByStatus = <TError = AxiosError<void>>(
  params?: FindPetsByStatusParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof findPetsByStatus>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getFindPetsByStatusKey(params) : null);
  const swrFn = () => findPetsByStatus(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags.
 */
export const findPetsByTags = (
    params?: FindPetsByTagsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet[]>> => {
    return axios.get(
      `https://petstore3.swagger.io/api/v3/pet/findByTags`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getFindPetsByTagsKey = (params?: FindPetsByTagsParams,) => [`https://petstore3.swagger.io/api/v3/pet/findByTags`, ...(params ? [params]: [])] as const;

export type FindPetsByTagsQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByTags>>>
export type FindPetsByTagsQueryError = AxiosError<void>

/**
 * @summary Finds Pets by tags.
 */
export const useFindPetsByTags = <TError = AxiosError<void>>(
  params?: FindPetsByTagsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof findPetsByTags>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getFindPetsByTagsKey(params) : null);
  const swrFn = () => findPetsByTags(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Returns a single pet.
 * @summary Find pet by ID.
 */
export const getPetById = (
    petId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.get(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,options
    );
  }



export const getGetPetByIdKey = (petId: number,) => [`https://petstore3.swagger.io/api/v3/pet/${petId}`] as const;

export type GetPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPetById>>>
export type GetPetByIdQueryError = AxiosError<void>

/**
 * @summary Find pet by ID.
 */
export const useGetPetById = <TError = AxiosError<void>>(
  petId: number, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getPetById>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(petId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetPetByIdKey(petId) : null);
  const swrFn = () => getPetById(petId, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Updates a pet resource based on the form data.
 * @summary Updates a pet in the store with form data.
 */
export const updatePetWithForm = (
    petId: number,
    params?: UpdatePetWithFormParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.post(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,undefined,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getUpdatePetWithFormMutationFetcher = (petId: number,
    params?: UpdatePetWithFormParams, options?: AxiosRequestConfig) => {
  return (_: Key, __: { arg: Arguments }): Promise<AxiosResponse<Pet>> => {
    return updatePetWithForm(petId, params, options);
  }
}
export const getUpdatePetWithFormMutationKey = (petId: number,
    params?: UpdatePetWithFormParams,) => [`https://petstore3.swagger.io/api/v3/pet/${petId}`, ...(params ? [params]: [])] as const;

export type UpdatePetWithFormMutationResult = NonNullable<Awaited<ReturnType<typeof updatePetWithForm>>>
export type UpdatePetWithFormMutationError = AxiosError<void>

/**
 * @summary Updates a pet in the store with form data.
 */
export const useUpdatePetWithForm = <TError = AxiosError<void>>(
  petId: number,
    params?: UpdatePetWithFormParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof updatePetWithForm>>, TError, Key, Arguments, Awaited<ReturnType<typeof updatePetWithForm>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUpdatePetWithFormMutationKey(petId,params);
  const swrFn = getUpdatePetWithFormMutationFetcher(petId,params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Delete a pet.
 * @summary Deletes a pet.
 */
export const deletePet = (
    petId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.delete(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,options
    );
  }



export const getDeletePetMutationFetcher = (petId: number, options?: AxiosRequestConfig) => {
  return (_: Key, __: { arg: Arguments }): Promise<AxiosResponse<void>> => {
    return deletePet(petId, options);
  }
}
export const getDeletePetMutationKey = (petId: number,) => [`https://petstore3.swagger.io/api/v3/pet/${petId}`] as const;

export type DeletePetMutationResult = NonNullable<Awaited<ReturnType<typeof deletePet>>>
export type DeletePetMutationError = AxiosError<void>

/**
 * @summary Deletes a pet.
 */
export const useDeletePet = <TError = AxiosError<void>>(
  petId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof deletePet>>, TError, Key, Arguments, Awaited<ReturnType<typeof deletePet>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getDeletePetMutationKey(petId);
  const swrFn = getDeletePetMutationFetcher(petId, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Upload image of the pet.
 * @summary Uploads an image.
 */
export const uploadFile = (
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ApiResponse>> => {
    return axios.post(
      `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage`,
      uploadFileBody,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getUploadFileMutationFetcher = (petId: number,
    params?: UploadFileParams, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: Blob }): Promise<AxiosResponse<ApiResponse>> => {
    return uploadFile(petId, arg, params, options);
  }
}
export const getUploadFileMutationKey = (petId: number,
    params?: UploadFileParams,) => [`https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage`, ...(params ? [params]: [])] as const;

export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>
export type UploadFileMutationError = AxiosError<void>

/**
 * @summary Uploads an image.
 */
export const useUploadFile = <TError = AxiosError<void>>(
  petId: number,
    params?: UploadFileParams, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof uploadFile>>, TError, Key, Blob, Awaited<ReturnType<typeof uploadFile>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUploadFileMutationKey(petId,params);
  const swrFn = getUploadFileMutationFetcher(petId,params, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
