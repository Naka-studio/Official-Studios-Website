import Skeleton from "./Skeleton.jsx";

const ServicesSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          style={{
            borderTop: "0.1px solid var(--border-color)",
            padding: "1rem 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          key={i}
        >
          <Skeleton
            width="min(200px, 65%)"
            height="clamp(0.875rem, 0.8rem + 0.35vw, 1.125rem)"
          />
          <Skeleton
            width="clamp(0.875rem, 0.8rem + 0.35vw, 1.125rem)"
            height="clamp(0.875rem, 0.8rem + 0.35vw, 1.125rem)"
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesSkeleton;
