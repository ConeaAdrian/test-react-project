import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/queries";

import "./Category.scss";

const CommingElement = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data.topics || [];

  return (
    <div className="filter-category">
      <div className="category-element">
        {articles.map((article) => (
          <span>
            <a className="category-element__element" key={article.id}>
              {article.title.ru}
            </a>
          </span>
        ))}
      </div>
      <div className="filtre">+</div>
    </div>
  );
};

export default CommingElement;
