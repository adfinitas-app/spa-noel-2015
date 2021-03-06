/*
// --> Config générale
var     _IRAISER_CID    =   26,
        _IRAISER_URL    =   'don.spa.asso.fr';

// - Ajout des CTA avec action éclaté pour WoopraTrack
var     _WOOPRA_INTERACTION     =   'cta_don-noel15';

var _SEGMENTS = {
    'OPTIN':    {'arrondiSup':0, 'type': 'fixe', 'values':[45,75,95]} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,2,5]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'addition',  'values':[0,5,10]} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0,25,100]} ,
    'GD':       {'arrondiSup':0, 'type': 'libre'}
};
*/
// --> Config générale
var dataCTA = {
    IRAISER_CID    :   26,
    IRAISER_URL    :   'don.spa.asso.fr',
    
    // - Ajout des CTA avec action éclaté pour WoopraTrack
    WOOPRA_INTERACTION     :   'cta_don-noel15',
    
    SEGMENTS : {
        'OPTIN':    {'arrondiSup':0, 'type': 'fixe', 'values':[45,56,75]} ,
        'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,5,10]} ,
        'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0,25,50]} ,
        'MIDDLE':   {'arrondiSup':5, 'type': 'percent', 'values':[0,25,50]} ,
        'GD':       {'arrondiSup':0, 'type': 'libre'}
    }
}