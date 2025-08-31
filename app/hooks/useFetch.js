"use client"
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((d) => { if (mounted) setData(d); })
      .catch((e) => { if (mounted) setError(e); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [url]);

  return { data, error, loading };
}
