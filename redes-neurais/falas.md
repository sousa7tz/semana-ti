# Falas — Redes neurais

**Texto para dizer em voz alta**, clique a clique. 12 capítulos · 57 paradas · ~23 min.

Como ler:

- **▶** = aperte o passador. Comece a frase junto com o clique: a animação acompanha o que você diz.
- *Itálico entre colchetes* = o que aparece na tela (para você se localizar) ou uma ação no palco.
- **Negrito** = palavra para dar ênfase.
- O ⏱ de cada capítulo é o tempo de referência. Se você estiver atrasado, as frases marcadas com *(corta se precisar)* podem sair sem quebrar a explicação.
- Cores da tela: **terracota** = humano, **azul** = máquina.

Este arquivo tem só a fala. Para saber por que os capítulos estão nessa ordem, de onde vem cada número e o guia completo da demo, veja [`roteiro_apresentacao.md`](roteiro_apresentacao.md) e [`referencias.md`](referencias.md).

---

## Antes de começar

- Abra a apresentação em tela cheia (`F`). Se a sala estiver escura e a TV forte, aperte `D` para o tema escuro.
- Passe uma vez pelo capítulo 6 (a demo) antes de o público entrar e volte para o início. A rede treina com semente fixa, então os resultados ao vivo vão ser os mesmos do ensaio.
- Deixe a tela 1 parada enquanto o público se acomoda. Só comece a falar quando a sala silenciar.

---

## 1. Abertura · ⏱ 1 min 30

*[Tela: "Um sinal. Depois, muitos." Um único pulso de luz no escuro.]*

> Boa tarde, pessoal!
>
> Agora, enquanto vocês me escutam, cada palavra que chega no ouvido de vocês vira um sinal elétrico minúsculo correndo entre neurônios.
>
> *[Apontar o pulso.]* Esse pontinho de luz é um sinal. Sozinho ele não faz nada. Mas quando milhões de sinais se conectam, acontece uma coisa incrível: **aprendizado**.
>
> Hoje eu vou mostrar como os computadores copiaram essa ideia, de um jeito bem simplificado. E vocês vão ver uma rede neural aprendendo **ao vivo**, aqui na frente de vocês.
>
> No final eu ligo esta sala com a sala ao lado, a de engenharia reversa. Vocês vão ver que as duas fazem o mesmo movimento.
>
> *[Apontar o pulso de novo.]* Guardem esse sinal. Ele vai atravessar a apresentação inteira.

**▶** *[Tela: "Como uma máquina aprende a partir de exemplos?" A rede cresce.]*

> A pergunta de hoje é esta: como uma máquina **aprende** a partir de exemplos?
>
> Guardem a palavra **exemplos**. Ela volta em todo capítulo, e é ela que explica por que uma rede erra no começo e acerta depois.

---

## 2. O neurônio biológico · ⏱ 1 min 30

**▶** *[Tela: "No cérebro, um neurônio recebe sinais, decide e passa adiante." O neurônio de barro, parado.]*

> Tudo começa aqui, num neurônio. Vocês têm cerca de **86 bilhões** deles no cérebro. A função de cada um é simples: receber sinais, decidir e passar adiante.
>
> Esse aqui está quieto. Vamos ligar.

**▶** *[Tela: "Os dendritos recebem sinais de outros neurônios."]*

> Essas ramificações são os **dendritos**. Funcionam como antenas: recebem o que os neurônios vizinhos mandam, sinal fraco ou sinal forte.

**▶** *[Tela: "O corpo celular junta tudo… ele dispara."]*

> Tudo chega no **corpo celular**, que soma o que veio. Se a soma passar de um limite, o neurônio **dispara** um pulso elétrico.

**▶** *[Tela: "O axônio leva o sinal adiante."]*

> Esse pulso viaja pelo **axônio**, que funciona como um cabo levando o sinal até a ponta.

**▶** *[Tela: "Na sinapse, substâncias químicas passam o recado…"]*

