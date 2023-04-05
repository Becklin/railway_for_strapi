"use strict";

/**
 * attraction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::attraction.attraction",
  ({ strapi }) => ({
    // my custom controller
    async create(ctx) {
      const { id } = ctx.state.user; //ctx.state.user contains the current authenticated user
      console.log("ctx", ctx);
      const response = await super.create(ctx);
      const updatedResponse = await strapi.entityService.update(
        "api::attraction.attraction",
        response.data.id,
        { data: { user: id } } // the authenticated User is automatically set as author of the article.
      );

      return updatedResponse;
    },
    async update(ctx) {
      var { id } = ctx.state.user;
      var [attraction] = await strapi.entityService.findMany(
        "api::attraction.attraction",
        {
          filters: {
            id: ctx.request.params.id,
            user: id,
          },
        }
      );

      if (attraction) {
        const response = await super.update(ctx);
        return response;
      } else {
        return ctx.unauthorized();
      }
    },
    async delete(ctx) {
      var { id } = ctx.state.user;
      var [attraction] = await strapi.entityService.findMany(
        "api::attraction.attraction",
        {
          filters: {
            id: ctx.request.params.id,
            user: id,
          },
        }
      );
      if (attraction) {
        const response = await super.delete(ctx);
        return response;
      } else {
        return ctx.unauthorized();
      }
    },
    // get loggin as users
    async me(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.badRequest(null, [
          { messages: [{ id: "No authorization header was found" }] },
        ]);
      }
      const data = await strapi.entityService.findMany(
        "api::attraction.attraction",
        {
          populate: "image",
          filters: {
            user: {
              id: user.id,
            },
          },
        }
      );
      if (!data) {
        return ctx.notFound();
      }

      const sanitizedEvents = await this.sanitizeOutput(data, ctx);
      return this.transformResponse(sanitizedEvents);
    },
  })
);
