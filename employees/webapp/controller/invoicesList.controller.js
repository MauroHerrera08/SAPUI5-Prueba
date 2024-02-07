sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    'use strict';
    
    return Controller.extend("hcm.employees.controller.invoicesList",{

        onInit: function () {
            
            let oData = {
                usd: "USD",
                eur: "EUR"
            };

            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel,"currency");

        }

    });

});