import { gql } from "@apollo/client";

const GET_RECIPE_ENTRIES = gql`
    query GetRecipeEntries(
        $section: [String]
        $limit: Int
        $offset: Int
        $search: String
        $orderBy: String
        $relatedTo: [QueryArgument]
    ) {
        entries(
            section: $section
            limit: $limit
            offset: $offset
            search: $search
            orderBy: $orderBy
            relatedTo: $relatedTo
        ) {
            id
            title
            uri
            ... on recipe_Entry {
                image {
                    url
                }
            }
        }
        entryCount(
            section: $section
            search: $search
            orderBy: $orderBy
            relatedTo: $relatedTo
        )
    }
`;

export default GET_RECIPE_ENTRIES;