import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Advert from "../components/Advert";
import Nfts from "../components/Nfts";
import Metabnb from "../components/Metabnb";
import Contact from "../components/Contact";


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Advert />
        <Nfts />
        <Metabnb />
        <Contact />

    </div>
  )
}

export default HomePage