import Iterator from './iterator';

class BrowserHistory {
  private urls: string[];
  constructor() {
    this.urls = [];
  }

  public push(url: string): void {
    this.urls.push(url);
  }

  public pop(): string | undefined {
    return this.urls.pop();
  }

  public getUrls(): string[] {
    return this.urls;
  }
  public createIterator(): Iterator<string> {
    return new this.ListIterator(this);
  }
  // tslint:disable-next-line: max-classes-per-file
  public ListIterator = class implements Iterator<string> {
    private history: BrowserHistory;
    private index: number;
    constructor(history: BrowserHistory) {
      this.history = history;
      this.index = 0;
    }
    hasNext(): boolean {
      return this.index < this.history.urls.length;
    }
    current(): string {
      return this.history.urls[this.index];
    }
    next(): void {
      this.index++;
    }
  };
}

export default BrowserHistory;
