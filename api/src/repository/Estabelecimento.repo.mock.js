import {
  EstabelecimentoCreateError,
  EstabelecimentoGetServicosError,
  EstabelecimentoGetByIdError,
} from '../errors/Estabelecimento.error';

export default class EstabelecimentoRepo {
  async create(estabelecimento) {
    throw new EstabelecimentoCreateError(err.message);
  }

  async getServicos(estabelecimentoId) {
    throw new EstabelecimentoGetServicosError(err.message);
  }

  async getById(id) {
    throw new EstabelecimentoGetByIdError(err.message);
  }
}
