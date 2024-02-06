sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
    'use strict';
    
    return ManagedObject.extend("hcm.employees.controller.dialog",{

        constructor: function (oView) {
            this._oView = oView;
        },

        //Limpiar objetos basura y caché en navegador
        exit: function () {
            delete this._oView;
        },

        open: function () {
            let oView = this._oView;
            let oFragmentController = {
                onCloseDialog: function () {
                    oView.byId("HelloDialog").close();
                }
            };

            if(!this._pDialog){
// Si no se ha instanciado el fragmento, se carga
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "hcm.employees.fragment.dialog",
                    controller: oFragmentController //Importante referenciar el controlador, puede ser el padre o uno simulado
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
// Abrir fragmento
            this._pDialog.then(function (oDialog){
                oDialog.open();
            });
        }

    })

});