"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const getUserToken = () => {
    let token = localStorage.getItem("like_token");
    if (!token) {
      token = uuidv4();
      localStorage.setItem("like_token", token);
    }
    return token;
  };

  // Fetch total like count
  useEffect(() => {
    const fetchCount = async () => {
      const { count, error } = await supabase
        .from("likes")
        .select("*", { count: "exact", head: true });

      if (!error) setCount(count || 0);
    };

    const checkUserLiked = async () => {
      const token = getUserToken();
      const { data } = await supabase
        .from("likes")
        .select("id")
        .eq("user_token", token)
        .maybeSingle();

      if (data) setLiked(true);
    };

    fetchCount();
    checkUserLiked();
  }, []);

  const handleLike = async () => {
    if (liked) return;

    const token = getUserToken();

    const { error } = await supabase
      .from("likes")
      .insert({ user_token: token });

    if (!error) {
      setLiked(true);
      setCount((prev) => prev + 1);
    } else {
      console.error("Insert error:", error.message);
    }
  };

  return (
    <div className="flex items-center bg-gray-200 dark:bg-white border rounded-full opacity-80 backdrop-blur-sm shadow-md transition border-transparent hover:bg-pink-300">
      <button
        onClick={handleLike}
        disabled={liked}
        className="m-1"
      >
        {liked ? "👍🏻" : "🩷"}
      </button>
      <div className="text-sm text-black dark:text-black pr-2">{count}</div>
    </div>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function LikeButton() {
//   const [status, setStatus] = useState("Checking...");

//   useEffect(() => {
//     const testConnection = async () => {
//       const { data, error } = await supabase
//         .from("likes") // You can replace with any table name
//         .select("id")
//         .limit(1);

//       if (error) {
//         console.error("❌ Supabase connection failed:", error.message);
//         setStatus("❌ Not Connected to Supabase");
//       } else {
//         console.log("✅ Supabase connected, data:", data);
//         setStatus("✅ Connected to Supabase");
//       }
//     };

//     testConnection();
//   }, []);

//   return (
//     <div className="p-4 text-lg font-semibold">
//       Supabase Status: <span>{status}</span>
//     </div>
//   );
// }
