import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FEATURED_ARTICLES } from "../../graphql/queries";

import "./CommingElement.scss";

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const getTimeElapsed = (timestamp) => {
  const currentTime = Date.now();
  const postTime = new Date(timestamp * 1000);
  const elapsed = Math.round((currentTime - postTime) / 60000); // Timpul trecut în minute

  if (elapsed < 1) {
    return "Прямо сейчас";
  } else if (elapsed < 60) {
    return `Сейчас ${elapsed} ${elapsed === 1 ? "минута" : "минуты"}`;
  } else if (elapsed < 1440) {
    // 60 * 24 = 1440 minute (1 zi)
    const hours = Math.floor(elapsed / 60);
    return `Сейчас ${hours} ${hours === 1 ? "час" : "часы"}`;
  } else {
    const days = Math.floor(elapsed / 1440);
    return `Сейчас ${days} ${days === 1 ? "день" : "дни"}`;
  }
};

const CommingElement = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const articles = data.contentsFeatured;

  return (
    <div className="upcoming-events">
      <h1>Топ медиа-событий</h1>
      <div className="upcoming-events__content">
        {articles.map((article) => (
          <div key={article.id} className="events-block">
            <img
              src={getImageUrl(article.thumbnail)}
              className="news-image"
              alt="News Image"
            />
            <h3>{article.title.short}</h3>
            {/* <p>{article.description.intro}</p> */}
            <div className="article-data-info">
              <img
                className="logo-journal"
                src={baseLogoImageUrl(article.parents[1].attachment)}
                alt={article.parents[0].url.en}
              />
              <p className="time-post">
                {getTimeElapsed(article.dates.posted)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommingElement;
