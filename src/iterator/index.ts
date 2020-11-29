import BrowserHistory from './BrowserHistory';
import Iterator from './iterator';
const main = (): void => {
  const history: BrowserHistory = new BrowserHistory();
  history.push('a');
  history.push('b');
  history.push('c');

  const iterator: Iterator<string> = history.createIterator();
  while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
  }
};

export default main;
