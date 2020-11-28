import EditorState from './EditorState';

class Editor {
  private content: string;
  constructor() {
    this.content = '';
  }

  public createState(): EditorState {
    return new EditorState(this.content);
  }

  public restore(state: EditorState | undefined): void {
    if (typeof state !== 'undefined') {
      this.content = state.getContent();
    } else {
      this.content = '';
    }
  }
  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }
}

export default Editor;
