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
        posted(format: "YYYY-MM-DD HH:mm:ss", getDiff: true)
      }
      parents {
        id
        type
        attachment
      }
    }
  }
`;



export const GET_DETAIL_CONTENT = gql`
query GetContents($skip: Int!, $take: Int!) {
  contents(
    id:"",
    project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1",
    full_url:"business/simpals-novye-rabochie-mesta-dlia-vsekh-zhelaiushchikh"
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
      posted(format: "YYYY-MM-DD HH:mm:ss", getDiff: true)
    }
    parents {
      id
      type
      attachment
    }
  }
}
`;
