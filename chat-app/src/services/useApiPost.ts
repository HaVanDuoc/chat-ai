import { getTokenUser } from '@/actions/utils';
import funcUtils from '@/utils/funcUtils';

const useApiPost = async <T extends unknown = unknown>(url: string, payload: T) => {
    const isServer = typeof window === 'undefined';
    const res = await fetch(funcUtils.combineURL(url), {
        method: 'POST',
        body: JSON.stringify(payload),
        ...funcUtils.PostHeaders(isServer ? await getTokenUser() : undefined),
    });
    return await res.json();
};

export default useApiPost;
