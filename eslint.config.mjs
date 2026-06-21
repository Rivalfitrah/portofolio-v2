import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    // Tambahkan 'next/core-web-vitals' agar pengecekan lebih ketat standar Vercel
    extends: ['next', 'next/core-web-vitals'], 
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      
      // Aturan baru untuk mendeteksi kode nganggur
      'no-unused-vars': 'off', // Matikan bawaan JS
      // Hidupkan bawaan TypeScript (akan muncul garis kuning/warning jika ada variabel/import nganggur)
      '@typescript-eslint/no-unused-vars': ['warn', { 
        'vars': 'all', 
        'args': 'after-used', 
        'ignoreRestSiblings': true,
        'argsIgnorePattern': '^_' // Abaikan variabel yang diawali garis bawah (misal: _req)
      }],
    },
  }),
]

export default eslintConfig;