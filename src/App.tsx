import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AccountPage from './pages/AccountPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PostPage from './pages/PostPage'
import PostsPage from './pages/PostsPage'
import SignInPage from './pages/SignInPage'

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="signin"
          element={<SignInPage isSignedIn={isSignedIn} onSignIn={() => setIsSignedIn(true)} />}
        />

        <Route element={<ProtectedRoute isSignedIn={isSignedIn} />}>
          <Route path="account" element={<AccountPage onSignOut={() => setIsSignedIn(false)} />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}