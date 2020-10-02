"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** See catalog of available reservations. */
var az_reservations_catalog = /** @class */ (function () {
    function az_reservations_catalog() {
    }
    /**
     * Get catalog of available reservation.
     *
     * Syntax:
     * ```
     * az reservations catalog show --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
     *                              --subscription-id
     *                              [--location]
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
     * @param {string} subscriptionId Id of the subscription to get the catalog for.
     */
    az_reservations_catalog.show = function (reservedResourceType, subscriptionId) {
        return new az_reservations_catalog_show_command_builder("az reservations catalog show", 'az_reservations_catalog_show_command_result', reservedResourceType, subscriptionId);
    };
    return az_reservations_catalog;
}());
exports.az_reservations_catalog = az_reservations_catalog;
/** See reservation order ids that are applied to subscription. */
var az_reservations_reservation_order_id = /** @class */ (function () {
    function az_reservations_reservation_order_id() {
    }
    /**
     * Get list of applicable reservation order ids.
     *
     * Syntax:
     * ```
     * az reservations reservation-order-id list --subscription-id
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} subscriptionId Id of the subscription to look up applied reservations.
     */
    az_reservations_reservation_order_id.list = function (subscriptionId) {
        return new az_reservations_reservation_order_id_list_command_builder("az reservations reservation-order-id list", 'az_reservations_reservation_order_id_list_command_result', subscriptionId);
    };
    return az_reservations_reservation_order_id;
}());
exports.az_reservations_reservation_order_id = az_reservations_reservation_order_id;
/** Manage reservation order, which is container for reservations. */
var az_reservations_reservation_order = /** @class */ (function () {
    function az_reservations_reservation_order() {
    }
    /**
     * Calculate price for a reservation order.
     *
     * Syntax:
     * ```
     * az reservations reservation-order calculate --applied-scope-type {Shared, Single}
     *                                             --billing-scope
     *                                             --display-name
     *                                             --quantity
     *                                             --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
     *                                             --sku
     *                                             --term {P1Y, P3Y}
     *                                             [--applied-scope]
     *                                             [--billing-plan {Monthly, Upfront}]
     *                                             [--instance-flexibility]
     *                                             [--location]
     *                                             [--renew {false, true}]
     *                                             [--subscription]
     * ```
     *
     * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
     * @param {string} billingScope Subscription that will be charged for purchasing Reservation.
     * @param {string} displayName Friendly name for user to easily identified the reservation.
     * @param {string} quantity Quantity of product for calculating price or purchasing.
     * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
     * @param {string} sku Sku name, get the sku list by using command az reservations catalog show.
     * @param {'P1Y' | 'P3Y'} term Available reservation terms for this resource.
     */
    az_reservations_reservation_order.calculate = function (appliedScopeType, billingScope, displayName, quantity, reservedResourceType, sku, term) {
        return new az_reservations_reservation_order_calculate_command_builder("az reservations reservation-order calculate", 'az_reservations_reservation_order_calculate_command_result', appliedScopeType, billingScope, displayName, quantity, reservedResourceType, sku, term);
    };
    /**
     * Get all reservation orders.
     *
     * Syntax:
     * ```
     * az reservations reservation-order list [--query-examples]
     *                                        [--subscription]
     * ```
     */
    az_reservations_reservation_order.list = function () {
        return new az_reservations_reservation_order_list_command_builder("az reservations reservation-order list", 'az_reservations_reservation_order_list_command_result');
    };
    /**
     * Purchase reservation order.
     *
     * Syntax:
     * ```
     * az reservations reservation-order purchase --applied-scope-type {Shared, Single}
     *                                            --billing-scope
     *                                            --display-name
     *                                            --quantity
     *                                            --reservation-order-id
     *                                            --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
     *                                            --sku
     *                                            --term {P1Y, P3Y}
     *                                            [--applied-scope]
     *                                            [--billing-plan {Monthly, Upfront}]
     *                                            [--instance-flexibility]
     *                                            [--location]
     *                                            [--renew {false, true}]
     *                                            [--subscription]
     * ```
     *
     * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
     * @param {string} billingScope Subscription that will be charged for purchasing Reservation.
     * @param {string} displayName Friendly name for user to easily identified the reservation.
     * @param {string} quantity Quantity of product for calculating price or purchasing.
     * @param {string} reservationOrderId Id of reservation order to purchase, generate by `az reservations reservation-order calculate`.
     * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
     * @param {string} sku Sku name, get the sku list by using command az reservations catalog show.
     * @param {'P1Y' | 'P3Y'} term Available reservation terms for this resource.
     */
    az_reservations_reservation_order.purchase = function (appliedScopeType, billingScope, displayName, quantity, reservationOrderId, reservedResourceType, sku, term) {
        return new az_reservations_reservation_order_purchase_command_builder("az reservations reservation-order purchase", 'az_reservations_reservation_order_purchase_command_result', appliedScopeType, billingScope, displayName, quantity, reservationOrderId, reservedResourceType, sku, term);
    };
    /**
     * Get a specific reservation order.
     *
     * Syntax:
     * ```
     * az reservations reservation-order show --reservation-order-id
     *                                        [--expand]
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} reservationOrderId Id of reservation order to look up.
     */
    az_reservations_reservation_order.show = function (reservationOrderId) {
        return new az_reservations_reservation_order_show_command_builder("az reservations reservation-order show", 'az_reservations_reservation_order_show_command_result', reservationOrderId);
    };
    return az_reservations_reservation_order;
}());
exports.az_reservations_reservation_order = az_reservations_reservation_order;
/** Manage reservation entities. */
var az_reservations_reservation = /** @class */ (function () {
    function az_reservations_reservation() {
    }
    /**
     * Get all reservations.
     *
     * Syntax:
     * ```
     * az reservations reservation list --reservation-order-id
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} reservationOrderId Id of container reservation order.
     */
    az_reservations_reservation.list = function (reservationOrderId) {
        return new az_reservations_reservation_list_command_builder("az reservations reservation list", 'az_reservations_reservation_list_command_result', reservationOrderId);
    };
    /**
     * Get history of a reservation.
     *
     * Syntax:
     * ```
     * az reservations reservation list-history --reservation-id
     *                                          --reservation-order-id
     *                                          [--subscription]
     * ```
     *
     * @param {string} reservationId Reservation id of the reservation.
     * @param {string} reservationOrderId Order id of the reservation.
     */
    az_reservations_reservation.list_history = function (reservationId, reservationOrderId) {
        return new az_reservations_reservation_list_history_command_builder("az reservations reservation list-history", 'az_reservations_reservation_list_history_command_result', reservationId, reservationOrderId);
    };
    /**
     * Merge two reservations.
     *
     * Syntax:
     * ```
     * az reservations reservation merge --reservation-id-1
     *                                   --reservation-id-2
     *                                   --reservation-order-id
     *                                   [--subscription]
     * ```
     *
     * @param {string} reservationId1 Id of the first reservation to merge.
     * @param {string} reservationId2 Id of the second reservation to merge.
     * @param {string} reservationOrderId Reservation order id of the reservations to merge.
     */
    az_reservations_reservation.merge = function (reservationId1, reservationId2, reservationOrderId) {
        return new az_reservations_reservation_merge_command_builder("az reservations reservation merge", 'az_reservations_reservation_merge_command_result', reservationId1, reservationId2, reservationOrderId);
    };
    /**
     * Get details of a reservation.
     *
     * Syntax:
     * ```
     * az reservations reservation show --reservation-id
     *                                  --reservation-order-id
     *                                  [--expand]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} reservationId Reservation id of reservation to look up.
     * @param {string} reservationOrderId Order id of reservation to look up.
     */
    az_reservations_reservation.show = function (reservationId, reservationOrderId) {
        return new az_reservations_reservation_show_command_builder("az reservations reservation show", 'az_reservations_reservation_show_command_result', reservationId, reservationOrderId);
    };
    /**
     * Split a reservation.
     *
     * Syntax:
     * ```
     * az reservations reservation split --quantity-1
     *                                   --quantity-2
     *                                   --reservation-id
     *                                   --reservation-order-id
     *                                   [--subscription]
     * ```
     *
     * @param {string} quantity1 Quantity of the first reservation that will be created from split operation.
     * @param {string} quantity2 Quantity of the second reservation that will be created from split operation.
     * @param {string} reservationId Reservation id of the reservation to split.
     * @param {string} reservationOrderId Reservation order id of the reservation to split.
     */
    az_reservations_reservation.split = function (quantity1, quantity2, reservationId, reservationOrderId) {
        return new az_reservations_reservation_split_command_builder("az reservations reservation split", 'az_reservations_reservation_split_command_result', quantity1, quantity2, reservationId, reservationOrderId);
    };
    /**
     * Updates the applied scopes of the reservation.
     *
     * Syntax:
     * ```
     * az reservations reservation update --applied-scope-type {Shared, Single}
     *                                    --reservation-id
     *                                    --reservation-order-id
     *                                    [--applied-scopes]
     *                                    [--instance-flexibility {Off, On}]
     *                                    [--subscription]
     * ```
     *
     * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
     * @param {string} reservationId Id of the reservation to update.
     * @param {string} reservationOrderId Reservation order id of the reservation to update.
     */
    az_reservations_reservation.update = function (appliedScopeType, reservationId, reservationOrderId) {
        return new az_reservations_reservation_update_command_builder("az reservations reservation update", 'az_reservations_reservation_update_command_result', appliedScopeType, reservationId, reservationOrderId);
    };
    return az_reservations_reservation;
}());
exports.az_reservations_reservation = az_reservations_reservation;
/** Manage Azure Reservations. */
var az_reservations = /** @class */ (function () {
    function az_reservations() {
    }
    return az_reservations;
}());
exports.az_reservations = az_reservations;
/**
 * Get catalog of available reservation.
 *
 * Syntax:
 * ```
 * az reservations catalog show --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
 *                              --subscription-id
 *                              [--location]
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
 * @param {string} subscriptionId Id of the subscription to get the catalog for.
 */
