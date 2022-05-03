const { default: NavBar } = require("../components/NavBar")
const { default: Hero } = require("../components/Hero")
const { default: Banner } = require("../components/Banner")
const { default: SecBanner } = require("../components/SecBanner")
const { default: SuBanner } = require("../components/SubBanner")
const { default: MainWraper } = require("../components/MainWraper")
const { default: SubWraper } = require("../components/SubWraper")
const { default: Content } = require("../components/Content")
const { default: Header } = require("../components/Header")
const { Features } = require("../components/Features")
const { default: Footer } = require("../components/Footer")

const Landing = () => {
    return ( 
       <div>
        <NavBar/>
        <Hero/>
        <Banner/>
        <SecBanner/>
        <SuBanner/>
        <MainWraper/>
        <SubWraper/>
        <Content/>
        <Header/>
        <Features/>
        <Footer/>

  
       </div>
     );
}
 
export default Landing;