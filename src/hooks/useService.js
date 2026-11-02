import { useQuery } from "@tanstack/react-query";
import request from "../lib/api";

const useService = () => {
  const items = useQuery({
    queryKey: ["services"],
    queryFn: () => request("/services"),
    select: (res) => res.data,
  });

  return items;
};

export default useService;
