import Nabar from '@/components/Nabar';
import { GetStarted1, GetStarted2, Hero, Insights, WhatsNew1,WhatsNew2, World } from '../../sections'

const Home = () => (
  <div className="bg-white overflow-hidden">
   

    <div className="relative">
      <Hero/>
      <br/>
      <br/>
      <br/>

      <World/>
      <GetStarted1 />
      <div className=" z-0" />
      <WhatsNew1 />
    </div>
    <div className="relative">
      <GetStarted2 />
      <div className=" z-0" />
      <WhatsNew2 />
    </div>
  </div>
);

export default Home;