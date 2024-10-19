import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";

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

