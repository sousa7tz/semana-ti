var Po=a=>{throw TypeError(a)};var ve=(a,e,o)=>e.has(a)||Po("Cannot "+o);var Uo=(a,e,o)=>e.has(a)?Po("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,o);var uo=(a,e,o)=>(ve(a,e,"access private method"),o);import"./base-BfadI49K.js";import{j as ge,k as xe,l as be,m as K,I as we,V as g,e as Go,T as Me,n as ie,G as no,b as wo,f as to,c as Eo,o as Io,p as ce,Q as le,a as q,R as Do,q as ye,r as Ae,P as Qo,C as Se,S as Ce,i as Ee}from"./RoundedBoxGeometry-CbBzOSbC.js";const qe=`---
titulo: Redes|neurais
rotulo: Sala temática · IA vs Humanos
cena: redes
estado: pulso
camera: dupla-escuro
clima: holofote
layout: esquerda
destaque: sim
---

Um sinal. Depois, muitos.

<!-- passo estado=crescendo camera=dupla-crescer -->
Como uma máquina **aprende** a partir de exemplos?`,Re=`---
titulo: Tudo começa|num neurônio
rotulo: 02 · O neurônio biológico
estado: neuronio
camera: neuronio
clima: estudio
layout: esquerda
passos-modo: troca
---

No cérebro, um neurônio recebe sinais, decide e passa adiante.

<!-- passo estado=dendritos camera=dendritos -->
Os **dendritos** recebem sinais de outros neurônios.

<!-- passo estado=corpo camera=corpo -->
O **corpo celular** junta tudo. Se o estímulo for forte o bastante, ele **dispara**.

<!-- passo estado=axonio camera=axonio -->
O **axônio** leva o sinal adiante.

<!-- passo estado=sinapse camera=sinapse -->
Na **sinapse**, substâncias químicas passam o recado para o próximo neurônio.`,Te=`---
titulo: Do biológico|ao artificial
rotulo: 03 · O neurônio artificial
estado: artificial
camera: artificial
clima: estudio
layout: esquerda
passos-modo: troca
---

Uma versão **matemática** do neurônio: inspirada no cérebro, não uma cópia dele.

<!-- passo estado=art-entradas camera=art-perto -->
**Entradas**: números que chegam (x₁, x₂, x₃).

<!-- passo estado=art-pesos -->
Cada entrada tem um **peso**: o quanto ela importa.

<!-- passo estado=art-soma camera=artificial -->
O neurônio **soma** tudo: entrada × peso, mais um ajuste (o viés).

> 0,8·0,9 + 0,2·(−0,4) + 0,5·0,6 + 0,1 = 1,04

<!-- passo estado=art-dispara camera=art-saida -->
A **ativação** transforma a soma num sinal de saída: aqui, 0,74.`,_e=`---
titulo: Juntos,|em camadas
rotulo: 04 · Camadas
estado: rede-entrada
camera: rede-entrada
clima: estudio
layout: esquerda
passos-modo: troca
---

**Entrada**: os pixels de uma foto.

<!-- passo estado=rede-ocultas camera=rede-meio -->
**Camadas ocultas**: cada neurônio combina o que veio da camada anterior.

<!-- passo camera=rede-geral -->
Cada camada **recombina** as anteriores: linhas viram formas, formas viram coisas.

<!-- passo estado=rede-saida camera=rede-saida -->
**Saída**: um neurônio para cada resposta possível: gato ou cachorro.

<!-- passo estado=rede-saida camera=rede -->
Profundidade não é tudo: **camada demais encalha** — o erro não volta direito.

> Mais camadas não é sempre melhor: fundo demais trava a rede. Ao vivo, no capítulo 6, dá para ver acontecer.

<!-- passo estado=rede-avanco camera=rede-geral -->
O sinal atravessa a rede, camada por camada, e sai uma **resposta**.
`,je=`---
titulo: Como ela|aprende
rotulo: 05 · Treinamento
estado: errado
camera: rede-erro
clima: estudio
layout: esquerda
passos-modo: troca
---

Era a foto de um gato. A rede respondeu **cachorro**. O **erro** é grande.

> O erro (em inglês, *loss*) mede o quanto a resposta ficou longe da certa.

<!-- passo estado=retro -->
O erro volta pela rede, de trás para frente: a **retropropagação**.

<!-- passo estado=ajusta camera=rede -->
Cada **peso** muda um pouquinho, na direção que diminui o erro.

<!-- passo estado=epocas camera=rede-geral -->
Repete com milhares de **dados de treino**. Cada volta completa é uma **época**. O erro cai.`,ze=`---
titulo: Aprendendo|ao vivo
rotulo: 06 · Demonstração
estado: demo
camera: demo
clima: holofote
layout: painel
passos-modo: troca
demo-dados: espiral
demo-treinar: nao
demo-ocultas: 1
demo-neuronios: 2
---

Cada ponto é um exemplo. A rede precisa separar **terracota** de **azul**.

<!-- passo demo-treinar=sim -->
**2 neurônios**: poucos demais. A fronteira não consegue fazer a curva.

<!-- passo demo-neuronios=8 -->
**8 neurônios**: a fronteira começa a curvar.

<!-- passo demo-ocultas=2 -->
**2 camadas** de 8: agora ela acompanha a espiral. O erro vai a quase zero.

<!-- passo demo-ocultas=4 -->
**4 camadas**: de novo a zero. O ganho de cada camada nova já está diminuído.

<!-- passo demo-ocultas=8 -->
**8 camadas**: encalha perto de 60%. Fundo demais, sem técnica, fica **pior**.

> O sinal de erro enfraquece a cada camada que retrocede (Glorot–Bengio, 2010). Fundas de verdade treinam com ReLU e atalhos entre camadas (ResNet).

<!-- passo demo-ocultas=12 demo-epocas=1200 -->
**12 camadas** com o triplo do tempo: nada. Empilhar camada não é atalho.

<!-- passo demo-dados=circulos,xor demo-ocultas=2 demo-epocas=400 -->
A mesma rede aprende outros padrões: **círculos** e **XOR**.

> Treino de verdade, aqui no navegador. A semente é fixa: o resultado se repete.
`,Oe=`---
titulo: O que a rede|“vê”
rotulo: 07 · Imagens
estado: pixels
camera: pixels
clima: estudio
layout: direita
passos-modo: troca
---

Para a rede, uma foto é uma grade de **pixels**.

<!-- passo estado=numeros -->
Cada pixel vira um **número**: claro perto de 0, escuro perto de 1.

<!-- passo estado=pixels-entram camera=pixels-rede -->
Esses números entram na rede.

<!-- passo estado=padroes camera=padroes -->
Em redes de imagem, as primeiras camadas tendem a captar **bordas**; depois, **formas**; no fim, **objetos**.

> Uma tendência geral, não uma regra.`,Ne=`---
titulo: Cérebro e máquina
rotulo: 08 · Comparação
estado: dupla
camera: dupla
clima: estudio
layout: rodape
passos-modo: troca
---

Lado a lado. Inspiração não é cópia.

<!-- passo camera=dupla-org -->
**Neurônios**: o cérebro humano tem cerca de **86 bilhões** (valor aproximado). Grandes modelos de IA têm bilhões de **pesos**.

<!-- passo camera=dupla-alto -->
**Energia**: o cérebro funciona com cerca de **20 watts**. Treinar grandes modelos de IA exige **data centers** inteiros.

<!-- passo camera=dupla-org -->
**Aprendizado**: uma criança aprende com poucos exemplos. Redes costumam precisar de **muitos** dados.

<!-- passo camera=dupla-maq -->
**Velocidade e escala**: máquinas processam volumes enormes de dados, sem cansar.

<!-- passo camera=dupla -->
**Compreensão, consciência, emoção**: perguntas em aberto. Ainda estão em debate.`,Ie=`---
titulo: Onde elas|já estão
rotulo: 09 · No dia a dia
estado: app-1
camera: app-a
clima: estudio
layout: esquerda
---

- Assistentes de IA (ChatGPT, Claude)

<!-- passo estado=app-2 -->
- Tradução automática

<!-- passo estado=app-3 camera=app-b -->
- Desbloqueio pelo rosto

<!-- passo estado=app-4 -->
- Recomendações de vídeos e músicas

<!-- passo estado=app-5 camera=app-c -->
- Assistência ao motorista

<!-- passo estado=app-6 -->
- Apoio a diagnóstico por imagem: quem decide é o médico`,De=`---
titulo: E os|limites?
rotulo: 10 · Cuidados
estado: limites
camera: rede-geral
clima: estudio
layout: esquerda
---

- **Viés**: aprende também os preconceitos dos dados

<!-- passo camera=rede-saida -->
- **Alucinação**: inventa respostas com toda a confiança

<!-- passo camera=rede-meio -->
- **Caixa-preta**: é difícil explicar por que decidiu

<!-- passo camera=rede -->
- **Energia**: treinar modelos grandes gasta muita eletricidade`,Be=`---
titulo: De dentro|para fora
rotulo: 11 · Projeção
estado: dupla
camera: dupla
clima: estudio
layout: rodape
passos-modo: troca
---

Duas salas, uma ideia: de sinais que chegam a um **modelo interno** que responde.

<!-- passo estado=final-unido camera=dupla-alto clima=holofote -->
**Teoria projetiva**: o cérebro nunca vê o mundo direto — monta um modelo interno e o **projeta** como mundo percebido.

> Velmans e Pereira Jr. (2018): projeção perceptual é efeito real, medido da visão de profundidade a cinemas 3D e hologramas.

<!-- passo estado=padroes camera=padroes clima=estudio layout=direita -->
**NCM** (Stanford, out/2026) sai do "palavra por palavra": gera primeiro um esboço do conceito e refina nível por nível, em paralelo.

> Preprint: nos testes, 10–31× mais rápido que modelos de difusão recentes. Estrutura parecida com a percepção — mecânica diferente.

<!-- passo estado=padroes camera=padroes layout=direita -->
**Engenharia reversa** também monta um modelo interno vendo só o comportamento de fora. A rede o aprende por exemplos — e o **projeta** como resposta.

<!-- passo estado=final-unido camera=dupla layout=rodape -->
Cérebro, rede e analista começam no sinal que chega e terminam com o modelo interno **projetado**: mundo percebido, resposta, documentação.
`,Ge=`---
titulo: A máquina aprende com exemplos.|Nós escolhemos quais exemplos dar.
rotulo: 12 · Final
estado: final-unido
camera: final-holofote
clima: holofote
layout: rodape
---

Um sinal. Dois mundos. Uma rede.

<!-- passo camera=final clima=estudio -->
No fim, IA vs Humanos ou **IA com Humanos**?`,ao={dupla:-14,neuronio:0,exemplo:12,demo:26},Jo={crescer:0,maquina:0,unir:0,pulsoDupla:0,rotDendritos:0,rotSoma:0,rotAxonio:0,rotSinapse:0,pulsoBio:0,sinapse:0,artificial:0,entradas:0,pesos:0,somaArt:0,disparo:0,rede:0,camadasRede:0,avanco:0,retro:0,ajuste:0,mostrarSaida:0,acerto:.5,mostrarErro:0,erroRede:.9,imagem:0,numeros:0,entrar:0,padroes:0,app:0,demo:0},Y={rede:1,camadasRede:4},Zo={crescer:1,maquina:1,pulsoDupla:1},Ue={pulso:{crescer:.04,pulsoDupla:1},crescendo:{crescer:1,pulsoDupla:1},neuronio:{},dendritos:{rotDendritos:1,pulsoBio:1},corpo:{rotDendritos:1,rotSoma:1,pulsoBio:1},axonio:{rotSoma:1,rotAxonio:1,pulsoBio:1},sinapse:{rotAxonio:1,rotSinapse:1,pulsoBio:1,sinapse:1},artificial:{artificial:1},"art-entradas":{artificial:1,entradas:1},"art-pesos":{artificial:1,entradas:1,pesos:1},"art-soma":{artificial:1,entradas:1,pesos:1,somaArt:1},"art-dispara":{artificial:1,entradas:1,pesos:1,somaArt:1,disparo:1},"rede-entrada":{rede:1,camadasRede:1},"rede-ocultas":{rede:1,camadasRede:3},"rede-saida":{...Y},"rede-avanco":{...Y,avanco:1,mostrarSaida:1,acerto:.2},errado:{...Y,mostrarSaida:1,acerto:.2,mostrarErro:1,erroRede:.92},retro:{...Y,mostrarSaida:1,acerto:.2,mostrarErro:1,erroRede:.92,retro:1},ajusta:{...Y,mostrarSaida:1,acerto:.45,mostrarErro:1,erroRede:.55,retro:.6,ajuste:.5},epocas:{...Y,mostrarSaida:1,acerto:.92,mostrarErro:1,erroRede:.08,avanco:1,retro:.4,ajuste:1},demo:{demo:1},pixels:{ajuste:1,imagem:1},numeros:{ajuste:1,imagem:1,numeros:1},"pixels-entram":{...Y,ajuste:1,imagem:1,numeros:1,entrar:1,avanco:1},padroes:{...Y,ajuste:1,imagem:1,entrar:1,avanco:1,padroes:1,mostrarSaida:1,acerto:.92},dupla:{...Zo},"final-unido":{...Zo,unir:1},"app-1":{...Y,ajuste:1,avanco:1,app:1},"app-2":{...Y,ajuste:1,avanco:1,app:2},"app-3":{...Y,ajuste:1,avanco:1,app:3},"app-4":{...Y,ajuste:1,avanco:1,app:4},"app-5":{...Y,ajuste:1,avanco:1,app:5},"app-6":{...Y,ajuste:1,avanco:1,app:6},limites:{...Y,ajuste:.5,avanco:.5,mostrarSaida:1,acerto:.5}},H=ao.dupla,D=ao.exemplo,Ko=ao.demo,We={"dupla-escuro":{pos:[H-.8,2,7.4],alvo:[H-2,1.6,0],fov:26},"dupla-crescer":{pos:[H-.6,2.4,9.6],alvo:[H-1.6,1.7,0],fov:28},dupla:{pos:[H-.1,2.6,13],alvo:[H-.1,1.75,0],fov:30},"dupla-org":{pos:[H-1.6,2.4,9.4],alvo:[H-1.6,1.75,0],fov:30},"dupla-maq":{pos:[H+1.8,2.4,9.4],alvo:[H+1.6,1.75,0],fov:30},"dupla-alto":{pos:[H,6.4,11.6],alvo:[H-.1,1.6,0],fov:30},"final-holofote":{pos:[H+.2,2.5,11.6],alvo:[H,1.7,0],fov:28},final:{pos:[H,3.6,15],alvo:[H,1.7,0],fov:30},neuronio:{pos:[1.2,3.2,14.2],alvo:[.6,1.5,0],fov:30},dendritos:{pos:[-1,2.4,8],alvo:[-1.4,1.7,0],fov:30},corpo:{pos:[-.2,2.4,7.4],alvo:[-.6,1.7,0],fov:30},axonio:{pos:[1.6,2.6,8.6],alvo:[1,1.6,0],fov:30},sinapse:{pos:[4.6,2.4,6.6],alvo:[3.7,1.66,0],fov:30},artificial:{pos:[-1,2.6,12.6],alvo:[-1.2,1.6,0],fov:30},"art-perto":{pos:[-2,2.3,9.8],alvo:[-2,1.65,0],fov:30},"art-saida":{pos:[-.4,2.3,9.6],alvo:[-.6,1.65,0],fov:30},rede:{pos:[D+.4,2.8,16],alvo:[D+.2,1.95,0],fov:30},"rede-entrada":{pos:[D-2.9,2.4,9.6],alvo:[D-3.3,1.95,0],fov:30},"rede-meio":{pos:[D-1.6,2.5,11],alvo:[D-1.9,1.95,0],fov:30},"rede-saida":{pos:[D+.2,2.4,10.4],alvo:[D-.3,1.95,0],fov:30},"rede-erro":{pos:[D+.4,2.8,15],alvo:[D-.4,1.9,0],fov:30},"rede-geral":{pos:[D-.6,3,15.4],alvo:[D-1,2,0],fov:30},pixels:{pos:[D-3.6,2,8.8],alvo:[D-3.2,1.4,0],fov:30},"pixels-rede":{pos:[D-.9,3.2,21],alvo:[D-.8,1.8,0],fov:30},padroes:{pos:[D+1,3.6,16],alvo:[D+1.6,2.6,0],fov:30},"app-a":{pos:[D-1,2.4,14.4],alvo:[D-1.2,1.95,0],fov:30},"app-b":{pos:[D+.2,2.8,14.2],alvo:[D-1,1.95,0],fov:30},"app-c":{pos:[D-2.2,3.2,14.4],alvo:[D-1.4,1.95,0],fov:30},demo:{pos:[Ko,2.3,9],alvo:[Ko,1.9,0],fov:30}};function co(a=1){let e=a>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}const ke=a=>1/(1+Math.exp(-a)),$e=a=>a>0?a:a*.01,oe={tanh:a=>1-a*a,relu:a=>a>0?1:.01};class Le{constructor(e,{semente:o=1,taxa:s=.05,momento:n=.9,escala:i=2,ativ:l="tanh"}={}){this.tamanhos=e,this.escala=i,this.taxa=s,this.momento=n,this.derivAtiv=oe[l]??oe.tanh;const m=co(o);this.ativFn=l==="relu"?$e:Math.tanh,this.W=[],this.b=[],this.vW=[],this.vb=[];for(let c=0;c<e.length-1;c++){const r=e[c],t=e[c+1],d=Math.sqrt(6/(r+t))*(l==="relu"?2*Math.sqrt(2):1),u=new Float64Array(r*t);for(let p=0;p<u.length;p++)u[p]=(m()*2-1)*d;this.W.push(u),this.b.push(new Float64Array(t)),this.vW.push(new Float64Array(r*t)),this.vb.push(new Float64Array(t))}this.a=e.map(c=>new Float64Array(c)),this.d=e.map(c=>new Float64Array(c)),this.gW=this.W.map(c=>new Float64Array(c.length)),this.gb=this.b.map(c=>new Float64Array(c.length))}prever(e,o){const s=this.a;s[0][0]=e*this.escala,s[0][1]=o*this.escala;const n=this.W.length;for(let i=0;i<n;i++){const l=this.tamanhos[i],m=this.tamanhos[i+1],c=this.W[i];for(let r=0;r<m;r++){let t=this.b[i][r];for(let d=0;d<l;d++)t+=c[r*l+d]*s[i][d];s[i+1][r]=i===n-1?ke(t):this.ativFn(t)}}return s[n][0]}treinarLote(e,o){const s=this.W.length;for(const l of this.gW)l.fill(0);for(const l of this.gb)l.fill(0);let n=0;for(const l of o){const m=e[l],c=this.prever(m.x,m.y),r=m.classe;n+=-(r*Math.log(c+1e-9)+(1-r)*Math.log(1-c+1e-9)),this.d[s][0]=c-r;for(let t=s-1;t>=0;t--){const d=this.tamanhos[t],u=this.tamanhos[t+1],p=this.W[t];for(let b=0;b<u;b++){const w=this.d[t+1][b];this.gb[t][b]+=w;for(let f=0;f<d;f++)this.gW[t][b*d+f]+=w*this.a[t][f]}if(t>0)for(let b=0;b<d;b++){let w=0;for(let S=0;S<u;S++)w+=p[S*d+b]*this.d[t+1][S];const f=this.a[t][b];this.d[t][b]=w*this.derivAtiv(f)}}}const i=o.length;for(let l=0;l<s;l++){const m=this.W[l],c=this.vW[l];for(let r=0;r<m.length;r++)c[r]=this.momento*c[r]-this.taxa*this.gW[l][r]/i,m[r]+=c[r];for(let r=0;r<this.b[l].length;r++)this.vb[l][r]=this.momento*this.vb[l][r]-this.taxa*this.gb[l][r]/i,this.b[l][r]+=this.vb[l][r]}return n/i}erro(e){let o=0;for(const s of e){const n=this.prever(s.x,s.y);o+=-(s.classe*Math.log(n+1e-9)+(1-s.classe)*Math.log(1-n+1e-9))}return o/e.length}acuracia(e){let o=0;for(const s of e)this.prever(s.x,s.y)>.5==(s.classe===1)&&o++;return o/e.length}}function Fe(a,e,o,s=10){const n=e.map((i,l)=>l);for(let i=n.length-1;i>0;i--){const l=Math.floor(o()*(i+1));[n[i],n[l]]=[n[l],n[i]]}for(let i=0;i<n.length;i+=s)a.treinarLote(e,n.slice(i,i+s))}function ee(a,e=!1){const o=a[0].index!==null,s=new Set(Object.keys(a[0].attributes)),n=new Set(Object.keys(a[0].morphAttributes)),i={},l={},m=a[0].morphTargetsRelative,c=new ge;let r=0;for(let t=0;t<a.length;++t){const d=a[t];let u=0;if(o!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;i[p]===void 0&&(i[p]=[]),i[p].push(d.attributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". Make sure all geometries have the same number of attributes."),null;if(m!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+".  .morphAttributes must be consistent throughout all geometries."),null;l[p]===void 0&&(l[p]=[]),l[p].push(d.morphAttributes[p])}if(e){let p;if(o)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". The geometry must have either an index or a position attribute"),null;c.addGroup(r,p,t),r+=p}}if(o){let t=0;const d=[];for(let u=0;u<a.length;++u){const p=a[u].index;for(let b=0;b<p.count;++b)d.push(p.getX(b)+t);t+=a[u].attributes.position.count}c.setIndex(d)}for(const t in i){const d=te(i[t]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+t+" attribute."),null;c.setAttribute(t,d)}for(const t in l){const d=l[t][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[t]=[];for(let u=0;u<d;++u){const p=[];for(let w=0;w<l[t].length;++w)p.push(l[t][w][u]);const b=te(p);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+t+" morphAttribute."),null;c.morphAttributes[t].push(b)}}return c}function te(a){let e,o,s,n=-1,i=0;for(let r=0;r<a.length;++r){const t=a[r];if(e===void 0&&(e=t.array.constructor),e!==t.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(o===void 0&&(o=t.itemSize),o!==t.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=t.normalized),s!==t.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=t.gpuType),n!==t.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=t.count*o}const l=new e(i),m=new xe(l,o,s);let c=0;for(let r=0;r<a.length;++r){const t=a[r];if(t.isInterleavedBufferAttribute){const d=c/o;for(let u=0,p=t.count;u<p;u++)for(let b=0;b<o;b++){const w=t.getComponent(u,b);m.setComponent(u+d,b,w)}}else l.set(t.array,c);c+=t.count*o}return n!==void 0&&(m.gpuType=n),m}function Ve(a,e=1e-4){e=Math.max(e,Number.EPSILON);const o={},s=a.getIndex(),n=a.getAttribute("position"),i=s?s.count:n.count;let l=0;const m=Object.keys(a.attributes),c={},r={},t=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,C=m.length;M<C;M++){const A=m[M],R=a.attributes[A];c[A]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const P=a.morphAttributes[A];P&&(r[A]||(r[A]=[]),P.forEach((k,O)=>{const U=new k.array.constructor(k.count*k.itemSize);r[A][O]=new k.constructor(U,k.itemSize,k.normalized)}))}const p=e*.5,b=Math.log10(1/e),w=Math.pow(10,b),f=p*w;for(let M=0;M<i;M++){const C=s?s.getX(M):M;let A="";for(let R=0,P=m.length;R<P;R++){const k=m[R],O=a.getAttribute(k),U=O.itemSize;for(let B=0;B<U;B++)A+=`${~~(O[d[B]](C)*w+f)},`}if(A in o)t.push(o[A]);else{for(let R=0,P=m.length;R<P;R++){const k=m[R],O=a.getAttribute(k),U=a.morphAttributes[k],B=O.itemSize,W=c[k],G=r[k];for(let j=0;j<B;j++){const E=d[j],L=u[j];if(W[L](l,O[E](C)),U)for(let N=0,X=U.length;N<X;N++)G[N][L](l,U[N][E](C))}}o[A]=l,t.push(l),l++}}const S=a.clone();for(const M in a.attributes){const C=c[M];if(S.setAttribute(M,new C.constructor(C.array.slice(0,l*C.itemSize),C.itemSize,C.normalized)),M in r)for(let A=0;A<r[M].length;A++){const R=r[M][A];S.morphAttributes[M][A]=new R.constructor(R.array.slice(0,l*R.itemSize),R.itemSize,R.normalized)}}return S.setIndex(t),S}function Ro(a="#c06a46"){return new be({color:new K(a),roughness:.72,metalness:0,sheen:1,sheenColor:new K("#f4b892"),sheenRoughness:.45,clearcoat:.05})}function $o(a,e=1,o=5){const s=Ve(new we(a,o).deleteAttribute("uv").deleteAttribute("normal")),n=s.attributes.position,i=new g,l=co(e),m=[l()*3+2,l()*3+2,l()*3+2],c=[l()*6,l()*6,l()*6];for(let r=0;r<n.count;r++){i.fromBufferAttribute(n,r).normalize();const t=Math.sin(i.x*m[0]+c[0])*Math.sin(i.y*m[1]+c[1])*Math.sin(i.z*m[2]+c[2]);i.multiplyScalar(a*(1+t*.12)),n.setXYZ(r,i.x,i.y,i.z)}return s.computeVertexNormals(),s}function Ho(a,e,o,s=.25){const n=new g().lerpVectors(a,e,.5),i=a.distanceTo(e);n.add(new g((o()-.5)*i*s,(o()-.5)*i*s,(o()-.5)*i*s));const l=new g().lerpVectors(a,n,.5),m=new g().lerpVectors(n,e,.5);return new Go([a.clone(),l,n,m,e.clone()])}function Xo(a,e,o,s,n,i,l=[],m=3){const c=a.clone().addScaledVector(e,o),r=Ho(a,c,i,.35);if(l.push({curva:r,raio:s,nivel:n}),n<m){const t=n===0?3:2;for(let d=0;d<t;d++){const u=e.clone();u.applyAxisAngle(new g(0,0,1),(i()-.5)*1.3),u.applyAxisAngle(new g(0,1,0),(i()-.5)*1),u.normalize(),Xo(c,u,o*(.55+i()*.15),s*.62,n+1,i,l,m)}}return l}function bo(a,e,o=24){return new Me(a,o,e,8,!1)}const Wo=new K("#2f4fd8"),He=new K("#c8643b"),Xe=new K("#a8a196"),ae=new K("#ece7de"),Ye=new K("#b8442b"),po=new ie,qo=new le,ho=new g,jo=new g,So=new K,Pe=new g(0,1,0);var To,Lo;class Yo{constructor({materiais:e,camadas:o,espacoX:s=1.6,espacoY:n=.55,raio:i=.15,maxPulsos:l=18}){Uo(this,To);this.group=new no,this.materiais=e,this.espacoX=s,this.espacoY=n,this.raio=i,this.matNo=e.ceramica(),this.matNo.clearcoat=.6,this.matNo.roughness=.35,this.matCabo=e.ceramica(),this.matCabo.roughness=.5,this.matPulso=new wo({color:16777215}),this.geoNo=new to(1,32,20),this.geoCabo=new Eo(1,1,1,10,1,!0),this.geoPulso=new to(1,16,12),this.maxPulsos=l,this.pulsos=[],this.tempo=0,this.construir(o)}construir(e,o={}){o.espacoX!=null&&(this.espacoX=o.espacoX),o.espacoY!=null&&(this.espacoY=o.espacoY),o.raio!=null&&(this.raio=o.raio),this.descartarMalhas(),this.camadas=e;const s=[],n=e.length;e.forEach((m,c)=>{const r=(c-(n-1)/2)*this.espacoX;for(let t=0;t<m;t++)s.push({l:c,i:t,pos:new g(r,(t-(m-1)/2)*this.espacoY,0),ativ:0})}),this.nos=s,this.indice=[];let i=0;e.forEach((m,c)=>{this.indice[c]=[];for(let r=0;r<m;r++)this.indice[c][r]=i++});const l=[];for(let m=0;m<n-1;m++)for(let c=0;c<e[m+1];c++)for(let r=0;r<e[m];r++)l.push({l:m,i:r,j:c,a:this.indice[m][r],b:this.indice[m+1][c],peso:.3,alvo:.3});this.conex=l,this.malhaNos=new Io(this.geoNo,this.matNo,s.length),this.malhaNos.castShadow=!0,this.malhaCabos=new Io(this.geoCabo,this.matCabo,Math.max(1,l.length)),this.malhaCabos.castShadow=!0,this.malhaPulsos=new Io(this.geoPulso,this.matPulso,this.maxPulsos);for(const m of[this.malhaNos,this.malhaCabos,this.malhaPulsos])m.instanceColor=new ce(new Float32Array(m.count*3),3),m.frustumCulled=!1;this.group.add(this.malhaCabos,this.malhaNos,this.malhaPulsos),this.pulsos=[],this.atualizar(1)}descartarMalhas(){for(const e of[this.malhaNos,this.malhaCabos,this.malhaPulsos])e&&(this.group.remove(e),e.dispose())}definirPesos(e){for(const o of this.conex){const s=this.camadas[o.l];o.alvo=e?e[o.l][o.j*s+o.i]:o.alvo}}pesosAleatorios(e,o=1){for(const s of this.conex)s.alvo=(e()*2-1)*o}posicaoNo(e,o){return this.nos[this.indice[e][o]].pos}atualizar(e,{ativ:o=null,presenca:s=1,montar:n=1,camadasVisiveis:i=99,suavizar:l=8}={}){const m=1-Math.exp(-e*l);this.nos.forEach((r,t)=>{const d=Math.max(0,Math.min(1,i-r.l)),u=o?o(r.l,r.i):0;r.ativ+=(u-r.ativ)*m;const p=this.raio*s*d*n;ho.copy(r.pos),po.compose(ho,qo.identity(),jo.setScalar(Math.max(1e-4,p))),this.malhaNos.setMatrixAt(t,po),So.copy(ae).lerp(Wo,Math.min(1,r.ativ)),this.malhaNos.setColorAt(t,So)});let c=1e-4;for(const r of this.conex)r.peso+=(r.alvo-r.peso)*m,c=Math.max(c,Math.abs(r.peso));this.conex.forEach((r,t)=>{const d=this.nos[r.a].pos,u=this.nos[r.b].pos,p=Math.max(0,Math.min(1,i-r.l-1)),b=Math.min(1,Math.abs(r.peso)/Math.max(1.2,c*.8)),w=(.006+b*.03)*s*p*n;ho.subVectors(u,d);const f=ho.length();qo.setFromUnitVectors(Pe,ho.normalize()),po.compose(jo.addVectors(d,u).multiplyScalar(.5),qo,new g(Math.max(1e-4,w),f,Math.max(1e-4,w))),this.malhaCabos.setMatrixAt(t,po),So.copy(Xe).lerp(r.peso>=0?Wo:He,.25+b*.75),this.malhaCabos.setColorAt(t,So)}),this.malhaNos.instanceMatrix.needsUpdate=!0,this.malhaNos.instanceColor.needsUpdate=!0,this.malhaCabos.instanceMatrix.needsUpdate=!0,this.malhaCabos.instanceColor.needsUpdate=!0}pulsar(e,{avanco:o=0,retro:s=0,velocidade:n=1.3,presenca:i=1}={}){this.tempo+=e;const l=this.camadas.length,m=Math.round(o*this.maxPulsos*.6),c=Math.round(s*this.maxPulsos*.6),r=this.pulsos.filter(d=>d.t<l-1),t=d=>r.filter(u=>u.sentido===d).length;t(1)<m&&Math.random()<e*6&&r.push(uo(this,To,Lo).call(this,1)),t(-1)<c&&Math.random()<e*6&&r.push(uo(this,To,Lo).call(this,-1)),this.pulsos=r;for(let d=0;d<this.maxPulsos;d++){const u=this.pulsos[d];if(!u||i<.01){po.compose(ho.set(0,-50,0),qo.identity(),jo.setScalar(1e-4)),this.malhaPulsos.setMatrixAt(d,po);continue}u.t+=e*n;const p=Math.min(l-2,Math.floor(u.t)),b=u.t-p,w=u.sentido>0?p:l-1-p,f=u.sentido>0?p+1:l-2-p,S=this.posicaoNo(w,u.caminho[w]),M=this.posicaoNo(f,u.caminho[f]);ho.lerpVectors(S,M,Math.min(1,b));const C=.055*i*Math.sin(Math.min(1,u.t/(l-1))*Math.PI)**.3;po.compose(ho,qo.identity(),jo.setScalar(Math.max(1e-4,C))),this.malhaPulsos.setMatrixAt(d,po),this.malhaPulsos.setColorAt(d,u.sentido>0?So.copy(Wo).lerp(ae,.55):So.copy(Ye))}this.malhaPulsos.instanceMatrix.needsUpdate=!0,this.malhaPulsos.instanceColor&&(this.malhaPulsos.instanceColor.needsUpdate=!0)}dispose(){this.descartarMalhas(),this.geoNo.dispose(),this.geoCabo.dispose(),this.geoPulso.dispose()}}To=new WeakSet,Lo=function(e){return{sentido:e,t:0,caminho:this.camadas.map(o=>Math.floor(Math.random()*o))}};const Fo=a=>Math.max(0,Math.min(1,a)),ko=a=>{const e=Fo(a);return e*e*(3-2*e)};function Qe({materiais:a,P:e}){const o=new no,s=co(5),n=Ro(),i=new no;o.add(i);const l=[new g(-3,1.55,.1),new g(-2.2,2.35,-.3),new g(-2,1,.35),new g(-1.2,1.9,0),new g(-.9,.85,-.4),new g(-.35,2.55,.25),new g(-.2,1.5,.15)],m=[[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[3,6],[4,6],[5,6]],c=[],r=l.map((O,U)=>{const B=new q($o(.2+s()*.07,30+U,4),n);return B.position.copy(O),B.castShadow=!0,i.add(B),B}),t=[0,1,1,2,2,3,3],d=m.map(([O,U],B)=>{const W=Ho(l[O],l[U],s,.45),G=bo(W,.038,40),j=new q(G,n);j.castShadow=!0,i.add(j);const E=Math.max(t[O],t[U])-.5+B*.02;return c.push({m:j,onda:E,total:G.index.count}),{curva:W,a:O,b:U}});l.forEach((O,U)=>{for(let W=0;W<3;W++){const G=new g(s()-.5,s()-.5,s()-.5).normalize(),j=Xo(O.clone().addScaledVector(G,.18),G,.35,.022,1,s,[],2);for(const E of j){const L=bo(E.curva,E.raio,10),N=new q(L,n);i.add(N),c.push({m:N,onda:t[U]+.3+E.nivel*.15,total:L.index.count})}}});const u=[d[1],d[3],d[6]],p=new wo({color:"#ffe2c4"}),b=new q(new to(.07,18,12),p);i.add(b);const w=new q(new to(.2,18,12),new wo({color:"#ffb27a",transparent:!0,opacity:.09,depthWrite:!1}));b.add(w);const f=new Yo({materiais:a,camadas:[3,4,4,3],espacoX:.8,espacoY:.52,raio:.13,maxPulsos:10});f.group.position.set(1.7,1.7,0),f.pesosAleatorios(co(8),1.2),o.add(f.group);const S=l[6].clone(),M=new g(1.7-1.2,1.7,0),C=new Go([S,S.clone().lerp(M,.5).add(new g(0,.25,.1)),M]),A=bo(C,.04,40),R=new q(A,a.aluminio());o.add(R);let P=0;function k(O){P+=O;const B=Fo(e.crescer)*4.2;r.forEach((N,X)=>{const lo=ko(B-t[X]+(X===0?1:0));N.scale.setScalar(Math.max(.001,lo)),N.visible=lo>.01});for(const N of c){const X=Fo((B-N.onda)/.9);N.m.visible=X>.005,N.m.geometry.setDrawRange(0,Math.floor(N.total*X/3)*3)}const W=ko(e.unir);i.position.x=W*.55,f.group.position.x=1.7-W*.55;const G=P*.35%1,j=Math.min(2,Math.floor(G*3)),E=G*3-j;u[j].curva.getPoint(E,b.position),b.visible=e.pulsoDupla>.5,w.visible=e.crescer<.6,R.visible=W>.01,A.setDrawRange(0,Math.floor(A.index.count*W/3)*3);const L=ko(e.maquina);f.group.visible=L>.01,f.atualizar(O,{presenca:L,ativ:N=>e.pulsoDupla>.5?.15+.25*Math.max(0,Math.sin(P*2-N)):0}),f.pulsar(O,{avanco:L*e.pulsoDupla,presenca:L})}return{group:o,atualizar:k,geo:f}}const fo={x:[.8,.2,.5],w:[.9,-.4,.6],b:.1},de=fo.x.reduce((a,e,o)=>a+e*fo.w[o],fo.b),se=1/(1+Math.exp(-de)),Co=(a,e=1)=>a.toFixed(e).replace(".",",").replace("-","−"),Bo=a=>Math.max(0,Math.min(1,a)),Je=a=>{const e=Bo(a);return e*e*(3-2*e)};function Ze({materiais:a,annotations:e,P:o}){const s=new no,n=co(21),i=Ro(),l=Ro("#d99a74"),m=new g(0,1.65,0),c=new q(new Do(8.2,.22,2,3,.05),a.ceramicaCinza());c.position.set(.9,.11,0),c.castShadow=c.receiveShadow=!0,s.add(c);const r=a.aluminio();for(const x of[0,3.1]){const y=new q(new Eo(.018,.018,1.35,12),r);y.position.set(x,.22+.67,0),y.castShadow=!0,s.add(y)}const t=new no;t.position.copy(m),s.add(t);const d=new q($o(.5,4),i);d.castShadow=!0,t.add(d);const u=[],p=[];for(let x=0;x<5;x++){const y=Math.PI+(x-2)*.42+(n()-.5)*.2,F=new g(Math.cos(y),Math.sin(y),(n()-.5)*.7).normalize(),Z=F.clone().multiplyScalar(.42),$=Xo(Z,F,.95,.075,0,n,[],2);p.push($[0].curva),u.push(...$)}const b=ee(u.map(x=>bo(x.curva,x.raio,16))),w=new q(b,i);w.castShadow=!0,t.add(w);const f=new Go([new g(.45,-.02,0),new g(1.3,-.1,.06),new g(2.3,.04,-.06),new g(3.3,-.04,0),new g(3.8,.02,0)]),S=new q(bo(f,.065,60),i);S.castShadow=!0,t.add(S);for(let x=0;x<4;x++){const y=.22+x*.17,F=f.getPointAt(y),Z=f.getTangentAt(y),$=new q(new ye(.12,.34,6,16),l);$.position.copy(F),$.quaternion.setFromUnitVectors(new g(0,1,0),Z),$.castShadow=!0,t.add($)}const M=f.getPointAt(1),C=[],A=[];for(let x=0;x<4;x++){const y=(x-1.5)*.42,F=M.clone().add(new g(Math.cos(y)*.55,Math.sin(y)*.55,(n()-.5)*.3)),Z=Ho(M,F,n,.3);A.push(bo(Z,.03,12));const $=new q(new to(.075,20,14),i);$.position.copy(F),$.castShadow=!0,t.add($),C.push({curva:Z,ponta:F})}t.add(new q(ee(A),i));const R=C[2].ponta.clone().add(new g(.2,0,0)),P=new Go([R,R.clone().add(new g(.5,.25,0)),R.clone().add(new g(1,.25,.1))]),k=new q(bo(P,.045,16),Ro("#b5603f"));k.castShadow=!0,t.add(k);const O=new q($o(.22,9,4),Ro("#b5603f"));O.position.copy(R).add(new g(1.15,.25,.1)),t.add(O);const U=new wo({color:"#fff0dc"}),B=new to(.06,16,12),W=p.map((x,y)=>({m:new q(B,U),c:x,fase:y/p.length}));W.forEach(x=>t.add(x.m));const G=new q(B,U);t.add(G);const j=[];for(let x=0;x<6;x++){const y=new q(new to(.022,10,8),new wo({color:"#f0b080"}));t.add(y),j.push({m:y,fase:x/6,dy:(x%3-1)*.04})}const E=new no;E.position.copy(m),s.add(E);const L=a.ceramica();L.clearcoat=.7,L.roughness=.3;const N=new q(new to(.42,48,32),L);N.castShadow=!0,E.add(N);const X=new q(new Ae(.56,.018,12,80),r);E.add(X);const lo=new K("#2f4fd8"),_o=new K("#ece7de"),Mo=fo.x.map((x,y)=>{const F=new g(-3,(1-y)*.95,0),Z=new q(new to(.17,32,20),a.ceramica());Z.position.copy(F),Z.castShadow=!0,E.add(Z);const $=fo.w[y],vo=new g().subVectors(new g,F),go=vo.length()-.42,z=new q(new Eo(1,1,1,12),$>=0?a.acento("#2f4fd8"):a.acento("#c8643b"));return z.scale.set(.012+Math.abs($)*.035,go,.012+Math.abs($)*.035),z.position.copy(F).addScaledVector(vo.clone().normalize(),go/2),z.quaternion.setFromUnitVectors(new g(0,1,0),vo.clone().normalize()),z.castShadow=!0,E.add(z),{pos:F,no:Z,cabo:z,w:$}}),h=new g(-1.1,1.25,0),v=new q(new to(.1,24,16),a.ceramica());v.position.copy(h),E.add(v);const T=new q(new Eo(.008,.008,1,8),r);{const x=h.clone().negate();T.scale.y=x.length()-.42,T.position.copy(h).addScaledVector(x.clone().normalize(),T.scale.y/2),T.quaternion.setFromUnitVectors(new g(0,1,0),x.normalize())}E.add(T);const V=new g(2.7,0,0),J=new q(new to(.2,32,20),a.ceramica());J.position.copy(V),E.add(J);const Q=new q(new Eo(.03,.03,2.08,12),r);Q.rotation.z=Math.PI/2,Q.position.set(1.52,0,0),E.add(Q);const oo=new wo({color:"#dfe4fb"}),yo=Mo.map(()=>new q(B,oo));yo.forEach(x=>E.add(x));const Ao=new q(B,oo);E.add(Ao),E.traverse(x=>{x.isMesh&&(x.castShadow=!0)});const eo=(x,y)=>{const F=new g;return()=>F.copy(y).applyMatrix4(x.matrixWorld)},_=x=>()=>Bo(x())*o.presenca;e.rotulo({ancora:eo(t,p[1].getPoint(.7)),texto:"Dendritos: recebem sinais",direcao:[-.3,-1],comprimento:9,visivel:_(()=>o.rotDendritos*(1-o.artificial))}),e.rotulo({ancora:eo(t,new g(0,.45,0)),texto:"Corpo celular: junta os estímulos",direcao:[.3,-1],comprimento:7,visivel:_(()=>o.rotSoma*(1-o.artificial))}),e.rotulo({ancora:eo(t,f.getPointAt(.45)),texto:"Axônio: leva o sinal adiante",direcao:[.2,1],comprimento:7,visivel:_(()=>o.rotAxonio*(1-o.artificial))}),e.rotulo({ancora:eo(t,C[2].ponta.clone().add(new g(.1,0,0))),texto:"Sinapse: passa para o próximo neurônio",direcao:[.2,-1],comprimento:8,visivel:_(()=>o.rotSinapse*(1-o.artificial))}),Mo.forEach((x,y)=>{e.rotulo({ancora:eo(E,x.pos),texto:`x${"₁₂₃"[y]} = ${Co(fo.x[y])}`,direcao:[-1,0],comprimento:3,visivel:_(()=>o.entradas*o.artificial)}),e.rotulo({ancora:eo(E,x.pos.clone().multiplyScalar(.45)),texto:`w${"₁₂₃"[y]} = ${Co(fo.w[y])}`,direcao:[.15,y===2?1:-1],comprimento:4,visivel:_(()=>o.pesos*o.artificial)})}),e.rotulo({ancora:eo(E,h),texto:`viés b = ${Co(fo.b)}`,direcao:[-.4,-1],comprimento:3,visivel:_(()=>o.somaArt*o.artificial)}),e.rotulo({ancora:eo(E,new g(0,.45,0)),texto:`Σ = ${Co(de,2)}`,direcao:[.3,-1],comprimento:7,visivel:_(()=>o.somaArt*o.artificial)}),e.rotulo({ancora:eo(E,new g(.4,-.4,0)),texto:`ativação (sigmoide): ${Co(se,2)}`,direcao:[.4,1],comprimento:6,visivel:_(()=>o.disparo*o.artificial)}),e.rotulo({ancora:eo(E,V),texto:`saída y = ${Co(se,2)}`,direcao:[.5,-1],comprimento:5,visivel:_(()=>o.disparo*o.artificial)});let I=0;function mo(x){I+=x;const y=Je(o.artificial),F=Math.max(.001,1-y);t.scale.setScalar(F),t.visible=F>.01,t.rotation.y=y*.8;const Z=Math.max(.001,y);E.scale.setScalar(Z),E.visible=y>.01;const $=I*.45%1;W.forEach(z=>{const ro=($+z.fase*.15)%1,fe=Math.min(1,ro/.45);z.c.getPoint(1-fe,z.m.position),z.m.visible=o.pulsoBio>.5&&ro<.45});const vo=($-.45)/.45;G.visible=o.pulsoBio>.5&&o.rotAxonio>.5&&vo>0&&vo<1,G.visible&&f.getPointAt(Math.min(1,vo),G.position),j.forEach(z=>{const ro=(I*.8+z.fase)%1;z.m.position.lerpVectors(C[2].ponta,R,ro),z.m.position.y+=z.dy*Math.sin(ro*Math.PI),z.m.visible=o.sinapse>.5});const go=I*.6%1;yo.forEach((z,ro)=>{z.position.lerpVectors(Mo[ro].pos,new g,Math.min(1,go/.6)),z.visible=o.entradas>.5&&go<.6&&y>.5}),Ao.visible=o.disparo>.5&&go>.6&&y>.5,Ao.visible&&Ao.position.lerpVectors(new g(.45,0,0),V,(go-.6)/.4),N.material.color.copy(_o).lerp(lo,Bo(o.disparo)*.85),J.material.color.copy(_o).lerp(lo,Bo(o.disparo)*.85),X.visible=o.disparo>.02,X.scale.setScalar(Math.max(.001,o.disparo)),X.rotation.z=I*.3,Mo.forEach(z=>{z.cabo.visible=o.pesos>.02||o.entradas>.02;const ro=Math.max(.15,o.pesos);z.cabo.scale.x=z.cabo.scale.z=(.012+Math.abs(z.w)*.035)*ro}),v.visible=T.visible=o.somaArt>.02}return{group:s,atualizar:mo}}const io=a=>Math.max(0,Math.min(1,a)),xo=a=>{const e=io(a);return e*e*(3-2*e)},Ke=["............",".#........#.",".##......##.",".###....###.",".##########.","############","###..##..###","############","#####..#####",".####..####.","..########..","....####...."],zo=Ke.map((a,e)=>[...a].map((o,s)=>o==="#"?.88+(s*7+e*3)%10/100:.04+(s+e*5)%6/100)),ot=[null,["texto que você digitou","próxima palavra provável"],["frase em inglês","frase em português"],["foto do rosto","é o dono do celular?"],["o que você já assistiu","o que sugerir depois"],["câmera do carro","faixa, pedestre, placa"],["exame de imagem","região para o médico revisar"]];function Oo(a,e=512){const o=document.createElement("canvas");o.width=o.height=e;const s=o.getContext("2d"),n=new Se(o);n.colorSpace=Ce,n.anisotropy=8;const i=()=>{s.fillStyle="#f6f3ed",s.fillRect(0,0,e,e),s.strokeStyle="rgba(25,23,20,0.25)",s.lineWidth=4,s.strokeRect(4,4,e-8,e-8),a(s,e),n.needsUpdate=!0};return i(),document.fonts?.ready.then(i),n}const et='"Instrument Sans", sans-serif',tt='"Instrument Serif", serif',at='"Cascadia Mono", Consolas, monospace',No=(a,e,o,s)=>{a.fillStyle="#191714",a.font=`400 ${o*.13}px ${tt}`,a.fillText(e,o*.08,o*.17),a.fillStyle="#6e685f",a.font=`500 ${o*.055}px ${et}`,a.fillText(s,o*.08,o*.26)};function st({materiais:a,annotations:e,P:o}){const s=new no,n=new Yo({materiais:a,camadas:[6,5,4,2],espacoX:1.7,espacoY:.55,raio:.16,maxPulsos:22}),i=1.95;n.group.position.set(0,i,0),s.add(n.group),n.pesosAleatorios(co(4),.7);const l=n.conex.map(h=>h.alvo);n.pesosAleatorios(co(9),1.6);const m=n.conex.map(h=>h.alvo),c=new no;c.position.set(1.7*1.5+1.25,i-.9,0),s.add(c);const r=a.aluminio(),t=new q(new Do(.5,.08,.5,2,.02),r);c.add(t);for(const h of[-.17,.17]){const v=new q(new Eo(.012,.012,1.85,8),r);v.position.set(h,.95,0),c.add(v)}const d=new q(new Do(.24,1,.24,2,.03),a.acento("#b8442b"));c.add(d),c.traverse(h=>{h.isMesh&&(h.castShadow=!0)});const u=new no;u.position.set(-1.7*1.5-2.3,i,0),u.rotation.y=.18,s.add(u);const p=12,b=.15,w=new Io(new Do(.135,.135,1,2,.015),a.ceramica(),p*p);w.instanceColor=new ce(new Float32Array(p*p*3),3),w.castShadow=!0,u.add(w);const f=new K("#f3efe8"),S=new K("#1d1b18"),M=new K;for(let h=0;h<p;h++)for(let v=0;v<p;v++)w.setColorAt(h*p+v,M.copy(f).lerp(S,zo[h][v]));const C=Oo((h,v)=>{No(h,"Em números",v,"canto superior esquerdo da foto"),h.font=`500 ${v*.062}px ${at}`;for(let T=0;T<5;T++)for(let V=0;V<5;V++){const J=zo[T][V];h.fillStyle=J>.5?"#2f4fd8":"#6e685f",h.fillText(J.toFixed(1).replace(".",","),v*(.08+V*.17),v*(.4+T*.12))}}),A=new q(new Qo(1.1,1.1),a.impresso(C));A.position.set(0,-1.65,.35),A.castShadow=!0,u.add(A);const R=new wo({color:"#c9d1f5"}),P=Array.from({length:6},(h,v)=>{const T=new q(new to(.05,14,10),R);return s.add(T),{m:T,fase:v/6}}),k=Oo((h,v)=>{No(h,"Bordas",v,"primeiras camadas"),h.strokeStyle="#191714",h.lineWidth=v*.02,h.lineCap="round";for(let T=0;T<6;T++){const V=v*(.15+T%3*.27),J=v*(.45+Math.floor(T/3)*.26),Q=T*.7%Math.PI;h.beginPath(),h.moveTo(V,J),h.lineTo(V+Math.cos(Q)*v*.16,J+Math.sin(Q)*v*.16),h.stroke()}}),O=Oo((h,v)=>{No(h,"Formas",v,"camadas do meio"),h.strokeStyle="#191714",h.lineWidth=v*.018,h.beginPath(),h.moveTo(v*.15,v*.75),h.lineTo(v*.27,v*.45),h.lineTo(v*.39,v*.75),h.closePath(),h.stroke(),h.beginPath(),h.arc(v*.66,v*.58,v*.13,0,Math.PI*2),h.stroke(),h.beginPath(),h.ellipse(v*.5,v*.86,v*.12,v*.05,0,0,Math.PI*2),h.stroke()}),U=Oo((h,v)=>{No(h,"Objetos",v,"camadas finais");const T=v*.045,V=v*.23,J=v*.33;for(let Q=0;Q<12;Q++)for(let oo=0;oo<12;oo++)h.fillStyle=zo[Q][oo]>.5?"#2f4fd8":"rgba(25,23,20,0.06)",h.fillRect(V+oo*T,J+Q*T,T-2,T-2)}),B=[[k,-.85],[O,.85],[U,2.55]].map(([h,v])=>{const T=new q(new Qo(1.05,1.05),a.impresso(h));return T.position.set(v,i+2.05,0),T.castShadow=!0,s.add(T),T}),W=h=>{const v=new g;return()=>v.copy(h()).applyMatrix4(n.group.matrixWorld)},G=h=>()=>io(h())*o.presenca,j=()=>ot[Math.round(o.app)];e.rotulo({ancora:W(()=>n.posicaoNo(0,0)),texto:()=>j()?`entrada: ${j()[0]}`:"entrada: os pixels da foto",direcao:[-.4,-1],comprimento:5,visivel:G(()=>o.rede*Math.min(1,o.camadasRede)*(o.imagem>.5?0:1))}),e.rotulo({ancora:W(()=>n.posicaoNo(3,0)),texto:"gato",direcao:[1,-.3],comprimento:3,visivel:G(()=>o.rede*io(o.camadasRede-3)*(j()?0:1))}),e.rotulo({ancora:W(()=>n.posicaoNo(3,1)),texto:"cachorro",direcao:[1,.3],comprimento:3,visivel:G(()=>o.rede*io(o.camadasRede-3)*(j()?0:1))}),e.rotulo({ancora:W(()=>n.posicaoNo(3,0)),texto:()=>j()?`saída: ${j()[1]}`:"",direcao:[1,-.6],comprimento:4,visivel:G(()=>j()?o.rede:0)}),e.rotulo({ancora:W(()=>n.posicaoNo(1,0)),texto:"camadas ocultas",direcao:[.6,-1],comprimento:4,visivel:G(()=>o.rede*io(o.camadasRede-1.5)*(1-o.padroes)*(j()?0:1))});const E=new g;e.rotulo({ancora:()=>E.set(0,.15+Math.max(.05,o.erroRede)*1.75,0).applyMatrix4(c.matrixWorld),texto:()=>`erro: ${o.erroRede.toFixed(2).replace(".",",")}`,direcao:[1,-.4],comprimento:3,visivel:G(()=>o.mostrarErro)}),e.rotulo({ancora:()=>E.set(0,.95,.1).applyMatrix4(u.matrixWorld),texto:"cada pixel vira um número de 0 a 1",direcao:[.3,-1],comprimento:5,visivel:G(()=>o.numeros*(1-o.entrar))});let L=0;const N=new ie,X=new g,lo=new g,_o=new le;function Mo(h){L+=h;const v=xo(o.rede);n.group.visible=v>.01;const T=xo(o.ajuste);n.conex.forEach((_,I)=>_.alvo=l[I]+(m[I]-l[I])*T);const V=io(o.acerto),J=io(o.mostrarSaida);n.atualizar(h,{presenca:v,camadasVisiveis:o.camadasRede,ativ:(_,I)=>_===3?J*(I===0?V:1-V):o.avanco*(.2+.5*Math.max(0,Math.sin(L*2.2-_*.9+I)))}),n.pulsar(h,{avanco:o.avanco,retro:o.retro,presenca:v}),c.visible=o.mostrarErro>.01,c.scale.setScalar(Math.max(.001,xo(o.mostrarErro)));const Q=Math.max(.05,o.erroRede)*1.75;d.scale.y=Q,d.position.y=.08+Q/2;const oo=xo(o.imagem);u.visible=oo>.01;const yo=xo(o.numeros);for(let _=0;_<p;_++)for(let I=0;I<p;I++){const mo=zo[_][I],x=.05+yo*mo*.6;X.set((I-(p-1)/2)*b,((p-1)/2-_)*b,x/2),lo.set(oo,oo,x*oo),N.compose(X,_o,lo),w.setMatrixAt(_*p+I,N)}w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),A.visible=yo>.01,A.scale.setScalar(Math.max(.001,yo));const Ao=io(o.entrar);P.forEach((_,I)=>{const mo=(L*.5+_.fase)%1,x=new g((I%3-1)*.5,(1-Math.floor(I/3)*2)*.4,.4).applyMatrix4(u.matrixWorld),y=n.posicaoNo(0,I).clone().applyMatrix4(n.group.matrixWorld);_.m.position.lerpVectors(x,y,mo),_.m.visible=Ao>.5});const eo=xo(o.padroes);B.forEach((_,I)=>{const mo=xo(io(eo*3-I));_.visible=mo>.01,_.scale.setScalar(Math.max(.001,mo))})}return{group:s,atualizar:Mo,rede:n}}const me={espiral:"Espiral",circulos:"Círculos",xor:"XOR",grupos:"Dois grupos"};function nt(a,{n:e=200,semente:o=7,ruido:s=.06}={}){const n=co(o),i=()=>{const m=Math.max(1e-9,n()),c=n();return Math.sqrt(-2*Math.log(m))*Math.cos(2*Math.PI*c)},l=[];for(let m=0;m<e;m++){const c=m%2;let r,t;if(a==="espiral"){const d=(m>>1)/(e/2),u=.08+d*.85,p=d*2.6*Math.PI+c*Math.PI;r=u*Math.cos(p)+i()*s*.6,t=u*Math.sin(p)+i()*s*.6}else if(a==="circulos"){const d=n()*Math.PI*2,u=c===1?n()*.38:.62+n()*.3;r=u*Math.cos(d)+i()*s*.5,t=u*Math.sin(d)+i()*s*.5}else if(a==="xor"){r=n()*1.8-.9,t=n()*1.8-.9;const d=.08;Math.abs(r)<d&&(r+=Math.sign(r||1)*d),Math.abs(t)<d&&(t+=Math.sign(t||1)*d),l.push({x:r,y:t,classe:r*t>0?1:0});continue}else{const d=c===1?.45:-.45;r=d+i()*.18,t=d*.6+i()*.18}l.push({x:Math.max(-1,Math.min(1,r)),y:Math.max(-1,Math.min(1,t)),classe:c})}return l}const rt=[200,100,59],it=[47,79,216],ct=[236,196,172],lt=[190,200,240],ne=[240,236,229],dt=2,re=(a,e,o)=>a.map((s,n)=>Math.round(s+(e[n]-s)*o)),mt=(a,e=2)=>a.toFixed(e).replace(".",",");function ut(a={}){const e=(o,s)=>a[o]!=null&&a[o]!==""?Number(a[o]):s;return{dados:String(a["demo-dados"]||"espiral").split(",").map(o=>o.trim()).filter(o=>me[o]),ocultas:Math.max(1,Math.min(12,e("demo-ocultas",1))),neuronios:Math.max(1,Math.min(8,e("demo-neuronios",2))),taxa:e("demo-taxa",.03),epocas:e("demo-epocas",400),treinar:String(a["demo-treinar"]||"sim")!=="nao",semente:e("demo-semente",3)}}var so,Vo,ue,pe,he;class pt{constructor(e){Uo(this,so);const o=document.createElement("aside");o.className="demo-painel",o.setAttribute("aria-label","Demonstração: rede neural aprendendo"),o.innerHTML=`
      <div class="demo-cabeca">
        <span class="demo-dados"></span>
        <span class="demo-arq"></span>
      </div>
      <canvas class="demo-mapa"></canvas>
      <div class="demo-numeros">
        <div><span>Época</span><b class="demo-epoca">0</b></div>
        <div><span>Erro</span><b class="demo-erro">–</b></div>
        <div><span>Acertos</span><b class="demo-acerto">–</b></div>
      </div>
      <canvas class="demo-grafico"></canvas>`,e.appendChild(o),this.el=o,this.mapa=o.querySelector(".demo-mapa"),this.grafico=o.querySelector(".demo-grafico"),this.txtDados=o.querySelector(".demo-dados"),this.txtArq=o.querySelector(".demo-arq"),this.txtEpoca=o.querySelector(".demo-epoca"),this.txtErro=o.querySelector(".demo-erro"),this.txtAcerto=o.querySelector(".demo-acerto"),this.peq=document.createElement("canvas"),this.peq.width=this.peq.height=56,this.ativo=!1,this.quadro=0,this.chave=""}iniciar(e){this.cfg=e,this.indiceDados=0,uo(this,so,Vo).call(this),this.ativo=!0}parar(){this.ativo=!1}passo(){if(!this.ativo||!this.cfg)return;this.quadro++;const e=this.cfg;if(e.treinar&&this.epoca<e.epocas){for(let o=0;o<dt&&this.epoca<e.epocas;o++)Fe(this.rede,this.pontos,this.rnd),this.epoca++,this.historico.push(this.rede.erro(this.pontos));(this.quadro%2===0||this.epoca>=e.epocas)&&this.desenharTudo()}else e.treinar&&e.dados.length>1&&(this.espera++,this.espera>70&&(this.indiceDados=(this.indiceDados+1)%e.dados.length,uo(this,so,Vo).call(this)))}desenharTudo(){uo(this,so,ue).call(this),uo(this,so,pe).call(this),uo(this,so,he).call(this);const e=this.historico[this.historico.length-1];this.txtEpoca.textContent=String(this.epoca),this.txtErro.textContent=this.cfg.treinar?mt(e):"–",this.txtAcerto.textContent=this.cfg.treinar?`${Math.round(this.rede.acuracia(this.pontos)*100)}%`:"–"}mostrar(e){this.el.style.opacity=String(e),this.el.style.visibility=e>.01?"visible":"hidden",this.el.style.transform=`translateY(-50%) translateY(${(1-e)*24}px)`}dispose(){this.el.remove()}}so=new WeakSet,Vo=function(){const e=this.cfg,o=e.dados[this.indiceDados]||"espiral";this.tipo=o,this.pontos=nt(o);const s=[2,...Array(e.ocultas).fill(e.neuronios),1];this.rede=new Le(s,{semente:e.semente,taxa:e.taxa}),this.rnd=co(11),this.epoca=0,this.historico=[this.rede.erro(this.pontos)],this.espera=0,this.txtDados.textContent=me[o];const n=(i,l,m)=>`${i} ${i===1?l:m}`;this.txtArq.textContent=`${n(e.ocultas,"camada oculta","camadas ocultas")} · ${n(e.neuronios,"neurônio","neurônios")} em cada`,this.desenharTudo()},ue=function(){const e=Math.min(2,window.devicePixelRatio||1);for(const o of[this.mapa,this.grafico]){const s=Math.round(o.clientWidth*e),n=Math.round(o.clientHeight*e);s&&n&&(o.width!==s||o.height!==n)&&(o.width=s,o.height=n)}},pe=function(){const e=this.mapa,o=e.getContext("2d"),s=e.width,n=e.height;if(!s||!n)return;const i=this.peq,l=i.getContext("2d"),m=l.createImageData(i.width,i.height),c=this.cfg.treinar&&this.epoca>0;for(let t=0;t<i.height;t++)for(let d=0;d<i.width;d++){const u=d/(i.width-1)*2-1,p=1-t/(i.height-1)*2,b=c?this.rede.prever(u,p):.5,w=b<.5?re(ne,ct,(.5-b)*2):re(ne,lt,(b-.5)*2),f=(t*i.width+d)*4;m.data[f]=w[0],m.data[f+1]=w[1],m.data[f+2]=w[2],m.data[f+3]=255}l.putImageData(m,0,0),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(i,0,0,s,n);const r=s*.0105;for(const t of this.pontos){const d=(t.x+1)/2*s,u=(1-t.y)/2*n;o.beginPath(),o.arc(d,u,r,0,Math.PI*2),o.fillStyle=`rgb(${(t.classe?it:rt).join(",")})`,o.fill(),o.lineWidth=r*.45,o.strokeStyle="#f6f3ed",o.stroke()}o.strokeStyle="rgba(25,23,20,0.35)",o.lineWidth=Math.max(1,s*.002),o.strokeRect(.5,.5,s-1,n-1)},he=function(){const e=this.grafico,o=e.getContext("2d"),s=e.width,n=e.height;if(!s||!n)return;o.clearRect(0,0,s,n);const i=this.historico,l=Math.max(.75,...i.slice(0,5)),m=Math.max(this.cfg.epocas,1),c=n*.08;if(o.strokeStyle="rgba(25,23,20,0.25)",o.lineWidth=Math.max(1,n*.012),o.beginPath(),o.moveTo(0,n-c),o.lineTo(s,n-c),o.stroke(),!this.cfg.treinar||i.length<2)return;o.strokeStyle="#191714",o.lineWidth=Math.max(1.5,n*.035),o.lineJoin="round",o.beginPath(),i.forEach((t,d)=>{const u=d/m*s,p=n-c-Math.min(t,l)/l*(n-c*2);d===0?o.moveTo(u,p):o.lineTo(u,p)}),o.stroke();const r=i[i.length-1];o.fillStyle="#2f4fd8",o.beginPath(),o.arc((i.length-1)/m*s,n-c-Math.min(r,l)/l*(n-c*2),n*.07,0,Math.PI*2),o.fill()};const ht=a=>Math.max(0,Math.min(1,a));function ft({stage:a,annotations:e,materiais:o}){const s=new no,n={...Jo,presenca:1},i=Qe({materiais:o,P:n});i.group.position.x=ao.dupla,s.add(i.group);const l=Ze({materiais:o,annotations:e,P:n});l.group.position.x=ao.neuronio,s.add(l.group);const m=st({materiais:o,annotations:e,P:n});m.group.position.x=ao.exemplo,s.add(m.group);for(const[f,S,M]of[[ao.dupla,6,2.6],[ao.exemplo,7,2.4],[ao.demo,4.5,2.2]]){const C=a.chao.contato.clone();C.position.set(f,.002,0),C.scale.set(S,M,1),C.material=a.chao.contato.material,a.scene.add(C)}a.chao.contato.scale.set(8,2.4,1),a.chao.contato.position.x=1;const c=new pt(document.body),r=new Yo({materiais:o,camadas:[2,2,1],espacoX:.75,espacoY:.42,raio:.12,maxPulsos:16});r.group.position.set(ao.demo,1.9,0),s.add(r.group);let t="2,2,1";function d(f){const S=f.length,M=Math.max(...f),C=S>4,A=C?Math.min(.75,3.4/(S-1)):.75,R=S>4&&M>=6?Math.min(.42,2.1/(M-1)):.42;r.construir(f,{espacoX:A,espacoY:R,raio:S>4&&M>=6?.1:.12}),r.group.position.x=ao.demo+(C?1.15:0)}function u(f){if(f?.attrs&&f.attrs["demo-dados"]!=null&&f.cena==="redes"){const M=ut(f.attrs),C=[2,...Array(M.ocultas).fill(M.neuronios),1],A=C.join(",");A!==t&&(d(C),t=A),c.iniciar(M)}else c.parar()}function p(f){Object.assign(n,f),s.visible=n.presenca>.01}let b=0;function w(f){if(!s.visible){c.mostrar(0);return}b++,i.atualizar(f),l.atualizar(f),m.atualizar(f);const S=ht(n.demo)*n.presenca;if(c.mostrar(S),r.group.visible=S>.01,S>.01){c.passo();const M=c.ativo&&c.cfg?.treinar&&c.epoca<c.cfg.epocas;c.rede&&r.definirPesos(c.rede.W),c.rede&&b%3===0&&c.rede.prever(.35,.3),r.atualizar(f,{presenca:S,ativ:(C,A)=>c.rede&&c.cfg?.treinar?Math.min(1,Math.abs(c.rede.a[C]?.[A]??0))*.8:0}),r.pulsar(f,{avanco:M?1:.15,retro:M?.7:0,presenca:S,velocidade:2})}}return{group:s,defaults:Jo,states:Ue,cameras:We,cameraPadrao:"neuronio",apply:p,update:w,onStop:u,dispose(){c.dispose(),s.traverse(f=>{f.geometry?.dispose(),f.material&&[].concat(f.material).forEach(S=>S.dispose())})}}}const vt={titulo:"Redes neurais · Semana de TI",acento:"#2f4fd8",climaPadrao:"estudio",cenaPadrao:"redes",conteudo:Object.assign({"./conteudo/01-abertura.md":qe,"./conteudo/02-neuronio.md":Re,"./conteudo/03-artificial.md":Te,"./conteudo/04-camadas.md":_e,"./conteudo/05-aprende.md":je,"./conteudo/06-demo.md":ze,"./conteudo/07-o-que-ve.md":Oe,"./conteudo/08-cerebro-maquina.md":Ne,"./conteudo/09-onde-estao.md":Ie,"./conteudo/10-limites.md":De,"./conteudo/11-projecao.md":Be,"./conteudo/12-final.md":Ge}),cenas:{redes:ft},ilustracao:`
<svg viewBox="0 0 400 300" role="img" aria-label="Desenho de uma rede neural" fill="none" stroke="currentColor">
  <g stroke-width="1.2" opacity="0.7">
    <path d="M80 90 L200 70 M80 90 L200 150 M80 150 L200 70 M80 150 L200 150 M80 150 L200 230 M80 210 L200 150 M80 210 L200 230 M200 70 L320 120 M200 150 L320 120 M200 150 L320 190 M200 230 L320 190"/>
  </g>
  <g stroke-width="1.6" fill="#f6f3ed">
    <circle cx="80" cy="90" r="14"/><circle cx="80" cy="150" r="14"/><circle cx="80" cy="210" r="14"/>
    <circle cx="200" cy="70" r="14"/><circle cx="200" cy="150" r="14"/><circle cx="200" cy="230" r="14"/>
    <circle cx="320" cy="120" r="14"/><circle cx="320" cy="190" r="14"/>
  </g>
</svg>`};Ee(vt);
