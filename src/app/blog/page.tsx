'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

const posts = [
  {
    slug: 'how-we-saved-100-hours-per-week',
    title: 'How we saved 100 hours/week with this one Make automation',
    excerpt: 'A deep dive into a workflow that transformed a client\'s operations and gave their team their weekends back.',
    category: 'automation',
    publishedAt: 'Dec 15, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'mvp-checklist',
    title: 'The MVP checklist: 12 things before you launch',
    excerpt: 'Skip these and you\'ll regret it. Our battle-tested checklist for launching products that actually work.',
    category: 'product',
    publishedAt: 'Dec 8, 2024',
    readTime: '12 min read',
  },
  {
    slug: 'ai-workflows-guide',
    title: 'AI workflows for small teams: A practical guide',
    excerpt: 'You don\'t need a PhD or a huge budget to leverage AI. Here\'s how small teams can get started.',
    category: 'ai',
    publishedAt: 'Nov 28, 2024',
    readTime: '10 min read',
  },
  {
    slug: 'automation-costs',
    title: 'What automation actually costs: Beyond the subscription',
    excerpt: 'The hidden costs of automation projects and how to budget for them properly.',
    category: 'operations',
    publishedAt: 'Nov 15, 2024',
    readTime: '6 min read',
  },
];

const categories = ['all', 'automation', 'product', 'ai', 'operations'];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Insights on automation, product building, and scaling operations.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Posts */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          {/* Featured Post */}
          <FadeIn direction="up" className="mb-12">
            <Link href={`/blog/${posts[0].slug}`}>
              <Card className="group cursor-pointer overflow-hidden" padding="none">
                <div className="relative aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Badge variant="accent" className="mb-3">{posts[0].category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-400 max-w-xl mb-3">{posts[0].excerpt}</p>
                    <p className="text-gray-500 text-sm">
                      {posts[0].publishedAt} · {posts[0].readTime}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </FadeIn>
          
          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group cursor-pointer h-full" padding="none">
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  </div>
                  <div className="p-6">
                    <Badge variant="default" className="mb-2">{post.category}</Badge>
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <p className="text-gray-500 text-xs">
                      {post.publishedAt} · {post.readTime}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/contact" variant="outline">
              Subscribe to updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
