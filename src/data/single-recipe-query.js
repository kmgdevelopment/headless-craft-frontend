import { gql } from "@apollo/client";

const GET_SINGLE_RECIPE = gql`
    query GetSingleRecipe(
        $section: [String]
        $slug: [String]!
    ) {
        entry(
            section: $section
            slug: $slug
        ) {
            title
            ... on recipe_Entry {
                image {
                    url
                }
                ingredients {
                    quantity
                    ingredient
                    preparation
                }
                instructions {
                    rawHtml
                }
            }
        }
    }
`;

export default GET_SINGLE_RECIPE;