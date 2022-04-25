import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ProjectSort from '../components/ProjectSort'
import { ProjectsProps } from 'types/types';
import {client} from '../lib/sanityClient'

export default function Home({ posts }: ProjectsProps)  {
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

      <Header />
      <ProjectSort />
      <p>{posts}</p>    
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await client.fetch(`*[_type == 'post']{
      _id,
      title,
      'slug': slug.current,
      mainImage{
          asset->{
              _id,
              url
          },
          alt
      }
  }`);

  return{
      props: {
          posts,
      }
  }
}

