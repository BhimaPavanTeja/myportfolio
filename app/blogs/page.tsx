"use client";
import { NavBar } from "@/components/navbar";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

type Update = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  link: string; // external link
  linkLabel?: string;
  tag?: string;
  date?: string; // optional future enhancement
};

// NOTE: Replace example.com links with real destinations when available.
const updates: Update[] = [
  {
    id: "building-lucas",
    title: "Building Lucas",
    subtitle: "Building Lucas: An AI-Powered Career & Skills Advisor",
    paragraphs: [
      "Lucas is a generative AI tool designed to guide students in discovering personalized career paths and building actionable skill development plans tailored to their goals.",
      "The vision is simple: to make career guidance smarter, more accessible, aligned with current industry needs, and future-ready for every student."
    ],
    link: "#",
    linkLabel: "Coming Soon!"
  },
  {
    id: "meeting-scribe",
    title: "Meeting Scribe",
    subtitle: "Meeting Scribe: Smarter Meeting Summaries with GenAI",
    paragraphs: [
      "Meetings are important, but writing minutes? Not so much. That’s where Meeting Scribe comes in — a GenAI-powered tool that turns messy transcripts into clean, structured meeting summaries in seconds."
    ],
    link: "https://meetingscribes.netlify.app/",
    linkLabel: "Try Meeting Scribe"
  }
];

const BlogPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background" id="blog">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pb-32 pt-28 md:pt-36">
        <header className="mb-16 flex flex-col items-start gap-4">
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Build Log & Blog
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.15}
            as="p"
            className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed"
            once
          >
            A chronological stream of what I&apos;m building. Concise, focused entries—more like open build notes than polished essays.
          </TextAnimate>
        </header>
        <div className="flex flex-col gap-20">
          {updates.map((u) => (
            <article
              key={u.id}
              id={u.id}
              className="group relative scroll-mt-28"
              aria-labelledby={`${u.id}-title`}
            >
              <header className="mb-6">
                <TextAnimate
                  id={`${u.id}-title`}
                  animation="blurInUp"
                  as="h2"
                  by="word"
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                  once
                >
                  {u.title}
                </TextAnimate>
                {u.subtitle && (
                  <TextAnimate
                    animation="fadeIn"
                    by="word"
                    delay={0.1}
                    as="p"
                    className="mt-2 text-sm text-muted-foreground md:text-base leading-relaxed"
                    once
                  >
                    {u.subtitle}
                  </TextAnimate>
                )}
              </header>
              <div className="flex flex-col gap-4 text-sm leading-relaxed md:text-[0.97rem] md:leading-7">
                {u.paragraphs.map((p, i) => (
                  <TextAnimate
                    key={i}
                    as="p"
                    animation="slideUp"
                    by="word"
                    delay={0.15 + i * 0.05}
                    className="[&:first-letter]:capitalize"
                    once
                  >
                    {p}
                  </TextAnimate>
                ))}
              </div>
              <footer className="mt-6">
                <Link
                  href={u.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
                  aria-label={`${u.linkLabel || "External link"} (opens in a new tab)`}
                >
                  <TextAnimate
                    animation="slideRight"
                    by="word"
                    as="span"
                    className="inline-block"
                    once
                  >
                    {u.linkLabel || "Learn more"}
                  </TextAnimate>
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">↗</span>
                </Link>
              </footer>
              <div className="pointer-events-none absolute -inset-x-4 bottom-0 h-px -mb-10 bg-gray-300" />
            </article>
          ))}
        </div>
        <div className="mt-24 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground">
          <TextAnimate
            as="p"
            animation="fadeIn"
            by="word"
            delay={0.2}
            className="inline-block"
            once
          >
            Want a deep dive? Reach out — I can expand any entry into a full post.
          </TextAnimate>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
