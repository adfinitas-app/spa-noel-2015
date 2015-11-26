var     urlBySegment = {
            segments:   _SEGMENTS,

            getUrl: function(mySegment, segAmount, module) {
                console.log("module");
                if (module == "CTA") {
                    console.log("CTA OK");
                    this.segments = dataCTA.SEGMENTS;
                }
                var segment = this.segments[mySegment];
                //console.log(segment);
                var url = "";
                var frontURL = "";
                var montants = [];
                if (segment.type == "addition")
                {
                    montants    = this.addition(segment, segAmount);
                    url         = this.generateUrl(montants, segAmount*100);
                }
                else if (segment.type == "percent")
                {
                    montants    = this.percent(segment, segAmount);
                    url         = this.generateUrl(montants, segAmount*100);
                }
                else if (segment.type == "libre")
                {
                    var newAmout    =   (mySegment == "GD") ? "" : segAmount*100 ;
                    url             =   '&amount='+newAmout+'&once_grid[]=';
                }
                //console.log(myUrlParams.getAll());

                if (segment.iraiser_params != undefined)
                {
                    for (j in segment.iraiser_params)
                    {
                        frontURL += (j != "cid") ? '&'+j+'='+segment.iraiser_params[j] : segment.iraiser_params[j];

                    }
                }
                else
                {
                    frontURL = _IRAISER_CID;
                }
                return frontURL + url + myUrlParams.getAll();
            },
            addition: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    var arrondi = segment.arrondiSup;
                    var tmp     = myAmount + segment.values[v];
                    if (arrondi !=0 && v > 0)
                    {
                        tmp = (tmp%arrondi !== 0) ? tmp + (arrondi - tmp%arrondi) : tmp ;
                    }
                    montants[v] = tmp * 100;
                }
                return montants;
            },
            fixe: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    montants[v] = segment.values[v] * 100;
                }
                return montants;
            },
            percent: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    var arrondi = segment.arrondiSup;
                    var tmp     = myAmount + Math.round((myAmount * segment.values[v]) / 100);
                    if (arrondi !=0 && v > 0)
                    {
                        tmp = (tmp%arrondi !== 0) ? tmp + (arrondi - tmp%arrondi) : tmp ;
                    }
                    montants[v] = tmp * 100;
                }
                return montants;
            },
            generateUrl: function(myMontants, segAmount) {
                var URL = "";
                for (v in myMontants)
                {   URL += (v == 0) ? '&amount='+segAmount : "" ;
                    URL += '&once_grid[]=' + myMontants[v];
                }
                return URL + '&once_grid[]=';
            }
};

var deFisk = {
    calculation: function(myAmount,mySegment) {
        var valeurReelle = 0;

        if ( (_SEGMENTS[mySegment] != undefined) && (_SEGMENTS[mySegment].defisc == "ISF") && (_FISCAL_RULES.ISF != 0) )
        {
            valeurReelle = myAmount - (myAmount * _FISCAL_RULES.ISF / 100);
        }
        else
        {
            if (_FISCAL_RULES.percentreste == 0 || (myAmount - _FISCAL_RULES.plafond) <= 0)
            {
                valeurReelle = myAmount - Math.floor(myAmount * _FISCAL_RULES.percentplafond / 100);
            }
            else
            {
                var newAmount = myAmount - _FISCAL_RULES.plafond ;
                valeurReelle  = myAmount - Math.floor(_FISCAL_RULES.plafond * _FISCAL_RULES.percentplafond / 100) - Math.floor(newAmount * _FISCAL_RULES.percentreste / 100 );
                valeurReelle = Math.abs(valeurReelle);
            }
        }
        var sentence = this.replaceAll(_FISCAL_PHRASE, '{{XX}}', Math.floor(valeurReelle));
        return sentence;
    },
    replaceAll: function(string, find, replace) {
        return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },
    escapeRegExp: function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
};
