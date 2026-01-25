// RequireAdmin.tsx
import { useKeycloak } from "@react-keycloak/web";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export function RequireAdmin({
  children,
}: Readonly<{ children: JSX.Element }>) {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return null; // or a loader

  // Not logged in -> send them somewhere that does NOT auto-login
  if (!keycloak.authenticated) {
    keycloak.login({
      redirectUri: globalThis.location.href,
    });
    return null;
  }

  // Logged in but not admin -> forbid
  const isAdmin = keycloak.hasRealmRole("ADMIN");

  if (!isAdmin) {
    return <Navigate to="/404" replace />;
  }

  return children;
}
