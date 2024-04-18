import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/eac7d4e4-5390-461a-81bc-c44cbe43077a-fd1vtg.webp',
  'https://utfs.io/f/446f122f-73d0-4bd2-82ce-ebfeb62c23ae-1x3t6v.png',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log('[+]: ', posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {[... mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
