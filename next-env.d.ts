/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphqls' {
  import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
  export default typeof DocumentNode
}

declare module '*.yml'
