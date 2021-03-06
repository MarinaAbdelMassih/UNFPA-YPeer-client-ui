// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceURI: 'https://y-peer-stg-orchestration.almentor.net/api/',
  drmURI: 'https://stg-drm-doroos.almentor.net/',
  deployUrl: '',
  uploadServiceURI: 'https://adminstg-uploader.almentor.net/api/resources/',
  cdnURI: 'http://stgcdn-y-peer.almentor.net/',
  courseId: 0,
  recaptcha: {
    siteKey: '6LdvLlQdAAAAAH0omiaJN8vrd8PK-5YeOFzJRIfX',
  },
  contentful: {
    spaceId: 'jvvejk00zh2l',
    token: 'SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
  },
  idb: {
    version: 1,
    name: 'y-peer',
    tables: ['home', 'media']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
