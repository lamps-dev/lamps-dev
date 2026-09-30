import { defineConfig } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'lamps-dev',
    type: 'user',
  },
  outputDir: 'sponsorkit',
  formats: ['svg'],
})
