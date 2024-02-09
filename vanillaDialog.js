export class VanillaDialog {

    constructor(div, name) {
        this._div = div;

        this._name = name;

        VanillaDialog.I = this;

        this.init();

        
    }

    init() {
        let innerHTML = this._createHTML();
        this._appendHTML(innerHTML);

        $( this._div ).dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
              "Delete all items": function() {
                $( this ).dialog( "close" );
              },
              Cancel: function() {
                $( this ).dialog( "close" );
              }
            }
          });
        }
    

    _appendHTML(innerHTML) {
        this._div.innerHTML = innerHTML;
    }

    _createHTML() {
        let name = this._name;
        let ihtml = [];
        let idx = 0;

        ihtml[idx++] = "<p>";
        ihtml[idx++] = "<span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>";
        ihtml[idx++] = "These items will be permanently deleted and cannot be recovered. Are you sure?";
        ihtml[idx++] = "</p>";

        return ihtml.join("");
    }
}