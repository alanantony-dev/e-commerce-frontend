import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import TopProducts from "./components/TopProducts";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
const App=()=>{
  return <div>
    <Navbar/>
    <HeroSection/>
    <TopProducts/>
    <div className="flex flex-col w-full m-auto lg:w-[80%]">
    <FeatureSection title="Why Choose Us" description="We make online shopping simple,safe, and rewarding with premium 
                products,fast delivery,and customer-first service. " ctaTitle="Learn More" srcImg="/assets/first-feature.png"/>
    <FeatureSection classNames="flex-row-reverse" title="Shop by Category" description="Find everything you need in just a few clicks - from fashion and electronics to home essentials" ctaTitle="Browse Categories" srcImg="/assets/second.png"/>
    <FeatureSection title="Trending Right Now" description="Discover whats hot ! Shop the products everyone is loving today." ctaTitle="View Best Sellers" srcImg="/assets/third.png"/>
    <FeatureSection classNames="flex-row-reverse" title="Limited-Time Deals" description="Grab exclusive discounts and special offers before they are gone ." ctaTitle="Shop Deals" srcImg="/assets/four.png"/>
    </div>
    <Footer/>
    </div>;
};
export default App;