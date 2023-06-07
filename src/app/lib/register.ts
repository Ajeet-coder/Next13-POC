export default async function register(email: any, password: any) {
  const data = {
    email: email,
    password: password,
  };
  const res = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = await res.json();
  if (!res.ok) {
    return null;
  } else {
    return user;
  }
}
