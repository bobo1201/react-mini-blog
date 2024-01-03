import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import PostWritePage from './page/PostWritePage';
import MainPage from './page/MainPage';
import PostViewPage from './page/PostViewPage';

import Button2 from './new/ui2/Button2';
import TextInput2 from './new/ui2/TextInput2'
import MyPageHome from './new/page2/MyPageHome';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage /> } />
        <Route path="post-write" element={<PostWritePage /> } />
        <Route path="post/:postId" element={<PostViewPage /> } />
      </Routes>
    </BrowserRouter>
    </div>
    // <MyPageHome></MyPageHome>
  );
}

export default App;
