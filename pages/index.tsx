import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ProjectSort from '../components/ProjectSort'
import { ProjectsProps } from '../types/types';
import {client} from '../lib/sanityClient'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react'
import Link from 'next/link'

export default function Home({ projects }: ProjectsProps)  {

  const [sorted, setSorted] = useState(projects);


  const filter = (cata = `ALL`) => {
    if (cata === `ALL`) {
      return setSorted(projects);
    } else {
      return setSorted(
        projects.filter((project: any) => project.categoryog.includes(cata))
      );
    }
  };
  return (
    <Layout>
      <Head>
        <title>FRONTEND ARCHIVE 💪</title>
        <meta
          name="description"
          content="DEVANSH'S CATALOGUE OF PROJECTS, CHALLENGES & EXPERIMENTS"
        />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Header length={projects.length} />
      <ProjectSort filter={filter} />
      <ProjectCard projects={sorted}/>  
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const projects = await client.fetch(query);

  // const category = '*[_type == "category"]';
  // const categoryData = await client.fetch(category);

  return {
    props: { projects }
  }
}
