// src/components/NewsList/NewsList.js
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENTS } from "../../graphql/queries";
import "./NewsList.scss";
import LogoPoint from "../../assets/images/new-point-logo.svg";

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

  const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;
  

const NewsList = () => {
  const { loading, error, data } = useQuery(GET_CONTENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="general-page">
      <div className="logo-container">
        <img src={LogoPoint} alt="LogoPoint" className="logo-img" />
        <p className="slogan">Gandeste si clarifica liber</p>
      </div>
      <div className="news-information">
        <h2>Astazi</h2>
        <div className="block-information">
          {data.contents.map((article) => (
            <article key={article.id}>
              <a href={article.url} target="_blank" rel="">
                <img
                  src={getImageUrl(article.thumbnail)}
                  className="news-image"
                  alt="News Image"
                />
              </a>
              <div className="news-details">
                <h3 className="news-title">{article.title.short}</h3>
                <p className="news-description">{article.description.intro}</p>
                <div className="journal-info">
                <img
                  src={baseLogoImageUrl(article.parents[1].attachment)}
                  className="logo-journal"
                  alt="Journal Logo"
                />
                  <p className="time-post">{article.dates.posted}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
