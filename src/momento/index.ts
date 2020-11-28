import Editor from './Editor';
import History from './History';
const main = () => {
  const editor: Editor = new Editor();
  const history: History = new History();
  editor.setContent('a');
  history.push(editor.createState());
  editor.setContent('b');
  history.push(editor.createState());
  editor.setContent('c');
  history.push(editor.createState());
  editor.restore(history.pop());

  console.log(editor.getContent());
};

export default main;
