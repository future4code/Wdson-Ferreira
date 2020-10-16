import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Post1 from './components/Post1/Post1';
import Post2 from './components/Post2/Post2';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'WdsonHenrique23'}
          fotoUsuario={'https://i.pinimg.com/564x/1e/e7/00/1ee70010f6393839afde02526911a45c.jpg'}
          fotoPost={'https://i.pinimg.com/564x/59/a1/d3/59a1d3e14f5d32004c4c70da68fdb278.jpg'}
        />

        <Post1
          nomeUsuario={'KobeBryant24'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/3263525019/f52f63904d33cf72a9d7c602b225f288.jpeg'}
          fotoPost={'https://pbs.twimg.com/profile_images/3517259255/535f5df15fc24db9fa4b5aa344c3a5a0.png'}
        />

        <Post2
          nomeUsuario={'LeBron23'}
          fotoUsuario={'https://cdn141.picsart.com/316861600000201.jpg?type=webp&to=crop&r=256'}
          fotoPost={'https://cdn130.picsart.com/306773444657201.jpg?type=webp&to=crop&r=256'}
        />
      </div>
    );
  }
}

export default App;