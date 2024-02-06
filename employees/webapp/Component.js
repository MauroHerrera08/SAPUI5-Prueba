/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "hcm/employees/model/models",
        "./controller/dialog" //Archivo centralizado para fragmento de diálogo
    ],
    function (UIComponent, Device, models, dialog) {
        "use strict";

        return UIComponent.extend("hcm.employees.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this._oDialog = new dialog(this.getRootControl());
            },

            //Limpiar objetos basura y caché en navegador
            exit: function () {
                this._oDialog.destroy();
                delete this._oDialog;
            },

            openDialog: function () {
                this._oDialog.open();
            }

        });
    }
);