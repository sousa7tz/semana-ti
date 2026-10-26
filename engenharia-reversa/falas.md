# Falas — Engenharia reversa de software

**Texto para dizer em voz alta**, clique a clique. 11 capítulos · 48 paradas · ~21 min.

Como ler:

- **▶** = aperte o passador. Comece a frase junto com o clique: a animação acompanha o que você diz.
- *Itálico entre colchetes* = o que aparece na tela (para você se localizar) ou uma ação no palco.
- **Negrito** = palavra para dar ênfase.
- O ⏱ de cada capítulo é o tempo de referência. Se você estiver atrasado, as frases marcadas com *(corta se precisar)* podem sair sem quebrar a explicação.

Este arquivo tem só a fala. Para saber por que os capítulos estão nessa ordem e de onde vem cada afirmação, veja [`roteiro_apresentacao.md`](roteiro_apresentacao.md) e [`referencias.md`](referencias.md).

---

## Antes de começar

- Abra a apresentação em tela cheia (`F`). Se a sala estiver escura e a TV forte, aperte `D` para o tema escuro.
- Deixe a tela 1 parada enquanto o público se acomoda. Só comece a falar quando a sala silenciar.

---

## 1. Abertura · ⏱ 1 min

*[Tela: "Descobrir o que um programa faz por dentro." Um bloco selado no escuro.]*

> Boa tarde, pessoal!
>
> Pensem num app que vocês usaram hoje. O do banco, o de um jogo, o da escola. Ele chegou ao celular de vocês como um programa pronto e fechado. Ninguém mandou o código junto.
>
> Agora imaginem que vocês precisam entender como ele funciona por dentro. Pode ser para ligar esse app a outro sistema, para achar uma falha de segurança antes de um criminoso, ou para manter funcionando um sistema antigo que ninguém mais sabe como foi feito.
>
> Isso tem nome: **engenharia reversa de software**. E no fim eu vou falar de uma notícia deste mês, uma ferramenta de inteligência artificial que promete fazer isso sozinha. Será que faz?
>
> *[Apontar o bloco.]* Esse bloco é o nosso programa: fechado, sem nenhuma abertura. O desafio de hoje é descobrir o que tem dentro dele.

**▶** *[Tela: "E se você tivesse o programa, mas não o código?" A câmera se aproxima.]*

> O programa funciona. Ele faz coisas úteis. Mas o texto com que ele foi escrito, o **código-fonte**, não veio junto. É desse mundo fechado que a gente vai falar hoje.

---

## 2. O que é · ⏱ 1 min 15

**▶** *[Tela: a definição. O celular apagado no centro.]*

> Então, o que é engenharia reversa? É estudar um programa que já está pronto para entender **como ele funciona**, sem ter o código-fonte.
>
> A definição clássica é de 1990, de dois pesquisadores, Chikofsky e Cross. Eles falam em analisar um sistema para reconstruir uma descrição dele. Na prática, é entender o funcionamento a partir do programa quando o projeto não veio junto.

**▶** *[Tela: "Você vê o app." O celular liga.]*

> Por fora, a gente vê o app: telas, botões, animações. Tudo funciona. E é só isso que dá para observar: o app funcionando.

**▶** *[Tela: "Mas não vê como ele foi feito." O celular vira uma interrogação.]*

> Mas olhando só a tela, dá para saber como cada parte foi construída? Não dá. O desenho interno não aparece. Então vamos comparar com o caminho normal, o de quem constrói o programa.

---

## 3. Duas direções · ⏱ 1 min 30

**▶** *[Tela: "O código-fonte é texto escrito para pessoas lerem." Aparece um trecho de código.]*

> Isso aqui é código-fonte. É texto escrito por gente, para gente ler. Tem nomes que fazem sentido, comentários explicando, e dá para ver a intenção de quem escreveu cada parte.

**▶** *[Tela: "Compilar: Código-fonte → Compilador → Executável". O bloco sai do outro lado como executável.]*

> Para o computador rodar esse texto, ele passa por um **compilador**, que traduz a linguagem humana em instruções para o processador. O que sai é o executável, o programa que vocês instalam.
>
> E aqui tem um detalhe importante. O processador não precisa dos nomes nem dos comentários para rodar. Então eles ficam pelo caminho. É nessa viagem que boa parte do sentido se perde.

**▶** *[Tela: "Engenharia reversa: Pistas ← Análise ← Executável". As setas invertem.]*

