"use client";
import { NavBar } from "@/components/navbar";
import { TextAnimate } from "@/components/magicui/text-animate";


const page = () => {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-background" id="home">
        <TextAnimate animation="blurIn" as="h1" className="text-lg font-bold z-10 pb-4">
            Welcome to the blog page!
        </TextAnimate>
      <NavBar />
    </div>
  )
}

export default page
