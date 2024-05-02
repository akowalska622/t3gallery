import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/7b66f05d-9093-47e4-8ed9-6999d2cf081c-1xckke.jpeg",
  "https://utfs.io/f/95750e94-9bee-4cad-800c-9506fdf98915-1xd2eo.jpeg",
  "https://utfs.io/f/032752a7-474f-4fa5-97ee-b8624cea0361-1xd3ua.jpeg",
  "https://utfs.io/f/dec952c0-ff6d-4c15-85e9-d56094d6244c-1xd3sq.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log({ posts });
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + String(index)} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
