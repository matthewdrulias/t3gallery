import { db } from "~/server/db";
import Link from "next/link";

const mockUrls = [
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8GrL74Qn1E1SzKJw6hOMTW3XB0lQoxLavYbC5F",
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8GASMKviYqo1LxGp9EZ8HMalUYyiIPSQegKCzR",
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8GjnKUyxradtNfQC2P3ZWEuchXBwlIH7KnSR96",
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8Gou9KDJBsre0TY91FCQtkuDgRnXBAj6hMifly",
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8GE2nniH0fw50od1Op3gtXcGLefuyxmaZjWD8l",
    "https://31ysesymiw.ufs.sh/f/8EzjFOPtZh8GtgsnhE4ZmHYqE3o0UFjk8ldh2xJcnA6yuetR",
];

const mockImages = mockUrls.map((url, index) => ({
    id: index +1,
    url,
}));

export default async function HomePage() {

    const posts = await db.query.posts.findMany();
    console.log(posts)

  return (
    <main className="">
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id}>{post.name}</div>
                ))}
                {[...mockImages, ...mockImages, ...mockImages].map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} />
                    </div>
                ))}
            </div>
    </main>
  );
}
