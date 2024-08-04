import React from 'react';
import Jumbotron from './components/Jumbotron';
import CarouselComponent from './components/Carousel';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <div id="Important Information">
        <Jumbotron />
      </div>
      <div id="Carousel" className="mt-5">
        <CarouselComponent />
      </div>
    </Layout>
  );
}

export default App;


