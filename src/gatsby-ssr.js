import React from "react";


export const onRenderBody = ({
  setHeadComponents,
}, pluginOptions) => {

  if(!pluginOptions || !pluginOptions.domains) {
    throw new Error("gatsby-plugin-preconnect: Missing `options.domains`");
  }
  if(!Array.isArray(pluginOptions.domains)) {
    throw new Error("gatsby-plugin-preconnect: `options.domains` is not an array");
  }
  if(pluginOptions.domains.find(el => typeof el !== "string")) {
    throw new Error("gatsby-plugin-preconnect: `options.domains` only accept strings");
  }

  pluginOptions.domains.forEach(domain => {

  });

  setHeadComponents(
    pluginOptions.domains.map(domain => React.createElement('link', {
      rel: "preconnect",
      href: domain,
      key: domain
    })));

}