> E na ponta tem um espacinho, a **sinapse**. Ali, substâncias químicas atravessam e entregam o recado para o próximo neurônio.
>
> Resumindo: **antena, soma, cabo, recado**. Guardem essa ordem, porque a matemática vai copiar exatamente ela.

---

## 3. O neurônio artificial · ⏱ 1 min 30

**▶** *[Tela: "Uma versão matemática do neurônio: inspirada no cérebro, não uma cópia dele." O barro vira esferas.]*

> Em 1943, dois pesquisadores, McCulloch e Pitts, transformaram o neurônio numa conta matemática. Reparem que isso não é uma cópia do cérebro. É uma versão muito simplificada, e é justamente por ser simples que funciona no computador.

**▶** *[Tela: "Entradas: números que chegam (x₁, x₂, x₃)."]*

> No neurônio artificial, tudo é número. Texto, imagem, som: tudo vira número e entra por essas entradas, as nossas antenas.

**▶** *[Tela: "Cada entrada tem um peso: o quanto ela importa."]*

> Cada entrada tem um **peso**, que diz o quanto ela importa. Peso alto conta muito na decisão. Peso perto de zero quase não conta.

**▶** *[Tela: "O neurônio soma tudo…" A conta aparece no rodapé.]*

> Aí o neurônio soma: cada entrada vezes o seu peso, mais um ajuste fixo, que se chama **viés**. A conta na tela é de verdade e dá 1,04.
>
> Reparem que um dos pesos é negativo. Ele puxa a soma para baixo. É assim que um sinal "contra" entra na decisão. *(corta se precisar)*

**▶** *[Tela: "A ativação transforma a soma num sinal de saída: aqui, 0,74."]*

> Por fim, a **ativação** transforma essa soma num sinal de saída entre zero e um. Aqui deu 0,74: mais para "sim" do que para "não".
>
> E é o mesmo caminho do neurônio de verdade: entra, soma, decide, passa adiante.

---

## 4. Camadas · ⏱ 2 min

**▶** *[Tela: "Entrada: os pixels de uma foto."]*

> Um neurônio sozinho faz pouca coisa. A força está em juntar muitos, em **camadas**.
>
> A primeira é a camada de **entrada**. Cada neurônio recebe um dado bruto. Neste exemplo, cada pixel de uma foto de gato.

**▶** *[Tela: "Camadas ocultas: cada neurônio combina o que veio da camada anterior."]*

> No meio ficam as **camadas ocultas**. Cada neurônio ali combina o que veio da camada anterior, com os seus próprios pesos. São milhares de pesos, e ninguém escreveu nenhum deles à mão. Todos vêm dos exemplos.

**▶** *[Tela: "Cada camada recombina as anteriores: linhas viram formas, formas viram coisas."]*

> E cada camada constrói em cima da anterior. Em redes de imagem, as primeiras camadas acham linhas e bordas. As do meio juntam as bordas em formas. As últimas juntam as formas em coisas: uma orelha, um focinho, um gato.
>
> É como Lego: cada camada monta com as peças que a anterior entregou.

**▶** *[Tela: "Saída: um neurônio para cada resposta possível: gato ou cachorro."]*

> No final, a camada de **saída** tem um neurônio para cada resposta possível: um para "gato", um para "cachorro". O que der o valor maior ganha.

**▶** *[Tela: "Profundidade não é tudo: camada demais encalha…"]*

> Então é só colocar mais camadas que fica mais inteligente? **Não**. Com camadas demais, a rede encalha.
>
> O motivo vocês vão entender no próximo capítulo: para aprender, o erro precisa voltar pela rede, e a cada camada que ele atravessa, fica mais fraco. Lá no começo da rede já não chega quase nada. E no capítulo 6 vocês vão ver isso acontecer ao vivo.

**▶** *[Tela: "O sinal atravessa a rede, camada por camada, e sai uma resposta."]*

