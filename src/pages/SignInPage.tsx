import { useNavigate } from 'react-router'
import Button from '../components/ui/Button'

type SignInPageProps = {
  isSignedIn: boolean
  onSignIn: () => void
}

export default function SignInPage({ isSignedIn, onSignIn }: SignInPageProps) {
  const navigate = useNavigate()

  function handleSignIn() {
    onSignIn()
    navigate('/account')
  }

  return (
    <div className="page">
      <h1>Sign in</h1>
      {isSignedIn ? (
        <p>You are already signed in.</p>
      ) : (
        <>
          <p>Please sign in to see your account page.</p>
          <Button onClick={handleSignIn}>Sign in</Button>
        </>
      )}
    </div>
  )
}