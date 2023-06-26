'use strict';

/**
 * latest-article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-article.latest-article');
