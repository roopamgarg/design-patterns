import Compressor from './Compressor';

class JPEGCompressor implements Compressor {
  compress(image: string): void {
    console.log('Compressing to JPEG');
  }
}
