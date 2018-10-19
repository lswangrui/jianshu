import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './newTodoList/TodoList';
import { AppContainer } from 'react-hot-loader';
// import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')
const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
    renderMethod(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    )
}
render(TodoList)

if (module.hot) {
    module.hot.accept('./TodoList', () => { // 当我们热更新的代码出现的时候，把App重新加载
        const NextApp = require('./TodoList').default //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
        render(NextApp) // 重新渲染到 document 里面
    })
}

// ReactDOM.render(<TodoList />, document.getElementById('root'));

// serviceWorker.unregister();
