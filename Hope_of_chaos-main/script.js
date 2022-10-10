var name ;


// Opção de mudar o tema da página.
function mudarCor () {
    var corpo = document.getElementById('corpo');
    corpo.classList.add('black');
}

function removeCor () {
    var corpo = document.getElementById('corpo');
    corpo.classList.remove('black');
    corpo.classList.remove("autoContraste");
}

function autoContraste() {
    var corpo = document.getElementById('corpo');
    corpo.classList.add('autoContraste');
}
/****************fim****************/


// Prologo do jogo!
function prologo() {
    let prologo = document.getElementById('saida');
    prologo.innerHTML =  "<img src='https://pixeljoint.com/files/icons/full/map_animated.gif' alt='Imagem do rteino de hope of chaos'></img> <p>O reino de <strong>Hope</strong> costumava ser um reino de celebração, paz e prosperidade. Mas seu povo mal sabia que sua tranquilidade estava prestes a ter um fim. </p>  <button onclick='prologo1()'>Avançar</button>" ;

}

function prologo1() {
    let prologo1 = document.getElementById('saida');
    prologo1.innerHTML =  "<img src='arquivos/reino2.jpg'> <p>Como todo reino e seus mistérios, havia algo que rondava a imaginação e a curiosidade de seu povo: uma lenda de um suposto medalhão, de poder antigo e desconhecido. Suspeitam eles que apenas a realeza possui maiores informações desta relíquia. Porém com o espalhar da lenda, a mesma atrai os olhos de desconhecido, cobertos de ganância e ódio direcionados ao reino. </p> <button onclick='prologo2()'>Avançar</button>";
}

function prologo2() {
    let prologo2 = document.getElementById('saida');
    prologo2.innerHTML = "<img src='arquivos/prologo3.png'> <p>Em determinado dia, o reino se vê diante a uma grande ameaça. A sala onde se econtrava o medalhão foi brutalmente invadida. Dizem que essa sala era repleta de guardas rondando a relíquia, para garantir proteção. Mas todos eles foram expostos a um grande confronto com o invasor desconhecido. Supreendentemente, nenhum conseguiu resistir ao combate. A joia desejada, assim que possuida, expeliu tamanho poder que nem mesmo o invasor conseguiu suportar, Levando apenas duas partes desse objeto e deixando uma para trás. </p>  <button onclick='prologo3()'>Avançar</button>" ;
}

function prologo3 () {
  let prologo3 = document.getElementById('saida');
  prologo3.innerHTML = "<img src= 'arquivos/prologo3_1.jpg'> <p>Após acontecimento a polulação presencia estranhas mudanças em seu lar. Criaturas medievais e maquinas futurísticas passam a espalhar medo desespero a todos. O rei juntamente a outros de grande influência decidiram então criar um torneio, e que o vencedor final receberia a missão de ir em busca das peças restantes. Caso então, concluido a tafefa com glória, receberia a grande riqueza e alteração permanente de seu status. O novo herói da coroa e de seu povo.</p> <button onclick='inicio()'>Avançar</button>" ;
}
// Fim do prólogo 


// Inicio - hope of chaos 

function inicio () {
 // onload('<h1></h1>');  
  let inicio = document.getElementById('saida');
  inicio.innerHTML = "  <img src='cenas_cap/abrirbauSouN.png'> <button onclick='inicio1()'>Adquirir baú </button> <button onclick='fim1()'>Negar baú</button>";
}
/************      Primeiro final!!      **************/
function fim1 () {
   let fim1 =  document.getElementById('saida');
   fim1.innerHTML = " <img src='cenas_cap/null saindo.gif'> <h3> Caminhamos até a passagem <span class='scd'>-secreta!</span></h3> <p>O rei ordenou que saíssemos pela passagem secreta para não chamar atenção!.</p> <button onclick='fim2()'> Avançar </button>";
}

function fim2 () {
    let fim2 =  document.getElementById('saida');
    fim2.innerHTML = "<img src='cenas_cap/nullEentrandonacaverna.gif'><p>No meio do trajeto encontramos um urso!. <br><br> - ops não peguei o baú, um beijo e um pão de queijo pra mim :(</p> <button  onclick='morte0()'>BEM VINDO AO GIGANTE!</button>" ;
}

function morte0 () {
 let  morte_0 = document.getElementById('saida');
 morte_0.innerHTML = "<img src='cenas_cap/primeirofinal.gif'> <p class = 'gameOver'>Game over!! você esta morto!!</p> <button  onclick='inicio()'>Recomeçar</button>";
}
/******************************** Fim do primeiro final *****************/

// escolha de classe:
function inicio1 () {
    let inicio1 = document.getElementById('saida');
    inicio1.innerHTML = "<img src='cenas_cap/escolhaClasse.gif'> <h3>Escolha-sua-<span class = 'scd'> classe:</span></h3>  <button onclick='caminhoGuerreiro()'>Guerreiro</button> <button onclick='caminhoArqueiro()'>Arqueiro</button> <button onclick='caminhoMago()'>Mago</button>" ;
}

/*****************   caminho do guerreiro:    ******************/ 
function caminhoGuerreiro () {
    let inicio2 = document.getElementById('saida');
    name = prompt("Digite o nome do seu personagem!");
    inicio2.innerHTML = " <img src='cenas_cap/GuerreiroEscolhido.gif'> <p> <span class = 'nickName'>nome do seu personagem: " + name + "</span> | Rei: Conclua sua missão o reino precisa de você!, para não chamar atenção passe pela passagem secreta atrás do reino.</p>   <button onclick='sairDoReinoGuerreiro()'>Avançar</button>" ;
}

function sairDoReinoGuerreiro() {
  let sairDoReino = document.getElementById('saida');
  sairDoReino.innerHTML = "<img src='cenas_cap/sairDoReinoGue.gif'>" + `<p><span class='nickName'>${name}</span>:Saindo da arena e indo em direção a passagem secreta do reino, para pegarmos o portal para o outro núcleo</p> <button onclick='entrandoNaCavernaGuerreiro()'>Avançar</button>`;
}

function entrandoNaCavernaGuerreiro() {
   let entrandoNaCaverna = document.getElementById('saida');
   entrandoNaCaverna.innerHTML = "<img src='cenas_cap/EntramosNaCavernaGuereiro.gif'>" + `<p><span class='nickName'>${name}</span>: Entra na passagem secreta!</p> <button onclick='explorandoCavernaGuerreiro()'>Avançar</button>`;
}

function explorandoCavernaGuerreiro() {
    let explorandoCaverna = document.getElementById('saida');
    explorandoCaverna.innerHTML = "<img src='cenas_cap/ExplorandoCavernaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: No meio da passagem secreta encontramos um urso, precisamos passar por ele para pegar o portal no fim da caverna!</p> <button onclick='MatarUrsoGuerreiro()'>Usar Espada</button>` ;
}

function MatarUrsoGuerreiro() {
    let matarUrso = document.getElementById('saida');
    matarUrso.innerHTML = "<img src='cenas_cap/AtaqueUrsoGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>:Use sua espada para atacar o urso!!</p> <button onclick='entraPortalGuerreiro()'>Avançar</button>` ;
}

