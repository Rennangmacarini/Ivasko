
import {Carousel} from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Section } from "../components/Section";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

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