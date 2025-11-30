import { useEffect, useState } from "react";
import { AuthProvider } from "react-oauth2-code-pkce";
import { authConfig } from "@/config";

// Delay rendering until we're in the browser
export function ClientAuthProvider({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!ready) return null; // TODO spinner/loading UI

  return <AuthProvider authConfig={authConfig}>{children}</AuthProvider>;
}
