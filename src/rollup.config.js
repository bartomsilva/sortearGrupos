export default {
  // ... outras configurações ...

  build: {
    // ... outras configurações de build ...
    chunkSizeWarningLimit: 1500, // Ajuste o limite de tamanho do chunk conforme necessário

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Agrupa as dependências de node_modules
          }
        }
      }
    }
  }
}