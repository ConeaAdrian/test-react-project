import styled from 'styled-components';

export const UpcomingEventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0;
    
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    overflow: scroll hidden;
    height: max-content;
  }

  .news-image {
    width: 100%;
    border-radius: 4px;
    position: relative;
    @media (max-width: 768px) {
   min-width: 210px;
   height: 100%;
   min-height: 110px;
  }
  }
  .time-post {
    margin: 0;
    font-size: 14px;
    color: rgb(128, 128, 128);
    line-height: 0;
    width: max-content;
  }
`;

export const EventsBlock = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  max-width: 825px;
  background-color: rgb(255, 255, 255);
  text-align: left;
  border-radius: 5px;
  overflow-wrap: break-word;

  h3 {
    font-size: 14px;
    line-height: 18px;
    max-width: 222px;
    font-weight: 500;
    margin: 0px;
    -webkit-line-clamp: 5;
    overflow-wrap: break-word;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .article-data-info {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;

    p {
      margin: 0;
    }

    .logo-journal {
      width: 16px;
      height: 16px;
      border-radius: 2px;
    }
  }
`;
