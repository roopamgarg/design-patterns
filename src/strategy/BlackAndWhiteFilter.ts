import Filter from './Filter';

class BlackAndWhiteFilter implements Filter {
  filter(image: string): void {
    console.log('Applying Black And White Filter');
  }
}

export default BlackAndWhiteFilter;
