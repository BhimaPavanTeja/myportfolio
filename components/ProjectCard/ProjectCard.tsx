"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  details: string;
  skills: string[];
  imageUrl: string;
  projectLink: string;
};

export function ProjectCard({
  title,
  description,
  details,
  skills,
  imageUrl,
  projectLink,
}: ProjectProps) {
  const { theme } = useTheme();

  const badgeStyle =
    theme === "dark"
      ? "bg-white text-black border border-white"
      : "bg-black text-white border border-black";

  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none z-0">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        {/* Project image */}
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-3xl p-3"
          />
        </div>

        {/* Card content */}
        <CardHeader className="border-b border-border p-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">{details}</p>
        </CardContent>

        {/* Badges */}
        <CardFooter className="flex flex-wrap gap-2 px-4 pt-0 pb-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-md ${badgeStyle}`}
            >
              {skill}
            </span>
          ))}
        </CardFooter>

        {/* Project link */}
        <CardFooter className="px-4 pt-0 pb-4 py-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full" variant="secondary">
              Visit Project
            </Button>
          </a>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
