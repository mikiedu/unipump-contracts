"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Sample data - replace with real data later
const trendingCreators = [
  {
    id: 1,
    name: "CryptoArtist",
    handle: "0x742...3d9f",
    imageUrl: "/images/rocket.png",
    isVerified: true,
    followers: "23.4K",
  },
  {
    id: 2,
    name: "MemeLord",
    handle: "0x891...4e2a",
    imageUrl: "/images/rocket.png",
    isVerified: true,
    followers: "12.1K",
  },
  {
    id: 3,
    name: "TokenWhiz",
    handle: "0x567...8c1d",
    imageUrl: "/images/rocket.png",
    isVerified: false,
    followers: "8.9K",
  },
];

const stories = [
  {
    id: 1,
    name: "$PEPE",
    imageUrl: "/images/rocket.png",
    hasNewStory: true,
  },
  {
    id: 2,
    name: "$DOGE",
    imageUrl: "/images/rocket.png",
    hasNewStory: true,
  },
  {
    id: 3,
    name: "$SHIB",
    imageUrl: "/images/rocket.png",
    hasNewStory: false,
  },
  {
    id: 4,
    name: "$WOJAK",
    imageUrl: "/images/rocket.png",
    hasNewStory: true,
  },
  {
    id: 5,
    name: "$WAGMI",
    imageUrl: "/images/rocket.png",
    hasNewStory: false,
  },
];

const trendingTokens = [
  {
    id: 1,
    name: "$MEME",
    symbol: "MEME",
    price: "0.0023 ETH",
    change: "+12.5%",
    isPositive: true,
  },
  {
    id: 2,
    name: "$PUMP",
    symbol: "PUMP",
    price: "0.0045 ETH",
    change: "-3.2%",
    isPositive: false,
  },
  {
    id: 3,
    name: "$MOON",
    symbol: "MOON",
    price: "0.0067 ETH",
    change: "+28.9%",
    isPositive: true,
  },
];

export default function RightSidebar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-80 h-screen bg-slate-900 border-l border-slate-700 p-4 overflow-y-auto">
      {/* Stories Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-300 mb-4">Trending Stories</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
          {stories.map((story) => (
            <button key={story.id} className="flex-shrink-0 group">
              <div className={cn(
                "w-16 h-16 rounded-full p-[2px]",
                story.hasNewStory 
                  ? "bg-gradient-to-tr from-blue-500 to-purple-500" 
                  : "bg-slate-700"
              )}>
                <div className="w-full h-full rounded-full border-2 border-slate-900 overflow-hidden">
                  <Image
                    src={story.imageUrl}
                    alt={story.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-1 text-center truncate w-16">
                {story.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Creators Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-slate-300">Suggested Creators</h3>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-xs text-blue-500 hover:text-blue-400"
          >
            {showMore ? "See less" : "See all"}
          </button>
        </div>
        <div className="space-y-4">
          {(showMore ? trendingCreators : trendingCreators.slice(0, 2)).map((creator) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={creator.id}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={creator.imageUrl}
                  alt={creator.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-medium text-white truncate">
                    {creator.name}
                  </p>
                  {creator.isVerified && (
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-slate-400 truncate">{creator.handle}</p>
              </div>
              <button className="text-xs font-medium text-blue-500 hover:text-blue-400">
                Follow
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Tokens Section */}
      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-4">Trending Now 🔥</h3>
        <div className="space-y-3">
          {trendingTokens.map((token) => (
            <Link
              href={`/token/${token.symbol}`}
              key={token.id}
              className="block p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {token.symbol.slice(0, 1)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {token.name}
                  </p>
                  <p className="text-xs text-slate-400">{token.price}</p>
                </div>
                <span className={cn(
                  "text-xs font-medium",
                  token.isPositive ? "text-green-500" : "text-red-500"
                )}>
                  {token.change}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 pt-4 border-t border-slate-700">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
          <Link href="/about" className="hover:text-slate-300">About</Link>
          <Link href="/help" className="hover:text-slate-300">Help</Link>
          <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-300">Terms</Link>
          <span>© 2025 UniPump</span>
        </div>
      </div>
    </div>
  );
}