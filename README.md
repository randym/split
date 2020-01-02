Exploring [String.split](https://github.com/zloirock/core-js/issues/741) issues arising from 3.6.0+

Basically String.split with a regular expression ends up doing the same thing as String.split('')
The goal here is to edit index.js to include the same polyfills in the same order

### Client library where I hit this problem imports the following:

```
@babel/preset-env: `DEBUG` option

Using targets:
{
  "chrome": "78",
  "edge": "18",
  "firefox": "71",
  "ie": "11",
  "safari": "13"
}

Using modules transform: auto

Using plugins:
  transform-template-literals { "ie":"11" }
  transform-literals { "ie":"11" }
  transform-function-name { "edge":"18", "ie":"11" }
  transform-arrow-functions { "ie":"11" }
  transform-classes { "ie":"11" }
  transform-object-super { "ie":"11" }
  transform-shorthand-properties { "ie":"11" }
  transform-duplicate-keys { "ie":"11" }
  transform-computed-properties { "ie":"11" }
  transform-for-of { "ie":"11" }
  transform-sticky-regex { "ie":"11" }
  transform-dotall-regex { "edge":"18", "firefox":"71", "ie":"11" }
  transform-unicode-regex { "ie":"11" }
  transform-spread { "ie":"11" }
  transform-parameters { "ie":"11" }
  transform-destructuring { "ie":"11" }
  transform-block-scoping { "ie":"11" }
  transform-typeof-symbol { "ie":"11" }
  transform-new-target { "ie":"11" }
  transform-regenerator { "ie":"11" }
  transform-exponentiation-operator { "ie":"11" }
  transform-async-to-generator { "ie":"11" }
  proposal-async-generator-functions { "edge":"18", "ie":"11" }
  proposal-object-rest-spread { "edge":"18", "ie":"11" }
  proposal-unicode-property-regex { "edge":"18", "firefox":"71", "ie":"11" }
  proposal-json-strings { "edge":"18", "ie":"11" }
  proposal-optional-catch-binding { "edge":"18", "ie":"11" }
  transform-named-capturing-groups-regex { "edge":"18", "firefox":"71", "ie":"11" }
  transform-modules-commonjs { "chrome":"78", "edge":"18", "firefox":"71", "ie":"11", "safari":"13" }
  proposal-dynamic-import { "chrome":"78", "edge":"18", "firefox":"71", "ie":"11", "safari":"13" }

Using polyfills with `usage` option:

[...] Added following core-js polyfills:
  es.function.name { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.replace { "edge":"18", "firefox":"71", "ie":"11", "safari":"13" }

[...] Added following core-js polyfills:
  es.array.map { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.split { "edge":"18", "ie":"11" }

[...] Added following core-js polyfills:
  es.array.join { "ie":"11" }
  es.array.map { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.split { "edge":"18", "ie":"11" }

[...] Added following core-js polyfills:
  es.array.concat { "ie":"11" }
  es.object.to-string { "ie":"11" }
  es.regexp.to-string { "edge":"18", "ie":"11" }

[...] Added following core-js polyfill:
  es.array.find { "ie":"11" }

[...] Added following core-js polyfills:
  es.array.slice { "ie":"11" }
  es.function.name { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.match { "edge":"18", "ie":"11" }

[...] Added following core-js polyfills:
  es.array.map { "ie":"11" }
  es.function.name { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.match { "edge":"18", "ie":"11" }

[...] Added following core-js polyfills:
  es.array.concat { "ie":"11" }
  es.array.iterator { "ie":"11" }
  es.object.to-string { "ie":"11" }
  es.typed-array.uint32-array { "ie":"11", "safari":"13" }
  es.typed-array.copy-within { "ie":"11" }
  es.typed-array.every { "ie":"11" }
  es.typed-array.fill { "ie":"11" }
  es.typed-array.filter { "ie":"11" }
  es.typed-array.find { "ie":"11" }
  es.typed-array.find-index { "ie":"11" }
  es.typed-array.for-each { "ie":"11" }
  es.typed-array.includes { "ie":"11" }
  es.typed-array.index-of { "ie":"11" }
  es.typed-array.iterator { "ie":"11" }
  es.typed-array.join { "ie":"11" }
  es.typed-array.last-index-of { "ie":"11" }
  es.typed-array.map { "ie":"11" }
  es.typed-array.reduce { "ie":"11" }
  es.typed-array.reduce-right { "ie":"11" }
  es.typed-array.reverse { "ie":"11" }
  es.typed-array.set { "ie":"11" }
  es.typed-array.slice { "ie":"11" }
  es.typed-array.some { "ie":"11" }
  es.typed-array.sort { "ie":"11" }
  es.typed-array.subarray { "ie":"11" }
  es.typed-array.to-locale-string { "edge":"18", "ie":"11" }
  es.typed-array.to-string { "ie":"11" }

[...] Added following core-js polyfills:
  es.array.map { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.split { "edge":"18", "ie":"11" }
  es.string.trim { "ie":"11" }

[...] Added following core-js polyfills:
  es.object.to-string { "ie":"11" }
  es.promise { "edge":"18", "ie":"11" }

[...] Added following core-js polyfills:
  es.array.find-index { "ie":"11" }
  es.array.splice { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.replace { "edge":"18", "firefox":"71", "ie":"11", "safari":"13" }

[...] Added following core-js polyfills:
  es.array.find { "ie":"11" }
  es.regexp.exec { "ie":"11" }
  es.string.replace { "edge":"18", "firefox":"71", "ie":"11", "safari":"13" }

[...] Added following core-js polyfill:
  es.array.find { "ie":"11" }

[...] Added following core-js polyfills:
  es.array.concat { "ie":"11" }
  es.array.map { "ie":"11" }
  es.array.splice { "ie":"11" }

[...] Added following core-js polyfills:
  es.array.concat { "ie":"11" }
  es.array.find { "ie":"11" }
  es.function.name { "ie":"11" }
```
