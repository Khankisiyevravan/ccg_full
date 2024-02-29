'use strict';

/**
 * colleague service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::colleague.colleague');
