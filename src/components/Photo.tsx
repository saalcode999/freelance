import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  ratio?: "portrait" | "square" | "wide" | "banner";
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
};

const ratioClass: Record<NonNullable<PhotoProps["ratio"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  banner: "aspect-[16/7]",
};

export default function Photo({
  src,
  alt,
  ratio = "wide",
  className = "",
  imgClassName = "",
  children,
}: PhotoProps) {
  return (
    <div
      className={`relative overflow-hidden ${ratioClass[ratio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`object-cover ${imgClassName}`}
      />
      <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-brass-light/70" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-brass-light/70" />
      {children}
    </div>
  );
}
