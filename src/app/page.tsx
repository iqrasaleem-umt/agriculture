import Hero from "@/components/hero";
import Services from "./views/services";
import Choose from "./views/choose";
import ScrollAreaHorizontalDemo from "./views/Scrollareahorizontaldemo";
import Testimonials from "./views/testimonials";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div><Hero/>
    <Services/>
    <Choose/>
    <ScrollAreaHorizontalDemo/>
  <Testimonials/>
  <Footer/>
    </div>
  );
}
