'use strict';

/**
 * latest-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-article.latest-article');
