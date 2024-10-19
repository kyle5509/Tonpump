import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import axios from "axios";
import { useEffect, useState } from "react";


export const useGetTonAddress = () => {
  const friendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  return [friendlyAddress, rawAddress];
};

export const useGetTonWallet = () => {
  const tonWallet = useTonWallet();
  const appName = tonWallet?.device.appName;
  const walletName = tonWallet?.device.platform;
  return [walletName, appName];
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backend-server-tvb6.onrender.com/api/posts');
      const data = await response.json()
      setData(data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

