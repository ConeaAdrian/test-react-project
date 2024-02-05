import { gql } from '@apollo/client';

export const GET_CONTENTS = gql`
  query GetContents {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: 0
      take: 10
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