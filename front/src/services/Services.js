import api from "./api";

const Service = {
  user: {
    async cadastro(user) {
      return api.post("/usuarios", user);
    },
    async login(user) {
      return await api.post("/usuarios/signin", user);
    },
  },
  posts: {

    async create(post) {
      return api.post(`/posts`,  post);
    },

    async getOne(id) {
      return api.get(`/posts/${id}`);
    },

    async getAll(params) {
      return api.get(`/posts`, {
        params,
      });
    },

    async getComentarios(id) {
      return api.get(`/posts/${id}/comentarios`);
    },

    async like(id) {
      return api.post(`/posts/${id}/like`);
    },

    async getLikes(id) {
      return api.get(`/posts/${id}/likes`);
    },
  },

  //     async getDenunciation(id) {
  //       return await api.get(`/denuncias/${id}`);
  //     },

  //     async createDenunciation(denunciation) {
  //       return await api.post(`/denuncias`, denunciation);
  //     },

  //     async editDenunciation(id, denunciation) {
  //       return await api.put(`/denuncias/${id}`, denunciation);
  //     },

  //     async deleteDenunciation(id, status) {
  //       return await api.put(`/denuncias/${id}/ativo`, JSON.stringify(status), {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     },

  //     async finalizeDenunciation(id, codigo_status = false) {
  //       return await api.put(
  //         `denuncias/${id}/finalizar`,
  //         JSON.stringify(codigo_status),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     },

  //     async getDenunciationsWithForwardinsByInstitution(codigo_instituicao) {
  //       return api.get(`/encaminhamentos`, {
  //         codigoInstituicao: codigo_instituicao,
  //       });
  //     },
  //   },

  //   agent: {
  //     async loadAgents(params) {
  //       return await api.get(`/agentes`, {
  //         params,
  //       });
  //     },

  //     async getAgent(id) {
  //       return await api.get(`/agentes/${id}`);
  //     },

  //     async createAgent(agent) {
  //       return await api.post(`/agentes`, agent);
  //     },

  //     async editAgent(id, agent) {
  //       return await api.put(`/agentes/${id}`, agent);
  //     },

  //     async deleteAgent(id) {
  //       return await api.delete(`/agentes/${id}`);
  //     },
  //   },

  //   involved: {
  //     async loadInvolveds(params) {
  //       return await api.get(`/pessoas`, {
  //         params,
  //       });
  //     },

  //     async getInvolved(id) {
  //       return await api.get(`/pessoas/${id}`);
  //     },

  //     async createInvolved(involved) {
  //       return await api.post(`/pessoas`, involved);
  //     },

  //     async editInvolved(id, involved) {
  //       return await api.put(`/pessoas/${id}`, involved);
  //     },

  //     async deleteInvolved(id) {
  //       return await api.delete(`/pessoas/${id}`);
  //     },
  //   },

  //   task: {
  //     async loadTasks() {
  //       return await api.get(`/`);
  //     },

  //     async getTask(id) {},

  //     async createTask() {},

  //     async editTask(id) {},

  //     async deleteTask(id) {},
  //   },

  //   institution: {
  //     async loadInstitutions(params) {
  //       return await api.get(`/instituicoes`, {
  //         params,
  //       });
  //     },

  //     async getInstitution(id) {
  //       return await api.get(`/instituicoes/${id}`);
  //     },

  //     async createInstitution(institution) {
  //       return await api.post(`/instituicoes`, institution);
  //     },

  //     async editInstitution(id, institution) {
  //       return await api.put(`/instituicoes/${id}`, institution);
  //     },

  //     async deleteInstitution(id) {
  //       return await api.delete(`/instituicoes/${id}`);
  //     },
  //   },

  //   theme: {
  //     async loadThemes() {
  //       return await api.get(`/temas`);
  //     },
  //   },

  //   type_institution: {
  //     async loadTypes() {
  //       return await api.get(`/tipoinstituicao`);
  //     },
  //   },

  //   sub_violation_types: {
  //     async loadViolationSubTypes() {
  //       return await api.get("/subtipos-violacoes");
  //     },
  //     async getViolationSubType(id) {
  //       return await api.get(`/subtipos-violacoes/${id}`);
  //     },
  //     async createViolationSubType(violationType) {
  //       return await api.post(`/subtipos-violacoes`, violationType);
  //     },
  //     async editViolationSubType(id, violationType) {
  //       return await api.put(`/subtipos-violacoes/${id}`, violationType);
  //     },
  //     async deleteViolationSubType(id) {
  //       return await api.put(
  //         `/subtipos-violacoes/${id}/ativo`,
  //         JSON.stringify(false),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     },
  //   },

  //   violation_types: {
  //     async loadViolationTypes() {
  //       return await api.get("/tipos-violacoes");
  //     },
  //     async getViolationType(id) {
  //       return await api.get(`/tipos-violacoes/${id}`);
  //     },
  //     async createViolationType(violationType) {
  //       return await api.post(`/tipos-violacoes`, violationType);
  //     },
  //     async editViolationType(id, violationType) {
  //       return await api.put(`/tipos-violacoes/${id}`, violationType);
  //     },
  //     async deleteViolationType(id) {
  //       return await api.put(
  //         `/tipos-violacoes/${id}/ativo`,
  //         JSON.stringify(false),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     },
  //   },

  //   address: {
  //     async loadStates() {
  //       return await api.get("/estados");
  //     },

  //     async getCitysState(id) {
  //       return await api.get(`/estados/${id}/cidades`);
  //     },

  //     async getDistrictsCitys(id) {
  //       return await api.get(`/cidades/${id}/bairros`);
  //     },

  //     async loadCitys() {
  //       return await api.get("/cidades");
  //     },
  //   },

  //   doenca: {
  //     async loadDoencas() {
  //       return await api.get("/doencas-raras");
  //     },
  //   },

  //   deficiencia: {
  //     async loadDeficiencias() {
  //       return await api.get("/deficiencias");
  //     },
  //   },

  //   estado_civil: {
  //     async loadStatusCivil() {
  //       return await api.get("/estados-civis");
  //     },
  //   },

  //   genero: {
  //     async loadGeneros() {
  //       return await api.get("/generos");
  //     },
  //   },

  //   canais: {
  //     async loadCanais() {
  //       return await api.get("/canais");
  //     },
  //   },

  //   lgbt: {
  //     async loadLGBT() {
  //       return await api.get("/lgbt");
  //     },
  //   },

  //   etnias: {
  //     async loadEtnias() {
  //       return await api.get("/raca-cor");
  //     },
  //   },

  //   locais_ocorrencias: {
  //     async loadOcorrenceLocals() {
  //       return await api.get("/locais-ocorrencias");
  //     },
  //   },
  //   faixa_etarias: {
  //     async loadFaixaEtarias() {
  //       return await api.get("/faixa-etarias");
  //     },
  //   },
  //   graus_instrucao: {
  //     async loadGrausInstrucao() {
  //       return await api.get("/graus-instrucoes");
  //     },
  //   },
  //   ocupacoes: {
  //     async loadOcupacoes() {
  //       return await api.get("/ocupacoes");
  //     },
  //   },
  //   frequencias: {
  //     async loadFrequencias() {
  //       return await api.get("/frequencias");
  //     },
  //   },
  //   criticidades: {
  //     async loadCriticidade() {
  //       return await api.get("/criticidades");
  //     },
  //   },
  //   grau_parentesco: {
  //     async loadGrauParentesco() {
  //       return await api.get("/parentescos");
  //     },
  //   },
  //   forwarding: {
  //     async createForwarding(forwarding) {
  //       return await api.post(`/encaminhamentos/`, forwarding);
  //     },
  //     async getForwarding(codigo) {
  //       return await api.get(`/encaminhamentos/${codigo}`);
  //     },
  //     async receiveForwarding(codigo, status) {
  //       return await api.put(
  //         `/encaminhamentos/${codigo}/receber`,
  //         JSON.stringify(status),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     },
  //     async replyForwarding(codigo, reply) {
  //       return await api.put(`/encaminhamentos/${codigo}/responder`, reply, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     },
  //     async getDenunciationForwardings(codigo_denuncia) {
  //       return await api.get(`denuncias/${codigo_denuncia}/encaminhamentos`);
  //     },
  //   },
  //   group_denunciation: {
  //     async getGroupDenunciations(codigo) {
  //       return await api.get(
  //         `/denunciaAgrupamentos/${codigo}/denuncias-agrupadas`
  //       );
  //     },
  //     async getGroupDenunciation(codigo) {
  //       return await api.get(`/denunciaAgrupamentos/${codigo}`);
  //     },
  //   },
  //   categorical: {
  //     async loadPriorities() {
  //       return await api.get("/prioridades");
  //     },
  //     async loadStatusDenunciation() {
  //       return await api.get("/status-denuncia");
  //     },
  //   },
};

export default Service;
