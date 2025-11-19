import { gql } from "@apollo/client";

const GET_RECIPE_ENTRIES = gql`
    query GetRecipeEntries(
        $section: [String]
        $limit: Int
        $offset: Int
    ) {
        entries(
            section: $section
            limit: $limit
            offset: $offset
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
        )
    }
`;

export default GET_RECIPE_ENTRIES;