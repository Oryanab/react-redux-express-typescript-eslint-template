### Commands Record:

1. npx create-react-app . --template typescript
2. .eslintrc=> {
   "env": {
   "browser": true,
   "es6": true,
   "jest": true
   },
   "extends": [
   "eslint:recommended",
   "plugin:react/recommended",
   "plugin:@typescript-eslint/recommended"
   ],
   "plugins": ["react", "@typescript-eslint"],
   "settings": {
   "react": {
   "pragma": "React",
   "version": "detect"
   }
   },
   "rules": {
   "@typescript-eslint/explicit-function-return-type": 0,
   "@typescript-eslint/explicit-module-boundary-types": 0
   }
   }
3. package.json=>scripts=>{..."lint": "eslint \"./src/\*_/_.{ts,tsx}\""}