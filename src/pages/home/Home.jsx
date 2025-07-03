import { products } from './../../products-data';
import ProductSection from './../../components/ProductSection';
import HomeBanner from '../../components/HomeBanner';
import SpecialOffers from '../../components/SpecialOffers';
import StoresMap from '../../components/StoresMap';
import Articles from '../../components/Articles';
const promotions = products.filter(p => p.tag === "Promotions");
const newArrivals = products.filter(p => p.tag === "New Arrivals");
const previouslyBought = products.filter(p => p.tag === "Previously Bought");

function HomePage() {
  return (
    <div>
      <HomeBanner />
      <div className="bg-[#fffbee] py-6">
      
      <div className="max-w-5/2 mx-auto px-4 sm:px-6 md:px-8">
        <ProductSection title="🔥 Promotions" data={promotions} tag="Promotions" />
        <ProductSection title="🆕 New Arrivals" data={newArrivals} tag="New Arrivals" />
        <ProductSection title="🛍️ Previously Bought" data={previouslyBought} tag="Previously Bought" />

        <SpecialOffers />
        <StoresMap/>
        <Articles/>


      </div>

       
    </div>
    </div>

    
  );
}

export default HomePage;
