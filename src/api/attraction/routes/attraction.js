"use strict";

/**
 * attraction router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::attraction.attraction", {
  routes: [
    // {
    //   method: "GET",
    //   path: "/attractions",
    //   handler: "attractions.find",
    //   config: {
    //     policies: [],
    //   },
    // },
    {
      method: "GET",
      path: "/attractions/me",
      handler: "attractions.me",
      config: {
        policies: [],
      },
    },
    // {
    //   method: "GET",
    //   path: "/attractions/count",
    //   handler: "attractions.count",
    //   config: {
    //     policies: [],
    //   },
    // },
    // {
    //   method: "GET",
    //   path: "/attractions/:id",
    //   handler: "attractions.findOne",
    //   config: {
    //     policies: [],
    //   },
    // },
    // {
    //   method: "POST",
    //   path: "/attractions",
    //   handler: "attractions.create",
    //   config: {
    //     policies: [],
    //   },
    // },
    // {
    //   method: "PUT",
    //   path: "/attractions/:id",
    //   handler: "attractions.update",
    //   config: {
    //     policies: [],
    //   },
    // },
    // {
    //   method: "DELETE",
    //   path: "/attractions/:id",
    //   handler: "attractions.delete",
    //   config: {
    //     policies: [],
    //   },
    // },
  ],
});

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/attractions",
//       handler: "attractions.find",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "GET",
//       path: "/attractions/me",
//       handler: "attractions.me",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "GET",
//       path: "/attractions/count",
//       handler: "attractions.count",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "GET",
//       path: "/attractions/:id",
//       handler: "attractions.findOne",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "POST",
//       path: "/attractions",
//       handler: "attractions.create",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "PUT",
//       path: "/attractions/:id",
//       handler: "attractions.update",
//       config: {
//         policies: [],
//       },
//     },
//     {
//       method: "DELETE",
//       path: "/attractions/:id",
//       handler: "attractions.delete",
//       config: {
//         policies: [],
//       },
//     },
//   ],
// };
