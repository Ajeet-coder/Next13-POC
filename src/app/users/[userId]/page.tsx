import UserPosts from "@/app/components/UserPosts";
import getAllUser from "@/app/lib/getAllUser";
import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUser();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}
