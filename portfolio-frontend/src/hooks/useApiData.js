import { useCallback, useEffect, useState } from "react";
import { getApiErrorMessage } from "../api/response";

export default function useApiData(loader, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await loader();
        if (active) {
          setData(result);
        }
      } catch (requestError) {
        if (active) {
          setError(getApiErrorMessage(requestError));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [attempt, loader]);

  const retry = useCallback(() => {
    setAttempt((value) => value + 1);
  }, []);

  return { data, loading, error, retry };
}
