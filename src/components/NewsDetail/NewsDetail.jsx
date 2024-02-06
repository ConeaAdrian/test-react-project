import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_DETAIL_CONTENT } from "../../graphql/queries";
import { ContentPage, ArticleContainer, ArticleDataInfo, LogoJournal, ViewStatistic, Title, Description, Documentation, ArticleImage, LogoContainer } from './NewsDetail.styles'; // Importăm componente Styled-components
import CommingElement from '../CommingElement/CommingElement';
import Category from '../Category/Category';
import LogoPoint from "../../assets/images/new-point-logo.svg";
import EyesImg from "../../assets/images/svgviewer-output.svg";

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
    <ContentPage>
      <LogoContainer>
        <img src={LogoPoint} alt="LogoPoint" className="logo-img" />
        <p className="slogan">Gandeste si clarifica liber</p>
      </LogoContainer>
      <Category />
      <ArticleContainer>
        <ArticleDataInfo>
          <LogoJournal
            src={baseLogoImageUrl(article.parents[1].attachment)}
            alt={article.parents[0].url.en}
          />
          <p>{getPostedDateTime(article.dates.posted)}</p>
          <ViewStatistic>
            <img src={EyesImg} alt="EyesImg" className="eyes-img" />
            <p>{article.counters.view}</p>
          </ViewStatistic>
        </ArticleDataInfo>
        <Title>{article.title.long}</Title>
        <Description>{article.description.intro}</Description>
        <ArticleImage
          src={getImageUrl(article.thumbnail)}
          alt="News Image"
        />
        {formatDescription(article.description.long)}
        <CommingElement />
      </ArticleContainer>
    </ContentPage>
  );
};

export default NewsDetail;
