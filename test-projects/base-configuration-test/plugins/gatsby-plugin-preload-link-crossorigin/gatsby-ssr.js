"use strict";

exports.__esModule = true;
exports.onPreRenderHTML = void 0;

var onPreRenderHTML = function onPreRenderHTML(_ref, options) {
  var getHeadComponents = _ref.getHeadComponents,
      replaceHeadComponents = _ref.replaceHeadComponents;
  var components = getHeadComponents();

  for (var i = 0, n = components.length; i < n; i++) {
    var component = components[i];

    if (component.type === "link" && component.props && component.props.rel === "preload") {
      component.props.crossorigin = "";
    }
  } // WARNING: if multiple plugins implement this API it’s the last plugin that “wins”.
  // See https://www.gatsbyjs.org/docs/ssr-apis/


  replaceHeadComponents(components);
};

exports.onPreRenderHTML = onPreRenderHTML;