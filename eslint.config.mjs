import coreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
	},
	...coreWebVitals,
	{
		rules: {
			// Pre-existing patterns (SSR mounted guards, socket connect handlers);
			// revisit when refactoring rather than failing lint on the upgrade.
			"react-hooks/set-state-in-effect": "warn",
		},
	},
];

export default config;
