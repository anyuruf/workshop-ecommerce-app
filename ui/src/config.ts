export const navigation = {
  categories: [
    {
      id: "products",
      name: "Products",
      featured: [
        {
          name: "Featured Products",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

// Get info from http://localhost:8080/realms/test/.well-known/openid-configuration

export const authConfig = {
  clientId: "28.goousercontent.com",
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  logoutEndpoint: "https://oauth2.googleapis.com/revoke",
  tokenEndpoint: " https://oauth2.googleapis.com/token",
  redirectUri: "http://localhost:5173/",
  scope: "profile email offline_access",
  // Example to redirect back to original path after login has completed
  // preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
  // postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
  decodeToken: true,
  autoLogin: false,
};
