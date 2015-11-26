// --> Config générale
var     _IRAISER_CID    =   72,
        _IRAISER_URL    =   'don.spa.asso.fr';

// - Ajout des CTA avec action éclaté pour WoopraTrack
var     _WOOPRA_INTERACTION     =   ['don-IMG', '_ete2015'];
// -->

var     _HTML_BUILD     =   {
    'OPTIN':   [
        {   amount: 56,
            image:  'http://sosabandon.spa.asso.fr/img/chien.png',
            text:   'Pour nourrir 2 chiens pendant 2 mois.' },
        {   amount: 75,
            image:  'http://sosabandon.spa.asso.fr/img/chat.png',
            text:   'Pour stériliser et identifier un chat.' },
        {   amount: 256,
            image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
            text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois.', },
    ],
    'ADHERENT':  [
        {   amount: 56,
            image:  'http://sosabandon.spa.asso.fr/img/chien.png',
            text:   'Pour nourrir 2 chiens pendant 2 mois', },
        {   amount: 112,
            image:  'http://sosabandon.spa.asso.fr/img/chat.png',
            text:   'Soigner un chat pendant 5 mois', },
        {   amount: 256,
            image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
            text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois', },
    ],
    'DONATEUR':  [
        {   amount: 56,
            image:  'http://sosabandon.spa.asso.fr/img/chien.png',
            text:   'Pour nourrir 2 chiens pendant 2 mois', },
        {   amount: 112,
            image:  'http://sosabandon.spa.asso.fr/img/chat.png',
            text:   'Soigner un chat pendant 5 mois', },
        {   amount: 256,
            image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
            text:   'Pour nourrir et soigner un chien et un chat pendant 4 mois', },
    ],
    'MIDDLE':  [
        {   amount: 306,
            image:  'http://sosabandon.spa.asso.fr/img/chien.png',
            text:   'Nourrir et soigner 3 chiens pendant 3 mois', },
        {   amount: 408,
            image:  'http://sosabandon.spa.asso.fr/img/chat.png',
            text:   'Nourrir et soigner 1 chat pendant 1 an', },
        {   amount: 510,
            image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
            text:   'Castrer / Stériliser 3 chiens et 3 chats', },
    ],
    'GD':  [
        {   amount: 306,
            image:  'http://sosabandon.spa.asso.fr/img/chien.png',
            text:   'Nourrir et soigner 3 chiens pendant 3 mois', },
        {   amount: 408,
            image:  'http://sosabandon.spa.asso.fr/img/chat.png',
            text:   'Nourrir et soigner 1 chat pendant 1 an', },
        {   amount: 510,
            image:  'http://sosabandon.spa.asso.fr/img/chienchat.png',
            text:   'Castrer / Stériliser 3 chiens et 3 chats', },
    ],
};

var _SEGMENTS = {
    'OPTIN':    {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5]} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,5,10]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0,25,50]} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0,25,100]} ,
    'GD':       {'arrondiSup':0, 'type': 'libre'}
};
