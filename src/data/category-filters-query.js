import { gql } from "@apollo/client";

const GET_CATEGORY_FILTERS = gql`
    query GetCategoryFilters($group: [String]) {
        categories(group: $group) {
            id
            title
            slug
        }
    }
`;

export default GET_CATEGORY_FILTERS;