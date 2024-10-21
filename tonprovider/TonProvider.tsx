'use client'
import { TonConnectUIProvider } from "@tonconnect/ui-react";

type Props = {
  children: React.ReactNode;
};

export function TonProvider({ children }: Props) {
  return (
    <TonConnectUIProvider manifestUrl="https://github.com/kyle5509/Tonpump/blob/main/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
