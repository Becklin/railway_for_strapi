"use strict";

/**
 * custom router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/attractions/slug/:slug",
      handler: "attraction.getSlug",
      config: {},
    },
  ],
};
