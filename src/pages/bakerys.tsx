import { Bakery } from "../components/Bakery";
import { Departament } from "../components/Departament";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";

export default function Padaria() {
  return (
    <>
      <Header />
      <Departament />
      <Bakery />
      <Footer />
    </>
  );
}
