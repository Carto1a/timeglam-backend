import Estabelecimento from '../models/Estabelecimento';
import Servico from '../models/Servico';
import {
  EstabelecimentoCreateError,
  EstabelecimentoGetServicosError,
  EstabelecimentoGetByIdError,
} from '../errors/Estabelecimento.error';

export default class EstabelecimentoRepo {
  async create(estabelecimento) {
    try {
      return await new Estabelecimento(estabelecimento).save();
    } catch (err) {
      throw new EstabelecimentoCreateError(err.message);
    }
  }

  async getServicos(estabelecimentoId) {
    try {
      return await Servico.find({
        estabelecimentoId,
        status: 'A',
      }).select('_id titulo');
    }
    catch (err) {
      throw new EstabelecimentoGetServicosError(err.message);
    }
  }

  async getById(id) {
    try {
      return await Estabelecimento
        .findById(id)
        .select('capa nome endereco.cidade geo.coordinates telefone');
    } catch (err) {
      throw new EstabelecimentoGetByIdError(err.message);
    }
  }
}
