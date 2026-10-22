export type Post = {
    id: number
    title: string
    date: string
    tag: string
    excerpt: string
    body: string
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'My first week with React',
      date: '2026-09-07',
      tag: 'React',
      excerpt: 'Components, props and JSX: what surprised me in week one.',
      body: 'At first JSX looked strange to me, because HTML is written inside JavaScript. After a few days I understood that a component is just a function that returns markup. Props are like function arguments, and that idea made everything easier.',
    },
    {
      id: 2,
      title: 'Why I started using TypeScript',
      date: '2026-09-14',
      tag: 'TypeScript',
      excerpt: 'Types caught my mistakes before the browser did.',
      body: 'I wrote a typo in a prop name and TypeScript showed a red line right away. Before, I would only find this bug after opening the page. Now I describe my data with types first, and the editor helps me with autocomplete.',
    },
    {
      id: 3,
      title: 'useState in simple words',
      date: '2026-09-21',
      tag: 'React',
      excerpt: 'A like button is the easiest way to understand state.',
      body: 'useState gives you a value and a function to change it. When you call the function, React draws the component again with the new value. My like button is only a few lines, but it shows the whole idea of state.',
    },
    {
      id: 4,
      title: 'Pages without reload with React Router',
      date: '2026-09-28',
      tag: 'Routing',
      excerpt: 'Link, NavLink and Outlet: one layout, many pages.',
      body: 'React Router changes the page without asking the server for a new HTML file. The header and footer stay in the layout, and only the part inside Outlet changes. NavLink even marks the link of the page you are on.',
    },
    {
      id: 5,
      title: 'Design tokens saved my time',
      date: '2026-10-05',
      tag: 'Design',
      excerpt: 'One variable for a color, used everywhere.',
      body: 'In week 5 I moved all colors and spacing into CSS variables. When I wanted a different main color, I changed one line and every button and link changed together. Tokens also helped me fix a color with low contrast.',
    },
  ]