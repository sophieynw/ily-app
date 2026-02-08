import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchLoveLetter } from "../api/fetchLoveLetter.ts";
import type {FetchLoveLetterResponse} from "../types/types.ts";

export const useFetchLoveLetter = (name: string): UseQueryResult<FetchLoveLetterResponse, Error> =>
    useQuery({
        queryKey: ['loveLetter', name],
        queryFn: async (): Promise<FetchLoveLetterResponse> => {
            return await fetchLoveLetter(name.toLowerCase());
        },
        enabled: !!name,
    })
