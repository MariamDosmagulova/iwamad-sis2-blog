import { Navigate, Outlet } from 'react-router'

type ProtectedRouteProps = {
  isSignedIn: boolean
}

export default function ProtectedRoute({ isSignedIn }: ProtectedRouteProps) {
  if (!isSignedIn) {
    return <Navigate to="/signin" replace />
  }
  return <Outlet />
}