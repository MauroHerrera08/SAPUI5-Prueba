sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("hcm.employees.controller.Panel", {
            onInit: function () {
                
            },

            onShowHello: function (){
                MessageToast.show("Hello",{
                    width: '10rem'
                });
            }
        });
    });