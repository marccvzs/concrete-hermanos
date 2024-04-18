import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/eac7d4e4-5390-461a-81bc-c44cbe43077a-fd1vtg.webp',
  'https://utfs.io/f/446f122f-73d0-4bd2-82ce-ebfeb62c23ae-1x3t6v.png',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[... mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