> A engenharia reversa faz o caminho ao contrário. A gente parte do executável, analisa, e o que chega do outro lado são **pistas**. A direção mudou, mas a pergunta continua a mesma: como isso funciona?

**▶** *[Tela: "O caminho de volta não devolve o código original. Devolve pistas."]*

> E guardem esta frase, porque ela volta no fim: o caminho de volta **não** devolve o código original. Ele devolve uma reconstrução aproximada, uma versão possível. O que foi perdido na ida não volta.

---

## 4. Por dentro de um app · ⏱ 2 min

**▶** *[Tela: "Na tela, um app parece uma coisa só." O celular ligado.]*

> Para quem usa, o app parece uma coisa só. Mas por dentro ele funciona como um prédio, com andares. Vamos subir de andar em andar.

**▶** *[Tela: "1. Interface". A primeira camada acende.]*

> Primeiro andar: a **interface**. É o que vocês veem e tocam: telas, botões, gestos.

**▶** *[Tela: "2. Lógica".]*

> Segundo: a **lógica**. É onde ficam as regras: o que acontece quando você toca num botão, o que é salvo, quando o app decide uma coisa ou outra.

**▶** *[Tela: "3. Rede".]*

> Terceiro: a **rede**. Quase todo app hoje conversa com um servidor, e essas mensagens viajam pela internet. É uma conversa que, com autorização, dá para escutar.

**▶** *[Tela: "4. Dados".]*

> Quarto: os **dados**. Preferências, histórico, arquivos guardados no aparelho. É tudo o que continua lá quando você fecha o app.

**▶** *[Tela: "5. Binário". A câmera desce ao fundo.]*

> E lá no fundo, o **binário**: as instruções que o processador executa de fato. É aqui que um programa fechado é fechado de verdade.

**▶** *[Tela: "Cada camada se investiga de um jeito diferente." As cinco camadas juntas.]*

> São cinco camadas, e cada uma pede uma pergunta diferente e uma ferramenta diferente. Antes das ferramentas, vamos descer até a camada mais difícil: o binário.

---

## 5. Descompilando · ⏱ 2 min

**▶** *[Tela: "Vamos abrir o executável, uma camada de cada vez." O bloco é fatiado.]*

> Vamos abrir o nosso bloco fatia por fatia. Começa no fundo, nos bytes, e sobe até o sentido.

**▶** *[Tela: "Binário: os bytes que o processador lê." Nota: função de 14 bytes.]*

> Isso aqui é uma função de verdade, simplificada, com quatorze bytes. Os bytes são reais, do jeito que um processador de computador comum lê. Para a máquina está tudo claro. Para uma pessoa olhando de fora, é só uma sequência de números.

**▶** *[Tela: "Assembly: as mesmas instruções, uma por linha."]*

> O primeiro passo é um programa chamado **disassembler**. Ele dá nome a cada instrução: comparar dois valores, pular se forem diferentes, multiplicar, retornar. Quem estudou consegue ler, mas ainda não se vê a ideia por trás.

**▶** *[Tela: "Pseudocódigo: o que um descompilador reconstrói." Nota: preco virou param_1.]*

> O passo seguinte é o **descompilador**. Ele monta algo parecido com o código original, numa linguagem que a gente lê. Mas olhem a nota: a variável que o programador chamou de "preço" agora se chama "param_1". Os nomes e os comentários nunca estiveram no binário, então não tem como recuperar.

**▶** *[Tela: "Lógica entendida: a conclusão é de quem investiga."]*

> O último degrau é humano. Hoje às vezes tem IA ajudando, mas é alguém que junta as pistas e diz: "essa função calcula um desconto". Só aí a lógica está entendida, quando alguém consegue explicar o que ela faz.

---

## 6. As ferramentas · ⏱ 1 min 30

**▶** *[Tela: "DevTools do navegador".]*

> Agora sim, as ferramentas. A primeira vocês já têm no computador: as **ferramentas de desenvolvedor** do navegador. Elas mostram como um site é feito por dentro: o HTML, o JavaScript, as conexões.

**▶** *[Tela: "Captura de tráfego".]*

> A segunda é a **captura de tráfego**. Lembram da camada 3, a conversa com o servidor? Essa ferramenta mostra as mensagens que o app manda e recebe.

**▶** *[Tela: "Disassemblers e descompiladores: Ghidra e IDA".]*

> Para a camada do binário, que a gente acabou de fatiar, existem o **Ghidra** e o **IDA**. O Ghidra é gratuito, e quem liberou foi a NSA, a agência de segurança dos Estados Unidos, em 2019. O IDA é o padrão comercial.

