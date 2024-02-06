import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_DETAIL_CONTENT } from "../../graphql/queries";

import CommingElements from '../CommingElement/CommingElement';

import Category from '../Category/Category';


import LogoPoint from "../../assets/images/new-point-logo.svg";
import EyesImg from "../../assets/images/svgviewer-output.svg";

import "./NewsDetail.scss";

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const getPostedDateTime = (timestamp) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const postTime = new Date(timestamp * 1000);
  const day = postTime.getDate();
  const month = months[postTime.getMonth()];
  const year = postTime.getFullYear();
  let hour = postTime.getHours();
  let minute = postTime.getMinutes();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  return `${day} ${month} ${year}, ${hour}:${minute}`;
};

const NewsDetail = () => {
  const { category_slug, article_slug } = useParams();
  const fullUrl = `${category_slug}/${article_slug}`;

  const { loading, error, data } = useQuery(GET_DETAIL_CONTENT, {
    variables: { fullUrl },
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

  const getImageUrl = (thumbnail) =>
    `https://i.simpalsmedia.com/point.md/news/900x900/${thumbnail}`;

  return (
    <div className="content-page">
      <div className="logo-container">
        <img src={LogoPoint} alt="LogoPoint" className="logo-img" />
        <p className="slogan">Gandeste si clarifica liber</p>
      </div>
      <Category/>

      <div className="content-page__article">
        <div className="article-data-info">
          <img
            className="logo-journal"
            src={baseLogoImageUrl(article.parents[1].attachment)}
            alt={article.parents[0].url.en}
          />
          <p>{getPostedDateTime(article.dates.posted)}</p>
          <div className="viwe-statistic">
            <img src={EyesImg} alt="EyesImg" className="eyes-img" />

            <p>{article.counters.view}</p>
          </div>
        </div>
        <h1 className="content-page__title">{article.title.long}</h1>

        <h3 className="news-title">{article.description.intro}</h3>

        <img
          src={getImageUrl(article.thumbnail)}
          className="news-image"
          alt="News Image"
        />
        {formatDescription(article.description.long)}
        <CommingElements/>
      </div>
    </div>
  );
};

export default NewsDetail;
