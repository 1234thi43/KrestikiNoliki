import React, { useState } from 'react';

// const viteLogo = '/vite.svg'; // Предполагаем, что viteLogo доступен как URL
// const reactLogo = './assets/react.svg'; // Предполагаем, что reactLogo доступен как URL


function App() {
  const [count, setCount] = useState(0);
  const yearNow = new Date().getFullYear();

  const countFunc = () => {
    setCount(count + 1);
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: 'https://vite.dev', target: '_blank' },
        React.createElement('img', {
          src: '/vite.svg',
          className: 'logo',
          alt: 'Vite logo',
        })
      ),
      React.createElement(
        'a',
        { href: 'https://react.dev', target: '_blank' },
        React.createElement('img', {
          src: '/react.svg',
          className: 'logo react',
          alt: 'React logo',
        })
      )
    ),
    React.createElement('h1', null, 'Vite + React'),
    React.createElement(
      'div',
      { className: 'card' },
      React.createElement(
        'button',
        { onClick: countFunc },
        'count is ',
        count
      ),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.jsx'),
        ' and save to test HMR'
      )
    ),
    React.createElement(
      'p',
      { className: 'read-the-docs' },
      'Click on the Vite and React logos to learn more'
    ),
    React.createElement('p', null, 'Текущий год: ', yearNow)
  );
}

export default App;
