import { TParams } from "@/models/global";

const funcUtils = {
    combineURL: (url: string, params?: TParams) => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const version = process.env.NEXT_PUBLIC_API_VERSION;
        const NEXT_PUBLIC_API_CLIENT = process.env.NEXT_PUBLIC_API_CLIENT;
        if (params) {
            const query = new URLSearchParams(params).toString();
            return `${url}?${query}`;
        }
        return `${url}`;
    },

    PostHeaders: (token?: string) => {
        const store_token = funcUtils.getToken();
        const tokenUser = getCookie(appConfig.cookies.tokenKey);

        const fetchHeaders = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token ?? tokenUser ?? store_token}`,
            },
        } as TFetchHeaders;
        return fetchHeaders;
    },

    /*================================ Get Token =================================*/
    getToken: () => {
        return process.env.NEXT_PUBLIC_STORE_TOKEN;
    },
}

export default funcUtils