function entraPortalGuerreiro() {
    let entraPortal =  document.getElementById('saida');
    entraPortal.innerHTML = "<img src='cenas_cap/entraPortalGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Avança para o proximo núcleo do reino que esta no nosso tempo atual, mas com frequente ataques de criaturas, e boatos de um necromante que possui a segunda parte do <strong>medalhão.</strong></p>   <button onclick="ChegandoNoMedievalGuerreiro()">Avançar</button>`;
}

function ChegandoNoMedievalGuerreiro() {
    let chegandoNoMedieval = document.getElementById('saida');
    chegandoNoMedieval.innerHTML = "<img src='cenas_cap/EntrandoCavernaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Tudo em nossa volta muda. Se encontramos em uma floresta.</p> <button onclick="andandoFlorestaGuerreiro()">Avançar</button>`;
}

function andandoFlorestaGuerreiro() {
    let andandoFloresta = document.getElementById('saida');
    andandoFloresta.innerHTML = "<img src='cenas_cap/ExplorandoFlorestaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea. </p> <button onclick="cacarGuerreiro()">Caçar?</button>  <button onclick="irAoVilarejoGuerreiro()">Ir ao vilarejo?</button>`;
}

function cacarGuerreiro() {
   let cacar = document.getElementById('saida');
   cacar.innerHTML = "<img src='cenas_cap/caçarGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Escolheu caçar!<p/> <button onclick="EcontrandoAnimalGuerreiro()">Avançar</button>`;
}

function EcontrandoAnimalGuerreiro() {
    let encontrandoAnimal = document.getElementById('saida');
    encontrandoAnimal.innerHTML = "<img src='cenas_cap/aproximarAnimalGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Animal localizado qual a melhor estrategia? </p> <button onclick="seAproximarAnimalGuerreiro()">Se aproximar do animal?</button> <button onclick="matarAnimalGuerreiro()">Matar o animal?</button>` ;
}

// Falha e volta para a escolha do vilarejo ou caçar!
function seAproximarAnimalGuerreiro() {
  let aproximarDoAnimal = document.getElementById('saida');
  aproximarDoAnimal.innerHTML = "<img src='cenas_cap/AnimalFogeGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>:Animal escapou! :( <p/> <button onclick="andandoFlorestaGuerreiro()">Voltar para o caminho do vilarejo?</button>`;
}

// caminho true!!!
function matarAnimalGuerreiro() {
   let matarAnimal = document.getElementById('saida');
   matarAnimal.innerHTML = "<img src='cenas_cap/matarJavaliGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Você matou o javali , agora partiu fazer aquele churras!!</p> <button onclick="cozinharCarneGuerreiro()">Avançar</button>`;
}

function cozinharCarneGuerreiro() {
    let cozinharCarne = document.getElementById('saida');
    cozinharCarne.innerHTML = "<img src='cenas_cap/CozinharCarneGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Conzinha o animal e come uma parte!. </p>  <button onclick="IrAoVilarejoGuerreiroDaCaca()">Ir ao vilarejo</button>`;
}
// Fim caça. 

// Vilarejo vindo da caça!
function IrAoVilarejoGuerreiroDaCaca() {
    let irVilarejo = document.getElementById('saida');
    irVilarejo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027056706443808800/Knight.gif'>" + `<p><span class='nickName'>${name}</span>: Após essa refeição, ta na hora de ir ao vilarejo em busca de infromações. </p>  <button onclick="EntrandoVilarejoGuerreiro()">Avançar</button>`;
}

// indo ao vilarejo sem caçar!
function irAoVilarejoGuerreiro () {
     let diretoAoVilarejo = document.getElementById('saida');
     diretoAoVilarejo.innerHTML = "<img src ='https://cdn.discordapp.com/attachments/773372240686350356/1027055927200858232/indoAoVilarejoGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Foi em direção ao vilarejo por informações ignorando sua fome.</p>  <button onclick="EntrandoVilarejoGuerreiro()">Avançar</button>` ;
} 

// continuação vilarejo!
function EntrandoVilarejoGuerreiro() {
    let entrandoVilarejo = document.getElementById('saida');
    entrandoVilarejo.innerHTML = "<img src = 'https://cdn.discordapp.com/attachments/773372240686350356/1027061197226393610/Knight_1.gif'>" + `<p><span class='nickName'>${name}</span>: Entrou na vila, Habitantes comentam que a taberna costuma ser um lugar movimentado, talvez la haja uma pista ?. </p> <button onclick="caminhaAtabernaGuerreiro()">Ir a taberna</button>`;
}

function caminhaAtabernaGuerreiro() {
    let caminhaAtaberna = document.getElementById('saida');
    caminhaAtaberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027067542134587422/Kinght.gif?width=799&height=606'>" + `<p><span class='nickName'>${name}</span>: Caminha até a porta da taberna observando o vilarejo. </p>  <button onclick="entraNaTabernaGuerreiro()">Entrar na taberna</button>`;
}

function entraNaTabernaGuerreiro() {
    let entraNataberna = document.getElementById('saida');
    entraNataberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027067759277916250/Knight_2.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Entrou na taberna , hum nusco por informações talvez o dono da taberna tenha elas ou aquele sujeito estranho la atrás ? </p>  <button onclick="tomarUmaBrejaGuerreiro()">Tomar uma breja?</button>  <button onclick="falarComDesconhecidoGuerreiroD()">Ir direto ao homem estranho</button>`;
}

function tomarUmaBrejaGuerreiro() {
    let tomarUmaBreja = document.getElementById('saida');
    tomarUmaBreja.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027068061485899786/Knight_3.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Tomamos nossa breja perguntamos ao dono sobre informações, e ele disse <strong>Dono do bar:</strong> aquele suijeito no fundo da taberna é um homem que pode te dar muitas informações.</p>  <button onclick="falarComDesconhecidoGuerreiro()">Ir ao homem misterioso</button>`;
}
/********************* Fim caminho guerreiro *************************/

// ambos vão ao homem misterioso!
function falarComDesconhecidoGuerreiro() {
 let falarComDesconhecido = document.getElementById('saida');
 falarComDesconhecido.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027075381544636476/Knight_4.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aocnteceu no seu reino quem está por trás disso ira pagar, ouvi um boatos que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="discussaoGuerreiro()">Avançar</button>`;
}

// indo direto ao darius!
function falarComDesconhecidoGuerreiroD () {
    let falarComDesconhecido = document.getElementById('saida');
    falarComDesconhecido.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027079361653919744/Knight_5.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aocnteceu no seu reino quem está por trás disso ira pagar, ouvi um boatos que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="discussaoGuerreiro()">Avançar</button>`;
}

function discussaoGuerreiro() {
   let discussaoTaberan = document.getElementById('saida');
    discussaoTaberan.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027080629390671943/A4._Knight_Look_to_Lady.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Anão meche com a moça que estava bebendo, enão sai do pé dela dizem que esse anão tem um esquadrão de saqueadores </p>  <button onclick="ajudarMulherGuerreiro()">Ajudar?</button>  <button onclick="sairDaTabernaRGuerreiro()">Sair da taberna?</button> `;
}

function sairDaTabernaRGuerreiro() {
   let sairTaberna = document.getElementById('saida');
   sairTaberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027087933934665758/A5A._Knight_Dont_Help.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Ignoramos e seguimos em frente afinal temos uma missão importante cada segundo importa!! </p> <button onclick="irAmontanhaGuerreiro()">Avançar</button>`;
}

