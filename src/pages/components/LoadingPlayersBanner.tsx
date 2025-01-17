import classnames from "classnames";
import { ComponentProps } from "react";

export const LoadingPlayersBanner = ({ className, loading } : ComponentProps<"div"> & { loading: boolean }) => (
  loading ? <div className={classnames('mt-4 p-8 border border-gray-200 rounded-md', className)}><p>Loading the players onto the coach...</p></div> : null
);