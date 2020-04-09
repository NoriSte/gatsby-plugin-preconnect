import React from "react";

export const onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const {domains: domainList} = pluginOptions;

  if(!pluginOptions || !domainList) {
    throw new Error("gatsby-plugin-preconnect: Missing `options.domains`");
  }

  if(!Array.isArray(domainList)) {
    throw new Error("gatsby-plugin-preconnect: `options.domains` is not an array");
  }

  domainList.length > 0 && domainList.forEach(domainConfig => {
    if (typeof domainConfig !== "string" && typeof domainConfig !== "object") {
      throw new Error("gatsby-plugin-preconnect: domains in `options.domains` array must be either a string or object");
    }
    if (typeof domainConfig === "object") {
      const { crossOrigin, domain } = domainConfig;
      if (typeof domain !== "string") {
        throw new Error("gatsby-plugin-preconnect: `domain` in domain config object must be a string");
      }
      if (crossOrigin !== "use-credentials" && crossOrigin !== false) {
        throw new Error("gatsby-plugin-preconnect: `crossOrigin` in domain config object must be either false or `use-credentials`");
      }
    }
  })

  // remove duplicate values
  const domains = Array.from(new Set(domainList));

  const createLinkEl = (domain, crossOrigin) => {
    return React.createElement("link", {
      crossOrigin: crossOrigin,
      href: domain,
      key: domain,
      rel: "preconnect",
    });
  };

  setHeadComponents(
    domains.map(domainConfig => {
      return typeof domainConfig === "object"
        ? createLinkEl(domainConfig.domain, domainConfig.crossOrigin)
        : createLinkEl(domainConfig, "");
    }));
}
