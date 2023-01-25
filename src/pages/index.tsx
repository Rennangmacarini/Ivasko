
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

type Posts = {
  id: string;
  banner: string;
  contentone:string;
  contenttwo: string;
  contenttwos: string;
  contentthree:string
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
    <Ofertas/>
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
    fetch: ['publication.content', 'publication.banner', 'publication.contentone', 'publication.contenttwo', 'publication.contenttwos', 'publication.contentthree'],
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
      contentthree:post.data.contentthree.url
    };
  });
     return{
      props: {
          posts
      }
     }
} 