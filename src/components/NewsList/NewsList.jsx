import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENTS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import { GeneralPage, LogoContainer, NewsInformation, NewsTitle, NewsDescription } from './NewsList.styles'; // Importăm componente Styled
import LogoPoint from "../../assets/images/new-point-logo.svg";
import Category from '../Category/Category';

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const getTimeElapsed = (timestamp) => {
  const currentTime = Date.now();
  const postTime = new Date(timestamp * 1000);
  const elapsed = Math.round((currentTime - postTime) / 60000); // Timpul trecut în minute

  if (elapsed < 1) {
    return 'Прямо сейчас';
  } else if (elapsed < 60) {
    return `Сейчас ${elapsed} ${elapsed === 1 ? 'минута' : 'минуты'}`;
  } else if (elapsed < 1440) { // 60 * 24 = 1440 minute (1 zi)
    const hours = Math.floor(elapsed / 60);
    return `Сейчас ${hours} ${hours === 1 ? 'час' : 'часы'}`;
  } else {
    const days = Math.floor(elapsed / 1440);
    return `Сейчас ${days} ${days === 1 ? 'день' : 'дни'}`;
  }
};

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);
  const take = 15;
  const { loading, error, data, fetchMore } = useQuery(GET_CONTENTS, {
    variables: {
      skip,
      take,
    },
  });

  React.useEffect(() => {
    if (data && data.contents) {
      setArticles((prevArticles) => [...prevArticles, ...data.contents]);
    }
  }, [data]);

  const handleScroll = () => {
    if (
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      100
    ) {
      if (!loading) {
        fetchMore({
          variables: {
            skip: skip + take,
            take,
          },
        });
        setSkip(skip + take);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, loading, skip]);

  if (loading && !articles.length) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <GeneralPage>
      <LogoContainer>
        <img src={LogoPoint} alt="LogoPoint" className="logo-img" />
        <p className="slogan">Gandeste si clarifica liber</p>
      </LogoContainer>
      <Category />
      <NewsInformation>
        <h2>Сегодня</h2>
        <div className="block-information">
          {articles.map((article) => (
            <article key={article.id}>
              <Link to={`/news-detail/${article.parents[0].url.en}/${article.url}`}>
                <img
                  src={getImageUrl(article.thumbnail)}
                  className="news-image"
                  alt="News Image"
                />
              </Link>
              <div className="news-details">
                <Link to={`/news-detail/${article.parents[0].url.en}/${article.url}`}>
                  <NewsTitle>{article.title.short}</NewsTitle>
                </Link>
                <NewsDescription>
                  {article.description.intro.length > 160
                    ? `${article.description.intro.slice(0, 160)}...`
                    : article.description.intro}
                </NewsDescription>
                <div className="journal-info">
                  <img
                    src={baseLogoImageUrl(article.parents[1].attachment)}
                    className="logo-journal"
                    alt="Journal Logo"
                  />
                  <p className="time-post">{getTimeElapsed(article.dates.posted)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </NewsInformation>
    </GeneralPage>
  );
};

export default NewsList;
