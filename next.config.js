const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });
  
  const nextConfig = {
    // 기타 설정
  };
  
  module.exports = withPWA(nextConfig);
  