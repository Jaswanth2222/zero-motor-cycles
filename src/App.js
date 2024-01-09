import './App.css';
import BikeFeatures from './components/BikeFeatures';
import BikeParts from './components/BikeParts';
import HomeVideo from './components/HomeVideo';
import ImageComponent from './components/ImageComponent';
import VideoPlayer from './components/VideoPlayer';



function App() {
  return (
    <div className="App">
      <HomeVideo />
      <ImageComponent />
      <BikeFeatures />
      <BikeParts />
      <VideoPlayer />
    </div>
  );
}

export default App;
