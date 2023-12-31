import React from 'react';
import { ProjCard } from '../../../components/projCard/ProjCard';
import projPhoto from '../../../assets/img/image-1.webp';

import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';

const projData = [
  {
    src: projPhoto,
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:"#"
  },
  
  {
    src: projPhoto,
    title: "Project 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:"#"
  },
  {
    src: projPhoto,
    title: "Project 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:"#"
  },
  {
    src: projPhoto,
    title: "Project 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:"#"
  },

]



export const Projects: React.FC = () => {
  return (
    <S.Projects id= {'projects'}>
      <Container>
        <S.H2>Projects</S.H2>
        <S.CardBox>

          {projData.map((p) =>{
            return  <ProjCard
            src={p.src} 
            title={p.title}
            text={p.text}
            link={p.link}
          />
          })}

        </S.CardBox>
      </Container>
    </S.Projects>
  );
};