**▶** *[Tela: "Análise de APK". Nota: nada aqui ensina a contornar proteções.]*

> E no Android, todo app vem num pacote chamado **APK**. Abrir esse pacote e ver como ele está organizado costuma ser o primeiro passo.
>
> Um aviso: aqui eu mostro só a ideia de cada ferramenta. Nada do que eu falei ensina a burlar proteção de ninguém.

---

## 7. Estudo de caso · ⏱ 2 min

**▶** *[Tela: "Você foi autorizado a integrar seu sistema com outro. Mas não existe documentação." Nota: caso hipotético.]*

> Vamos ver um caso, do começo ao fim. É inventado, mas é bem comum no dia a dia.
>
> Vocês trabalham numa empresa e receberam **autorização** para ligar o sistema de vocês a outro. Só que esse outro sistema não tem manual. Ninguém documentou. Mas ele funciona, e conversa.

**▶** *[Tela: "O app conversa com o servidor o tempo todo." O tráfego passa.]*

> Então a gente escuta. O app manda pedidos e o servidor responde, um atrás do outro, o tempo todo.

**▶** *[Tela: "Congelamos uma requisição: método, endereço e dados enviados."]*

> Vamos parar uma dessas mensagens e olhar de perto. O **método** diz qual é a ação, por exemplo "criar um pedido". O **endereço** diz para onde vai. E os **dados** são o conteúdo: qual produto, quantas unidades.

**▶** *[Tela: "E a resposta que volta."]*

> E o servidor responde: "pedido criado, número tal". Repetindo isso algumas vezes, o padrão aparece.

**▶** *[Tela: "Juntando as peças, escrevemos a documentação que faltava."]*

> Juntando tudo, a gente escreve o manual que não existia: que mensagem mandar, para onde, com quais dados, e o que volta. O resultado da engenharia reversa aqui foi **documentação**. Ninguém quebrou nada, a gente entendeu e escreveu.

---

## 8. Aplicações · ⏱ 1 min 30

**▶** *[Tela: "Segurança e análise de malware".]*

> E onde isso é usado de verdade? Primeiro, na segurança. Quando aparece um vírus novo, os laboratórios de antivírus abrem o programa para entender o que ele faz. Isso é engenharia reversa.

**▶** *[Tela: "Interoperabilidade entre sistemas".]*

> Segundo, para fazer sistemas conversarem, que é o caso que a gente acabou de ver.

**▶** *[Tela: "Sistemas legados sem código-fonte".]*

> Terceiro, sistemas antigos. Tem banco e órgão público rodando programa de trinta, quarenta anos atrás cujo código se perdeu. É com engenharia reversa que eles continuam funcionando, e que um dia são migrados.

**▶** *[Tela: "Preservação de jogos e software antigo".]*

> Quarto, preservação. Muitos jogos antigos não rodariam mais nos aparelhos de hoje. Quem preserva esses jogos estuda o programa por fora para que ele continue existindo.

**▶** *[Tela: "Auditoria de segurança autorizada".]*

> E quinto, auditoria: uma empresa contrata especialistas para achar falhas no próprio sistema antes que um atacante ache.

---

## 9. Limites e ética · ⏱ 1 min 30

**▶** *[Tela: "O código recuperado é incompleto".]*

> Agora o outro lado. Primeiro limite, que vocês já conhecem: o que se recupera é **incompleto**. Nomes, comentários e intenções não voltam.

**▶** *[Tela: "Leva tempo e exige conhecimento".]*

> Segundo: não existe botão "entender". Isso leva dias, às vezes semanas, e exige muito estudo.

**▶** *[Tela: "Leis, termos de uso e contratos podem restringir".]*

> Terceiro: a lei. Cada país tem a sua regra. No Brasil, a Lei de Software, de 1998, trata disso. A Europa e os Estados Unidos têm regras próprias, com exceções para fazer sistemas conversarem. E ainda tem os termos de uso e os contratos que vocês aceitam ao instalar.

**▶** *[Tela: "Sempre com autorização". Nota: depende do país e do objetivo.]*

> Por isso a regra desta sala é uma só: **sempre com autorização**. Engenharia reversa não é automaticamente legal nem ilegal. Depende do país e do objetivo.

---

## 10. IA vs Humanos · ⏱ 2 min 30

*Transição (opcional):*

> E agora a pergunta da semana: e a inteligência artificial nisso tudo?

