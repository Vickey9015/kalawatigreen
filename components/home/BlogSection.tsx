import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/home-content";

export default function BlogSection() {
  return (
    <section className="bg-kg-cream px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="kg-eyebrow">Journal</p>
            <h2 className="kg-display-title mt-4 text-4xl uppercase text-kg-green-dark sm:text-5xl">Latest From Our Blog</h2>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <li key={post.title}>
              <Reveal delayMs={index * 80}>
                <article>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="33vw" />
                  </div>
                  <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-kg-gold">
                    {post.date} {post.month}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-kg-green-dark">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-kg-muted">{post.excerpt}</p>
                  <Link href="/about" className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold">
                    Continue reading
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
