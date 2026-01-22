import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/content/blogPosts";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Calculate reading time based on word count
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, '').replace(/[#*`]/g, '');
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

// Get adjacent posts for navigation
const getAdjacentPosts = (currentSlug: string) => {
  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug);
  return {
    previous: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const adjacentPosts = slug ? getAdjacentPosts(slug) : { previous: null, next: null };
  const readingTime = post ? calculateReadingTime(post.content) : 0;

  // Share functionality
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title || '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  // Generate FAQ Schema for SEO
  const faqSchema = post?.faqItems ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Article Schema for SEO
  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "SimplifAI"
    }
  } : null;

  // Canonical URL
  const canonicalUrl = `https://auto-lead-booker.lovable.app/blogs/${slug}`;
  
  // OG Image - use a default or post-specific image
  const ogImage = post?.ogImage || 'https://auto-lead-booker.lovable.app/og-image.png';

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Meta Tags for SEO */}
      {post && (
        <Helmet>
          <title>{post.title} | SimplifAI Blog</title>
          <meta name="description" content={post.excerpt} />
          <link rel="canonical" href={canonicalUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:site_name" content="SimplifAI" />
          <meta property="article:published_time" content={post.date} />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={canonicalUrl} />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={ogImage} />
        </Helmet>
      )}

      {/* Schema Scripts for SEO */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Global background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <Navigation />
      
      <main className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          {post ? (
            <article className="blog-article">
              {/* Header Section */}
              <header className="mb-12 md:mb-16">
                {/* Back Link */}
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </Link>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {readingTime} min read
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-bold text-foreground leading-[1.2] mb-8">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[65ch]">
                  {post.excerpt}
                </p>
              </header>

              {/* Post Content */}
              {post.isHtml ? (
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content.replace('<!-- FAQ_SECTION -->', '') }}
                />
              ) : (
                <div className="blog-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
              )}

              {/* Interactive FAQ Section */}
              {post.faqItems && post.faqItems.length > 0 && (
                <section className="mt-16 pt-12 border-t border-border">
                  <h2 className="text-[2rem] font-bold text-foreground mb-8 leading-[1.3]">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {post.faqItems.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl px-6 data-[state=open]:bg-card/80 transition-colors"
                      >
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors duration-200 py-5 text-lg [&[data-state=open]>svg]:rotate-180">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-[1.125rem]">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )}

              {/* Bottom Section */}
              <footer className="mt-16 pt-12 border-t border-border space-y-12">
                {/* Share Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShareTwitter}
                      className="gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShareLinkedIn}
                      className="gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyLink}
                      className="gap-2"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Copy Link
                    </Button>
                  </div>
                </div>

                {/* Post Navigation */}
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {adjacentPosts.previous && (
                    <Link
                      to={`/blogs/${adjacentPosts.previous.slug}`}
                      className="group flex flex-col p-4 rounded-xl border border-border/50 bg-card/40 hover:bg-card/60 hover:border-primary/30 transition-all duration-200"
                    >
                      <span className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        <ChevronLeft className="w-3 h-3" />
                        Previous Article
                      </span>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {adjacentPosts.previous.title}
                      </span>
                    </Link>
                  )}
                  {adjacentPosts.next && (
                    <Link
                      to={`/blogs/${adjacentPosts.next.slug}`}
                      className="group flex flex-col p-4 rounded-xl border border-border/50 bg-card/40 hover:bg-card/60 hover:border-primary/30 transition-all duration-200 sm:text-right sm:ml-auto"
                    >
                      <span className="text-xs text-muted-foreground mb-2 flex items-center gap-1 sm:justify-end">
                        Next Article
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {adjacentPosts.next.title}
                      </span>
                    </Link>
                  )}
                </nav>

                {/* Back to Blogs */}
                <div className="text-center">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Articles
                  </Link>
                </div>
              </footer>
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