type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-steel md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
