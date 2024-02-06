import { gql } from '@apollo/client';

export const GET_CONTENTS = gql`
  query GetContents($skip: Int!, $take: Int!) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: $skip
      take: $take
    ) {
      id
      url
      thumbnail
      title {
        short
      }
      description {
        intro
      }
      dates {
        posted
      }
      parents {
        id
        title {
          ru
        },
        url {
          en
        },
        type
        attachment
      }
    }
  }
`;

export const GET_DETAIL_CONTENT = gql`
  query GetContentsDetail($fullUrl: String!) {
    content(
      id: ""
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      full_url: $fullUrl
    ) {
      parents {
        id
        title {
          ru
        }
        url {
          en
        }
        type
        attachment
      }
      dates {
        posted
      }
      counters {
        view
      }
      thumbnail
      disclaimer
      title {
        long
      }
      description {
        intro
        long
      }
      similar {
        id
        url
        thumbnail
        title {
          short
        }
        description {
          intro
        }
        dates {
          posted
        }
        parents {
          url {
            en
          }
          title {
            en
          }
        }
      }
    }
  }
`;


export const GET_FEATURED_ARTICLES = gql`
  query GetFeaturedArticles{
    contentsFeatured(
      project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1",
      lang: "ru",
      take: 10
      by_intervals:true
    ) {
      id,
      url,
      thumbnail,
      dates{
        posted
      },
        title {
          short
        },
      description {
        intro
      },
      parents {
        id,
          url {
            en
          }
          title {
            en
          }
        attachment
        }
      }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    topics(
      project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1",
      lang: "ru",
      skip: 0,
      sort: "ord:asc",
      type: "category",
      visible: true,
      
    ) {
      title {
        ru,
      }
      }
  }
`;