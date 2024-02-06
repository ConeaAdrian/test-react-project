import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENTS } from "../../graphql/queries";
import { Link } from "react-router-dom"; // Importăm Link
import "./NewsList.scss";
import LogoPoint from "../../assets/images/new-point-logo.svg";

const getImageUrl = (thumbnail) =>
  `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

const baseLogoImageUrl = (attachment) =>
  `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

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
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
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
  }, [handleScroll, loading]);

  if (loading && !articles.length) return <p>Loading...</p>; // Show loading only if no articles are loaded yet
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
          {articles.map((article) => (
            <article key={article.id}>
              {/* Înlocuiește a cu Link */}
              <Link to={`/news-detail/${article.parents[0].url.en}/${article.url}`}>
                <img
                  src={getImageUrl(article.thumbnail)}
                  className="news-image"
                  alt="News Image"
                />
              </Link>
              <div className="news-details">
                {/* <h2>{article.parents[0].url.en}</h2> */}
                <Link to={`/news-detail/${article.parents[0].url.en}/${article.url}`}>
                  <h3 className="news-title">{article.title.short}</h3>
                </Link>
                <p className="news-description">
                  {article.description.intro.length > 160
                    ? `${article.description.intro.slice(0, 160)}...`
                    : article.description.intro}
                </p>
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
