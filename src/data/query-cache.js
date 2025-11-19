import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const queryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                entries: offsetLimitPagination()
            },
        },
    },
});

export default queryCache;