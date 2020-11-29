import BrushTool from './BrushTool';
import Tool from './Tool';

class Canvas {
  private currentTool: Tool;
  constructor() {
    this.currentTool = new BrushTool();
  }
  public mouseDown(): void {
    this.currentTool.mouseDown();
  }

  public mouseUp(): void {
    this.currentTool.mouseUp();
  }

  public getCurrentTool(): Tool {
    return this.currentTool;
  }

  public setCurrentTool(currentTool: Tool) {
    this.currentTool = currentTool;
  }
}

export default Canvas;
