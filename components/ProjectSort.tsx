import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 1.5rem;
  padding-bottom: 2rem;
  -webkit-overflow-scrolling: touch;
  margin: 0 -1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tags = styled.button`
  transition: all 0.3s ease;
  height: fit-content;
  width: 100%;
  font-weight: 500;
  font-size: 2rem;
  padding: 0px 16px;
  color: #e4e4e4;
  border: 2px solid;
  border-radius: 6.25rem;
  cursor: pointer;
  background: none;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 524px) {
    font-size: 1.2rem;
  }
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    transform: translateX(0rem) translateY(-0.125rem);
    background: #e4e4e4;
    color: #101010;
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

interface SortProps {
  filter: (cata: string) => void;
}

const ProjectSort = ({ filter }: SortProps) => {
  return (
    <Container>
      <Tags onClick={() => filter(`ALL`)}>ALL</Tags>
      <Tags onClick={() => filter(`REACT`)}>REACT</Tags>
      <Tags onClick={() => filter(`Next`)}>NEXT</Tags>
      <Tags onClick={() => filter(`Sanity`)}>Sanity</Tags>
      <Tags onClick={() => filter(`Javascript`)}>JAVASCRIPT</Tags>
      <Tags onClick={() => filter(`TYPESCRIPT`)}>TYPESCRIPT</Tags>
      <Tags onClick={() => filter(`HTML`)}>HTML</Tags>
      <Tags onClick={() => filter(`SCSS`)}>SCSS</Tags>
    </Container>
  );
};
export default ProjectSort;