import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/home-content";

export default function BlogSection() {
  return (
    <section className="bg-kg-cream px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="kg-display-title text-4xl uppercase sm:text-5xl">Latest From Our Blog</h2>
          <Link href="/about" className="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-kg-gold">
            View All Blogs →
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.title} className="overflow-hidden rounded-md bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute left-3 top-3 bg-kg-green-dark px-2 py-1 text-center text-white">
                  <span className="block text-sm font-bold leading-none">{post.date}</span>
                  <span className="text-[0.65rem] tracking-wider">{post.month}</span>
                </span>
              </div>
              <div className="px-5 py-5">
                <h3 className="text-lg font-semibold text-kg-green-dark">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kg-muted">{post.excerpt}</p>
                <Link href="/about" className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-kg-gold">
                  Read More →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
