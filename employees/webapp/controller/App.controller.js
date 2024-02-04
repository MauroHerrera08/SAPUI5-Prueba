sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("hcm.employees.controller.App", {
            onInit: function () {
                this._loadModel();
            },

/* Método privado con _ */
            _loadModel: function (){
                let oData = {
                    employee: {
                        name: 'Employee1'
                    }
                };
                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "view") // Nombre con el que queda registrado el modelo "view"
            },

        });
    });
