'use client'
import { TonConnectUIProvider } from "@tonconnect/ui-react";

type Props = {
  children: React.ReactNode;
};

export function TonProvider({ children }: Props) {
  return (
    <TonConnectUIProvider manifestUrl="\public\tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