function ajudarMulherGuerreiro() {
   let ajudarMulher = document.getElementById('saida');
   ajudarMulher.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027091103905759314/A5B._1_Knight_Help_Intimate_1.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>:Nocauteo o anão, ajudando a moça, como se chama? <strong> Me chamo Rona sou uma viking</strong> Obrigada pela ajuda, não queria deixar esse pobre coitado em coma, <span class='nickName'>${name}</span>: o problema que os amigos dele não gostaram muito <strong>Rona</strong>: que venham!!! </p>  <button onclick="atacarAnoesGuerreiro()">Atacar!</button>`;
}

function atacarAnoesGuerreiro() {
    let atacarAnoes = document.getElementById('saida');
    atacarAnoes.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027095229716779028/A5B._3_Knight_Fight.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Todos foram derrotados!, <strong>Rona</strong>: Obrigado mais uma vez pela sua ajuda boa sorte na sua ventura!! <span class='nickName'>${name}</span>: de nada , você é uma mulher muito forte foi uma honra lutar ao seu lado agora partirei para o topo da montanha, o nosso tempo curto. </p> <button onclick="irAmontanhaGuerreiro()">Avançar</button> ` ;
}

function irAmontanhaGuerreiro () {
    let irAmontanha = document.getElementById('saida');
    irAmontanha.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027708232199852074/Knight_6.gif'>" + `<p><span class='nickName'>${name}</span>: Chegamos a entrada da montanha!. Está decendo uma caveira deve ser do exército do necromante.</p> <button onclick="subirAmontanhaGuerreiro()">Matar esqueleto</button>`;
}

function subirAmontanhaGuerreiro() {
    let subirMontanha =  document.getElementById('saida');
    subirMontanha.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027708229863612517/Knight_7.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: Executou o esqueleto agora posso seguir em frente!</p> <button onclick="subirAmontanhaGuerreiro2()">Avançar</button>`;
}

function subirAmontanhaGuerreiro2() {
    let subirAmontanha2 = document.getElementById('saida');
    subirAmontanha2.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027708229452582953/Knight_8.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: O necomante estará logo acima!</p> <button onclick="chegandoAoNecromanteGuerreiro()">Avançar</button>` ;
}
// inicio da luta contra o necromante
function chegandoAoNecromanteGuerreiro() {
    let chgegandoAoNecromante = document.getElementById('saida');
    chgegandoAoNecromante.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027723090454659122/Knight_9.gif'>" + `<p><span class='nickName'>${name}</span>: Finalmente cheguei até o necromante preciso passar por ele!!</p> <button onclick="lutandoContraAoNecromanteGuerreiro()">provocar</button>`;
}

function lutandoContraAoNecromanteGuerreiro() {
   let lutarContraOnecromente = document.getElementById('saida');
   lutarContraOnecromente.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028859983896522792/Knight_10.gif'>" + `<p><span class='nickName'>${name}</span>: Não tenho medo de você, melhor tomar cuidado com o vento dos meus golpes não desmontalo ja que você é um puro osso <strong>Necromante:</strong> Vamos ver se você ira falar mais quando seus ossos fazerem parte do meu exérciro HAHAHAHA.</p> <button onclick='MatarNecromanteGuerreiro()'>Exterminar todos!</button>` ;
}

function MatarNecromanteGuerreiro() {
     let matarNecromante = document.getElementById('saida') ;
     matarNecromante.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028860193808850965/Knight31.gif'>" + `<p><span class='nickName'>${name}</span>: aaaaah ....</p> <button onclick='pegarPrimeiroMedalhaoGuerreiro()'>Pegar medalhão</button>`;
}

function pegarPrimeiroMedalhaoGuerreiro() {
    let pegarPrimeiroMedalhao = document.getElementById('saida');
        pegarPrimeiroMedalhao.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028860313212293125/Knight1.gif'>" + `<p><span class='nickName'>${name}</span>: Medalhão coletado!! , agora esse núcleo está em paz, hora de ir ao núcleo do futuro!.</p> <button onclick="indoParaOnucleoFuturistaGuerreiro()">Pegar portal</button>`;
}

function indoParaOnucleoFuturistaGuerreiro() {
    let indoparaOfuturo = document.getElementById('saida');
    indoparaOfuturo.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028860423879008326/Knight4.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: Entrou portal! </p> <button onclick="chegandoAoNucleoFuturista()">Avançar</button>`;
}

function chegandoAoNucleoFuturista() {
  let chegandoAofuturo = document.getElementById('saida');
  chegandoAofuturo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028866989000753162/Knight1_1.gif'>" + `<p><span class='nickName'>${name}</span>:Finalmente estou perto de derrotar Hórus o destruidor de mundos e colcoar um fim nisso tudo, como esse lugar é estranho e cheio de luzes, consigo ouvir um barulho de longe e gritos preciso me aproximar</p> <button onclick="caminharNofuturoGuerreiro()">Caminhar</button>`;
}

function caminharNofuturoGuerreiro() {
    let caminharNofuturo = document.getElementById('saida');
    caminharNofuturo.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028867144487800842/Knight1_2.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: O barulho so aumenta cada vez mais ele está perto -- finalmente eu o encontrei <strong>Horús</strong>: Eu estava esperando por você soube que é <span class='nickName'>${name}</span> forte talvez me divirta um pouco HAHAHAHA <span class='nickName'>${name}</span>: Eu fiquei muito forte durante essa jornada você sera um oponente medíocre</p> <button onclick="derrotarHorusGuerreiro()">Lutar</button>`;
}

function derrotarHorusGuerreiro() {
    let derrotarHorus = document.getElementById('saida');
        derrotarHorus.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028867261517271080/Knight1_3.gif'>" + `<p><span class='nickName'>${name}</span>: A luta é intensa um erro de ambos os lados decidira o destino do nosso povo.</p> <button onclick="pegarUltimoMedalhaoGuerreiro()">Pegar medalhão</button>`;
}

function pegarUltimoMedalhaoGuerreiro() {
      let pegarUltimoMedalhao = document.getElementById('saida');
      pegarUltimoMedalhao.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028867551737938031/Knight1_4.gif'>" + `<p><span class='nickName'>${name}</span>: Finalmente recolhi todas as partes do medalhão agora tenho o grande poder antigo nas minhas mãos , eu posso ser o maior heroi se devolver para o reino e ter uma vida de gloria, ou posso usar pro meu uso própio e tudo ser meu agora que Horús foi derrotado ninguém me derrotaria, Preciso escolher se quero ir para o caminho bom ou mal!!</p> <button onclick="FinalBomGuerreiro()">Heroi</button> <button onclick="FinalRuimGuerreiro()">Vilão</button>`;
}

function FinalRuimGuerreiro() {
    let finalRuim = document.getElementById('saida');
    finalRuim.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028867689676017776/Evil.gif'>" + `<p><span class='nickName'>${name}</span>: Você se tornou um destruidor de mundos , causando destruição dominando realidades! <br> Fim..</p> <button onclick="inicio1()">Recomeçar</button>`;
}

