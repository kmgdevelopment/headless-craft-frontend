import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const listingKeyArgs = ['section', 'search', 'relatedTo'];

const queryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                entries: offsetLimitPagination(listingKeyArgs),
                entryCount: {
                    keyArgs: listingKeyArgs
                }
            },
        },
    },
});

export default queryCache;