> Vejam o caminho inteiro: a foto entra pela esquerda, cada camada combina um pouco, e na direita sai uma resposta.
>
> Mas fica a pergunta: como esses pesos ficam certos?

---

## 5. Treinamento · ⏱ 1 min 30

**▶** *[Tela: "Era a foto de um gato. A rede respondeu cachorro. O erro é grande."]*

> No começo, a rede não sabe nada. Os pesos são sorteados, é puro chute. A gente mostra a foto de um gato e ela responde "cachorro".
>
> A gente mede o quanto ela errou. Esse número se chama **erro**, e aqui ele está alto.

**▶** *[Tela: "O erro volta pela rede, de trás para frente: a retropropagação."]*

> Aí vem o truque. O erro volta pela rede, de trás para frente, camada por camada. Em cada peso, a rede pergunta: "quanto você teve culpa nesse erro?". Isso se chama **retropropagação**, e foi popularizado em 1986.

**▶** *[Tela: "Cada peso muda um pouquinho, na direção que diminui o erro."]*

> Cada peso muda só um pouquinho, sempre para o lado que diminui o erro.
>
> Pensem em descer uma montanha com neblina: vocês não enxergam o vale, mas sentem para que lado o chão desce e dão um passo curto para lá. Depois outro, e mais outro.

**▶** *[Tela: "Repete com milhares de dados de treino. Cada volta completa é uma época. O erro cai."]*

> E isso se repete com milhares de exemplos. Cada vez que a rede passa por todos eles é uma **época**. Época após época, o erro cai.
>
> Chega de explicação. Agora vocês vão ver isso acontecer de verdade.

---

## 6. Demonstração ao vivo · ⏱ 3 min

*Dica: depois de cada clique, espere 2 a 4 segundos antes de falar. Deixem o público ver os números mudando.*

**▶** *[Tela: a espiral de pontos. A rede ainda não treinou.]*

> Isto aqui é uma rede neural de verdade, treinando agora, neste navegador. Sem internet e sem nada gravado.
>
> Cada ponto é um exemplo. A tarefa da rede é separar os pontos **terracota** dos **azuis**. Eles estão enrolados numa espiral, então não é fácil.
>
> Ela ainda não treinou nada. A fronteira que vocês veem é um chute.

**▶** *[Tela: "2 neurônios: poucos demais." O treino começa.]*

> Começamos com uma rede bem pequena, só **dois neurônios**. Olhem o erro.
>
> *[Esperar.]*
>
> Ela tenta, mas é como desenhar uma espiral com uma régua. Fica em torno de **68%** de acerto. Falta capacidade.

**▶** *[Tela: "8 neurônios: a fronteira começa a curvar."]*

> Agora com **oito neurônios**.
>
> *[Esperar.]*
>
> A fronteira começa a fazer curva. Já são uns **94%** de acerto. Mas reparem no meio da espiral: é ali que ela ainda erra.

**▶** *[Tela: "2 camadas de 8: agora ela acompanha a espiral."]*

> E agora **duas camadas** de oito neurônios.
>
> *[Esperar.]*
>
> Vejam: ela acompanha a espiral inteira. **100%** de acerto, erro praticamente zero. Para esse problema, duas camadas bastam.

**▶** *[Tela: "4 camadas: de novo a zero."]*

> Se duas foram ótimas, quatro devem ser melhores, certo?
>
> *[Esperar.]*
>
> Acerta igual, **100%**. Ou seja, a camada a mais não trouxe nada. O ganho parou de crescer.

**▶** *[Tela: "8 camadas: encalha perto de 60%." Nota: o sinal de erro enfraquece.]*

> E com **oito camadas**? Em tese, mais poder ainda.
>
> *[Esperar.]*
>
> Olhem só: encalha perto de **60%**. Ficou **pior**. É aquilo que eu falei no capítulo 4: o erro precisa voltar por oito camadas, e no caminho ele vai sumindo. As primeiras camadas quase não aprendem.
>
> As redes muito profundas que existem por aí usam técnicas próprias para contornar esse problema, como atalhos que pulam camadas. Esta aqui não tem nada disso, de propósito. *(corta se precisar)*