function FinalBomGuerreiro() {
  let  finalBom = document.getElementById('saida');
    finalBom.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028867771804680262/Good_EnddingArcher2.gif'>" + `<p><span class='nickName'>${name}</span>: Você devolveu o medalhão para o reino, isso fez as realidades voltarem ao normal , se tornamos o maior heroi de todos os temos sempre seremos lembrados com grande honra!! <br> Fimm</p> <button onclick="inicio1()">Recomeçar</button>`;
}

/**************************       Fim caminho guerreiro         ***************************************** */


/******************************** Caminho Arqueiro *************************************/
function caminhoArqueiro () {
    let inicio2 = document.getElementById('saida');
    name = prompt("Digite o nome do seu personagem!");
    inicio2.innerHTML = " <img src='https://media.discordapp.net/attachments/773371651885760533/1027056255631634493/ArqueiroEscolhido.gif?width=770&height=578'> <p> <span class = 'nickName'>nome do seu personagem: " + name + "</span> | Rei: Conclua sua missão o reino precisa de você!, para não chamar atenção passe pela passagem secreta atrás do reino.</p>   <button onclick='sairDoReinoArqueiro()'>Avançar</button>" ;
}

function sairDoReinoArqueiro() {
  let sairDoReinoArqueiro = document.getElementById('saida');
  sairDoReinoArqueiro.innerHTML = "<img src='https://media.discordapp.net/attachments/773371651885760533/1027055197752668190/sairDoReinoArqueiro.gif?width=770&height=578'>" + `<p><span class='nickName'>${name}</span>:Saindo da arena e indo em direção a passagem secreta do reino, para pegarmos o portal para o outro núcleo</p> <button onclick='entrandoNaCavernaArqueiro()'>Avançar</button>`;
}

function entrandoNaCavernaArqueiro() {
   let entrandoNaCavernaArqueiro = document.getElementById('saida');
   entrandoNaCavernaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027056256508243999/EntramosNaCavernaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>: Entra na passagem secreta!</p> <button onclick='explorandoCavernaArqueiro()'>Avançar</button>`;
}

function explorandoCavernaArqueiro() {
    let explorandoCavernaArqueiro = document.getElementById('saida');
    explorandoCavernaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027055201443651584/ExplorandoCavernaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>: No meio da passagem secreta encontramos um urso, precisamos passar por ele para pegar o portal no fim da caverna!</p> <button onclick='MatarUrsoArqueiro()'>Usar Arco</button>` ;
}

function MatarUrsoArqueiro() {
    let MatarUrsoArqueiro = document.getElementById('saida');
    MatarUrsoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027056834516881408/AtaqueArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>: :Use seu arco para atacar o urso!! </p> <button onclick='entraPortalArqueiro()'>Avançar</button>` ;
}

function entraPortalArqueiro() {
    let entraPortalArqueiro = document.getElementById('saida');
    entraPortalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027056834948903002/entrarPortalArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>:  Avança para o proximo núcleo do reino que esta no nosso tempo atual, mas com frequente ataques de criaturas, e boatos de um necromante que possui a segunda parte do <strong>medalhão.</strong></p> <button onclick='chegandoNoMedievalArqueiro()'>Avançar</button>` ;
}

/********************************* Floresta Medieval Arqueiro ************************/

function chegandoNoMedievalArqueiro() {
    let chegandoNoMedievalArqueiro = document.getElementById('saida');
    chegandoNoMedievalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027055201011638292/FlorestaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>: Tudo em nossa volta muda. Se encontramos em uma floresta.</p> <button onclick='andandoFlorestaArqueiro()'>Avançar</button>` ;
}

function andandoFlorestaArqueiro() {
    let andandoFloresta = document.getElementById('saida');
    andandoFloresta.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027056833589940244/EncontrarVilaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>:Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea.</p> <button onclick="cacarArqueiro()">Caçar</button>  <button onclick="irAoVilarejoArqueiro()">Ir ao vilarejo?</button>`;
}

