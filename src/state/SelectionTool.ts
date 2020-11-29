import Tool from './Tool';

class SelectionTool implements Tool {
  mouseDown(): void {
    console.log('Selection Icon');
  }
  mouseUp(): void {
    console.log('Draw A dashed rectangle');
  }
}

export default SelectionTool;
