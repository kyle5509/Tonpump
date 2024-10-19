'use client'
import { TonConnectUIProvider } from "@tonconnect/ui-react";

type Props = {
  children: React.ReactNode;
};

export function TonProvider({ children }: Props) {
  return (
    <TonConnectUIProvider manifestUrl="https://tonpump-five.vercel.app/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
