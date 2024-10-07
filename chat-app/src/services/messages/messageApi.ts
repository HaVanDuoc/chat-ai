// services/messages/messageApi.ts

import useApiPost from "../useApiPost"

interface CompletionPayload {
    messages: Array<{ role: string; content: string }>;
}

const messageApi = {
    completion: (payload: CompletionPayload) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useApiPost("/api/messages/completion", payload)
    }
}

export default messageApi