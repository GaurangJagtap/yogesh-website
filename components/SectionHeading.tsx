import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}) => {
  if (align === "split") {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20 ${className}`}>
        <div className="lg:col-span-7">
          {eyebrow && (
            <div className="flex items-center gap-2 mb-3">
              <span className={`h-px w-6 ${dark ? "bg-white/40" : "bg-[#999999]"}`} />
              <span
                className={`text-[12px] font-semibold tracking-[0.14em] uppercase ${
                  dark ? "text-neutral-300" : "text-[#666666]"
                }`}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12] ${
              dark ? "text-white" : "text-[#111111]"
            }`}
          >
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-5">
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                dark ? "text-neutral-300" : "text-[#555555]"
              }`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className={`h-px w-6 ${dark ? "bg-white/40" : "bg-[#999999]"}`} />
          <span
            className={`text-[12px] font-semibold tracking-[0.14em] uppercase ${
              dark ? "text-neutral-300" : "text-[#666666]"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12] ${
          dark ? "text-white" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-neutral-300" : "text-[#555555]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
