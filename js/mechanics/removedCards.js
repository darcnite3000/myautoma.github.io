var _0x5350=['none','#frontCardPic','front','#removedCardsList','card','.jpg\x22\x20/><img\x20id=\x22add-','#removedLayer\x20>\x20p','Click\x20on\x20the\x20plus\x20sign\x20to\x20add\x20a\x20card\x20back\x20into\x20the\x20deck.','There\x20are\x20no\x20removed\x20cards!','split','false','<p><span\x20class=\x22bold\x20green\x22>','actions','desc','\x20card\x20added!</p>','ready','<div\x20id=\x22removedLayer\x22\x20class=\x22layer\x22>','<div\x20class=\x22buttons\x22\x20btns=\x221\x22>','<a\x20href=\x22#\x22\x20class=\x22btn\x20redBtn\x20func-showLayer-game\x20activeBtn\x22>Close</a>','</div>','<p\x20class=\x22center\x22>There\x20are\x20no\x20removed\x20cards!</p>','<div\x20id=\x22removedCardsList\x22\x20class=\x22gameInfo\x20gameInfoReset\x22></div>','appendTo','#container','#gameLayer\x20.buttons','attr','btns','.buttons','length','.activate-newGame-start','.activate-resetGame-game','gameButtons','push','Removed','func-showLayer-removed','true','indexOf','cardsRemoved','msg-noCards-3','removed','<p><span\x20class=\x22bold\x20red\x22>','\x20card\x20removed!</p>','#historyTextContainer','html','moves','.flip-card','css','display'];(function(_0x28222e,_0x1c1c8b){var _0x48fee5=function(_0x1f923b){while(--_0x1f923b){_0x28222e['push'](_0x28222e['shift']());}};_0x48fee5(++_0x1c1c8b);}(_0x5350,0xff));var _0x1783=function(_0x55e64a,_0x4b160f){_0x55e64a=_0x55e64a-0x0;var _0x28b1b4=_0x5350[_0x55e64a];return _0x28b1b4;};var cardToBeAdded='';game['cardsRemoved']=0x0;$(document)[_0x1783('0x0')](function(){var _0x540bf9=[_0x1783('0x1'),_0x1783('0x2'),_0x1783('0x3'),_0x1783('0x4'),_0x1783('0x5'),_0x1783('0x6'),_0x1783('0x4')]['join']('');$(_0x540bf9)[_0x1783('0x7')](_0x1783('0x8'));addRemovedCardsButton();$(_0x1783('0x9'))[_0x1783('0xa')](_0x1783('0xb'),$(_0x1783('0xc'))[_0x1783('0xd')]);});$(document)['on'](touchEvent,_0x1783('0xe'),function(){resetRemovedCards();});$(document)['on'](touchEvent,_0x1783('0xf'),function(){resetRemovedCards();});function addRemovedCardsButton(){game[_0x1783('0x10')][_0x1783('0x11')]({'name':_0x1783('0x12'),'id':'removed','classes':['redBtn',_0x1783('0x13')],'display':_0x1783('0x14')});}function removeCard(){if(game['onDraw'][_0x1783('0x15')]('excludeLastCard')>-0x1&&game['cardsRemoved']==deck[_0x1783('0xd')]-0x3||game[_0x1783('0x16')]==deck[_0x1783('0xd')]-0x2){generateAlert(_0x1783('0x17'));}else{game[_0x1783('0x16')]++;thisCard[_0x1783('0x18')]='true';let _0x5b07c1=_0x1783('0x19')+thisCard['actions'][0x0]['desc']+_0x1783('0x1a');$(_0x1783('0x1b'))[_0x1783('0x1c')]($(_0x1783('0x1b'))[_0x1783('0x1c')]()+_0x5b07c1);game[_0x1783('0x1d')][_0x1783('0x11')](_0x5b07c1);$(_0x1783('0x1e'))[_0x1783('0x1f')](_0x1783('0x20'),_0x1783('0x21'));$(_0x1783('0x22'))[_0x1783('0x1c')]('');$('#backCardPic')[_0x1783('0x1c')]('');flipSide=_0x1783('0x23');rotate=0x168;generateRemoved();updateGame();}}function generateRemoved(){var _0x50808c='';$(_0x1783('0x24'))[_0x1783('0x1c')]('');for(let _0x3a45a1=0x0;_0x3a45a1<deck[_0x1783('0xd')];_0x3a45a1++){if(deck[_0x3a45a1][_0x1783('0x18')]==_0x1783('0x14')){_0x50808c+='<div\x20class=\x22individualRemovedCard\x22><img\x20src\x20=\x22img/cards/'+deck[_0x3a45a1][_0x1783('0x25')]+_0x1783('0x26')+deck[_0x3a45a1]['card']+'\x22\x20src=\x22../../img/plus.png\x22\x20class=\x22addRemovedCard\x20alert\x20msg-addCard-game\x22\x20/></div>';}}if(_0x50808c!=''){$(_0x1783('0x24'))[_0x1783('0x1c')](_0x50808c);$(_0x1783('0x27'))[_0x1783('0x1c')](_0x1783('0x28'));}else{$(_0x1783('0x27'))['html'](_0x1783('0x29'));}}$(document)['on'](touchEvent,'.addRemovedCard',function(){let _0x167cd9=$(this)[_0x1783('0xa')]('id')[_0x1783('0x2a')]('-');cardToBeAdded=_0x167cd9[0x1];});function addCard(){for(let _0x21b934=0x0;_0x21b934<deck[_0x1783('0xd')];_0x21b934++){if(deck[_0x21b934][_0x1783('0x25')]==cardToBeAdded){deck[_0x21b934][_0x1783('0x18')]=_0x1783('0x2b');game[_0x1783('0x16')]--;let _0x3755e3=_0x1783('0x2c')+deck[_0x21b934][_0x1783('0x2d')][0x0][_0x1783('0x2e')]+_0x1783('0x2f');$(_0x1783('0x1b'))[_0x1783('0x1c')]($(_0x1783('0x1b'))[_0x1783('0x1c')]()+_0x3755e3);game['moves'][_0x1783('0x11')](_0x3755e3);}}generateRemoved();updateGame();}function resetRemovedCards(){for(let _0x4b0a7e=0x0;_0x4b0a7e<deck[_0x1783('0xd')];_0x4b0a7e++){deck[_0x4b0a7e][_0x1783('0x18')]=_0x1783('0x2b');}$(_0x1783('0x27'))['html'](_0x1783('0x29'));game[_0x1783('0x16')]=0x0;}