**▶** *[Cartão FATO: "Reconstruir qualquer software virou coisa de minutos".]*

> Este mês, outubro de 2026, apareceu no GitHub um projeto chamado **REA**, de *Reverse Engineer Anything*, "faça engenharia reversa de qualquer coisa". Ele virou um dos repositórios que mais cresceram na história do GitHub. E vieram as manchetes: "minutos, não anos".
>
> O projeto existe e o crescimento também. Eu não vou dizer um número, porque cada fonte fala um e ele muda todo dia.

**▶** *[Cartão VERDADE: "Agentes de IA já operam ferramentas profissionais".]*

> O que é verdade? A IA já consegue usar o Ghidra, o IDA e outras ferramentas sozinha. Ela lê programa compilado e tráfego de rede muito mais rápido que a gente. Ficou mais fácil começar nessa área.

**▶** *[Cartão EXAGERO: "É um novo descompilador que devolve o código original".]*

> E o que é exagero? Dizer que o REA é um descompilador novo que devolve o código original. Não é. O próprio projeto explica: ele é um **conector** entre a IA e ferramentas que existem há décadas. E o que sai continua sendo pseudocódigo e pistas, como a gente viu no capítulo 5.
>
> Tem até relatos de gente que testou e achou que nem sempre é mais rápido que fazer do jeito simples. *(corta se precisar)*

**▶** *[Cartão HUMANO: "Decidir o que é legal, ético e correto".]*

> E o que continua sendo humano? A documentação do próprio REA diz: use só para pesquisa legítima, com autorização, e a responsabilidade é de quem usa. Quem autoriza? Quem assina? Quem responde se der errado? Nenhuma ferramenta decide isso. A ferramenta não muda a lei.

**▶** *[Cartão ALERTA: "Hype atrai golpe".]*

> E um alerta. No auge do sucesso, foi relatado que uma cópia falsa do repositório estava espalhando vírus, um trojan. Isso foi relatado, mas não confirmado de forma independente. Fica a lição: onde tem muito barulho, tem golpe. Baixem só da fonte oficial.

**▶** *[Tela: "A IA lê as fatias mais rápido. Quem decide o que fazer com elas ainda somos nós."]*

> Então, resumindo: a IA lê as fatias do nosso bloco muito mais rápido, e isso é real. Mas quem decide o que fazer com elas **ainda somos nós**.

---

## 11. Final · ⏱ 1 min

**▶** *[Tela: "Observar. Analisar. Documentar. Com autorização." Título: "Entender o que já existe é o primeiro passo para criar o que vem depois."]*

> Se der para guardar quatro palavras de hoje, são estas: **observar, analisar, documentar**, e sempre **com autorização**. Entender o que já existe é o primeiro passo para criar o que vem depois.

**▶** *[Tela: a rede de esferas acende ao fundo. "Na sala das redes neurais…"]*

> E tem uma ligação com a sala ao lado, a de redes neurais. Lá, a máquina também aprende olhando exemplos de fora e monta um modelo próprio. A diferença: a engenharia reversa devolve **compreensão**, e a rede neural devolve **respostas**. É o mesmo movimento, de fora para dentro.

**▶** *[Tela: "Se você pudesse investigar qualquer software, qual escolheria?"]*

> Para fechar, uma pergunta para vocês: se pudessem investigar qualquer programa, qual escolheriam?
>
> *[Pausa. Ouvir duas ou três respostas e comentar rapidinho.]*
>
> Muito obrigado!

---

## Se perguntarem…

Respostas curtas, para dizer do jeito que vierem:

- **"Isso é hackear?"** — Não. Engenharia reversa é analisar para entender. Se é permitido, depende da lei do país, do contrato e do objetivo. E sempre com autorização.
- **"A IA vai substituir quem faz isso?"** — Ela tira o trabalho braçal, mas não devolve o código original e não decide nada. Quem entende, decide e assina continua sendo uma pessoa.
- **"Dá para recuperar o código original?"** — Não. Nomes e comentários nunca estão no programa compilado. O que sai é uma reconstrução aproximada.
- **"É legal?"** — Depende do país e do objetivo. No Brasil, a Lei 9.609 de 1998. Na dúvida: sem autorização, não.
- **"Como eu começo a aprender?"** — Pelas ferramentas de desenvolvedor do navegador, olhando seus próprios sites. Depois, o Ghidra, que é gratuito, com programas de treino feitos para isso (os desafios de CTF).
