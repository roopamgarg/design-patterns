import Compressor from './Compressor';

class PNGCompressor implements Compressor {
  compress(image: string): void {
    console.log('Compressing to PNG');
  }
}

export default PNGCompressor;
