import Compressor from './Compressor';
import Filter from './Filter';

class ImageStorage {
  public store(fileName: string, compressor: Compressor, filter: Filter): void {
    compressor.compress(fileName);
    filter.filter(fileName);
  }
}

export default ImageStorage;
