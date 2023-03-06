
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Hero from "../components/Hero"
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      {/* <SeoHead title='iDigitalDisha | Digital Marketing Service Agency in India' /> */}
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>

    </>
  );
}
