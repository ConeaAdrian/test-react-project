import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/queries";
import { FilterCategoryContainer, CategoryElementContainer, CategoryLink, FiltreButton } from './Category.styles'; // Importăm componente Styled

const Category = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data.topics || [];

  return (
    <FilterCategoryContainer>
      <CategoryElementContainer>
        {articles.map((article) => (
          <span key={article.id}>
            <CategoryLink>
              {article.title.ru}
            </CategoryLink>
          </span>
        ))}
      </CategoryElementContainer>
      <FiltreButton>+</FiltreButton>
    </FilterCategoryContainer>
  );
};

export default Category;
