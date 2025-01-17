import { ApolloError } from "@apollo/client"

export const ErrorMessage = ({ error }: { error: ApolloError | undefined}) => {
  return error ? <p className="text-red-500 px-8 py-4">{error.message}</p> : null
}