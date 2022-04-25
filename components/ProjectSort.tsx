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

const ProjectSort:React.FC = () => {
    
    return (
        <Container>
            <Tags>All</Tags>
            <Tags>React</Tags>
            <Tags>Next</Tags>
            <Tags>Javascript</Tags>
            <Tags>HTML</Tags>
            <Tags>Sanity</Tags>
            <Tags>Firebase</Tags>
        </Container>
    )
}
export default ProjectSort;