import { Link } from 'react-router-dom';

export default function RecommendationAdvisory() {
  return (
    <div className="flex flex-col gap-space-xl max-w-7xl mx-auto w-full pb-16">
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
          Advisory Recommendations
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          This section is under development.
        </p>
      </div>
      <Link
        to="/recommendation"
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Recommendations
      </Link>
    </div>
  );
}
