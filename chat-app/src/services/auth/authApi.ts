import { API_ROUTE_CONFIG } from "@/common/configs";
import { TAuthResponseData, TLoginPayload } from "@/models";
import useApiPost from "../useApiPost";
import { TLoginForm } from "@/models/auth/auth";

const authApi = {
    login: (payload: TLoginForm): Promise<TAuthResponseData> => {
        return useApiPost(API_ROUTE_CONFIG.auth.login, payload);
    },
};

export default authApi;
