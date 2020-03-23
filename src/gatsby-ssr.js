import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (!pluginOptions || !pluginOptions.domains) {
    throw new Error("gatsby-plugin-preconnect: Missing `options.domains`");
  }
  if (!Array.isArray(pluginOptions.domains)) {
    throw new Error(
      "gatsby-plugin-preconnect: `options.domains` is not an array"
    );
  }
  if (pluginOptions.domains.find(el => typeof el !== "string")) {
    throw new Error(
      "gatsby-plugin-preconnect: `options.domains` only accept strings"
    );
  }

  // remove duplicate values
  const domains = Array.from(new Set(pluginOptions.domains));

  setHeadComponents(
    domains
      .map(domain => [
        React.createElement("link", {
          rel: "preconnect",
          href: domain,
          key: `preconnect-${domain}`
        }),
        // Use dns-prefetch as fallback, because it has got wider browser support.
        React.createElement("link", {
          rel: "dns-prefetch",
          href: domain,
          key: `dns-prefetch-${domain}`
        })
      ])
      .flat()
  );
};
