import { ApolloClient, HttpLink } from '@apollo/client';
import queryCache from './query-cache';

const queryClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://headless-craft-sb-backend.ddev.site/index.php?action=graphql/api',
        headers: {
            Authorization: 'Bearer wljOG3k_6PczhQ57NKHMIQvlzNKi9vWk'
        }
    }),
    cache: queryCache
});

export default queryClient;