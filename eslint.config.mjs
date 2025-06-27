import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Konfigurasi lama Anda tetap ada di sini
  ...compat.extends("next/core-web-vitals"),

  // Tambahkan objek konfigurasi baru di sini
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjs,ts,tsx,mts}"], // Terapkan aturan ini ke semua file yang relevan
    languageOptions: {
      parser: typescriptParser, // Menentukan parser untuk TypeScript
    },
    rules: {
      // --- ATURAN YANG DIMATIKAN ---

      // 1. Izinkan variabel yang tidak terpakai
      "@typescript-eslint/no-unused-vars": "off",

      // 2. Izinkan penggunaan tipe 'any'
      "@typescript-eslint/no-explicit-any": "off",

      // 3. Izinkan penggunaan tag <img> (tidak disarankan)
      "@next/next/no-img-element": "off",

      // 4. Jadikan error dependency useEffect sebagai peringatan (warning) saja
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;