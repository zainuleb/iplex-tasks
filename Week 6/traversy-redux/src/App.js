import './App.css';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';

import store from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
