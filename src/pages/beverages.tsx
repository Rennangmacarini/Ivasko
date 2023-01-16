import { Beverage } from "../components/Beverage";
import { Departament } from "../components/Departament";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";

export default function Padaria() {
  return (
    <>
      <Header />
      <Departament />
      <Beverage />
      <Footer />
    </>
  );
}
