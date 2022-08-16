'use strict';

/**
 * music-popular service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-popular.music-popular');
