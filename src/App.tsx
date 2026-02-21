import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Main from './pages/main';
import ProjectDetail from './pages/project-detail';


function Body() {
  return (
    <main className='min-h-screen bg-neutral-edoc-500 flex flex-col items-center'>
      <Outlet />

    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Body />}>
          <Route path='' element={<Main />} />
          {/* <Route path='/project/:name' element={<ProjectDetail />} /> */}
          <Route path='/project' element={<ProjectDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}