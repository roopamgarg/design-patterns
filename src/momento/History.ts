import EditorState from './EditorState';

class History {
  private states: EditorState[];
  constructor() {
    this.states = [];
  }
  public push(state: EditorState): void {
    this.states.push(state);
  }

  public pop(): EditorState | undefined {
    this.states.pop();
    const lastIndex = this.states.length - 1;
    return lastIndex >= 0 ? this.states[lastIndex] : undefined;
  }
}

export default History;
