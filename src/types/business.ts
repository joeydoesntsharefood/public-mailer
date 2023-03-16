type businesseResponse<T> = { success: T | undefined, error: any | undefined }

export type IBusiness<T, R> = (data: T) => Promise<businesseResponse<R>>