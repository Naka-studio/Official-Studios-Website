import Skeleton from "./Skeleton";

const pricingSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "var(--container-color)",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            borderRadius: "var(--quad-rad)",
            border: ".5px solid var(--border-color)",
            marginBottom: "2rem",
          }}
        >
          <Skeleton
            width="min(650px, 95%)" //title
            height="var(--h3-font)"
            margin="0 0 1rem 0"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Skeleton
              width="min(150px, 30%)" // price tag
              height="var(--smaller-font)"
            />

            <Skeleton
              width="min(350px, 60%)" // price number
              height="var(--h2-font)"
            />
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--border-color)",
              margin: "1rem 0",
            }}
          ></div>

          <Skeleton width="90%" margin="0 0 5px 0" />
          <Skeleton width="70%" margin="0 0 5px 0" />
          <Skeleton width="75%" margin="0 0 5px 0" />
          <Skeleton width="50%" margin="0 0 1.5rem 0" />

          <Skeleton width="min(150px, 30%)" height="var(--smaller-font)" />

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "8px 0",
            }}
          >
            {Array.from({ length: 5 }).map((_, x) => (
              <li
                key={x}
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <Skeleton width="16px" height="16px" />
                <Skeleton width="200px" height="16px" />
              </li>
            ))}
          </ul>

          <Skeleton height="var(--smallest-font)" margin="1rem 0 5px 0" />
          <Skeleton
            width="90%"
            height="var(--smallest-font)"
            margin="0 0 5px 0"
          />
          <Skeleton width="95%" height="var(--smallest-font)" />
        </div>
      ))}
    </div>
  );
};

export default pricingSkeleton;
