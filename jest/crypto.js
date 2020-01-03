const mockCrypto = {
  getRandomValues() {
    return [0]
  },
}
global.crypto = mockCrypto
