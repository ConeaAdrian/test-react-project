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
  query GetContents {
    content(
      id: "9ad58a0b-3a6c-4852-a436-346f13780559"
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      full_url: "business/simpals-novye-rabochie-mesta-dlia-vsekh-zhelaiushchikh"
    ) {
      counters {
        view
      }
      title {
        short
      }
      thumbnail
      dates {
        posted
      }
      description {
        long
      }
    }
  }
`;
