import { CommandBuilder } from '../base';
import { az_reservations_catalog_show_command_result } from './models/az_reservations_catalog_show_command_result';
import { az_reservations_reservation_order_id_list_command_result } from './models/az_reservations_reservation_order_id_list_command_result';
import { az_reservations_reservation_order_calculate_command_result } from './models/az_reservations_reservation_order_calculate_command_result';
import { az_reservations_reservation_order_list_command_result } from './models/az_reservations_reservation_order_list_command_result';
import { az_reservations_reservation_order_purchase_command_result } from './models/az_reservations_reservation_order_purchase_command_result';
import { az_reservations_reservation_order_show_command_result } from './models/az_reservations_reservation_order_show_command_result';
import { az_reservations_reservation_list_command_result } from './models/az_reservations_reservation_list_command_result';
import { az_reservations_reservation_list_history_command_result } from './models/az_reservations_reservation_list_history_command_result';
import { az_reservations_reservation_merge_command_result } from './models/az_reservations_reservation_merge_command_result';
import { az_reservations_reservation_show_command_result } from './models/az_reservations_reservation_show_command_result';
import { az_reservations_reservation_split_command_result } from './models/az_reservations_reservation_split_command_result';
import { az_reservations_reservation_update_command_result } from './models/az_reservations_reservation_update_command_result';
/** See catalog of available reservations. */
export declare class az_reservations_catalog {
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
    static show(reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', subscriptionId: string): az_reservations_catalog_show_command_builder;
}
/** See reservation order ids that are applied to subscription. */
export declare class az_reservations_reservation_order_id {
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
    static list(subscriptionId: string): az_reservations_reservation_order_id_list_command_builder;
}
/** Manage reservation order, which is container for reservations. */
export declare class az_reservations_reservation_order {
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
    static calculate(appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y'): az_reservations_reservation_order_calculate_command_builder;
    /**
     * Get all reservation orders.
     *
     * Syntax:
     * ```
     * az reservations reservation-order list [--query-examples]
     *                                        [--subscription]
     * ```
     */
    static list(): az_reservations_reservation_order_list_command_builder;
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
    static purchase(appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservationOrderId: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y'): az_reservations_reservation_order_purchase_command_builder;
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
    static show(reservationOrderId: string): az_reservations_reservation_order_show_command_builder;
}
/** Manage reservation entities. */
export declare class az_reservations_reservation {
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
    static list(reservationOrderId: string): az_reservations_reservation_list_command_builder;
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
    static list_history(reservationId: string, reservationOrderId: string): az_reservations_reservation_list_history_command_builder;
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
    static merge(reservationId1: string, reservationId2: string, reservationOrderId: string): az_reservations_reservation_merge_command_builder;
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
    static show(reservationId: string, reservationOrderId: string): az_reservations_reservation_show_command_builder;
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
    static split(quantity1: string, quantity2: string, reservationId: string, reservationOrderId: string): az_reservations_reservation_split_command_builder;
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
    static update(appliedScopeType: 'Shared' | 'Single', reservationId: string, reservationOrderId: string): az_reservations_reservation_update_command_builder;
}
/** Manage Azure Reservations. */
export declare class az_reservations {
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
declare class az_reservations_catalog_show_command_builder extends CommandBuilder<az_reservations_catalog_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', subscriptionId: string);
    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_catalog_show_command_builder;
    /** Id of the subscription to get the catalog for. */
    subscriptionId(value: string): az_reservations_catalog_show_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_reservations_catalog_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_catalog_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_catalog_show_command_builder;
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
declare class az_reservations_reservation_order_id_list_command_builder extends CommandBuilder<az_reservations_reservation_order_id_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, subscriptionId: string);
    /** Id of the subscription to look up applied reservations. */
    subscriptionId(value: string): az_reservations_reservation_order_id_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_id_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_id_list_command_builder;
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
declare class az_reservations_reservation_order_calculate_command_builder extends CommandBuilder<az_reservations_reservation_order_calculate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y');
    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_order_calculate_command_builder;
    /** Subscription that will be charged for purchasing Reservation. */
    billingScope(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Friendly name for user to easily identified the reservation. */
    displayName(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Quantity of product for calculating price or purchasing. */
    quantity(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_reservation_order_calculate_command_builder;
    /** Sku name, get the sku list by using command az reservations catalog show. */
    sku(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Available reservation terms for this resource. */
    term(value: 'P1Y' | 'P3Y'): az_reservations_reservation_order_calculate_command_builder;
    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    appliedScope(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** The billing plan options available for this SKU. */
    billingPlan(value: 'Monthly' | 'Upfront'): az_reservations_reservation_order_calculate_command_builder;
    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Values from: `az account list-locations`. */
    location(value: string): az_reservations_reservation_order_calculate_command_builder;
    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    renew(value: boolean): az_reservations_reservation_order_calculate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_calculate_command_builder;
}
/**
 * Get all reservation orders.
 *
 * Syntax:
 * ```
 * az reservations reservation-order list [--query-examples]
 *                                        [--subscription]
 * ```
 */
declare class az_reservations_reservation_order_list_command_builder extends CommandBuilder<az_reservations_reservation_order_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_list_command_builder;
}
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
declare class az_reservations_reservation_order_purchase_command_builder extends CommandBuilder<az_reservations_reservation_order_purchase_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservationOrderId: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y');
    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_order_purchase_command_builder;
    /** Subscription that will be charged for purchasing Reservation. */
    billingScope(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Friendly name for user to easily identified the reservation. */
    displayName(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Quantity of product for calculating price or purchasing. */
    quantity(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Id of reservation order to purchase, generate by `az reservations reservation-order calculate`. */
    reservationOrderId(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_reservation_order_purchase_command_builder;
    /** Sku name, get the sku list by using command az reservations catalog show. */
    sku(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Available reservation terms for this resource. */
    term(value: 'P1Y' | 'P3Y'): az_reservations_reservation_order_purchase_command_builder;
    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    appliedScope(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** The billing plan options available for this SKU. */
    billingPlan(value: 'Monthly' | 'Upfront'): az_reservations_reservation_order_purchase_command_builder;
    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Values from: `az account list-locations`. */
    location(value: string): az_reservations_reservation_order_purchase_command_builder;
    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    renew(value: boolean): az_reservations_reservation_order_purchase_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_purchase_command_builder;
}
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
declare class az_reservations_reservation_order_show_command_builder extends CommandBuilder<az_reservations_reservation_order_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservationOrderId: string);
    /** Id of reservation order to look up. */
    reservationOrderId(value: string): az_reservations_reservation_order_show_command_builder;
    /** May be used to expand the planInformation. */
    expand(value: string): az_reservations_reservation_order_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_show_command_builder;
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
declare class az_reservations_reservation_list_command_builder extends CommandBuilder<az_reservations_reservation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservationOrderId: string);
    /** Id of container reservation order. */
    reservationOrderId(value: string): az_reservations_reservation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_list_command_builder;
}
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
declare class az_reservations_reservation_list_history_command_builder extends CommandBuilder<az_reservations_reservation_list_history_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservationId: string, reservationOrderId: string);
    /** Reservation id of the reservation. */
    reservationId(value: string): az_reservations_reservation_list_history_command_builder;
    /** Order id of the reservation. */
    reservationOrderId(value: string): az_reservations_reservation_list_history_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_list_history_command_builder;
}
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
declare class az_reservations_reservation_merge_command_builder extends CommandBuilder<az_reservations_reservation_merge_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservationId1: string, reservationId2: string, reservationOrderId: string);
    /** Id of the first reservation to merge. */
    reservationId1(value: string): az_reservations_reservation_merge_command_builder;
    /** Id of the second reservation to merge. */
    reservationId2(value: string): az_reservations_reservation_merge_command_builder;
    /** Reservation order id of the reservations to merge. */
    reservationOrderId(value: string): az_reservations_reservation_merge_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_merge_command_builder;
}
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
declare class az_reservations_reservation_show_command_builder extends CommandBuilder<az_reservations_reservation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, reservationId: string, reservationOrderId: string);
    /** Reservation id of reservation to look up. */
    reservationId(value: string): az_reservations_reservation_show_command_builder;
    /** Order id of reservation to look up. */
    reservationOrderId(value: string): az_reservations_reservation_show_command_builder;
    /** Supported value of this query is renewProperties. */
    expand(value: string): az_reservations_reservation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_show_command_builder;
}
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
declare class az_reservations_reservation_split_command_builder extends CommandBuilder<az_reservations_reservation_split_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, quantity1: string, quantity2: string, reservationId: string, reservationOrderId: string);
    /** Quantity of the first reservation that will be created from split operation. */
    quantity1(value: string): az_reservations_reservation_split_command_builder;
    /** Quantity of the second reservation that will be created from split operation. */
    quantity2(value: string): az_reservations_reservation_split_command_builder;
    /** Reservation id of the reservation to split. */
    reservationId(value: string): az_reservations_reservation_split_command_builder;
    /** Reservation order id of the reservation to split. */
    reservationOrderId(value: string): az_reservations_reservation_split_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_split_command_builder;
}
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
declare class az_reservations_reservation_update_command_builder extends CommandBuilder<az_reservations_reservation_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, appliedScopeType: 'Shared' | 'Single', reservationId: string, reservationOrderId: string);
    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_update_command_builder;
    /** Id of the reservation to update. */
    reservationId(value: string): az_reservations_reservation_update_command_builder;
    /** Reservation order id of the reservation to update. */
    reservationOrderId(value: string): az_reservations_reservation_update_command_builder;
    /** Subscription that the benefit will be applied. Do not specify if AppliedScopeType is Shared. */
    appliedScopes(value: string): az_reservations_reservation_update_command_builder;
    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: 'Off' | 'On'): az_reservations_reservation_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_update_command_builder;
}
export {};
