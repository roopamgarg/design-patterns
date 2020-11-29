import Filter from './Filter';

class HighContrastFilter implements Filter {
  filter(image: string): void {
    console.log('Applying High Contrast Filter');
  }
}

export default HighContrastFilter;
