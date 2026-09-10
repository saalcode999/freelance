type StarRatingProps = {
  rating: number;
  size?: "sm" | "md";
};

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const dimension = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`${dimension} ${
              filled ? "fill-brass-light text-brass-light" : "fill-none text-paper/30"
            }`}
            stroke="currentColor"
            strokeWidth={1}
            aria-hidden="true"
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
        );
      })}
    </div>
  );
}
