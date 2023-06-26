'use strict';

/**
 * latest-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-article.latest-article');
