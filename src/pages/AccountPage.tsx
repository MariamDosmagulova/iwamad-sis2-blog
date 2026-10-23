import Button from '../components/ui/Button'

type AccountPageProps = {
  onSignOut: () => void
}

export default function AccountPage({ onSignOut }: AccountPageProps) {
  return (
    <div className="page">
      <h1>My account</h1>
      <p>You are signed in. Only signed-in readers can see this page.</p>
      <Button variant="secondary" onClick={onSignOut}>Sign out</Button>
    </div>
  )
}