var az_reservations_catalog_show_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_catalog_show_command_builder, _super);
    function az_reservations_catalog_show_command_builder(commandPath, resultDataTypeName, reservedResourceType, subscriptionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservedResourceType(reservedResourceType);
        _this.subscriptionId(subscriptionId);
        return _this;
    }
    /** Type of the resource for which the skus should be provided. */
    az_reservations_catalog_show_command_builder.prototype.reservedResourceType = function (value) {
        this.setFlag("--reserved-resource-type", value);
        return this;
    };
    /** Id of the subscription to get the catalog for. */
    az_reservations_catalog_show_command_builder.prototype.subscriptionId = function (value) {
        this.setFlag("--subscription-id", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_reservations_catalog_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_catalog_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_catalog_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_catalog_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get list of applicable reservation order ids.
 *
 * Syntax:
 * ```
 * az reservations reservation-order-id list --subscription-id
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} subscriptionId Id of the subscription to look up applied reservations.
 */
var az_reservations_reservation_order_id_list_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_order_id_list_command_builder, _super);
    function az_reservations_reservation_order_id_list_command_builder(commandPath, resultDataTypeName, subscriptionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subscriptionId(subscriptionId);
        return _this;
    }
    /** Id of the subscription to look up applied reservations. */
    az_reservations_reservation_order_id_list_command_builder.prototype.subscriptionId = function (value) {
        this.setFlag("--subscription-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_reservation_order_id_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_order_id_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_order_id_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Calculate price for a reservation order.
 *
 * Syntax:
 * ```
 * az reservations reservation-order calculate --applied-scope-type {Shared, Single}
 *                                             --billing-scope
 *                                             --display-name
 *                                             --quantity
 *                                             --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
 *                                             --sku
 *                                             --term {P1Y, P3Y}
 *                                             [--applied-scope]
 *                                             [--billing-plan {Monthly, Upfront}]
 *                                             [--instance-flexibility]
 *                                             [--location]
 *                                             [--renew {false, true}]
 *                                             [--subscription]
 * ```
 *
 * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
 * @param {string} billingScope Subscription that will be charged for purchasing Reservation.
 * @param {string} displayName Friendly name for user to easily identified the reservation.
 * @param {string} quantity Quantity of product for calculating price or purchasing.
 * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
 * @param {string} sku Sku name, get the sku list by using command az reservations catalog show.
 * @param {'P1Y' | 'P3Y'} term Available reservation terms for this resource.
 */
var az_reservations_reservation_order_calculate_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_order_calculate_command_builder, _super);
    function az_reservations_reservation_order_calculate_command_builder(commandPath, resultDataTypeName, appliedScopeType, billingScope, displayName, quantity, reservedResourceType, sku, term) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.appliedScopeType(appliedScopeType);
        _this.billingScope(billingScope);
        _this.displayName(displayName);
        _this.quantity(quantity);
        _this.reservedResourceType(reservedResourceType);
        _this.sku(sku);
        _this.term(term);
        return _this;
    }
    /** Type of the Applied Scope to update the reservation with. */
    az_reservations_reservation_order_calculate_command_builder.prototype.appliedScopeType = function (value) {
        this.setFlag("--applied-scope-type", value);
        return this;
    };
    /** Subscription that will be charged for purchasing Reservation. */
    az_reservations_reservation_order_calculate_command_builder.prototype.billingScope = function (value) {
        this.setFlag("--billing-scope", value);
        return this;
    };
    /** Friendly name for user to easily identified the reservation. */
    az_reservations_reservation_order_calculate_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Quantity of product for calculating price or purchasing. */
    az_reservations_reservation_order_calculate_command_builder.prototype.quantity = function (value) {
        this.setFlag("--quantity", value);
        return this;
    };
    /** Type of the resource for which the skus should be provided. */
    az_reservations_reservation_order_calculate_command_builder.prototype.reservedResourceType = function (value) {
        this.setFlag("--reserved-resource-type", value);
        return this;
    };
    /** Sku name, get the sku list by using command az reservations catalog show. */
    az_reservations_reservation_order_calculate_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Available reservation terms for this resource. */
    az_reservations_reservation_order_calculate_command_builder.prototype.term = function (value) {
        this.setFlag("--term", value);
        return this;
    };
    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    az_reservations_reservation_order_calculate_command_builder.prototype.appliedScope = function (value) {
        this.setFlag("--applied-scope", value);
        return this;
    };
    /** The billing plan options available for this SKU. */
    az_reservations_reservation_order_calculate_command_builder.prototype.billingPlan = function (value) {
        this.setFlag("--billing-plan", value);
        return this;
    };
    /** Type of the Instance Flexibility to update the reservation with. */
    az_reservations_reservation_order_calculate_command_builder.prototype.instanceFlexibility = function (value) {
        this.setFlag("--instance-flexibility", value);
        return this;
    };
    /** Values from: `az account list-locations`. */
    az_reservations_reservation_order_calculate_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    az_reservations_reservation_order_calculate_command_builder.prototype.renew = function (value) {
        this.setFlag("--renew", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_order_calculate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_order_calculate_command_builder;
}(base_1.CommandBuilder));
/**
 * Get all reservation orders.
 *
 * Syntax:
 * ```
 * az reservations reservation-order list [--query-examples]
 *                                        [--subscription]
 * ```
 */
var az_reservations_reservation_order_list_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_order_list_command_builder, _super);
    function az_reservations_reservation_order_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_reservation_order_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_order_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_order_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Purchase reservation order.
 *
 * Syntax:
 * ```
 * az reservations reservation-order purchase --applied-scope-type {Shared, Single}
 *                                            --billing-scope
 *                                            --display-name
 *                                            --quantity
 *                                            --reservation-order-id
 *                                            --reserved-resource-type {CosmosDb, RedHat, RedHatOsa, SqlDataWarehouse, SqlDatabases, SuseLinux, VMwareCloudSimple, VirtualMachines}
 *                                            --sku
 *                                            --term {P1Y, P3Y}
 *                                            [--applied-scope]
 *                                            [--billing-plan {Monthly, Upfront}]
 *                                            [--instance-flexibility]
 *                                            [--location]
 *                                            [--renew {false, true}]
 *                                            [--subscription]
 * ```
 *
 * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
 * @param {string} billingScope Subscription that will be charged for purchasing Reservation.
 * @param {string} displayName Friendly name for user to easily identified the reservation.
 * @param {string} quantity Quantity of product for calculating price or purchasing.
 * @param {string} reservationOrderId Id of reservation order to purchase, generate by `az reservations reservation-order calculate`.
 * @param {'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'} reservedResourceType Type of the resource for which the skus should be provided.
 * @param {string} sku Sku name, get the sku list by using command az reservations catalog show.
 * @param {'P1Y' | 'P3Y'} term Available reservation terms for this resource.
 */
var az_reservations_reservation_order_purchase_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_order_purchase_command_builder, _super);
    function az_reservations_reservation_order_purchase_command_builder(commandPath, resultDataTypeName, appliedScopeType, billingScope, displayName, quantity, reservationOrderId, reservedResourceType, sku, term) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.appliedScopeType(appliedScopeType);
        _this.billingScope(billingScope);
        _this.displayName(displayName);
        _this.quantity(quantity);
        _this.reservationOrderId(reservationOrderId);
        _this.reservedResourceType(reservedResourceType);
        _this.sku(sku);
        _this.term(term);
        return _this;
    }
    /** Type of the Applied Scope to update the reservation with. */
    az_reservations_reservation_order_purchase_command_builder.prototype.appliedScopeType = function (value) {
        this.setFlag("--applied-scope-type", value);
        return this;
    };
    /** Subscription that will be charged for purchasing Reservation. */
    az_reservations_reservation_order_purchase_command_builder.prototype.billingScope = function (value) {
        this.setFlag("--billing-scope", value);
        return this;
    };
    /** Friendly name for user to easily identified the reservation. */
    az_reservations_reservation_order_purchase_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Quantity of product for calculating price or purchasing. */
    az_reservations_reservation_order_purchase_command_builder.prototype.quantity = function (value) {
        this.setFlag("--quantity", value);
        return this;
    };
    /** Id of reservation order to purchase, generate by `az reservations reservation-order calculate`. */
    az_reservations_reservation_order_purchase_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Type of the resource for which the skus should be provided. */
    az_reservations_reservation_order_purchase_command_builder.prototype.reservedResourceType = function (value) {
        this.setFlag("--reserved-resource-type", value);
        return this;
    };
    /** Sku name, get the sku list by using command az reservations catalog show. */
    az_reservations_reservation_order_purchase_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Available reservation terms for this resource. */
    az_reservations_reservation_order_purchase_command_builder.prototype.term = function (value) {
        this.setFlag("--term", value);
        return this;
    };
    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    az_reservations_reservation_order_purchase_command_builder.prototype.appliedScope = function (value) {
        this.setFlag("--applied-scope", value);
        return this;
    };
    /** The billing plan options available for this SKU. */
    az_reservations_reservation_order_purchase_command_builder.prototype.billingPlan = function (value) {
        this.setFlag("--billing-plan", value);
        return this;
    };
    /** Type of the Instance Flexibility to update the reservation with. */
    az_reservations_reservation_order_purchase_command_builder.prototype.instanceFlexibility = function (value) {
        this.setFlag("--instance-flexibility", value);
        return this;
    };
    /** Values from: `az account list-locations`. */
    az_reservations_reservation_order_purchase_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    az_reservations_reservation_order_purchase_command_builder.prototype.renew = function (value) {
        this.setFlag("--renew", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_order_purchase_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_order_purchase_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a specific reservation order.
 *
 * Syntax:
 * ```
 * az reservations reservation-order show --reservation-order-id
 *                                        [--expand]
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} reservationOrderId Id of reservation order to look up.
 */
var az_reservations_reservation_order_show_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_order_show_command_builder, _super);
    function az_reservations_reservation_order_show_command_builder(commandPath, resultDataTypeName, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Id of reservation order to look up. */
    az_reservations_reservation_order_show_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** May be used to expand the planInformation. */
    az_reservations_reservation_order_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_reservation_order_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_order_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_order_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get all reservations.
 *
 * Syntax:
 * ```
 * az reservations reservation list --reservation-order-id
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} reservationOrderId Id of container reservation order.
 */
var az_reservations_reservation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_list_command_builder, _super);
    function az_reservations_reservation_list_command_builder(commandPath, resultDataTypeName, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Id of container reservation order. */
    az_reservations_reservation_list_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_reservation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get history of a reservation.
 *
 * Syntax:
 * ```
 * az reservations reservation list-history --reservation-id
 *                                          --reservation-order-id
 *                                          [--subscription]
 * ```
 *
 * @param {string} reservationId Reservation id of the reservation.
 * @param {string} reservationOrderId Order id of the reservation.
 */
var az_reservations_reservation_list_history_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_list_history_command_builder, _super);
    function az_reservations_reservation_list_history_command_builder(commandPath, resultDataTypeName, reservationId, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservationId(reservationId);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Reservation id of the reservation. */
    az_reservations_reservation_list_history_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Order id of the reservation. */
    az_reservations_reservation_list_history_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_list_history_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_list_history_command_builder;
}(base_1.CommandBuilder));
/**
 * Merge two reservations.
 *
 * Syntax:
 * ```
 * az reservations reservation merge --reservation-id-1
 *                                   --reservation-id-2
 *                                   --reservation-order-id
 *                                   [--subscription]
 * ```
 *
 * @param {string} reservationId1 Id of the first reservation to merge.
 * @param {string} reservationId2 Id of the second reservation to merge.
 * @param {string} reservationOrderId Reservation order id of the reservations to merge.
 */
var az_reservations_reservation_merge_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_merge_command_builder, _super);
    function az_reservations_reservation_merge_command_builder(commandPath, resultDataTypeName, reservationId1, reservationId2, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservationId1(reservationId1);
        _this.reservationId2(reservationId2);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Id of the first reservation to merge. */
    az_reservations_reservation_merge_command_builder.prototype.reservationId1 = function (value) {
        this.setFlag("--reservation-id-1", value);
        return this;
    };
    /** Id of the second reservation to merge. */
    az_reservations_reservation_merge_command_builder.prototype.reservationId2 = function (value) {
        this.setFlag("--reservation-id-2", value);
        return this;
    };
    /** Reservation order id of the reservations to merge. */
    az_reservations_reservation_merge_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_merge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_merge_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of a reservation.
 *
 * Syntax:
 * ```
 * az reservations reservation show --reservation-id
 *                                  --reservation-order-id
 *                                  [--expand]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} reservationId Reservation id of reservation to look up.
 * @param {string} reservationOrderId Order id of reservation to look up.
 */
