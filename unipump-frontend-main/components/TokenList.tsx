"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface TokenListProps {
  data: any[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const TokenList = ({ data, isLoading, isError, error }: TokenListProps) => {
  const [viewMode, setViewMode] = useState('grid');

  if (isLoading) return <div className="text-center">Loading token sales...</div>;
  if (isError) return <div className="text-center text-red-500">Error loading token sales: {error?.message}</div>;

  return (
    <div id="tokens" className="relative z-20 container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 relative z-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trending Meme Tokens</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Discover the latest and most popular meme tokens in our ecosystem. Join a community of creators and traders.
        </p>
        
        {/* View Toggle */}
        <div className="flex justify-center mt-8">
          <div className="bg-slate-800 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className={`relative z-20 ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl'
          : 'flex flex-col items-center gap-4 max-w-2xl'
      } mx-auto`}>
        {data?.map((item) => (
          <Link 
            href={`/token/?address=${item.memeTokenAddress}`}
            key={item.memeTokenAddress || item.name}
            className={`transform transition-all hover:scale-[1.02] ${
              viewMode === 'list' ? 'w-full' : ''
            }`}
          >
            <div className={`relative z-20 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-slate-700 p-6 hover:border-slate-500 transition-all shadow-xl hover:shadow-2xl`}>
              <div className={`${viewMode === 'list' ? 'flex items-center gap-6' : 'flex flex-col gap-4'}`}>
                {/* Token Image and Symbol */}
                <div className={`flex ${viewMode === 'list' ? 'flex-row items-center gap-4 min-w-[200px]' : 'flex-col gap-4'}`}>
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

                <div className={viewMode === 'list' ? 'flex-1 ml-4' : ''}>
                  {/* Description */}
                  <p className={`text-sm text-slate-300 ${viewMode === 'list' ? '' : 'line-clamp-2 mb-4'}`}>
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
        ))}
      </div>
    </div>
  );
};
