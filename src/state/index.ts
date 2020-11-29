import BrushTool from './BrushTool';
import Canvas from './Canvas';
import SelectionTool from './SelectionTool';

const main = () => {
  const canvas: Canvas = new Canvas();
  const brushTool: BrushTool = new BrushTool();
  const selectionTool: SelectionTool = new SelectionTool();

  canvas.setCurrentTool(brushTool);
  canvas.mouseDown();
  canvas.mouseUp();

  canvas.setCurrentTool(selectionTool);
  canvas.mouseDown();
  canvas.mouseUp();
};

export default main;
