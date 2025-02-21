



// const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
// const canDetect = languageDetectorCapabilities.capabilities;
// let detector;
// if (canDetect === 'no') {
//   // The language detector isn't usable.
// //   return;
// }
// if (canDetect === 'readily') {
//   // The language detector can immediately be used.
//   detector = await self.ai.languageDetector.create();
// } else {
//   // The language detector can be used after model download.
//   detector = await self.ai.languageDetector.create({
//     monitor(m) {
//       m.addEventListener('downloadprogress', (e) => {
//         console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
//       });
//     },
//   });
//   await detector.ready;
// }


// const someUserText = 'Hallo und herzlich willkommen!';
// const results = await detector.detect(someUserText);
// for (const result of results) {
//   // Show the full list of potential languages with their likelihood, ranked
//   // from most likely to least likely. In practice, one would pick the top
//   // language(s) that cross a high enough threshold.
//   console.log(result.detectedLanguage, result.confidence);
// }
// // (Output truncated):
// // de 0.9993835687637329
// // en 0.00038279531872831285
// // nl 0.00010798392031574622
// // ...