import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};









export type Query = {
  viewer: User;
  viewerRemote: Array<Maybe<UserRemote>>;
};

export type User = {
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type UserRemote = {
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PartialFragment = Pick<User, 'id' | 'name'>;

export type PartialRemoteFragment = Pick<UserRemote, 'id' | 'name'>;

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { viewer: (
    Pick<User, 'status'>
    & PartialFragment
  ) };

export type ViewerRemoteQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerRemoteQuery = { viewerRemote: Array<Maybe<(
    Pick<UserRemote, 'status'>
    & PartialRemoteFragment
  )>> };

export const PartialFragmentDoc = gql`
    fragment Partial on User {
  id
  name
}
    `;
export const PartialRemoteFragmentDoc = gql`
    fragment PartialRemote on UserRemote {
  id
  name
}
    `;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    ...Partial
    status
  }
}
    ${PartialFragmentDoc}`;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
      }
export function useViewerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = ApolloReactCommon.QueryResult<ViewerQuery, ViewerQueryVariables>;
export const ViewerRemoteDocument = gql`
    query ViewerRemote {
  viewerRemote {
    ...PartialRemote
    status
  }
}
    ${PartialRemoteFragmentDoc}`;

/**
 * __useViewerRemoteQuery__
 *
 * To run a query within a React component, call `useViewerRemoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerRemoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerRemoteQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerRemoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerRemoteQuery, ViewerRemoteQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerRemoteQuery, ViewerRemoteQueryVariables>(ViewerRemoteDocument, baseOptions);
      }
export function useViewerRemoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerRemoteQuery, ViewerRemoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerRemoteQuery, ViewerRemoteQueryVariables>(ViewerRemoteDocument, baseOptions);
        }
export type ViewerRemoteQueryHookResult = ReturnType<typeof useViewerRemoteQuery>;
export type ViewerRemoteLazyQueryHookResult = ReturnType<typeof useViewerRemoteLazyQuery>;
export type ViewerRemoteQueryResult = ApolloReactCommon.QueryResult<ViewerRemoteQuery, ViewerRemoteQueryVariables>;
import { ObjectID } from 'mongodb';
export type UserRemoteDbObject = {
  _id: ObjectID,
  name: string,
  status: string,
};
