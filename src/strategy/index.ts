import BlackAndWhiteFilter from './BlackAndWhiteFilter';
import ImageStorage from './ImageStorage';
import PNGCompressor from './PNGCompressor';

const main = () => {
  const imageStorage: ImageStorage = new ImageStorage();
  imageStorage.store('file', new PNGCompressor(), new BlackAndWhiteFilter());
};

export default main;
