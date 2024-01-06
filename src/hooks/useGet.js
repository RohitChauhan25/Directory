import axios from "axios";
import { useQuery } from "react-query";

const useGet = (key, url, configs) => {
  const get = async () => {
    console.log("object");
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  };

  const defaultConfig = {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
    ...configs,
  };

  return useQuery(key, get, defaultConfig);
};

export default useGet;
