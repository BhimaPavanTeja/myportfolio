"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NavBar } from "@/components/navbar";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import GradientText from "../components/GradientText/GradientText";
import CircularGallery from "@/components/CircularGallery/CircularGallery";
import FlowingMenu from "@/components/FlowingMenu/FlowingMenu";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { GridBackground } from "@/components/GridBackground/GridBackground";
import Footer from "@/components/Footer/Footer";
import LikeButton from "@/components/LikeButton/LikeButton";

export default function Page() {
  const demoItems = [
    {
      link: "#",
      text: "Web Development",
      image: "/skills/react.png",
    },
    {
      link: "#",
      text: "Designing",
      image: "/skills/design.jpg",
    },
    {
      link: "#",
      text: "Programming",
      image: "/skills/programming.jpg",
    },
    {
      link: "#",
      text: "Machine Learning",
      image: "/skills/ml.jpg",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 right-0 z-50 p-4">
        <LikeButton />
      </div>
      {/* Combined Home + About Section */}

      <div
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 text-center"
        id="home"
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />

        <BlurFade>
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 mb-4">
            <span className="text-5xl sm:text-6xl md:text-8xl">👋🏻</span>
            <GradientText
              colors={["#fc5c7d", "#6a82fb", "#43cea2"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl sm:text-6xl md:text-8xl px-2"
            >
              Hi, I&apos;m
            </GradientText>

            <Image
              src="https://github.com/shadcn.png"
              width={150}
              height={150}
              className="rounded-full z-10"
              alt="Avatar"
            />

            <GradientText
              colors={["#fc5c7d", "#6a82fb", "#43cea2"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl sm:text-6xl md:text-8xl px-2"
            >
              Pavan Teja
            </GradientText>
          </div>
        </BlurFade>
        <BlurFade>
          <p className="mt-4 text-base sm:text-lg text-center w-full max-w-xl z-10 px-2">
            Full Stack developer passionate about clean UI, delightful user
            experiences, and building purposeful digital products.
          </p>
        </BlurFade>

        <Link href="#about" className="z-10 mt-6">
          <BlurFade>
            <InteractiveHoverButton className="z-10">
              More About Me
            </InteractiveHoverButton>
          </BlurFade>
        </Link>
      </div>

      <div className="z-50 absolute top-0 left-0 w-full">
        <NavBar />
      </div>

      <div
        style={{ height: "600px", position: "relative" }}
        className="-z-50"
        id="about"
      >
        <CircularGallery
          bend={3}
          textColor="#3b3b3b"
          borderRadius={0.06}
          items={[]}
        />
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center bg-background">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold p-4">👨🏻What I Do?</p>
        </div>
        <div
          style={{ height: "400px", position: "relative" }}
          className="z-0 w-full flex justify-center"
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>

      {/* my work experience */}
      <WorkExperience />

      {/* projects */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-background m-10" id="projects">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold p-4">👨🏻My Projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <ProjectCard
            title="E-Summit REC Web App"
            description="Event platform for REC"
            details="Built using React and Next.js. Increased event registrations by 50%."
            skills={["React", "Vite", "Tailwind CSS", "TypeScript"]}
            imageUrl="/projects/esummit.png"
            projectLink="https://esummit-rec.vercel.app/"
          />

          <ProjectCard
            title="ECELL REC Website"
            description="Official club website"
            details="Built on Next.js framework to centralize club info and events."
            skills={["Next.js", "MagicUI", "Web Design", "TypeScript"]}
            imageUrl="/projects/ecell.png"
            projectLink="https://ecellrec.vercel.app/"
          />

          <ProjectCard
            title="CupCake Android App"
            description="Native Kotlin app"
            details="Smooth navigation with Jetpack Compose, reusable UI components, and clean architecture."
            skills={["Kotlin", "Jetpack Compose", "Android"]}
            imageUrl="/projects/cupcake.png"
            projectLink="https://github.com/BhimaPavanTeja/CupCake"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <GridBackground />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
