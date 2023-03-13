
import { Banner } from "../components/Banner"
import { ContentOne } from "../components/ContentOne"
import { ContentThree } from "../components/ContentThree"
import { ContentTwo } from "../components/ContentTwo"
import { Video } from "../components/filme"
import { Footer } from "../components/footer"
import { Header } from "../components/Header"

import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from "@prismicio/client"
import { Cookie } from "../components/Cookies"
import { Ofertas } from "../components/Encarte"
import { Carousel } from "../components/carousel"

type Posts = {
  id: string;
  banner: string;
  contentone:string;
  contenttwo: string;
  contenttwos: string;
  contentthree:string;
  carouselone: string;
  carouseltwo: string;
  carouselthree: string;
  carouselfour: string;
  carouselfive: string;
  carouselsix: string;
  carouselseven: string;
  carouseleight: string
}

interface PostProps{
  posts: Posts[]
}
  

export default function Home({posts} : PostProps){

  return(
    <> 
    <Header/>
    <Banner banner={posts} />
    <ContentOne contentone={posts}/>
    <ContentTwo contenttwo={posts}/>
    <ContentThree contentthree={posts}/>
    <Video/>
    <Ofertas carousel={posts}/>
    <Cookie/>
    <Footer/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
  [Prismic.predicates.at('document.type', 'publication')],
  {
    fetch: ['publication.content', 'publication.banner', 'publication.contentone', 'publication.contenttwo', 'publication.contenttwos', 'publication.contentthree', 'publication.carouselone', 'publication.carouseltwo', 'publication.carouselthree', 'publication.carouselfour', 'publication.carouselfive', 'publication.carouselsix', 'publication.carouselseven', 'publication.carouseleight'],
  })
   
  const posts = response.results.map(post => {
    console.log("data", post.data)
    console.log("post", post)
    return {
      id: post.uid,
      banner:post.data.banner.url,
      contentone:post.data.contentone.url,
      contenttwo:post.data.contenttwo.url,
      contenttwos:post.data.contenttwos.url,
      contentthree:post.data.contentthree.url,
      carouselone:post.data.carouselone.url,
      carouseltwo:post.data.carouseltwo.url,
      carouselthree:post.data.carouselthree.url,
      carouselfour:post.data.carouselfour.url,
      carouselfive:post.data.carouselfive.url,
      carouselsix:post.data.carouselsix.url,
      carouselseven:post.data.carouselseven.url,
      carouseleight:post.data.carouseleight.url,
      
      
    };
  });
     return{
      props: {
          posts
      }
     }
} 