import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FEATURED_ARTICLES } from "../../graphql/queries";
import { UpcomingEventsContainer, EventsBlock } from './CommingElement.styles';

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const getTimeElapsed = (timestamp) => {
  const currentTime = Date.now();
  const postTime = new Date(timestamp * 1000);
  const elapsed = Math.round((currentTime - postTime) / 60000);

  if (elapsed < 1) {
    return "Прямо сейчас";
  } else if (elapsed < 60) {
    return `Сейчас ${elapsed} ${elapsed === 1 ? "минута" : "минуты"}`;
  } else if (elapsed < 1440) {
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
      <UpcomingEventsContainer>
        {articles.map((article) => (
          <EventsBlock key={article.id}>
            <img
              src={getImageUrl(article.thumbnail)}
              className="news-image"
              alt="News Image"
            />
            <h3>{article.title.short}</h3>
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
          </EventsBlock>
        ))}
      </UpcomingEventsContainer>
    </div>
  );
};

export default CommingElement;
