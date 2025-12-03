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
import Sport from "./Sport";

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
      <Sport />
      <Opinion />
      <Culture />
    </header>
  );
}
