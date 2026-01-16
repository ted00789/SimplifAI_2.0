import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getSortedPosts } from "@/content/blogPosts";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Global background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <Navigation />
      
      <main className="relative z-10 pt-24 md:pt-32">
        <div className="section-container section-padding">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blogs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, strategies, and insights to help service businesses capture more leads and grow.
            </p>
          </div>

          {/* Blog List */}
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="block group"
              >
                <article className="p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
