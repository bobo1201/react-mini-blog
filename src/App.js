import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import PostWritePage from './page/PostWritePage';
import MainPage from './page/MainPage';
import PostViewPage from './page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage /> } />
        <Route path="post-write" element={<PostWritePage /> } />
        <Route path="post/:postId" element={<PostViewPage /> } />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
