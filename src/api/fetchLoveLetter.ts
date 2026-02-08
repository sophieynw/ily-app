import type {FetchLoveLetterResponse} from "../types/types.ts";

const errorMessages: Record<number, string> = {
    // 3xx redirects
    301: "Moved permanently — resource has a new URI.",
    302: "Found — temporary redirect.",
    303: "See other — redirect to a different URI.",
    304: "Not modified — cached resource is still valid.",
    307: "Temporary redirect — request should be repeated with same method.",
    308: "Permanent redirect — request should be repeated with same method at new URI.",
    // 4xx client errors
    400: "Bad request — please check your input.",
    401: "Unauthorized — incorrect credentials.",
    403: "Forbidden — permission denied.",
    404: "Not found — the requested resource doesn't exist.",
    405: "Method not allowed — check the HTTP method.",
    408: "Request timeout — please try again.",
    409: "Conflict — request could not be completed due to a conflict.",
    422: "Unprocessable entity — semantic errors in request.",
    429: "Too many requests — please slow down.",
    // 5xx server errors
    500: "Internal server error — something went wrong on the server.",
    501: "Not implemented — server does not support this functionality.",
    502: "Bad gateway — invalid response from upstream server.",
    503: "Service unavailable — the server is temporarily down.",
    504: "Gateway timeout — upstream server did not respond in time.",
};

export async function fetchLoveLetter(name: string): Promise<FetchLoveLetterResponse> {
    const api: string = import.meta.env.VITE_FETCH_LOVE_LETTER_API;

    const endpoint = `${api}/ily?name=${encodeURIComponent(name)}`;
    let response: Response;
    let errorMessage: string = "Failed to fetch love letter.";

    try {
        response = await fetch(endpoint);
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`${errorMessage} Network error: ${err.message}.`);
        }
        throw new Error(`${errorMessage} Network error: ${String(err)}.`);
    }

    // If the response is successful, parse and return the JSON data
    if (response.ok) {
        console.log(`%c[API]: Successful request.`, "color: #FFBF00");
        return (await response.json()) as Promise<FetchLoveLetterResponse>;
    }
    errorMessage +=
        errorMessages[response.status] !== undefined
            ? `${response.status}: ${errorMessages[response.status]}`
            : `Request failed with status ${response.status}.`;
    throw Error(errorMessage);
}