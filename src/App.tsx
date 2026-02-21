import { BrowserRouter } from 'react-router-dom';
import Main from './pages/main';

export default function App() {
  return (
    <BrowserRouter>
      <main className='min-h-screen bg-neutral-edoc-500 flex flex-col items-center'>
        <Main />
      </main>
    </BrowserRouter>
  );
}