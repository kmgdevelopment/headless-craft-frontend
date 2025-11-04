import { gql } from "@apollo/client";

const GET_RECIPE_ENTRIES = gql`
    query GetRecipeEntries(
        $section: [String]
    ) {
        entries(
            section: $section
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
    }
`;

export default GET_RECIPE_ENTRIES;