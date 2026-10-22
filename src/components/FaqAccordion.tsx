import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, Search } from 'lucide-react';

interface FaqAccordionProps {
  initialCategory?: string;
  limit?: number;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  initialCategory = 'All',
  limit 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>(['faq-pricing', 'faq-new-carrier']);

  const categories = ['All', 'Pricing', 'Services', 'Equipment', 'Onboarding'];

  const toggleItem = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#667085] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search dispatching questions (pricing, broker setup, loads...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-base sm:text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#1677FF] text-[#0B1F33] placeholder:text-[#667085]"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-md shrink-0 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded whitespace-nowrap transition-colors min-h-[36px] flex items-center ${
                selectedCategory === cat
                  ? 'bg-white text-[#0B1F33] shadow-xs'
                  : 'text-[#667085] hover:text-[#0B1F33]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ items */}
      <div className="space-y-3">
        {displayedFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white border border-slate-200 rounded-lg text-sm text-[#667085]">
            No answers match your search. Try different keywords or reset filters.
          </div>
        ) : (
          displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0B1F33]">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded text-[#667085] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1677FF]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    <div className="mt-2 text-[11px] text-[#1677FF] font-medium">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
