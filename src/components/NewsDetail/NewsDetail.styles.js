// NewsDetail.styles.js
import styled from 'styled-components';

export const ContentPage = styled.div`
  padding: 40px 80px;
  font-family: Onest, sans-serif, Helvetica;
  background: rgb(245, 245, 245);

  @media (max-width: 768px) {
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

export const ArticleContainer = styled.div`
  width: auto;
  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ArticleImage = styled.img`
  width: -webkit-fill-available;
  object-fit: contain;
  padding: 20px 0;
`;

export const Title = styled.h1`
  color: rgb(15, 23, 42);
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 44px;
  font-weight: 700;
  margin: 12px 0 0;
`;

export const Description = styled.p`
  color: rgb(15, 23, 42);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-top: 16px;
  margin-bottom: 24px;
  line-height: 28px;
`;

export const Documentation = styled.p`
  color: rgb(15, 23, 42);
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 27px;
`;

export const LogoJournal = styled.img`
  width: 20px;
  height: 20px;
`;

export const ArticleDataInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    margin: 0;
  }
`;

export const ViewStatistic = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .eyes-img {
    width: 20px;
    height: 20px;
  }
`;
