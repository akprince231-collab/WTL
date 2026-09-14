import React, { useState } from 'react';
import { STORIES } from '../data/bikesData';
import { StoryArticle } from '../types';
import { ArrowRight, BookOpen, Clock, Calendar, ArrowUpRight } from 'lucide-react';

export const StoriesGrid: React.FC = () => {
  const [activeStory, setActiveStory] = useState<StoryArticle | null>(null);

  const mainStory = STORIES[0];
  const sideStories = STORIES.slice(1);

  return (
    <section
      id="stories"
      className="relative py-28 sm:py-36 bg-[#070D18] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background tech atmosphere */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5A910]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A910]" />
              <span className="text-xs font-tech text-[#E5A910] tracking-widest uppercase font-semibold">
                EDITORIAL JOURNAL & CULTURE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              WTL <span className="text-[#E5A910]">STORIES</span>.
            </h2>
          </div>

          <a
            href="/stories"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-slate-300 hover:text-[#E5A910] transition-colors"
          >
            <span>VIEW ALL JOURNAL DISPATCHES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* EDITORIAL ASYMMETRIC LAYOUT: 1 LARGE STORY + 2 COMPLEMENTARY STORIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LARGE FEATURE STORY (Cols 1-7) */}
          <article
            id={`story-card-${mainStory.id}`}
            onClick={() => setActiveStory(mainStory)}
            className="lg:col-span-7 group cursor-pointer flex flex-col justify-between rounded-3xl bg-[#0B152A] border border-white/10 p-6 sm:p-8 hover:border-[#E5A910]/50 transition-all duration-300 shadow-2xl relative overflow-hidden"
          >
            {/* Image banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black mb-6">
              <img
                src={mainStory.image}
                alt={mainStory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-tech font-bold uppercase tracking-wider bg-[#070D18]/85 text-[#E5A910] border border-[#E5A910]/30 backdrop-blur-md">
                  {mainStory.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-tech uppercase tracking-wider bg-black/60 text-slate-300 backdrop-blur-md">
                  FEATURE
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs font-tech text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E5A910]" />
                    {mainStory.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E5A910]" />
                    {mainStory.date}
                  </span>
                  <span>•</span>
                  <span>By {mainStory.author}</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight group-hover:text-[#E5A910] transition-colors mb-4">
                  {mainStory.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                  {mainStory.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#E5A910] group-hover:underline flex items-center gap-2">
                  <span>READ FULL DISPATCH</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs font-tech text-slate-500">
                  DISPATCH // 01
                </span>
              </div>
            </div>
          </article>

          {/* TWO COMPLEMENTARY STORIES (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideStories.map((story, idx) => (
              <article
                key={story.id}
                id={`story-card-${story.id}`}
                onClick={() => setActiveStory(story)}
                className="group cursor-pointer rounded-3xl bg-[#0B152A] border border-white/10 p-6 hover:border-[#E5A910]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                    <img
                      src={story.image}
                      alt={story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#E5A910]">
                        {story.category}
                      </span>
                      <span className="text-xs text-slate-500 font-tech">
                        • {story.readTime}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg sm:text-xl text-white uppercase group-hover:text-[#E5A910] transition-colors leading-snug">
                      {story.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {story.summary}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-display font-bold uppercase tracking-wider text-[#E5A910] flex items-center gap-1.5">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="font-tech text-slate-500">
                    DISPATCH // 0{idx + 2}
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      {/* Story Reader Drawer / Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-[#0A1324] border border-[#E5A910]/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 text-xl"
              aria-label="Close Story"
            >
              ✕
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-tech font-bold text-[#E5A910] bg-[#E5A910]/10 border border-[#E5A910]/30 uppercase mb-3">
              {activeStory.category}
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">
              {activeStory.title}
            </h3>

            <div className="text-xs font-tech text-slate-400 mb-6 flex items-center gap-3">
              <span>{activeStory.date}</span>
              <span>•</span>
              <span>By {activeStory.author}</span>
              <span>•</span>
              <span>{activeStory.readTime}</span>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-100 text-lg">
                {activeStory.summary}
              </p>
              <p>
                Cycling changes perspective. When you depend purely on human cardiac stamina, muscle fiber recruitment, and the smooth mechanical efficiency of pedals, chain, and sprockets, the world takes on an honest cadence.
              </p>
              <p>
                At WTL, our engineers test these dynamics directly on grueling alpine passes and through dense metropolitan arteries. Every frame modification is evaluated for tactile response — the intangible feeling of forward momentum that makes a great bicycle feel like an extension of your own skeletal frame.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="px-6 py-2.5 rounded-xl bg-[#E5A910] text-[#070D18] font-display font-bold text-xs uppercase tracking-wider"
              >
                DONE READING
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
