const _0x1209=[',\x20Echec\x20:\x20','guilds','user','utf-8','type','5458lFriQD','11672tamnyi','get','channels','dnd','tag','green','15769ZGbTaA','tokens.txt','15OCMwCA','setStatus','58qqPRxO','26LYpAsj','248055jPaMvP','15377pQJJzb','6297LDIeOK','ready','log','users','bot','length','colors','serv','split','send','269025lWuMHO','readFileSync','members','push','discord.js','red','4OyzRJw','2YWHlPU','catch','clear','Les\x20IDS\x20des\x20personnes\x20en\x20vocal\x20sur\x20tout\x20le\x20serveur\x20'];const _0x2065=function(_0x104a7a,_0x273864){_0x104a7a=_0x104a7a-0x1f4;let _0x120947=_0x1209[_0x104a7a];return _0x120947;};const _0x153277=_0x2065;(function(_0x50b4af,_0xb44713){const _0x66fa22=_0x2065;while(!![]){try{const _0x47e1f1=-parseInt(_0x66fa22(0x210))+-parseInt(_0x66fa22(0x20a))*parseInt(_0x66fa22(0x1f9))+-parseInt(_0x66fa22(0x21c))+-parseInt(_0x66fa22(0x204))*-parseInt(_0x66fa22(0x1fa))+parseInt(_0x66fa22(0x20f))*parseInt(_0x66fa22(0x212))+-parseInt(_0x66fa22(0x211))*-parseInt(_0x66fa22(0x20c))+-parseInt(_0x66fa22(0x203))*-parseInt(_0x66fa22(0x20e));if(_0x47e1f1===_0xb44713)break;else _0x50b4af['push'](_0x50b4af['shift']());}catch(_0x4a76ce){_0x50b4af['push'](_0x50b4af['shift']());}}}(_0x1209,0x25a11));const Discord=require(_0x153277(0x1f7)),config=require('./config.json');var fs=require('fs');color=require(_0x153277(0x218));const tokens=fs[_0x153277(0x1f4)](_0x153277(0x20b),_0x153277(0x201))['replace'](/\r/g,'')[_0x153277(0x21a)]('\x0a');for(i=0x0;i<tokens[_0x153277(0x217)];i++){const client=new Discord['Client']();client['on'](_0x153277(0x213),async()=>{const _0x16bdb3=_0x153277;var _0x1129b8=client[_0x16bdb3(0x1ff)][_0x16bdb3(0x205)](config[_0x16bdb3(0x219)]);console[_0x16bdb3(0x1fc)]();let _0x2a18bf=[],_0x146f27=0x0;client[_0x16bdb3(0x200)][_0x16bdb3(0x20d)](_0x16bdb3(0x207));const _0x531f4a=_0x1129b8[_0x16bdb3(0x206)]['filter'](_0x4e976e=>_0x4e976e[_0x16bdb3(0x202)]==='voice');for(const [_0x562192,_0x5c5f4a]of _0x531f4a){_0x5c5f4a[_0x16bdb3(0x1f5)]['forEach'](_0x1c4583=>{const _0x2441a3=_0x16bdb3;_0x2a18bf[_0x2441a3(0x1f6)](_0x1c4583['user']['id']);}),_0x146f27+=_0x5c5f4a['members']['size'];}console[_0x16bdb3(0x214)](_0x2a18bf),console[_0x16bdb3(0x214)](_0x146f27);let _0x275e0e=_0x2a18bf[_0x16bdb3(0x217)],_0x29a40c=0x0,_0x3e17fe=0x0,_0x323732=0x0;console['log'](_0x16bdb3(0x1fd));for(var _0x3fe4cb=0x0;_0x3fe4cb<_0x275e0e;_0x3fe4cb++){let _0x543e82=client[_0x16bdb3(0x215)]['get'](_0x2a18bf[_0x3fe4cb]);if(_0x543e82[_0x16bdb3(0x216)]){_0x29a40c++;continue;}await sleep(config['messagePerMs']);try{_0x543e82[_0x16bdb3(0x21b)](config['messagePub'])[_0x16bdb3(0x1fb)](_0x404d26=>{_0x323732++;}),console[_0x16bdb3(0x214)](_0x543e82[_0x16bdb3(0x208)]+'\x20Message\x20envoyé'[_0x16bdb3(0x209)]),_0x3e17fe++;}catch(_0x5e49c0){_0x323732++,console[_0x16bdb3(0x214)](_0x5e49c0);}}console[_0x16bdb3(0x214)](('\x20\x20Envoyé\x20:\x20'+_0x3e17fe+_0x16bdb3(0x1fe)+_0x323732+',\x20Bots:\x20'+_0x29a40c)['blue']);}),client['login'](tokens[i])[_0x153277(0x1fb)](_0x1cd6c2=>console[_0x153277(0x214)]('Token\x20invalide'[_0x153277(0x1f8)]));}function sleep(_0x28e147){return new Promise(_0x1e4193=>setTimeout(_0x1e4193,_0x28e147));}