
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MyBlog from './Myblog'
import SingleBlogPage from './SingleBlogPage'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import CreateBlog from './CreateBlog'
import ProtectedRoute from './ProtectedRoute'


function App() {

  return (
  <main>
    <Router>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute> 
        } />
        <Route path='/singleblogs/:id' element={
          <ProtectedRoute>
           <SingleBlogPage />
          </ProtectedRoute> 
        } />

<Route path='/myblog' element={
          <ProtectedRoute>
           <MyBlog />
          </ProtectedRoute> 
        } />


         <Route path="create-blog" element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
         } />
        <Route path='/signup' element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </main>
  )
}

export default App