**▶** *[Tela: "12 camadas com o triplo do tempo: nada."]*

> Último teste: **doze camadas**, e eu ainda dou o triplo do tempo de treino.
>
> *[Esperar.]*
>
> Uns **50%**. Isso é igual a jogar uma moeda. Empilhar camada não é atalho.

**▶** *[Tela: "A mesma rede aprende outros padrões: círculos e XOR." Nota: a semente é fixa.]*

> Para fechar, voltamos para a rede de duas camadas, a que funcionou, e damos outros problemas: um círculo dentro do outro, e um padrão xadrez, o XOR.
>
> *[Esperar.]*
>
> **100%** nos dois. A lição da demo: o desenho certo da rede vale mais do que força bruta.
>
> E se alguém quiser conferir depois: o treino usa uma semente fixa, então dá sempre o mesmo resultado. Não é truque, é reproduzível. *(corta se precisar)*

**Se a demo travar ou ficar lenta:** não pare a fala. Diga *"Vou contar o que acontece aqui"* e siga com os números: 2 neurônios ≈ 68%, 8 neurônios ≈ 94%, 2 camadas 100%, 4 camadas 100%, 8 camadas ≈ 60%, 12 camadas ≈ 50%, círculos e XOR 100%. Aperte `Q` para baixar a qualidade gráfica.

---

## 7. Imagens · ⏱ 1 min 30

**▶** *[Tela: "Para a rede, uma foto é uma grade de pixels."]*

> E como uma rede dessas lida com uma foto? Para ela, a foto não é um gato. É uma grade de quadradinhos, os **pixels**.

**▶** *[Tela: "Cada pixel vira um número: claro perto de 0, escuro perto de 1."]*

> Cada pixel vira um **número**: claro perto de zero, escuro perto de um. Daqui em diante, é só conta.

**▶** *[Tela: "Esses números entram na rede."]*

> E esses números entram na rede, igualzinho aos pontos da demonstração. Mesmo caminho, só que com muito mais entradas.

**▶** *[Tela: "…primeiras camadas tendem a captar bordas; depois, formas; no fim, objetos." Nota: tendência, não regra.]*

> Quando pesquisadores abriram redes de imagem para ver o que cada camada aprendeu, encontraram isto: as primeiras captam **bordas**, as do meio captam **formas**, e as últimas reconhecem **objetos**.
>
> É a mesma ideia do Lego do capítulo 4, agora vista por dentro. É uma tendência, não uma regra fixa.

---

## 8. Cérebro × máquina · ⏱ 2 min

**▶** *[Tela: "Lado a lado. Inspiração não é cópia." Barro e esferas, lado a lado.]*

> Agora vamos colocar os dois lado a lado: cérebro e máquina. A regra aqui é ser honesto, sem exagerar para nenhum dos lados.

**▶** *[Tela: "Neurônios: cerca de 86 bilhões… bilhões de pesos."]*

> Tamanho: o cérebro tem cerca de **86 bilhões** de neurônios. Os grandes modelos de IA têm bilhões de **pesos**.
>
> Mas cuidado: um neurônio e um peso não são a mesma coisa. O neurônio de verdade é muito mais complexo. A comparação é só de ordem de grandeza.

**▶** *[Tela: "Energia: cerca de 20 watts… data centers inteiros."]*

> Energia: o cérebro de vocês funciona com uns **20 watts**, o mesmo que uma lâmpada fraca. Para treinar um modelo grande de IA, são **data centers** inteiros, prédios cheios de computador.

**▶** *[Tela: "Aprendizado: uma criança aprende com poucos exemplos…"]*

