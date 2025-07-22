
export default function BlogCard({ title, description, date, slug, tags, readingTime, featured }) {
  return (
    <a href={`/blog/${slug}`} className={`block bg-surface-light border border-surface-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 group relative h-full ${featured ? 'ring-2 ring-primary-500' : ''}`}
      title={title}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-300 text-base mb-2 line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 items-center text-sm text-gray-400">
          <span>{date instanceof Date ? date.toLocaleDateString() : date}</span>
          {readingTime && <span>· {readingTime}</span>}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags && tags.map(tag => (
            <span key={tag} className="bg-primary-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