/********************************* Caçar Arqueiro ***********************************/
function cacarArqueiro() {
    let portalArqueiro = document.getElementById('saida');
    portalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027056833078235177/cacarArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>: Escolheu caçar!</p> <button onclick='EcontrandoAnimalArqueiro()'>Avançar</button>` ;
}

function EcontrandoAnimalArqueiro() {
    let EcontrandoAnimalArqueiro = document.getElementById('saida');
    EcontrandoAnimalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027080065370046475/Archer_9.gif'>" + `<p><span class='nickName'>${name}</span>: Animal localizado qual a melhor estrategia? </p> <button onclick="seAproximarAnimalArqueiro()">Se aproximar do animal?</button> <button onclick="matarAnimalArqueiro()">Matar o animal?</button>` ;

}

// Falha e volta para a escolha do vilarejo ou caçar!

function seAproximarAnimalArqueiro() {
    let  seAproximarAnimalArqueiro = document.getElementById('saida');
    seAproximarAnimalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027089368843821137/Archer_loose.gif'>" + `<p><span class='nickName'>${name}</span>: Animal escapou! :( </p> <button onclick='andandoFlorestaArqueiro()'>Voltar para o caminho do vilarejo?</button>` ;
}


// caminho true
function matarAnimalArqueiro() {
    let  atacarAnimalArqueiro = document.getElementById('saida');
    atacarAnimalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027087370224414760/Archer_winn_1.gif'>" + `<p><span class='nickName'>${name}</span>: Você matou o veado, agora partiu fazer aquele churras!!</p> <button onclick='fazerFogueiraArqueiro()'>Fazer fogueira</button>` ;
}

function fazerFogueiraArqueiro() {
    let  fazerFogueiraArqueiro = document.getElementById('saida');
    fazerFogueiraArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027080447592771605/Archer_10.gif'>" + `<p><span class='nickName'>${name}</span>: Cozinhar o animal e comer uma parte!</p> <button onclick='voltandoCacaArqueiro()'>Avançar</button>` ;
}

function voltandoCacaArqueiro() {
    let  voltandoCacaArqueiro = document.getElementById('saida');
    voltandoCacaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027062484739301456/Archer_2.gif'>" + `<p><span class='nickName'>${name}</span>: Após essa refeição, ta na hora de ir ao vilarejo em busca de informações.</p> <button onclick='chegandoVilarejoArqueiro()'>Avançar</button>` ;
}
/******************************** Fim Caça ******************************************/


/******************************** Vilarejo *****************************************/

// indo ao vilarejo sem caçar!

function irAoVilarejoArqueiro() {
    let irAoVilarejoArqueiro = document.getElementById('saida');
    irAoVilarejoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027059922724196362/IrParaVilaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>:Foi em direção ao vilarejo por informações ignorando sua fome.</p>  <button onclick="chegandoVilarejoArqueiro()">Avançar</button>` ;
}

// continuação vilarejo!
function irAoVilarejoArqueiroCaca() {
    let irAoVilarejoArqueiroCaca = document.getElementById('saida');
    irAoVilarejoArqueiroCaca.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027059922724196362/IrParaVilaArqueiro.gif'>" + `<p><span class='nickName'>${name}</span>:Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea.</p> <button onclick="cacarArqueiro()">Caçar</button>  <button onclick="IrAoVilarejoArqueiro()">Ir ao vilarejo?</button>`;
}

function chegandoVilarejoArqueiro() {
    let  chegandoVilarejoArqueiro = document.getElementById('saida');
    chegandoVilarejoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027062666965041223/Archer_3.gif'>" + `<p><span class='nickName'>${name}</span>:  Entrou na vila, Habitantes comentam que a taberna costuma ser um lugar movimentado, talvez lá haja uma pista?</p> <button onclick='aproximarTavernaArqueiro()'>Ir a taberna</button>`;
}


/******************************** Taverna Arqueiro *********************************/

function aproximarTavernaArqueiro() {
    let  aproximarTavernaArqueiro = document.getElementById('saida');
    aproximarTavernaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027064366845132880/Archer_4.gif'>" + `<p><span class='nickName'>${name}</span>: Caminha até a porta da taberna observando o vilarejo.</p> <button onclick='entrandoTavernaArqueiro()'>Entrar na taberna</button>` ;
}

// ambos vão ao homem misterioso!
function entrandoTavernaArqueiro() {
    let  EntrandoTavernaArqueiro = document.getElementById('saida');
    EntrandoTavernaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027070159711637504/Archer_5.gif'>" + `<p><span class='nickName'>${name}</span>:  Entrou na taberna em busca por informações. Talvez o dono da taberna tenha elas ou aquele sujeito estranho la atrás?</p> <button onclick='indoAteMesaBarArqueiro()'>Tomar uma breja?</button> <button onclick="falarComDesconhecidoArqueiro()">Ir direto ao homem estranho</button>` ;
}

function indoAteMesaBarArqueiro() {
    let  indoAteMesaBarArqueiro = document.getElementById('saida');
    indoAteMesaBarArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027070158927310849/Archer_6.gif'>" + `<p><span class='nickName'>${name}</span>: Tomamos nossa breja perguntamos ao dono sobre informações, e ele disse <strong>Dono do bar:</strong> aquele sujeito no fundo da taberna é um homem que pode te dar muitas informações.</p>  <button onclick="falarComDesconhecidoAposArqueiro()">Ir ao homem misterioso</button>`;
}

// indo direto ao darius!
function falarComDesconhecidoArqueiro() {
    let  falarComDesconhecidoArqueiro = document.getElementById('saida');
    falarComDesconhecidoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027083965653327872/Archer_12.gif'>" + `<p><span class='nickName'>${name}</span>:   Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aconteceu no seu reino, quem está por trás disso irá pagar. Ouvi um boato que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p> <button onclick='olharParaRonaArqueiro()'>Avançar</button>` ;
}

// Após tomar uma breja ir falar com o desconhecido
function falarComDesconhecidoAposArqueiro() {
    let  falarComDesconhecidoApoArqueiro = document.getElementById('saida');
    falarComDesconhecidoApoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027083991658016858/Archer_11.gif'>" + `<p><span class='nickName'>${name}</span>:  Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aconteceu no seu reino, quem está por trás disso irá pagar. Ouvi um boato que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="olharParaRonaArqueiro()">Avançar</button>`;
}

function olharParaRonaArqueiro() {
    let  olharParaRonaArqueiro = document.getElementById('saida');
    olharParaRonaArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027088624036102184/archer_13.gif'>" + `<p><span class='nickName'>${name}</span>:  Anão meche com a moça que estava bebendo, e não sai do pé dela dizem que esse anão tem um esquadrão de saqueadores</p>  <button onclick="atacarAnaoArqueiro()">Ajudar?</button> <button onclick="ignorarRonaArqueiro()">Sair da taberna?</button>`;
}

function ignorarRonaArqueiro() {
    let sairTaberna = document.getElementById('saida');
    sairTaberna.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027726760785235988/A5A._Archer_Dont_Help.gif'>" + `<p><span class='nickName'>${name}</span>: Ignoramos e seguimos em frente afinal temos uma missão importante cada segundo importa!! </p> <button onclick="irAmontanhaArqueiro()">Avançar</button>`;
}

function atacarAnaoArqueiro() {
    let  atacarAnaoArqueiro = document.getElementById('saida');
    atacarAnaoArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027091137128824903/A5B._1_Archer_Help_Intimate3.gif'>" + `<p><span class='nickName'>${name}</span>:  Nocauteo o anão, ajudando a moça, como se chama? <strong> Me chamo Rona sou uma viking</strong> Obrigada pela ajuda, não queria deixar esse pobre coitado em coma, <span class='nickName'>${name}</span>: o problema que os amigos dele não gostaram muito <strong>Rona</strong>: que venham!!!</p>  <button onclick="atacarSquadAnoesArqueiro()">Avançar</button>`;
}


function atacarSquadAnoesArqueiro() {
    let  atacarAnaoMago = document.getElementById('saida');
    atacarAnaoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027702625694658571/Archer3_1.gif'>" +  `<p><span class='nickName'>${name}</span>: Todos foram derrotados!, <strong>Rona</strong>: Obrigado mais uma vez pela sua ajuda boa sorte na sua ventura!! <span class='nickName'>${name}</span>: de nada , você é uma mulher muito forte foi uma honra lutar ao seu lado agora partirei para o topo da montanha, o nosso tempo curto. </p> <button onclick="irAmontanhaArqueiro()">Avançar</button> ` ;
}

function irAmontanhaArqueiro() {
    let irAmontanha = document.getElementById('saida');
    irAmontanha.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027729479243669525/Archer.gif'>" + `<p><span class='nickName'>${name}</span>: Chegamos a entrada da montanha!. Está decendo uma caveira deve ser do exército do necromante.</p> <button onclick="subirAmontanhaArqueiro()">Matar esqueleto</button>`;
}

function subirAmontanhaArqueiro() {
    let subirMontanha =  document.getElementById('saida');
    subirMontanha.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027729478438375467/archer_1.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: Executou o esqueleto agora posso seguir em frente!</p> <button onclick="subirAmontanhaArqueiro2()">Avançar</button>`;
}

function subirAmontanhaArqueiro2() {
    let subirAmontanha2 = document.getElementById('saida');
    subirAmontanha2.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027729478098616410/archer_2.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: O necomante estará logo acima!</p> <button onclick="chegandoAoNecromanteArqueiro()">Avançar</button>` ;
}

function chegandoAoNecromanteArqueiro() {
    let chgegandoAoNecromante = document.getElementById('saida');
    chgegandoAoNecromante.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027729477666603059/Archer_3.gif'>" + `<p><span class='nickName'>${name}</span>: Finalmente cheguei até o necromante preciso passar por ele!!</p> <button onclick="lutandoContraAoNecromanteArqueiro()">Provocar</button>`;
}

function lutandoContraAoNecromanteArqueiro() {
    let lutarContraOnecromente = document.getElementById('saida');
    lutarContraOnecromente.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028879272951169174/Archer_4.gif'>" + `<p><span class='nickName'>${name}</span>: Não tenho medo de você, melhor tomar cuidado com o vento dos meus golpes não desmontalo ja que você é um puro osso <strong>Necromante:</strong> Vamos ver se você ira falar mais quando seus ossos fazerem parte do meu exérciro HAHAHAHA.</p> <button onclick='MatarNecromanteArqueiro()'>Exterminar todos!</button>` ;
 }
 
 function MatarNecromanteArqueiro() {
      let matarNecromante = document.getElementById('saida') ;
      matarNecromante.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028879460029694142/Archer_5.gif'>" + `<p><span class='nickName'>${name}</span>: aaaaah ....</p> <button onclick='pegarPrimeiroMedalhaoArqueiro()'>Pegar medalhão</button>`;
 }
 
 function pegarPrimeiroMedalhaoArqueiro() {
     let pegarPrimeiroMedalhao = document.getElementById('saida');
         pegarPrimeiroMedalhao.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028879576589422602/Archer1.gif'>" + `<p><span class='nickName'>${name}</span>: Medalhão coletado!! , agora esse núcleo está em paz, hora de ir ao núcleo do futuro!.</p> <button onclick="indoParaOnucleoFuturistaArqueiro()">Pegar portal</button>`;
 }
 
 function indoParaOnucleoFuturistaArqueiro() {
     let indoparaOfuturo = document.getElementById('saida');
     indoparaOfuturo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028884958556725288/Archer1_1.gif'>" + `<p><span class='nickName'>${name}</span>: Entrou portal! </p> <button onclick="chegandoAoNucleoFuturistaArqueiro()">Avançar</button>`;
 }
 
 function chegandoAoNucleoFuturistaArqueiro() {
   let chegandoAofuturo = document.getElementById('saida');
   chegandoAofuturo.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028885191143477328/Archer1_2.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>:Finalmente estou perto de derrotar Hórus o destruidor de mundos e colcoar um fim nisso tudo, como esse lugar é estranho e cheio de luzes, consigo ouvir um barulho de longe e gritos preciso me aproximar</p> <button onclick="caminharNofuturoArqueiro()">Caminhar</button>`;
 }
 
 function caminharNofuturoArqueiro() {
     let caminharNofuturo = document.getElementById('saida');
     caminharNofuturo.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028885300056956959/Archer1_3.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: O barulho so aumenta cada vez mais ele está perto -- finalmente eu o encontrei <strong>Horús</strong>: Eu estava esperando por você soube que é <span class='nickName'>${name}</span> forte talvez me divirta um pouco HAHAHAHA <span class='nickName'>${name}</span>: Eu fiquei muito forte durante essa jornada você sera um oponente medíocre</p> <button onclick="derrotarHorusArqueiro()">Lutar</button>`;
 }
 
 function derrotarHorusArqueiro() {
     let derrotarHorus = document.getElementById('saida');
         derrotarHorus.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028885418105655356/Archert1.gif'>" + `<p><span class='nickName'>${name}</span>: A luta é intensa um erro de ambos os lados decidira o destino do nosso povo.</p> <button onclick="pegarUltimoMedalhaoArqueiro()">Pegar medalhão</button>`;
 }
 
 function pegarUltimoMedalhaoArqueiro() {
       let pegarUltimoMedalhao = document.getElementById('saida');
       pegarUltimoMedalhao.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028885720556912670/Archer1_4.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: Finalmente recolhi todas as partes do medalhão agora tenho o grande poder antigo nas minhas mãos , eu posso ser o maior heroi se devolver para o reino e ter uma vida de gloria, ou posso usar pro meu uso própio e tudo ser meu agora que Horús foi derrotado ninguém me derrotaria, Preciso escolher se quero ir para o caminho bom ou mal!!</p> <button onclick="FinalBomArqueiro()">Heroi</button> <button onclick="FinalRuimArqueiro()">Vilão</button>`;
 }
 
 function FinalRuimArqueiro() {
     let finalRuim = document.getElementById('saida');
     finalRuim.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028885810575069244/Archer_6.gif'>" + `<p><span class='nickName'>${name}</span>: Você se tornou um destruidor de mundos , causando destruição dominando realidades! <br> Fim..</p> <button onclick="inicio1()">Recomeçar</button>`;
 }
 
 function FinalBomArqueiro() {
   let  finalBom = document.getElementById('saida');
     finalBom.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028885895954317362/Good_EnddingArcher.gif'>" + `<p><span class='nickName'>${name}</span>: Você devolveu o medalhão para o reino, isso fez as realidades voltarem ao normal , se tornamos o maior heroi de todos os temos sempre seremos lembrados com grande honra!! <br> Fimm</p> <button onclick="inicio1()">Recomeçar</button>`;
 }


/******************************** Fim do caminho Arqueiro **************************/



/******************************** Caminho Mago *************************************/
function caminhoMago() {
    let inicio2 = document.getElementById('saida');
    name = prompt("Digite o nome do seu personagem!");
    inicio2.innerHTML = " <img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094021329408111/Mage.gif'> <p> <span class = 'nickName'>nome do seu personagem: " + name + "</span> | Rei: Conclua sua missão o reino precisa de você!, para não chamar atenção passe pela passagem secreta atrás do reino.</p>   <button onclick='sairDoReinoMago()'>Avançar</button>" ;
}

function sairDoReinoMago() {
  let sairDoReino = document.getElementById('saida');
  sairDoReino.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094021786574888/Exit_Wizard.gif'>" + `<p><span class='nickName'>${name}</span>:Saindo da arena e indo em direção a passagem secreta do reino, para pegarmos o portal para o outro núcleo</p> <button onclick='entrandoNaCavernaMago()'>Avançar</button>`;
}

function entrandoNaCavernaMago() {
   let entrandoNaCaverna = document.getElementById('saida');
   entrandoNaCaverna.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094022772232192/Wizard.gif'>" + `<p><span class='nickName'>${name}</span>: Entra na passagem secreta!</p> <button onclick='explorandoCavernaMago()'>Avançar</button>`;
}

function explorandoCavernaMago() {
    let explorandoCaverna = document.getElementById('saida');
    explorandoCaverna.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094020440215572/Wizard_1.gif'>" + `<p><span class='nickName'>${name}</span>: No meio da passagem secreta encontramos um urso, precisamos passar por ele para pegar o portal no fim da caverna!</p> <button onclick='MatarUrsoMago()'>Usar Magia</button>` ;
}

function MatarUrsoMago() {
    let matarUrso = document.getElementById('saida');
    matarUrso.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094022302474262/Wizard_2.gif'>" + `<p><span class='nickName'>${name}</span>: Use sua magia para atacar o urso!!</p> <button onclick='entraPortalMago()'>Avançar</button>` ;
}

function entraPortalMago() {
    let portalArqueiro = document.getElementById('saida');
    portalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094020909965342/Wizard_3.gif'>" + `<p><span class='nickName'>${name}</span>: Avança para o proximo núcleo do reino que esta no nosso tempo atual, mas com frequente ataques de criaturas, e boatos de um necromante que possui a segunda parte do <strong>medalhão.</p>  <button onclick='chegandoNoMedievalMago()'>Avançar</button>` ;
}

function chegandoNoMedievalMago() {
    let portalArqueiro = document.getElementById('saida');
    portalArqueiro.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094019244822589/Wizard_4.gif'>" + `<p><span class='nickName'>${name}</span>: Tudo em nossa volta muda. Se encontramos em uma floresta.</p> <button onclick='andandoFlorestaMago()'>Avançar</button>` ;
}


function andandoFlorestaMago() {
    let andandoFloresta = document.getElementById('saida');
    andandoFloresta.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094018166890617/Wizzard.gif'>" + `<p><span class='nickName'>${name}</span>:Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea.</p> <button onclick="cacarMago()">Caçar</button>  <button onclick="irAoVilarejoMago()">Ir ao vilarejo?</button>`;
}

/********************************* Caçar Mago ***********************************/
function cacarMago() {
    let portalMago = document.getElementById('saida');
    portalMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027104857410244668/Wizzard_8.gif'>" + `<p><span class='nickName'>${name}</span>: Escolheu caçar!</p> <button onclick='EcontrandoAnimalMago()'>Avançar</button>` ;
}

function EcontrandoAnimalMago() {
    let EcontrandoAnimalMago = document.getElementById('saida');
    EcontrandoAnimalMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100343106031686/Wizzard_3.gif'>" + `<p><span class='nickName'>${name}</span>: Animal localizado qual a melhor estrategia? </p> <button onclick="seAproximarAnimalMago()">Se aproximar do animal?</button> <button onclick="matarAnimalMago()">Matar o animal?</button>` ;

}

// Falha e volta para a escolha do vilarejo ou caçar!

function seAproximarAnimalMago() {
    let  seAproximarAnimalMago = document.getElementById('saida');
    seAproximarAnimalMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100341742866452/Wizzard_Loose.gif'>" + `<p><span class='nickName'>${name}</span>: Animal escapou! :( </p> <button onclick='andandoFlorestaMago()'>Voltar para o caminho do vilarejo?</button>` ;
}


// caminho true
function matarAnimalMago() {
    let  atacarAnimalMago = document.getElementById('saida');
    atacarAnimalMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027103489781944390/Wizzard_Win_1.gif'>" + `<p><span class='nickName'>${name}</span>: Você matou o coelho, agora partiu fazer aquele churras!!</p> <button onclick='fazerFogueiraMago()'>Fazer fogueira</button>` ;
}

function fazerFogueiraMago() {
    let  fazerFogueiraMago = document.getElementById('saida');
    fazerFogueiraMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100345215762472/Wizzard_CampFire.gif'>" + `<p><span class='nickName'>${name}</span>: Cozinhar o animal e comer uma parte!</p> <button onclick='voltandoCacaMago()'>Avançar</button>` ;
}

function voltandoCacaMago() {
    let  voltandoCacaMago = document.getElementById('saida');
    voltandoCacaMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100342158114846/Wizzard_4.gif'>" + `<p><span class='nickName'>${name}</span>: Após essa refeição, ta na hora de ir ao vilarejo em busca de informações.</p> <button onclick='chegandoVilarejoMago()'>Avançar</button>` ;
}
/******************************** Fim Caça ******************************************/


/******************************** Vilarejo *****************************************/

// indo ao vilarejo sem caçar!

function irAoVilarejoMago() {
    let irAoVilarejoMago = document.getElementById('saida');
    irAoVilarejoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027094019873968158/Wizzard_1.gif'>" + `<p><span class='nickName'>${name}</span>:Foi em direção ao vilarejo por informações ignorando sua fome.</p>  <button onclick="chegandoVilarejoMago()">Avançar</button>` ;
}

// continuação vilarejo!
function irAoVilarejoMagoCaca() {
    let irAoVilarejoMagoCaca = document.getElementById('saida');
    irAoVilarejoMagoCaca.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027059922724196362/IrParaVilaMago.gif'>" + `<p><span class='nickName'>${name}</span>:Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea.</p> <button onclick="cacarMago()">Caçar</button>  <button onclick="IrAoVilarejoMago()">Ir ao vilarejo?</button>`;
}

function chegandoVilarejoMago() {
    let  chegandoVilarejoMago = document.getElementById('saida');
    chegandoVilarejoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100343504490596/Wizzard_5.gif'>" + `<p><span class='nickName'>${name}</span>:  Entrou na vila, Habitantes comentam que a taberna costuma ser um lugar movimentado, talvez lá haja uma pista?</p> <button onclick='aproximarTavernaMago()'>Ir a taberna</button>`;
}


/******************************** Taverna Mago *********************************/

function aproximarTavernaMago() {
    let  aproximarTavernaMago = document.getElementById('saida');
    aproximarTavernaMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100342640459816/Wizzard_6.gif'>" + `<p><span class='nickName'>${name}</span>: Caminha até a porta da taberna observando o vilarejo.</p> <button onclick='entrandoTavernaMago()'>Entrar na taberna</button>` ;
}

function entrandoTavernaMago() {
    let  EntrandoTavernaMago = document.getElementById('saida');
    EntrandoTavernaMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027103348178047016/Mage_7.gif'>" + `<p><span class='nickName'>${name}</span>:  Entrou na taberna em busca por informações. Talvez o dono da taberna tenha elas ou aquele sujeito estranho la atrás?</p> <button onclick='indoAteMesaBarMago()'>Tomar uma breja?</button> <button onclick="falarComDesconhecidoMago()">Ir direto ao homem estranho</button>` ;
}

function indoAteMesaBarMago() {
    let  indoAteMesaBarMago = document.getElementById('saida');
    indoAteMesaBarMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100344582426684/Mage_2.gif'>" + `<p><span class='nickName'>${name}</span>: Tomamos nossa breja perguntamos ao dono sobre informações, e ele disse <strong>Dono do bar:</strong> aquele sujeito no fundo da taberna é um homem que pode te dar muitas informações.</p>  <button onclick="falarComDesconhecidoAposMago()">Ir ao homem misterioso</button>`;
}

// ambos vão ao homem misterioso!

function falarComDesconhecidoMago() {
    let  falarComDesconhecidoMago = document.getElementById('saida');
    falarComDesconhecidoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100343898751008/Wizzard_7.gif'>" + `<p><span class='nickName'>${name}</span>:   Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aconteceu no seu reino, quem está por trás disso irá pagar. Ouvi um boato que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p> <button onclick='olharParaRonaMago()'>Avançar</button>` ;
}

// Após tomar uma breja ir falar com o desconhecido
function falarComDesconhecidoAposMago() {
    let  falarComDesconhecidoApoMago = document.getElementById('saida');
    falarComDesconhecidoApoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027102428065173554/Mage_6.gif'>" + `<p><span class='nickName'>${name}</span>:  Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aconteceu no seu reino, quem está por trás disso irá pagar. Ouvi um boato que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="olharParaRonaMago()">Avançar</button>`;
}

function olharParaRonaMago() {
    let  olharParaRonaMago = document.getElementById('saida');
    olharParaRonaMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027100345551310928/Mage_5.gif'>" + `<p><span class='nickName'>${name}</span>:  Anão meche com a moça que estava bebendo, enão sai do pé dela dizem que esse anão tem um esquadrão de saqueadores</p>  <button onclick="atacarAnaoMago()">Ajudar?</button> <button onclick="ignorarRonaMago()">Sair da taberna?</button>`;
}

function atacarAnaoMago() {
    let  atacarAnaoMago = document.getElementById('saida');
    atacarAnaoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773371651885760533/1027102673067061300/A5B._1_wizzard_Help_Intimate3.gif'>" + `<p><span class='nickName'>${name}</span>:  Nocauteo o anão, ajudando a moça, como se chama? <strong> Me chamo Rona sou uma viking</strong> Obrigada pela ajuda, não queria deixar esse pobre coitado em coma, <span class='nickName'>${name}</span>: o problema que os amigos dele não gostaram muito <strong>Rona</strong>: que venham!!!</p>  <button onclick="atacarSquadAnoesMago()">Atacar!</button>`;
}

function atacarSquadAnoesMago() {
    let  atacarAnaoMago = document.getElementById('saida');
    atacarAnaoMago.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027702760461848667/Wizzard_1.gif'>" + `<p><span class='nickName'>${name}</span>: Todos foram derrotados!, <strong>Rona</strong>: Obrigado mais uma vez pela sua ajuda boa sorte na sua ventura!! <span class='nickName'>${name}</span>: de nada , você é uma mulher muito forte foi uma honra lutar ao seu lado agora partirei para o topo da montanha, o nosso tempo curto. </p> <button onclick="irAmontanhaMago()">Avançar</button> ` ;
}

function ignorarRonaMago() {
    let  sairDaTaberna = document.getElementById('saida');
    sairDaTaberna.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027735715603292201/A5A._Mage_Dont_Help_1.gif'>" + `<p><span class='nickName'>${name}</span>: Ignoramos e seguimos em frente afinal temos uma missão importante cada segundo importa!!</p>  <button onclick="irAmontanhaMago()">Avançar</button>`;
}

function irAmontanhaMago() {
    let irAmontanha = document.getElementById('saida');
    irAmontanha.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027737589639290880/Wizzard_2.gif'>" + `<p><span class='nickName'>${name}</span>: Chegamos a entrada da montanha!. Está decendo uma caveira deve ser do exército do necromante.</p> <button onclick="subirAmontanhaMago()">Matar esqueleto</button>`;
}

function subirAmontanhaMago() {
    let subirMontanha =  document.getElementById('saida');
    subirMontanha.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027737589010153564/Wizard.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: Executou o esqueleto agora posso seguir em frente!</p> <button onclick="subirAmontanhaMgo2()">Avançar</button>`;
}

function subirAmontanhaMgo2() {
    let subirAmontanha2 = document.getElementById('saida');
    subirAmontanha2.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027737588632666173/Wizard_1.gif'>" + `<p><span class='nickName'>${name}</span>: O necomante estará logo acima!</p> <button onclick="chegandoAoNecromanteMago()">Avançar</button>` ;
}

function chegandoAoNecromanteMago() {
    let chgegandoAoNecromante = document.getElementById('saida');
    chgegandoAoNecromante.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1027737588271951872/Wizzard_3.gif?width=766&height=575'>" + `<p><span class='nickName'>${name}</span>: Finalmente cheguei até o necromante preciso passar por ele!!</p> <button onclick="lutandoContraAoNecromanteMago()">provocar</button>`;
}

function lutandoContraAoNecromanteMago() {
    let lutarContraOnecromente = document.getElementById('saida');
    lutarContraOnecromente.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028889058992205895/Mage.gif'>" + `<p><span class='nickName'>${name}</span>: Não tenho medo de você, melhor tomar cuidado com o vento dos meus golpes não desmontalo ja que você é um puro osso <strong>Necromante:</strong> Vamos ver se você ira falar mais quando seus ossos fazerem parte do meu exérciro HAHAHAHA.</p> <button onclick='MatarNecromanteMago()'>Exterminar todos!</button>` ;
 }
 
 function MatarNecromanteMago() {
      let matarNecromante = document.getElementById('saida') ;
      matarNecromante.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028889166345424946/Wizzard3.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: aaaaah ....</p> <button onclick='pegarPrimeiroMedalhaoMago()'>Pegar medalhão</button>`;
 }
 
 function pegarPrimeiroMedalhaoMago() {
     let pegarPrimeiroMedalhao = document.getElementById('saida');
         pegarPrimeiroMedalhao.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028889279943950426/Wizzard_4.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: Medalhão coletado!! , agora esse núcleo está em paz, hora de ir ao núcleo do futuro!.</p> <button onclick="indoParaOnucleoFuturistaMago()">Pegar portal</button>`;
 }
 
 function indoParaOnucleoFuturistaMago() {
     let indoparaOfuturo = document.getElementById('saida');
     indoparaOfuturo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028889389201367061/Wizzard3_1.gif'>" + `<p><span class='nickName'>${name}</span>: Entrou portal! </p> <button onclick="chegandoAoNucleoFuturistaMago()">Avançar</button>`;
 }
 
 function chegandoAoNucleoFuturistaMago() {
   let chegandoAofuturo = document.getElementById('saida');
   chegandoAofuturo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028891132018577478/Wizzard1.gif'>" + `<p><span class='nickName'>${name}</span>:Finalmente estou perto de derrotar Hórus o destruidor de mundos e colcoar um fim nisso tudo, como esse lugar é estranho e cheio de luzes, consigo ouvir um barulho de longe e gritos preciso me aproximar</p> <button onclick="caminharNofuturoMago()">Caminhar</button>`;
 }
 
 function caminharNofuturoMago() {
     let caminharNofuturo = document.getElementById('saida');
     caminharNofuturo.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028891254248984716/Wizzard1_1.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: O barulho so aumenta cada vez mais ele está perto -- finalmente eu o encontrei <strong>Horús</strong>: Eu estava esperando por você soube que é <span class='nickName'>${name}</span> forte talvez me divirta um pouco HAHAHAHA <span class='nickName'>${name}</span>: Eu fiquei muito forte durante essa jornada você sera um oponente medíocre</p> <button onclick="derrotarHorusMago()">Lutar</button>`;
 }
 
 function derrotarHorusMago() {
     let derrotarHorus = document.getElementById('saida');
         derrotarHorus.innerHTML = "<img src='https://media.discordapp.net/attachments/773372240686350356/1028891396255522856/Wizzard1_2.gif?width=884&height=663'>" + `<p><span class='nickName'>${name}</span>: A luta é intensa um erro de ambos os lados decidira o destino do nosso povo.</p> <button onclick="pegarUltimoMedalhaoMago()">Pegar medalhão</button>`;
 }
 
 function pegarUltimoMedalhaoMago() {
       let pegarUltimoMedalhao = document.getElementById('saida');
       pegarUltimoMedalhao.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028891541751726130/Wizzard1_3.gif'>" + `<p><span class='nickName'>${name}</span>: Finalmente recolhi todas as partes do medalhão agora tenho o grande poder antigo nas minhas mãos , eu posso ser o maior heroi se devolver para o reino e ter uma vida de gloria, ou posso usar pro meu uso própio e tudo ser meu agora que Horús foi derrotado ninguém me derrotaria, Preciso escolher se quero ir para o caminho bom ou mal!!</p> <button onclick="FinalBomMago()">Heroi</button> <button onclick="FinalRuiMago()">Vilão</button>`;
 }
 
 function FinalRuiMago() {
     let finalRuim = document.getElementById('saida');
     finalRuim.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028891665898942474/Wizzard_5.gif'>" + `<p><span class='nickName'>${name}</span>: Você se tornou um destruidor de mundos , causando destruição dominando realidades! <br> Fim..</p> <button onclick="inicio1()">Recomeçar</button>`;
 }
 
 function FinalBomMago() {
   let  finalBom = document.getElementById('saida');
     finalBom.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1028891869586923520/Good_EnddingArcher3.gif'>" + `<p><span class='nickName'>${name}</span>: Você devolveu o medalhão para o reino, isso fez as realidades voltarem ao normal , se tornamos o maior heroi de todos os temos sempre seremos lembrados com grande honra!! <br> Fimm</p> <button onclick="inicio1()">Recomeçar</button>`;
 }

/******************************** Fim do caminho Mago **************************/

