"use client";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TokenItem } from "../types";

interface TokenCardProps {
  item: TokenItem;
}

const fallbackImage = "/images/rocket.png";

export const TokenCard = ({ item }: TokenCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const displayImage = (!item.imageUri || imageError) ? fallbackImage : item.imageUri;
  const truncateAddress = (address: string) => {
    if (!address) return "Unknown";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden mb-6 max-w-xl mx-auto">
      {/* Card Header */}
      <div className="flex items-center p-4">
        <div className="flex items-center gap-3 flex-1">
          <Link href={`/token/?address=${item.memeTokenAddress}`}>
            <div className="w-10 h-10 relative">
              <Image 
                src={item.imageUri || "/images/rocket.png"} 
                alt={item.name || "Token"} 
                width={40} 
                height={40}
                className="rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/rocket.png";
                }}
              />
            </div>
          </Link>
          <div>
            <Link href={`/token/?address=${item.memeTokenAddress}`}>
              <h3 className="text-sm font-semibold text-white hover:text-blue-500">
                {item.name || "Unnamed Token"}
              </h3>
            </Link>
            <p className="text-xs text-slate-400">
              {item.createdBy ? `${item.createdBy.slice(0, 6)}...${item.createdBy.slice(-4)}` : "Unknown creator"}
            </p>
          </div>
        </div>
        <button className="text-sm font-medium text-blue-500 hover:text-blue-400">
          Follow
        </button>
      </div>

      {/* Token Image */}
      <Link href={`/token/?address=${item.memeTokenAddress}`}>
        <div className="relative aspect-square bg-slate-800">
          <Image 
            src={item.imageUri || "/images/rocket.png"}
            alt={item.name || "Token"}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/images/rocket.png";
            }}
          />
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`hover:text-red-500 transition-colors ${isLiked ? 'text-red-500' : 'text-slate-300'}`}
          >
            <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button className="text-slate-300 hover:text-slate-100">
            <MessageCircle size={24} />
          </button>
          <button className="text-slate-300 hover:text-slate-100">
            <Repeat2 size={24} />
          </button>
          <button className="text-slate-300 hover:text-slate-100 ml-auto">
            <Share size={24} />
          </button>
        </div>

        {/* Token Details */}
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold text-white">{item.symbol || "Unknown"}</span>{" "}
            <span className="text-slate-300">{item.bio || "No description available"}</span>
          </p>
          <div className="flex gap-2">
            {item.twitter && (
              <a 
                href={`https://twitter.com/${item.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                @{item.twitter}
              </a>
            )}
            {item.discord && (
              <a 
                href={item.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline text-sm"
              >
                Discord
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Add Comment Section */}
      <div className="flex items-center gap-3 p-4 border-t border-slate-800">
        <Image
          src="/images/rocket.png"
          alt="Your avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-transparent text-sm text-slate-300 placeholder-slate-500 focus:outline-none"
        />
        <button className="text-sm font-medium text-blue-500 hover:text-blue-400">
          Post
        </button>
      </div>
    </div>
  );
      <div className={`relative z-20 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-slate-700 p-6 h-full hover:border-slate-500 transition-all shadow-xl hover:shadow-2xl ${
        viewMode === 'list' ? 'w-full' : ''
      }`}>
        <div className={`${
          viewMode === 'list' 
            ? 'flex flex-row items-center gap-6' 
            : 'flex flex-col gap-4'
        }`}>
          {/* Token Image and Symbol */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative flex-shrink-0">
              {item.imageUri ? (
                <Image 
                  src={item.imageUri} 
                  alt={item.name || "Token"} 
                  width={64} 
                  height={64}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/rocket.png";
                  }}
                />
              ) : (
                <Image 
                  src="/images/rocket.png" 
                  alt="Default" 
                  width={64} 
                  height={64}
                  className="rounded-full object-cover"
                />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.name || "Unnamed Token"}
              </h3>
              <p className="text-sm text-slate-400">
                {item.symbol || "Unknown Symbol"}
              </p>
            </div>
          </div>

          <div className={viewMode === 'list' ? 'flex-1' : ''}>
            {/* Description */}
            <p className={`text-sm text-slate-300 ${viewMode === 'list' ? 'mb-2' : 'line-clamp-2'}`}>
              {item.bio || "No description available"}
            </p>

            {/* Creator and Social Links */}
            <div className={`flex items-center justify-between ${viewMode === 'grid' ? 'mt-4 pt-4 border-t border-slate-700' : 'mt-2'}`}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 relative">
                  <Image 
                    src={item.imageUri || "/images/rocket.png"} 
                    alt={item.name || "Creator"} 
                    width={24} 
                    height={24}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-xs text-slate-400">
                  {item.createdBy ? `Created by ${item.createdBy.slice(0, 6)}...${item.createdBy.slice(-4)}` : "Unknown creator"}
                </span>
              </div>

              <div className="flex gap-2">
                {item.twitter && (
                  <a href={`https://twitter.com/${item.twitter}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                )}
                {item.discord && (
                  <a href={item.discord} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
