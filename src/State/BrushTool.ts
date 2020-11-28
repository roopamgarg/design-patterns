import Tool from './Tool';

class BrushTool implements Tool {
  mouseDown(): void {
    console.log('Brush Icon');
  }
  mouseUp(): void {
    console.log('Draw A line');
  }
}

export default BrushTool;
