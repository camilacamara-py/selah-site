// Textos e rotas comuns às duas línguas. Cada página tem a sua par na outra língua
// (o seletor de idioma leva direto para ela).

export type Lingua = 'pt' | 'en';

export const APP = {
  nome: 'Selah: Enigmas da Bíblia',
  lema: { pt: 'Pause. Pense. Descubra.', en: 'Pause. Think. Discover.' },
  responsavel: 'Arke Play',
  cidade: { pt: 'Belo Horizonte, MG, Brasil', en: 'Belo Horizonte, MG, Brazil' },
  email: 'arkeplay.puzzles@gmail.com',
  vigencia: { pt: '20 de novembro de 2026', en: 'November 20, 2026' },
};

/** Pares de rotas: a mesma página em português e em inglês. */
export const ROTAS = {
  inicio: { pt: '/', en: '/en' },
  privacidade: { pt: '/privacidade', en: '/en/privacy' },
  termos: { pt: '/termos', en: '/en/terms' },
  suporte: { pt: '/suporte', en: '/en/support' },
  excluir: { pt: '/excluir-conta', en: '/en/delete-account' },
} as const;

export type Pagina = keyof typeof ROTAS;

export const MENU: Record<Lingua, { pagina: Pagina; rotulo: string }[]> = {
  pt: [
    { pagina: 'suporte', rotulo: 'Suporte' },
    { pagina: 'privacidade', rotulo: 'Privacidade' },
    { pagina: 'termos', rotulo: 'Termos' },
  ],
  en: [
    { pagina: 'suporte', rotulo: 'Support' },
    { pagina: 'privacidade', rotulo: 'Privacy' },
    { pagina: 'termos', rotulo: 'Terms' },
  ],
};

export const RODAPE: Record<Lingua, { pagina: Pagina; rotulo: string }[]> = {
  pt: [
    { pagina: 'suporte', rotulo: 'Suporte e perguntas' },
    { pagina: 'privacidade', rotulo: 'Política de Privacidade' },
    { pagina: 'termos', rotulo: 'Termos de Uso' },
    { pagina: 'excluir', rotulo: 'Excluir dados' },
  ],
  en: [
    { pagina: 'suporte', rotulo: 'Support and FAQ' },
    { pagina: 'privacidade', rotulo: 'Privacy Policy' },
    { pagina: 'termos', rotulo: 'Terms of Use' },
    { pagina: 'excluir', rotulo: 'Delete data' },
  ],
};
