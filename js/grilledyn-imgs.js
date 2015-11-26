/* -------> CAS DES Blocs Images */
var imgsGrid    =   {
    segmentRetenu:  'OPTIN',
    htmlRetenu:  "",
    htmlBuild:  _HTML_BUILD,


    affichage:  function(myAmount, mySegment, jQ) {
        var prevAmount = 0;
        for ( bl in this.htmlRetenu )
        {
            var data = this.htmlRetenu[bl];
            var HTML = jQ('#don-parent .adFclone').html();
            //var Link = 'https://' + _IRAISER_URL + '/b?cid=' + _IRAISER_CID + urlBySegment.getUrl(mySegment, data.amount);
            var Link = 'https://' + _IRAISER_URL + '/b?cid=' + urlBySegment.getUrl(mySegment, data.amount);
            var Fisk = deFisk.calculation(data.amount, mySegment);
            var ID   = 'img-'+bl;
            var CL   = ( (myAmount >= prevAmount) && (myAmount <= data.amount)) ? 'active' : '' ;
            prevAmount = data.amount;

            HTML = this.replaceAll(HTML, '{{AMOUNT}}', data.amount);
            HTML = this.replaceAll(HTML, '{{TEXT}}', data.text);
            HTML = this.replaceAll(HTML, '{{LINK}}', Link);
            HTML = this.replaceAll(HTML, '{{IMGILLUS}}', data.image);
            HTML = this.replaceAll(HTML, '{{ID}}', ID);
            HTML = this.replaceAll(HTML, '{{CLASS}}', CL);
            HTML = this.replaceAll(HTML, '{{DEDUCTION}}', Fisk);
            HTML = this.replaceAll(HTML, 'data-src', 'src');

            jQ('#don-parent').append(HTML);
        }
        jQ('#don-parent .clone').remove();
        jQ('#don-parent').css('display', 'block');
    },

        woopraimgs: function(myDebug, jQ) {
            var myInteraction = _WOOPRA_INTERACTION;
            jQ('body').on('click', '.linkimgs', function(e) {
                e.preventDefault();
                var whichOne = jQ(this).parent('.wrapper').attr('id');
                var woopraId = myInteraction[0] + whichOne + '-' + myInteraction[1];

                if (! myDebug) {
                    woopra.track('interaction', {
                        category: woopraId,
                        action: "clic",
                        url: document.location.href,
                        value: don,
                        title: document.title
                    });
                }
                imgsGrid.newWindow(jQ(this).attr('href')+myUrlParams.getAll());
            });
        },

        buildAll:   function(myDebug, myAmount, mySegment, jQ) {
            this.segmentRetenu = (_SEGMENTS[mySegment] !== undefined) ? mySegment : this.segmentRetenu;
            this.htmlRetenu = (this.htmlBuild[mySegment] !== undefined) ? this.htmlBuild[mySegment] : this.htmlBuild[this.segmentRetenu];
            this.affichage(myAmount, this.segmentRetenu, jQ);
            this.woopraimgs(myDebug, jQ);
        },

        escapeRegExp: function(string) {
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        },
        replaceAll: function(string, find, replace) {
            return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
        },
        // Création fenetre
        newWindow: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
            return false;
        },


    };
