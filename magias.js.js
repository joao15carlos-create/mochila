// magias.js
const BANCO_MAGIAS = {
    "Adaga Mental": { 
        desc: "Você projeta uma adaga de energia mental contra um alvo. Causa 2d6 pontos de dano psíquico e o alvo fica pasmo por uma rodada.", 
        apr: [
            {c: 2, d: "Aumenta o dano em +1d6"}, 
            {c: 2, d: "Muda o alvo para pasmo e atordoado por 1 rodada"}
        ] 
    },
    "Armadura Arcana": { 
        desc: "Cria uma barreira invisível que fornece +5 na Defesa.", 
        apr: [
            {c: 2, d: "Aumenta o bônus em +2"}, 
            {c: 5, d: "Muda a duração para um dia"}
        ] 
    },
    "Curar Ferimentos": { 
        desc: "Cura 1d8+1 pontos de vida em um alvo adjacente.", 
        apr: [
            {c: 1, d: "Aumenta a cura em +1d8+1"}, 
            {c: 2, d: "Muda o alcance para curto"}
        ] 
    },
    "Explosão de Chamas": { 
        desc: "Um cone de chamas de 6m irrompe de suas mãos, causando 2d6 de dano de fogo.", 
        apr: [
            {c: 1, d: "Aumenta o dano em +1d6"}, 
            {c: 2, d: "Alvos que falharem na resistência ficam em chamas"}
        ] 
    },
    "Seta Infalível": { 
        desc: "Cria duas setas de energia que causam 1d4+1 de dano de essência cada e sempre acertam.", 
        apr: [
            {c: 2, d: "Cria +1 seta"}
        ] 
    },
    "Sono": { 
        desc: "Faz alvos em alcance curto caírem em sono mágico (Vontade anula).", 
        apr: [
            {c: 2, d: "Aumenta o número de alvos"}
        ] 
    }
};