const slugify = require("slugify");

module.exports = {
  beforeCreate(attraction) {
    const { data } = attraction.params;
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
  beforeUpdate(attraction) {
    const { data } = attraction.params;
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
