import styled from 'styled-components';

export const GeneralPage = styled.div`
  padding: 40px 80px;
  font-family: Onest, sans-serif, Helvetica;
  background: rgb(245, 245, 245);
  
  @media (max-width: 992px) {
    padding: 40px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;

  .logo-img {
    max-width: 170px;
    width: 100%;
    height: 48px;
  }

  .slogan {
    color: rgb(128, 126, 124);
    font-size: 12px;
  }
`;

export const NewsInformation = styled.div`
  max-width: 100%;
  padding: 24px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);

  .block-information {
    display: flex;
    flex-direction: column;

    article {
      margin: 0 0 24px;
      height: 125px;
      display: flex;
      gap: 10px;
    }

    .news-image {
      width: 240px;
      height: 100%;
      border-radius: 8px;

      @media (max-width: 600px) {
        width: 124px;
        height: 70px;
      }
    }

    .news-details {
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
      }

      .journal-info {
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
    }
  }
`;

export const NewsTitle = styled.h3`
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  &:hover {
    color: rgb(255, 71, 0);
  }
`;

export const NewsDescription = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 10px;
  color: rgb(15, 23, 42);

  @media (max-width: 768px) {
    display: none;
  }
`;
