/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateMyFirstTypeInput = {
  id?: string | null,
  title: string,
  content: string,
  author: string,
  price?: number | null,
  rating?: number | null,
};

export type ModelMyFirstTypeConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelMyFirstTypeConditionInput | null > | null,
  or?: Array< ModelMyFirstTypeConditionInput | null > | null,
  not?: ModelMyFirstTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMyFirstTypeInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  author?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteMyFirstTypeInput = {
  id?: string | null,
};

export type ModelMyFirstTypeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  price?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelMyFirstTypeFilterInput | null > | null,
  or?: Array< ModelMyFirstTypeFilterInput | null > | null,
  not?: ModelMyFirstTypeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateMyFirstTypeMutationVariables = {
  input: CreateMyFirstTypeInput,
  condition?: ModelMyFirstTypeConditionInput | null,
};

export type CreateMyFirstTypeMutation = {
  createMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type UpdateMyFirstTypeMutationVariables = {
  input: UpdateMyFirstTypeInput,
  condition?: ModelMyFirstTypeConditionInput | null,
};

export type UpdateMyFirstTypeMutation = {
  updateMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type DeleteMyFirstTypeMutationVariables = {
  input: DeleteMyFirstTypeInput,
  condition?: ModelMyFirstTypeConditionInput | null,
};

export type DeleteMyFirstTypeMutation = {
  deleteMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type GetMyFirstTypeQueryVariables = {
  id: string,
};

export type GetMyFirstTypeQuery = {
  getMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type ListMyFirstTypesQueryVariables = {
  filter?: ModelMyFirstTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyFirstTypesQuery = {
  listMyFirstTypes:  {
    __typename: "ModelMyFirstTypeConnection",
    items:  Array< {
      __typename: "MyFirstType",
      id: string,
      title: string,
      content: string,
      author: string,
      price: number | null,
      rating: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMyFirstTypeSubscription = {
  onCreateMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnUpdateMyFirstTypeSubscription = {
  onUpdateMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};

export type OnDeleteMyFirstTypeSubscription = {
  onDeleteMyFirstType:  {
    __typename: "MyFirstType",
    id: string,
    title: string,
    content: string,
    author: string,
    price: number | null,
    rating: number | null,
  } | null,
};
