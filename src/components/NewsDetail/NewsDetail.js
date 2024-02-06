import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_DETAIL_CONTENT } from "../../graphql/queries";

import "./NewsDetail.scss";

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const NewsDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DETAIL_CONTENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const article = data.content;

  const formatDescription = (description) => {
    const paragraphs = description.split("\n");

    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="p1"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ));
  };

  return (
    <div className="content-page">
      <div className="content-page__article">
        <h1 className="content-page__title">{article.title.short}</h1>

        {/* Afișează descrierea folosind funcția de formatare */}
        {formatDescription(article.description.long)}

        {/* Afișează imaginea și linkul */}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img
            src={getImageUrl(article.thumbnail)}
            className="news-image"
            alt="News Image"
          />
        </a>
      </div>
    </div>
  );
};

export default NewsDetail;
