class EditorState {
  private content: string;
  constructor(content: string) {
    this.content = content;
  }

  /**
   * getContent
   */
  public getContent(): string {
    return this.content;
  }
}

export default EditorState;
