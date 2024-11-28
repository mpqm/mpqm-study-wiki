import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Events from '../components/HotDeal/HotDeal';
import Shortcut from '../components/Shortcut/Shortcut';
import MoveToTop from '../components/Layout/MoveToTop';

function HomePage() {

  return (
    <div>
      <Header />
      <HomeBanner />
      <Shortcut/>
      {/* <Top100 /> */}
      {/* <Categories /> */}
      <Events />
      <Footer />
      {/* <MoveToTop/> */}
      <MoveToTop />
    </div>
  );
}

export default HomePage;
