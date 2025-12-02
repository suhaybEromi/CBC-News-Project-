import News from "./News";
import LatestNews from "./LatestNews";
import KurdishNews from "./KurdishNews";
import WorldNews from "./WorldNews";
import Health from "./Health";
import Economics from "./Economics";
import Programs from "./Programs";
import AllNews from "./AllNews";
import Opinion from "./Opinion";
import Culture from "./Culture";
import Footer from "./Footer";

export default function Home() {
  return (
    <header dir="rtl">
      <News />
      <LatestNews />
      <KurdishNews />
      <WorldNews />
      <Health />
      <Economics />
      <Programs />
      <AllNews />
      <Opinion />
      <Culture />
      <Footer />
    </header>
  );
}
