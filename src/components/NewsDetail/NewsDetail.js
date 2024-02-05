import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DETAIL_CONTENT } from "../../graphql/queries";

import "./NewsDetail.scss";

// const getImageUrl = (thumbnail) =>
//   `https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`;

//   const baseLogoImageUrl = (attachment) =>
//   `https://i.simpalsmedia.com/point.md/logo/${attachment}`;

const NewsDetail = () => {
  // const { loading, error, data } = useQuery(GET_DETAIL_CONTENT);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="content-page">
      {/* {data.contents.map((article) => ( */}
      <div className="content-page__article">
        <div className="journal-info">
          <img className="logo-journal" alt="Journal Logo" />
          <p className="time-post">Radiomoldova</p>
        </div>
        <h1 className="content-page__title">
          Кристиан-Леон Цуркану: Мы поддерживаем проевропейское руководство в
          Кишиневе
        </h1>
        <h2 className="content-page__description">
          Дипломат поздравил Кристину Герасимов с вступлением в должность
          заместителя премьер-министра по вопросам европейской интеграции и
          заверил, что Румыния будет и впредь поддерживать Республику Молдова на
          ее европейском пути.
        </h2>
        <a target="_blank" rel="">
          <img
            // src={getImageUrl(article.thumbnail)}
            className="news-image"
            alt="News Image"
          />
        </a>
        <p className="content-page__documentation">
          "Я заверил вице-премьера Герасимов в нашей постоянной поддержке во
          всех областях, где она необходима. Европейская интеграция Республики
          Молдова является приоритетной задачей, требующей постоянных и
          последовательных усилий. Мы поддерживаем проевропейское руководство в
          Кишиневе на пути реформ и модернизации Республики Молдова", — написал
          Кристиан-Леон Цуркану на своей странице в Facebook, передает
          radiomoldova.md В то же время посол Румынии в Кишиневе сообщил, что на
          встрече с Кристиной Герасимов обсуждались вопросы двустороннего
          сотрудничества в области европейских дел между Бухарестом и Кишиневом,
          а также поддержка Румынии в этом направлении.
        </p>
      </div>
      {/* ))} */}
    </div>
  );
};

export default NewsDetail;
