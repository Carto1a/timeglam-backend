export class EstabelecimentoCreateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EstabelecimentoCreateError';
  }
}

export class EstabelecimentoGetServicosError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EstabelecimentoGetServicosError';
  }
}

export class EstabelecimentoGetByIdError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EstabelecimentoGetByIdError';
  }
}