> Aprendizado: uma criança vê dois ou três cachorros e já reconhece qualquer cachorro. Uma rede normalmente precisa de milhares de fotos.

**▶** *[Tela: "Velocidade e escala…"]*

> Mas em volume a máquina ganha fácil. Ela processa milhões de exemplos sem cansar, sem dormir e sem se distrair.

**▶** *[Tela: "Compreensão, consciência, emoção: perguntas em aberto."]*

> E as perguntas grandes: a rede **entende**? Tem consciência? Sente alguma coisa?
>
> A resposta honesta é que isso ainda está em debate. Eu não vou afirmar nem negar.

---

## 9. No dia a dia · ⏱ 1 min 45

**▶** *[Tela: "Assistentes de IA (ChatGPT, Claude)."]*

> E onde essas redes estão? Mais perto do que parece.
>
> Levanta a mão quem usou um assistente de IA esta semana.
>
> *[Olhar a sala e comentar: "Quase todo mundo" ou o que for.]*
>
> Por trás de cada um deles tem uma rede neural gigante.

**▶** *[Tela: "Tradução automática."]*

> O tradutor do celular também é uma rede neural.

**▶** *[Tela: "Desbloqueio pelo rosto."]*

> Quem desbloqueou o celular com o rosto hoje usou uma rede que aprendeu o seu rosto. E faz isso várias vezes por dia sem perceber.

**▶** *[Tela: "Recomendações de vídeos e músicas."]*

> O próximo vídeo que aparece para vocês, a próxima música: quem escolhe é uma rede que aprendeu com tudo o que vocês já assistiram.

**▶** *[Tela: "Assistência ao motorista."]*

> No carro, para manter na faixa ou frear quando tem algo na frente.

**▶** *[Tela: "Apoio a diagnóstico por imagem: quem decide é o médico."]*

> E na medicina, a rede ajuda a olhar exames de imagem. Mas reparem na palavra: **apoio**. Quem decide é o médico. Guardem isso, porque é o assunto do próximo capítulo.

---

## 10. Cuidados · ⏱ 1 min 30

**▶** *[Tela: "Viés: aprende também os preconceitos dos dados".]*

> Então vamos aos cuidados. Primeiro, o **viés**. A rede não sabe o que é justo, ela aprende o que os dados mostram. Se os dados têm preconceito, a rede aprende o preconceito junto.
>
> Um estudo de 2018, chamado Gender Shades, testou sistemas comerciais que analisam rostos. Eles erravam muito mais com mulheres de pele escura do que com homens de pele clara.

**▶** *[Tela: "Alucinação: inventa respostas com toda a confiança".]*

> Segundo, a **alucinação**. Quando não sabe a resposta, a rede às vezes inventa uma, e fala com toda a confiança. Por isso: sempre confiram o que ela diz.

**▶** *[Tela: "Caixa-preta: é difícil explicar por que decidiu".]*

> Terceiro, a **caixa-preta**. A rede decide com bilhões de somas e pesos. Não dá para abrir e ler "eu decidi por causa disso". Explicar essas decisões é uma área de pesquisa importante hoje.

**▶** *[Tela: "Energia: treinar modelos grandes gasta muita eletricidade".]*

> E quarto, a **energia**. Treinar modelos grandes gasta muita eletricidade. Em muitos casos vale a pena, mas tem custo.

---

## 11. Projeção · ⏱ 2 min

*Transição:*

> Agora eu quero juntar tudo o que vimos numa ideia só, e ligar com a outra sala.

**▶** *[Tela: "Duas salas, uma ideia: de sinais que chegam a um modelo interno que responde."]*

> Reparem no que se repetiu a apresentação inteira: sinais chegam, lá dentro se forma um **modelo**, e sai uma resposta. Foi assim no neurônio, na rede, e é assim também na sala ao lado.

**▶** *[Tela: "Teoria projetiva…" As duas redes sob o holofote.]*

