module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // Add more presets like 'eslint:recommended' if needed
    'plugin:vue/vue3-essential', // This is for Vue 3 essential rules
    'eslint:recommended', // Use this for recommended rules by ESLint
  ],
  parserOptions: {
    ecmaVersion: 2021, // Using the 2021 version of ECMAScript
    sourceType: 'module', // Allows using import/export statements
  },
  plugins: [
    'vue', // Enables Vue plugin
  ],
  rules: {
    // Override/add rules settings here, such as:
    'vue/no-unused-vars': 'warn', // Warns on unused variables in Vue components
    'no-unused-vars': 'warn', // Warns on unused variables
    'no-console': 'off', // Allows the use of console.log etc.
  },
};
