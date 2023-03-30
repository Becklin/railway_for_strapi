"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * attraction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::attraction.attraction",
  ({ strapi }) => ({
    // wrap a core action, leaving core logic in place
    // async find(ctx) {
    //   // some custom logic here
    //   ctx.query = { ...ctx.query, local: "en" };

    //   // calling the default core action with super
    //   const { data, meta } = await super.find(ctx);

    //   // some more custom logic
    //   meta.date = Date.now();

    //   return { data, meta };
    // },

    // my custom controller
    async create(ctx) {
      let entity;

      if (ctx.is("multipart")) {
        const { data, files } = parseMultipartData(ctx);
        data.user = ctx.state.user.id;
        entity = await strapi.services.attractions.create(data, { files });
      } else {
        ctx.request.body.user = ctx.state.user.id;
        entity = await strapi.services.attractions.create(ctx.request.body);
      }
      return sanitizeEntity(entity, { model: strapi.models.attractions });
    },
    async update(ctx) {
      const { id } = ctx.params;

      let entity;

      const [attractions] = await strapi.services.attractions.find({
        id: ctx.params.id,
        "user.id": ctx.state.user.id,
      });

      if (!attractions) {
        return ctx.unauthorized(`You can't update this entry`);
      }

      if (ctx.is("multipart")) {
        const { data, files } = parseMultipartData(ctx);
        entity = await strapi.services.attractions.update({ id }, data, {
          files,
        });
      } else {
        entity = await strapi.services.attractions.update(
          { id },
          ctx.request.body
        );
      }

      return sanitizeEntity(entity, { model: strapi.models.attractions });
    },
    async delete(ctx) {
      const { id } = ctx.params;
      const [attractions] = await strapi.services.attractions.find({
        id: ctx.params.id,
        "user.id": ctx.state.user.id,
      });
      if (!attractions) {
        return ctx.unauthorized(`You can't update this entry`);
      }
      const entity = await strapi.services.attractions.delete({ id });
      return sanitizeEntity(entity, { model: strapi.models.attractions });
    },
    // get loggin as users
    async me(ctx) {
      console.log("ctx", ctx);
      const user = ctx.state.user;
      console.log("user", user);

      if (!user) {
        return ctx.badRequest(null, [
          { messages: [{ id: "No authorization header was found" }] },
        ]);
      }
      console.log("景點", strapi.services.attractions);
      const data = await strapi.services.attractions.find({ user: user.id });
      if (!data) {
        return ctx.notFound();
      }
      return sanitizeEntity(data, { model: strapi.models.attractions });
    },
  })
);
