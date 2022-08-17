/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['shader-park-core']);

module.exports = withTM({
  reactStrictMode: true,
});
