import { useState } from 'react';
import BlogCard from './BlogCard.jsx';

export default function BlogTagFilter({ allTags, posts, tagColors }) {
  // Local formatTag function (moved from Astro)
  function formatTag(tag) {
    // Split on -, _, ., or camelCase boundaries
    let words = tag
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space
      .split(/[-_.\s]+/);
    words = words.map(w => {
      // If word is all uppercase or all lowercase and <=5 chars, treat as acronym
      if ((/^[A-Z]{2,}$/.test(w)) || (/^[a-z]{2,5}$/.test(w) && w === w.toLowerCase())) {
        return w.toUpperCase();
      }
      // Otherwise, capitalize first letter only
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });
    return words.join(' ');
  }
  // Add 'All' as a virtual tag
  const ALL_TAG = 'All';
  const [selected, setSelected] = useState([ALL_TAG]);

  function toggleTag(tag) {
    if (tag === ALL_TAG) {
      setSelected([ALL_TAG]);
    } else {
      setSelected(sel => {
        // If 'All' is currently selected, remove it and select only the clicked tag
        if (sel.includes(ALL_TAG)) {
          return [tag];
        }
        // If tag is already selected, remove it
        if (sel.includes(tag)) {
          const next = sel.filter(t => t !== tag);
          // If none left, default to 'All'
          return next.length === 0 ? [ALL_TAG] : next;
        }
        // Otherwise, add tag
        return [...sel, tag];
      });
    }
  }

  // Filter posts: if 'All' is selected, show all posts; otherwise, OR logic
  const filteredPosts = selected.includes(ALL_TAG)
    ? posts
    : posts.filter(post => post.tags.some(tag => selected.includes(tag)));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {/* All tag first */}
        <button
          key={ALL_TAG}
          type="button"
          onClick={() => toggleTag(ALL_TAG)}
          className={`px-4 py-2 rounded-full text-white font-semibold shadow-md cursor-pointer transition-all bg-gray-500 ${selected.includes(ALL_TAG) ? '' : 'opacity-50'} focus:outline-none focus:ring-2 focus:ring-offset-2`}
          aria-pressed={selected.includes(ALL_TAG)}
          title="Show all blog posts"
        >
          {ALL_TAG}
        </button>
        {/* Deduplicate formatted tag names */}
        {(() => {
          const formattedTagSet = new Set();
          return allTags.map((tag, idx) => {
            const formatted = formatTag(tag);
            if (formattedTagSet.has(formatted)) return null;
            formattedTagSet.add(formatted);
            const isActive = selected.includes(tag);
            return (
              <button
                key={formatted}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-white font-semibold shadow-md cursor-pointer transition-all ${tagColors[idx % tagColors.length]} ${isActive ? '' : 'opacity-50'} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                aria-pressed={isActive}
                title={`Show posts tagged '${formatted}'`}
              >
                {formatted}
              </button>
            );
          });
        })()}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <div className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} key={post.slug}>
            <BlogCard
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
              tags={post.tags}
              readingTime={post.readingTime}
              featured={false}
            />
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 col-span-full">
            <p className="text-gray-400 text-lg">No blog posts match the selected tags.</p>
          </div>
        )}
      </div>
    </>
  );
}
