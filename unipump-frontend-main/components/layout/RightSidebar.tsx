"use client";
import { VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const suggestedAccounts = [
  {
    name: "UniPump Official",
    username: "unipump",
    imageUrl: "/images/rocket.png",
    isVerified: true,
  },
  {
    name: "Trending Tokens",
    username: "trendingtokens",
    imageUrl: "/images/rocket.png",
    isVerified: true,
  },
  // Add more suggested accounts as needed
];

export const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-slate-900 border-l border-slate-800 p-6 hidden md:block">
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tokens..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Suggested Accounts */}
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-4">Suggested Accounts</h3>
          <div className="space-y-4">
            {suggestedAccounts.map((account) => (
              <Link
                key={account.username}
                href={`/profile/${account.username}`}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={account.imageUrl}
                    alt={account.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-white group-hover:text-blue-500">
                      {account.name}
                    </span>
                    {account.isVerified && (
                      <VerifiedIcon size={14} className="text-blue-500" />
                    )}
                  </div>
                  <span className="text-xs text-slate-400">@{account.username}</span>
                </div>
                <button className="text-xs font-medium text-blue-500 hover:text-blue-400">
                  Follow
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-4">Trending</h3>
          <div className="space-y-3">
            {["#MemeTokens", "#UniPump", "#Web3", "#DeFi"].map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${tag}`}
                className="block text-sm text-white hover:text-blue-500"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {["About", "Terms", "Privacy", "Developers", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-500 hover:text-slate-400"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">© 2025 UniPump. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
