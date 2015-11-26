// --> Config générale
var     _IRAISER_CID    =   26,
        _IRAISER_URL    =   'don.spa.asso.fr';

// - Ajout des CTA avec action éclaté pour WoopraTrack
var     _WOOPRA_INTERACTION     =   ['don-IMG', '_ete2015'];
// -->

// - Ajout des paramètres fiscaux
var     _FISCAL_PHRASE     =   'Soit <span class="deduction">{{XX}}€</span> après déduction fiscale';
var     _FISCAL_RULES      =   {percentplafond: 75, percentreste: 66, plafond: 529, ISF: 0};

var     _HTML_BUILD     =   {
    'OPTIN':   [
        {   amount: 56,
            image:  'img/image-montant6.png',
            text:   'Pour stériliser <br>1 chat.<br />&nbsp;' },
        {   amount: 75,
            image:  'img/image-montant8.png',
            text:   'Pour nourrir et soigner<br /> 2 chats et nourrir 1 chien pendant 1 mois.' },
        {   amount: 256,
            image:  'img/image-montant9.png',
            text:   'Pour mettre en place<br /> des actions contre la maltraitance.', },
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
    'OPTIN':    {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,5,10], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0,25,50], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0,25,100], 'defisc':'IR', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}} ,
    'GD':       {'arrondiSup':0, 'type': 'libre', 'defisc':'ISF', iraiser_params: {'cid':55, 'reserved_origine':'toto', 'code_campagne':'TK534'}}
};
