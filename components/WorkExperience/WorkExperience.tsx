"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <h2 className="sm:text-4xl text-3xl font-semibold mb-10">👨🏻‍💻 My Work Experience</h2>

      <div className="w-full max-w-3xl space-y-8">
         {/* Outlier.ai */}
        <div className="flex items-center gap-4">
          <Image
            src="/logos/outlier.png"
            alt="Outlier Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <span className="font-medium text-lg">Frontend Expertise for AI - Outlier.ai</span>
            <span className="text-muted-foreground text-sm">May 2025 – Present</span>
            <p className="text-sm text-muted-foreground">
              Contributed to UI improvements for AI-driven platforms.
            </p>
          </div>
        </div>
        <Separator />
        
        {/* ClashCode */}
        <div className="flex items-center gap-4">
          <Image
            src="/logos/clashcode.png"
            alt="ClashCode Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <span className="font-medium text-lg">Frontend Developer - ClashCode</span>
            <span className="text-muted-foreground text-sm">Nov 2024 – Jan 2025</span>
            <p className="text-sm text-muted-foreground">
              Improved UI responsiveness and collaborated on a gamified coding platform.
            </p>
          </div>
        </div>
        <Separator />

        {/* E-Cell REC */}
        <div className="flex items-center gap-4">
          <Image
            src="/logos/ecell.png"
            alt="E-Cell Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <span className="font-medium text-lg">Web Tech Head - E-Cell REC</span>
            <span className="text-muted-foreground text-sm">Sept 2024 – Feb 2025</span>
            <p className="text-sm text-muted-foreground">
              Developed club website and boosted event registrations by 50%.
            </p>
          </div>
        </div>
        <Separator />

        {/* CSI */}
        <div className="flex items-center gap-4">
          <Image
            src="/logos/csi.png"
            alt="CSI Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <span className="font-medium text-lg">Technical Lead - CSI</span>
            <span className="text-muted-foreground text-sm">Oct 2023 – Present</span>
            <p className="text-sm text-muted-foreground">
              Led technical initiatives and mentored students in software & hackathons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
