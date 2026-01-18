import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getPostBySlug } from "@/content/blogPosts";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

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

  return (
    <div className="min-h-screen bg-background">
      {/* FAQ Schema Script for SEO */}
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
              {post.isHtml ? (
                <div 
                  className="prose prose-lg prose-invert max-w-none 
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-foreground 
                    prose-li:text-muted-foreground 
                    prose-ul:my-4 prose-ul:pl-6
                    prose-a:text-primary hover:prose-a:text-primary/80 
                    prose-table:my-8 prose-table:w-full
                    prose-th:text-foreground prose-th:font-semibold prose-th:text-left prose-th:p-3 prose-th:bg-muted/50 prose-th:border prose-th:border-border
                    prose-td:text-muted-foreground prose-td:p-3 prose-td:border prose-td:border-border
                    [&_section]:mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content.replace('<!-- FAQ_SECTION -->', '') }}
                />
              ) : (
                <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-table:text-muted-foreground prose-th:text-foreground prose-th:font-semibold prose-td:border-border prose-th:border-border">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
              )}

              {/* Interactive FAQ Section */}
              {post.faqItems && post.faqItems.length > 0 && (
                <section className="mt-12 pt-8 border-t border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {post.faqItems.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl px-5 data-[state=open]:bg-card/80"
                      >
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors py-4 [&[data-state=open]>svg]:rotate-180">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )}
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
