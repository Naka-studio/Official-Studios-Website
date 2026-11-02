import { useQuery } from "@tanstack/react-query";
import request from "../lib/api";

const useWork = () => {
  const items = useQuery({
    queryKey: ["work"],
    queryFn: () => request("/work"),
    select: (res) => res.data,
  });

  return items;
};

export default useWork;
