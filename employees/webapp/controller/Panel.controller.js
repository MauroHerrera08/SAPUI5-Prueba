sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToas, Fragment) {
        "use strict";

        return Controller.extend("hcm.employees.controller.Panel", {
            onInit: function () {
                
            },

            onShowHello: function (){
                MessageToast.show("Hello",{
                    width: '10rem'
                });
            },

            onOpenDialog: function () {
/*                 let oView = this.getView();

                if(!this._pDialog){
// Si no se ha instanciado el fragmento, se carga
                    this._pDialog = Fragment.load({
                        id: oView.getId(),
                        name: "hcm.employees.fragment.dialog",
                        controller: this //Importante referenciar el controlador, puede ser el padre
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
// Abrir fragmento
                this._pDialog.then(function (oDialog){
                    oDialog.open();
                }); */

// Lo anterior se publicó en el Componente.js como un archivo centralizado. Se llama a esa funcionalidad
                this.getOwnerComponent().openDialog();                

            },

            onCloseDialog: function () {
                this._pDialog.then(function (oDialog){
                    oDialog.close();
                });
            }
        });
    });