var az_reservations_reservation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_show_command_builder, _super);
    function az_reservations_reservation_show_command_builder(commandPath, resultDataTypeName, reservationId, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.reservationId(reservationId);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Reservation id of reservation to look up. */
    az_reservations_reservation_show_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Order id of reservation to look up. */
    az_reservations_reservation_show_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Supported value of this query is renewProperties. */
    az_reservations_reservation_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_reservations_reservation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Split a reservation.
 *
 * Syntax:
 * ```
 * az reservations reservation split --quantity-1
 *                                   --quantity-2
 *                                   --reservation-id
 *                                   --reservation-order-id
 *                                   [--subscription]
 * ```
 *
 * @param {string} quantity1 Quantity of the first reservation that will be created from split operation.
 * @param {string} quantity2 Quantity of the second reservation that will be created from split operation.
 * @param {string} reservationId Reservation id of the reservation to split.
 * @param {string} reservationOrderId Reservation order id of the reservation to split.
 */
var az_reservations_reservation_split_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_split_command_builder, _super);
    function az_reservations_reservation_split_command_builder(commandPath, resultDataTypeName, quantity1, quantity2, reservationId, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.quantity1(quantity1);
        _this.quantity2(quantity2);
        _this.reservationId(reservationId);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Quantity of the first reservation that will be created from split operation. */
    az_reservations_reservation_split_command_builder.prototype.quantity1 = function (value) {
        this.setFlag("--quantity-1", value);
        return this;
    };
    /** Quantity of the second reservation that will be created from split operation. */
    az_reservations_reservation_split_command_builder.prototype.quantity2 = function (value) {
        this.setFlag("--quantity-2", value);
        return this;
    };
    /** Reservation id of the reservation to split. */
    az_reservations_reservation_split_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Reservation order id of the reservation to split. */
    az_reservations_reservation_split_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_split_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_split_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the applied scopes of the reservation.
 *
 * Syntax:
 * ```
 * az reservations reservation update --applied-scope-type {Shared, Single}
 *                                    --reservation-id
 *                                    --reservation-order-id
 *                                    [--applied-scopes]
 *                                    [--instance-flexibility {Off, On}]
 *                                    [--subscription]
 * ```
 *
 * @param {'Shared' | 'Single'} appliedScopeType Type of the Applied Scope to update the reservation with.
 * @param {string} reservationId Id of the reservation to update.
 * @param {string} reservationOrderId Reservation order id of the reservation to update.
 */
var az_reservations_reservation_update_command_builder = /** @class */ (function (_super) {
    __extends(az_reservations_reservation_update_command_builder, _super);
    function az_reservations_reservation_update_command_builder(commandPath, resultDataTypeName, appliedScopeType, reservationId, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.appliedScopeType(appliedScopeType);
        _this.reservationId(reservationId);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Type of the Applied Scope to update the reservation with. */
    az_reservations_reservation_update_command_builder.prototype.appliedScopeType = function (value) {
        this.setFlag("--applied-scope-type", value);
        return this;
    };
    /** Id of the reservation to update. */
    az_reservations_reservation_update_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Reservation order id of the reservation to update. */
    az_reservations_reservation_update_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Subscription that the benefit will be applied. Do not specify if AppliedScopeType is Shared. */
    az_reservations_reservation_update_command_builder.prototype.appliedScopes = function (value) {
        this.setFlag("--applied-scopes", value);
        return this;
    };
    /** Type of the Instance Flexibility to update the reservation with. */
    az_reservations_reservation_update_command_builder.prototype.instanceFlexibility = function (value) {
        this.setFlag("--instance-flexibility", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_reservations_reservation_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_reservations_reservation_update_command_builder;
}(base_1.CommandBuilder));
