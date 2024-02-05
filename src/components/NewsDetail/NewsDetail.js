

// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_ARTICLE } from '../../graphql/queries';
// import './NewsDetail.scss';

// const NewsDetail = ({ match }) => {
//   const { loading, error, data } = useQuery(GET_ARTICLE, {
//     variables: { articleId: match.params.id },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const article = data.article;

//   return (
//     <div className="news-detail">
//       <h2>{article.title.long}</h2>
//       <p>{article.description.long}</p>
//       {/* Alte informații despre știre */}
//     </div>
//   );
// };

// export default NewsDetail;


import React from 'react'

import { useQuery } from '@apollo/client';

import './NewsDetail.scss';

const NewsDetail = () => {
  return (
    <div>
      
    </div>
  )
}

export default NewsDetail