> Tem uma teoria que leva isso ainda mais longe, a **teoria projetiva**, de dois pesquisadores, Velmans e Pereira Júnior.
>
> Ela diz que a gente nunca vê o mundo diretamente. O cérebro recebe os sinais, monta um modelo interno e **projeta** esse modelo. O que vocês chamam de "mundo que eu vejo" é essa projeção.
>
> E projeção aqui é um efeito medido: é o que faz a gente ver profundidade, e é o que faz um filme 3D ou um holograma funcionar.

**▶** *[Tela: "NCM (Stanford, out/2026)…" Padrões em cascata.]*

> E a IA está indo numa direção parecida. Este mês, um time de Stanford propôs um modelo chamado **NCM**. Em vez de gerar texto palavra por palavra, ele primeiro faz um **esboço** da ideia e depois vai refinando os detalhes, várias partes ao mesmo tempo.
>
> Nos testes, foi de 10 a 31 vezes mais rápido que outros modelos parecidos. Mas é um estudo novo, que ainda não foi revisado por outros cientistas. O que importa aqui é a forma: primeiro o esboço, depois o detalhe. Como uma criança desenhando.

**▶** *[Tela: "Engenharia reversa também monta um modelo interno…"]*

> E a sala de engenharia reversa faz a mesma coisa. Lá, quem investiga também monta um modelo interno de um programa olhando só o comportamento de fora, sem ver o código.
>
> A rede aprende o modelo com exemplos e **projeta** como resposta. Nos dois casos, o caminho é o mesmo: de fora para dentro, e de volta para fora.

**▶** *[Tela: "Cérebro, rede e analista começam no sinal que chega…"]*

> Cérebro, rede neural e analista: os três começam com um sinal que chega e terminam projetando um modelo. O cérebro projeta o mundo que a gente percebe. A rede projeta uma resposta. O analista projeta a documentação.
>
> Essa é a ideia do dia.

---

## 12. Final · ⏱ 1 min

**▶** *[Tela: "Um sinal. Dois mundos. Uma rede." Título: "A máquina aprende com exemplos. Nós escolhemos quais exemplos dar."]*

> Lembram do pontinho de luz do começo? Era um sinal. Agora ele atravessa os dois mundos, o humano e a máquina.
>
> E fica a frase do título: a máquina aprende com exemplos, mas **quem escolhe os exemplos somos nós**.

**▶** *[Tela: "No fim, IA vs Humanos ou IA com Humanos?"]*

> O tema da semana é "IA versus Humanos". Depois de tudo que vocês viram hoje, o que acham? É rival ou é ferramenta?
>
> *[Pausa. Ouvir uma ou duas respostas.]*
>
> Para mim, a pergunta fica melhor assim: **IA com Humanos**.
>
> Muito obrigado!

---

## Se perguntarem…

Respostas curtas, para dizer do jeito que vierem:

- **"Por que 8 camadas foi pior, se tem mais capacidade?"** — Porque o erro que volta para corrigir os pesos vai enfraquecendo a cada camada. As primeiras quase não aprendem. Redes profundas de verdade usam técnicas extras, como atalhos entre camadas.
- **"A rede entende o que faz?"** — Está em debate. Ela acerta padrões muito bem, mas se isso é "entender" ninguém sabe responder com certeza.
- **"A IA vai substituir o médico?"** — Nos exames de imagem, ela ajuda. Quem decide e responde pelo diagnóstico é o médico.
- **"Essa demo é gravada?"** — Não. É uma rede de verdade treinando no navegador, sem internet. A semente é fixa, por isso o resultado se repete toda vez.
- **"O NCM vai substituir o ChatGPT?"** — Ninguém sabe ainda. É um estudo deste mês, ainda sem revisão. O interessante é o jeito diferente de gerar: esboço primeiro, detalhe depois.
- **"Quanta energia gasta, em números?"** — Varia muito de modelo para modelo e muda rápido. O seguro é dizer: treinar os grandes exige data centers inteiros.
