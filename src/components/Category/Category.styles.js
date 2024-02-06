// Category.styles.js
import styled from 'styled-components';

export const FilterCategoryContainer = styled.div`
  width: 100%;
  position: relative;
  height: 40px;
  z-index: 999;
  display: grid;
  margin: 0 auto;
  column-gap: 16px;
  grid-template-columns: 1fr 40px;
  margin-bottom: 20px;
`;

export const CategoryElementContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const CategoryLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  text-transform: capitalize;
  color: rgb(15, 23, 42);
  font-family: Onest, sans-serif, Helvetica;
  display: flex;
`;

export const FiltreButton = styled.div`
  height: 40px;
  width: 100%;
  max-width: 240px;
  margin: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(169, 191, 115);
  color: rgb(255, 255, 255);
  font-size: 24px;
`;
