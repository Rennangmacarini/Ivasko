import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Story } from "../components/Story";

import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from '@prismicio/client';

type Posts = {
    id: string;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string
  }
  
  interface PostProps{
    posts: Posts[]
  }


export default function About({posts} : PostProps) {
    return (
        <>
            <Header />
            <Story story = {posts}/>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
  
    const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'history')],
    {
      fetch: ['history.content', 'history.one', 'history.two', 'history.three', 'history.four', 'history.five'],
    })
     
    const posts = response.results.map(post => {
      console.log("data", post.data)
      console.log("post", post)
      return {
        id: post.uid,
        one:post.data.one.url,
        two:post.data.two.url,
        three:post.data.three.url,
        four:post.data.four.url,
        five:post.data.five.url,
      };
    });
       return{
        props: {
            posts
        }
       }
  } 