import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default ({ mode }) => {
//   // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
//   process.env = {...process.env, ...loadEnv(mode, process.cwd())};
//   return defineConfig({
//       plugins: [react()]
//   }); 
// };