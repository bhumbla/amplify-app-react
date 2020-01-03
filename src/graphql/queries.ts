// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMyFirstType = `query GetMyFirstType($id: ID!) {
  getMyFirstType(id: $id) {
    id
    title
    content
    price
    rating
  }
}
`;
export const listMyFirstTypes = `query ListMyFirstTypes(
  $filter: ModelMyFirstTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyFirstTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      price
      rating
    }
    nextToken
  }
}
`;
