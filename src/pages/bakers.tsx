import { Bakery } from "../components/Bakery";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";




export default function Bakers() {
    return (
        <>
            <Header />
            <Bakery/>
            <Carousel/>
            <Footer/>
        </>
    )
}