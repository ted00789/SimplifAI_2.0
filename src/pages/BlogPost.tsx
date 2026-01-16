import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getPostBySlug } from "@/content/blogPosts";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

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
          {/* Back Link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {post ? (
            <article className="max-w-3xl mx-auto">
              {/* Post Header */}
              <header className="mb-8 md:mb-12">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                  {post.title}
                </h1>
              </header>

              {/* Post Content */}
              <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-table:text-muted-foreground prose-th:text-foreground prose-th:font-semibold prose-td:border-border prose-th:border-border">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
              </div>
            </article>
          ) : (
            <div className="text-center py-16">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Post not found
              </h1>
              <p className="text-muted-foreground mb-6">
                Sorry, we couldn't find the blog post you're looking for.
              </p>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
