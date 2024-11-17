//Import Libraries/Packages
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

//Import Styles
import './App.css'

//Import local/files components
import viteLogo from '/vite.svg'
//const Home = lazy(() => import('./pages/Home')); !!! use Lazy Loading

function App() 
{

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="text-red-500 text-center p-4">
    <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h1>
    <p>{error.message}</p>
  </div>
)


// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p style={{ color: 'red', fontSize: '20rem' }}>Loading....</p>}>  <div>Main Menu Component</div> </Suspense>
      </ErrorBoundary>),
  },
  {
    path: '/game',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading....</p>}> <p>Game Page</p> </Suspense>
      </ErrorBoundary>),
    children: [
      {path: 'dashboard',element:<Suspense fallback={<div>Loading...</div>}> <p>Game Dashboard</p> </Suspense>,},
      {path: 'footer', element: <Suspense fallback={<div>Loading...</div>}> <p>Game Footer</p> </Suspense>,},
    ],
  },
  {
    path: '/leaderboard',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading....</p>}> <p>LeaderBoard PAge</p> </Suspense>
      </ErrorBoundary>),
  },
  {
    path: '/about',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading....</p>}> <p>About PAge</p> </Suspense>
      </ErrorBoundary>),
  },
  {
    path: '*',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading....</p>}> <p>404 page</p> </Suspense>
      </ErrorBoundary>),
  },
]);


  return router;
}

export default App
