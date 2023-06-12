import { Metadata } from "next";
import Link from "next/link";
import getAllUser from "../lib/getAllUser";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUser();
  const users = await userData;
  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}></p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
