module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader'] });
    return config;
  }
}
