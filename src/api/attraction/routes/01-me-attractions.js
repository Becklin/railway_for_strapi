"use strict";

/**
 * custom router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/attractions/me",
      handler: "attraction.me",
      config: {},
    },
  ],
};
