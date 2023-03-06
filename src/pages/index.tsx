
import {Carousel} from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Section } from "../components/Section";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

<<<<<<< HEAD
import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from "@prismicio/client"
import { Cookie } from "../components/Cookies"
import { Ofertas } from "../components/Encarte"

import ReactGa from "react-ga"

ReactGa.initialize('G-YNVHGNBNGN')

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
=======
export default function Content() {
    return (
        <>
            <Header />
            <Section />
            <Carousel/>
            <Main/>
            <SectionOne/>
            <SectionTwo/>
            <Footer/>
        </>
    )
}
>>>>>>> 6e7f864263021792495e9398b414791fd5617c4b
