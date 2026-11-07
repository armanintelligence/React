import { Link, useParams, useNavigate } from "react-router";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my React app!</p>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About</h1>
      <p>This app is built with React Router.</p>
    </>
  );
}

const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Meera" },
];

export function Users() {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </>
  );
}

export function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h1>User not found</h1>;

  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={() => navigate("/users")}>Back to users</button>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </>
  );
}
