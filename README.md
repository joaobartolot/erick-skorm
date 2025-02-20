# Erick Skorm's Designer Portfolio

This project is a portfolio for showcasing the work of designer Erick Skorm. It is built using React, TypeScript, and Vite, providing a fast and modern development experience.

## Features

- Multilingual support using `react-i18next`
- Dynamic content rendering
- Responsive design
- Easy to update and maintain

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Vite**: A build tool that provides a fast development server and optimized builds
- **react-i18next**: Internationalization for React
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/erick-skorm.git
    cd erick-skorm
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm run build
    ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
	// Set the react version
	settings: { react: { version: '18.3' } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
})
```

## License

This project is licensed under the MIT License.
