import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <span className="brand">Mariam's Blog</span>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/account">Account</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>© 2026 Mariam Dosmagulova · SIS 2 blog</footer>
    </>
  )
}