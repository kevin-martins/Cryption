import { lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loading from './Loading'
import './app.module.css'
const Routes = lazy(() => import('./Routes'))

//import './App.module.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
