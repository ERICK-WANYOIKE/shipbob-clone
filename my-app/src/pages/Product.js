import NavBar from "../components/NavBar";
import ProductHero from "../subComponents/ProductsHero";
import ProductFeature from "../subComponents/ProductFeature";
import Footer from "../components/Footer";
import ProductBanner from "../subComponents/ProductBanner";

const Product = () => {
    return (  
        <div>
        <NavBar/>
        <ProductHero/>
        <ProductFeature/>
        <ProductBanner/>
        <Footer/>
      
        </div>        
    );
}
 
export default Product;