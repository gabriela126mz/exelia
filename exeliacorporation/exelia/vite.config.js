import obfuscator from 'vite-plugin-obfuscator';

export default {
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      rotateStringArray: true,
      stringArrayEncoding: ['rc4'],
      stringArrayThreshold: 1
    })
  ]
};
