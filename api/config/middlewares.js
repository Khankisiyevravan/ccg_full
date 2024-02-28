module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '200mb', // form verisi için maksimum boyut
      jsonLimit: '200mb', // JSON verisi için maksimum boyut
      textLimit: '200mb', // text verisi için maksimum boyut
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // dosya yüklemeleri için maksimum boyut (byte olarak)
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

