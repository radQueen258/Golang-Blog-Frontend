// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/Home";
import CreatePostPage from "./pages/CreatePost";
import PostDetailsPage from "./pages/PostDetails";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import EditPostPage from './pages/EditPost';
import MyPosts from "./pages/MyPosts";
import Navbar from "./components/Navbar";
import PrivateRoute from './components/PrivateRoute';

function App() {
  // const [count, setCount] = useState(0)

    return (
        <Router>
            <Navbar />
            <div className="p-4">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/posts/:id" element={<PostDetailsPage />} />
                <Route path="/myposts" element={<MyPosts />} />

                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/create" element={<CreatePostPage />} />
                    <Route path="/edit/:id" element={<EditPostPage />} />
                </Route>

            </Routes>
            </div>
        </Router>
    );
}

export default App
