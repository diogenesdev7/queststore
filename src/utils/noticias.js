import forza from '../assets/img/news/forza8.webp'
import metal from '../assets/img/news/mgs.webp'
import thefinals from '../assets/img/news/thefinals.webp'
import assassins from '../assets/img/news/assassins.jpg'
import crymachina from '../assets/img/news/crymachina.png'
import persona from '../assets/img/news/persona.webp'
import ff9 from '../assets/img/news/ff9.jpg'
import alan from '../assets/img/news/alanwake.webp'

const noticias = [
    {
        id: 1,
        titulo: 'Forza evoului para se tornar o game de corrida definitivo',
        img: forza,
        text: 'Na parte visual, Forza Motorsport consegue ir ainda mais longe que Forza Horizon 5 e Motorsport 7, e apesar da menor diversidade de ambientes que a série Horizon - uma vez que jogamos em circuitos profissionais de corrida em vez de um mapa aberto com biomas variados -, o jogo está absolutamente deslumbrante, seja no modo qualidade, que prioriza os gráficos, ou desempenho, dedicado a uma maior taxa de quadros e melhor fluidez, o que é o ideal em simuladores, naturalmente. A riqueza de detalhes dos carros, os circuitos e efeitos de iluminação na pista são os melhores que já vi em um game de corrida no aspecto visual, o que não é exatamente uma novidade para a franquia. Forza Motorsport sempre foi referência em gráficos, e o novo jogo não apenas dá continuidade a essa tradição, como tem um nível de detalhes e refinamento verdadeiramente impressionante, até mesmo para os altos padrões já conhecidos da Turn 10.',
        video: 'https://www.youtube.com/embed/em4gv1Ietko?si=aJo8CKYiqtWSJ8uw'
    },
    {
        id: 2,
        titulo: 'Metal Gear Solid Delta: Snake Eater, tem primeira gameplay vazada',
        img: metal,
        text: 'Metal Gear Solid Delta: Snake Eater, o aguardado remake de Metal Gear Solid 3, finalmente ganhou um trailer com breves trechos de gameplay. Embora ainda se trate de um material que estará exatamente igual na versão final do jogo, Metal Gear Solid Delta mostrou pela primeira vez aspectos de movimentação, design de cenários e combate do remake do clássico atemporal do gênero stealth. No vídeo, vemos Naked Snake, que futuramente ficaria conhecido como Big Boss, em ação, movimentando-se pelo mapa e matando alguns inimigos no mapa. Pouco foi mostrado além disso, mas este foi o primeiro vislumbre do que o público poderá conferir na versão final de Metal Gear Solid 3.',
        video: "https://www.youtube.com/embed/2sYI38YFtAE?si=dSCZoHXr9AG6HQdS"
    },
    {
        id: 3,
        titulo: 'The finals tem primeiro beta aberto',
        img: thefinals,
        text: 'A partir de 26 de outubro, a Embark Studios dará início ao primeiro beta aberto multiplataforma de The Finals, jogo de tiro gratuito e baseado em equipe que leva o dinamismo ambiental, a destruição e a liberdade do jogador ao limite. O teste acontecerá no Xbox Series X|S, PlayStation 5 e Steam e termina em 5 de novembro. Em The Finals, você e seu time lutam por fama, riqueza e em favor de generosos patrocinadores sazonais, em arenas virtuais hiper-realistas e completamente destrutíveis, inspiradas em locais icônicos do mundo real.',
        video: 'https://www.youtube.com/embed/MU5hpy33zrY?si=CgzVoLH0wr-xf4Df'
    },
    {
        id: 4,
        titulo: 'Ubisoft divulga imagem de possível protagonista de Assassins Creed Red',
        img: assassins,
        text: `O tão aguardado jogo japonês de Assassin's Creed da Ubisoft, que vem sendo chamado de Assassin's Creed Codename Red, aparentemente teve seu protagonista vazado por um desenvolvedor. Conforme reportado pelo Eurogamer, Pierre Boudreau, escritor sênior da Ubisoft que faz parte do desenvolvimento do jogo, mudou sua foto de capa do LinkedIn para o que parece ser a protagonista de Assassin's Creed Red - antes de rapidamente mudá-la de novo, desta vez para Eivor, protagonista de AC Valhalla.`,
        video: 'https://www.youtube.com/embed/gD_DemeUuy8?si=8LyIM_1zWuNnUj73'
    },
    {
        id: 5,
        titulo: 'Crymachina, novo rpg japonês ganha data de lançamento',
        img: crymachina,
        text: `Em um mundo onde os humanos foram extintos milhares de anos atrás, os seres sintéticos conhecidos como Dei ex Machina foram encarregados de trazer a humanidade de volta. Junte-se a três E.V.E., a psique recriada de humanos falecidos instilou em corpos sintéticos, enquanto buscam sua humanidade completa e exploram Eden para descobrir os segredos escondidos dentro.`,
        video: 'https://www.youtube.com/embed/z93vVB6LZRs?si=k8eDEm7dKO7zXLip'
    },
    {
        id: 6,
        titulo: 'Persona 3 Reload tem data de lançamento divulgada',
        img: persona,
        text: 'A Atlus anunciou nesta quarta-feira (23) a data de lançamento de Persona 3 Reload. O remake de Shin Megami Tensei: Persona 3 sai em 2 de fevereiro de 2024 mundialmente. Além da data de lançamento e o início do período de pré-venda, a página do game na Steam também afirma que o jogo vem com legendas em português brasileiro. O remake P3 Reload, chega para PC (via Steam e Microsoft Store), Xbox One, PlayStation 4, Xbox Series X|S e PlayStation 5. Também será possível jogar via Xbox Games Pass.',
        video: 'https://www.youtube.com/embed/QIIPXA2A6cM?si=kocjKgBvwqrubQWD',
    },
    {
        id: 7,
        titulo: 'Final Fantasy IX Remake é real, e manterá combate por turnos',
        img: ff9,
        text: 'Alvo de vazamentos já há algum tempo, Final Fantasy 9 Remake parece mesmo real e pode ser anunciado muito em breve pela Square Enix. De acordo com o insider Jeff Grubb, conhecido por um histórico preciso de acertos, o game está mesmo em desenvolvimento e pode ser oficializado a qualquer momento pelo estúdio japonês. As informações foram reveladas no podcast Game Mess Mornings e dão conta de que FF 9 Remake será um projeto de escala menor do que Final Fantasy 7 Remake e Rebirth, mas também não será apenas um remaster, como Crisis Core: Final Fantasy 7 Reunion.',
        video: 'https://www.youtube.com/embed/BaMiPb6KiWo?si=eiFE4kNP--QCtvKf'
    },
    {
        id: 8,
        titulo: 'Alan Wake 2 ganha trailer de divulgação macabro',
        img: alan,
        text: 'O trailer destacou a investigação da agente do FBI Saga Anderson e trouxe vários momentos de tensão. Alan Wake 2 é a aguardada sequência do jogo de suspense da Remedy Entertainment que traz o escritor que dá nome ao título após 13 anos do seu desaparecimento, além de introduzir uma nova co-protagonista chamada Saga Anderson. A gameplay mantém os elementos de ação do Alan Wake original, mas com um foco maior no terror e sobrevivência. Alan Wake 2 será lançado no dia 27 de outubro para PlayStation 5 (PS5), Xbox Series X, Xbox Series S e PC (via Epic Games Store) por preços entre R$ 225 e R$ 270,90.',
        video: 'https://www.youtube.com/embed/MEWgOlTIW4Y?si=dpdqGby_58aCdYPa'
    }
]

export default noticias