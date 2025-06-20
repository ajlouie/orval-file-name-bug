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
  HttpClient
} from '@angular/common/http';
import type {
  HttpContext,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse as AngularHttpResponse
} from '@angular/common/http';

import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams
} from '../swaggerPetstoreOpenAPI30.schemas';



type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};



@Injectable({ providedIn: 'root' })
export class PetService {
  constructor(
    private http: HttpClient,
  ) {}/**
 * Update an existing pet by Id.
 * @summary Update an existing pet.
 */
 updatePet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    updatePet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    updatePet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;updatePet<TData = Pet>(
    pet: Pet, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.put<TData>(
      `https://petstore3.swagger.io/api/v3/pet`,
      pet,options
    );
  }
/**
 * Add a new pet to the store.
 * @summary Add a new pet to the store.
 */
 addPet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    addPet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    addPet<TData = Pet>(
    pet: Pet, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;addPet<TData = Pet>(
    pet: Pet, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `https://petstore3.swagger.io/api/v3/pet`,
      pet,options
    );
  }
/**
 * Multiple status values can be provided with comma separated strings.
 * @summary Finds Pets by status.
 */
 findPetsByStatus<TData = Pet[]>(
    params?: FindPetsByStatusParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    findPetsByStatus<TData = Pet[]>(
    params?: FindPetsByStatusParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    findPetsByStatus<TData = Pet[]>(
    params?: FindPetsByStatusParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;findPetsByStatus<TData = Pet[]>(
    params?: FindPetsByStatusParams, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `https://petstore3.swagger.io/api/v3/pet/findByStatus`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags.
 */
 findPetsByTags<TData = Pet[]>(
    params?: FindPetsByTagsParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    findPetsByTags<TData = Pet[]>(
    params?: FindPetsByTagsParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    findPetsByTags<TData = Pet[]>(
    params?: FindPetsByTagsParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;findPetsByTags<TData = Pet[]>(
    params?: FindPetsByTagsParams, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `https://petstore3.swagger.io/api/v3/pet/findByTags`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * Returns a single pet.
 * @summary Find pet by ID.
 */
 getPetById<TData = Pet>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    getPetById<TData = Pet>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    getPetById<TData = Pet>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;getPetById<TData = Pet>(
    petId: number, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,options
    );
  }
/**
 * Updates a pet resource based on the form data.
 * @summary Updates a pet in the store with form data.
 */
 updatePetWithForm<TData = Pet>(
    petId: number,
    params?: UpdatePetWithFormParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    updatePetWithForm<TData = Pet>(
    petId: number,
    params?: UpdatePetWithFormParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    updatePetWithForm<TData = Pet>(
    petId: number,
    params?: UpdatePetWithFormParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;updatePetWithForm<TData = Pet>(
    petId: number,
    params?: UpdatePetWithFormParams, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,undefined,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * Delete a pet.
 * @summary Deletes a pet.
 */
 deletePet<TData = void>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    deletePet<TData = void>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    deletePet<TData = void>(
    petId: number, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;deletePet<TData = void>(
    petId: number, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.delete<TData>(
      `https://petstore3.swagger.io/api/v3/pet/${petId}`,options
    );
  }
/**
 * Upload image of the pet.
 * @summary Uploads an image.
 */
 uploadFile<TData = ApiResponse>(
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'body' }
  ): Observable<TData>;
    uploadFile<TData = ApiResponse>(
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'response' }
  ): Observable<AngularHttpResponse<TData>>;
    uploadFile<TData = ApiResponse>(
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: Omit<HttpClientOptions, 'observe'> & { observe?: 'events' }
  ): Observable<HttpEvent<TData>>;uploadFile<TData = ApiResponse>(
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `https://petstore3.swagger.io/api/v3/pet/${petId}/uploadImage`,
      uploadFileBody,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
};

export type UpdatePetClientResult = NonNullable<Pet>
export type AddPetClientResult = NonNullable<Pet>
export type FindPetsByStatusClientResult = NonNullable<Pet[]>
export type FindPetsByTagsClientResult = NonNullable<Pet[]>
export type GetPetByIdClientResult = NonNullable<Pet>
export type UpdatePetWithFormClientResult = NonNullable<Pet>
export type DeletePetClientResult = NonNullable<void>
export type UploadFileClientResult = NonNullable<ApiResponse>
