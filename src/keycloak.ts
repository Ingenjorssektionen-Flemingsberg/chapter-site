import Keycloak from "keycloak-js";

// Initialize Keycloak instance
const keycloak: Keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: "isflemingsberg",
  clientId: "frontend",
});

export default keycloak;
