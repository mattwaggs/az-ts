import { CommandBuilder } from '../base';
import { az_reservations_catalog_show_command_result } from './models/az_reservations_catalog_show_command_result'
import { az_reservations_reservation_order_id_list_command_result } from './models/az_reservations_reservation_order_id_list_command_result'
import { az_reservations_reservation_order_calculate_command_result } from './models/az_reservations_reservation_order_calculate_command_result'
import { az_reservations_reservation_order_list_command_result } from './models/az_reservations_reservation_order_list_command_result'
import { az_reservations_reservation_order_purchase_command_result } from './models/az_reservations_reservation_order_purchase_command_result'
import { az_reservations_reservation_order_show_command_result } from './models/az_reservations_reservation_order_show_command_result'
import { az_reservations_reservation_list_command_result } from './models/az_reservations_reservation_list_command_result'
import { az_reservations_reservation_list_history_command_result } from './models/az_reservations_reservation_list_history_command_result'
import { az_reservations_reservation_merge_command_result } from './models/az_reservations_reservation_merge_command_result'
import { az_reservations_reservation_show_command_result } from './models/az_reservations_reservation_show_command_result'
import { az_reservations_reservation_split_command_result } from './models/az_reservations_reservation_split_command_result'
import { az_reservations_reservation_update_command_result } from './models/az_reservations_reservation_update_command_result'

/** See catalog of available reservations. */
export class az_reservations_catalog {
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
    static show(reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', subscriptionId: string): az_reservations_catalog_show_command_builder {
        return new az_reservations_catalog_show_command_builder("az reservations catalog show", reservedResourceType, subscriptionId);
    }
}

/** See reservation order ids that are applied to subscription. */
export class az_reservations_reservation_order_id {
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
    static list(subscriptionId: string): az_reservations_reservation_order_id_list_command_builder {
        return new az_reservations_reservation_order_id_list_command_builder("az reservations reservation-order-id list", subscriptionId);
    }
}

/** Manage reservation order, which is container for reservations. */
export class az_reservations_reservation_order {
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
    static calculate(appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y'): az_reservations_reservation_order_calculate_command_builder {
        return new az_reservations_reservation_order_calculate_command_builder("az reservations reservation-order calculate", appliedScopeType, billingScope, displayName, quantity, reservedResourceType, sku, term);
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
    static list(): az_reservations_reservation_order_list_command_builder {
        return new az_reservations_reservation_order_list_command_builder("az reservations reservation-order list");
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
    static purchase(appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservationOrderId: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y'): az_reservations_reservation_order_purchase_command_builder {
        return new az_reservations_reservation_order_purchase_command_builder("az reservations reservation-order purchase", appliedScopeType, billingScope, displayName, quantity, reservationOrderId, reservedResourceType, sku, term);
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
    static show(reservationOrderId: string): az_reservations_reservation_order_show_command_builder {
        return new az_reservations_reservation_order_show_command_builder("az reservations reservation-order show", reservationOrderId);
    }
}

/** Manage reservation entities. */
export class az_reservations_reservation {
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
    static list(reservationOrderId: string): az_reservations_reservation_list_command_builder {
        return new az_reservations_reservation_list_command_builder("az reservations reservation list", reservationOrderId);
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
    static list_history(reservationId: string, reservationOrderId: string): az_reservations_reservation_list_history_command_builder {
        return new az_reservations_reservation_list_history_command_builder("az reservations reservation list-history", reservationId, reservationOrderId);
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
    static merge(reservationId1: string, reservationId2: string, reservationOrderId: string): az_reservations_reservation_merge_command_builder {
        return new az_reservations_reservation_merge_command_builder("az reservations reservation merge", reservationId1, reservationId2, reservationOrderId);
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
    static show(reservationId: string, reservationOrderId: string): az_reservations_reservation_show_command_builder {
        return new az_reservations_reservation_show_command_builder("az reservations reservation show", reservationId, reservationOrderId);
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
    static split(quantity1: string, quantity2: string, reservationId: string, reservationOrderId: string): az_reservations_reservation_split_command_builder {
        return new az_reservations_reservation_split_command_builder("az reservations reservation split", quantity1, quantity2, reservationId, reservationOrderId);
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
    static update(appliedScopeType: 'Shared' | 'Single', reservationId: string, reservationOrderId: string): az_reservations_reservation_update_command_builder {
        return new az_reservations_reservation_update_command_builder("az reservations reservation update", appliedScopeType, reservationId, reservationOrderId);
    }
}

/** Manage Azure Reservations. */
export class az_reservations {
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
class az_reservations_catalog_show_command_builder extends CommandBuilder<az_reservations_catalog_show_command_result> {
    constructor(commandPath: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', subscriptionId: string) {
        super(commandPath);
        this.reservedResourceType(reservedResourceType)
        this.subscriptionId(subscriptionId)
    }

    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_catalog_show_command_builder {
        this.setFlag("--reserved-resource-type", value);
        return this;
    }

    /** Id of the subscription to get the catalog for. */
    subscriptionId(value: string): az_reservations_catalog_show_command_builder {
        this.setFlag("--subscription-id", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_reservations_catalog_show_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_catalog_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_catalog_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_order_id_list_command_builder extends CommandBuilder<az_reservations_reservation_order_id_list_command_result> {
    constructor(commandPath: string, subscriptionId: string) {
        super(commandPath);
        this.subscriptionId(subscriptionId)
    }

    /** Id of the subscription to look up applied reservations. */
    subscriptionId(value: string): az_reservations_reservation_order_id_list_command_builder {
        this.setFlag("--subscription-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_id_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_id_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_order_calculate_command_builder extends CommandBuilder<az_reservations_reservation_order_calculate_command_result> {
    constructor(commandPath: string, appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y') {
        super(commandPath);
        this.appliedScopeType(appliedScopeType)
        this.billingScope(billingScope)
        this.displayName(displayName)
        this.quantity(quantity)
        this.reservedResourceType(reservedResourceType)
        this.sku(sku)
        this.term(term)
    }

    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--applied-scope-type", value);
        return this;
    }

    /** Subscription that will be charged for purchasing Reservation. */
    billingScope(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--billing-scope", value);
        return this;
    }

    /** Friendly name for user to easily identified the reservation. */
    displayName(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Quantity of product for calculating price or purchasing. */
    quantity(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--quantity", value);
        return this;
    }

    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--reserved-resource-type", value);
        return this;
    }

    /** Sku name, get the sku list by using command az reservations catalog show. */
    sku(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Available reservation terms for this resource. */
    term(value: 'P1Y' | 'P3Y'): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--term", value);
        return this;
    }

    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    appliedScope(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--applied-scope", value);
        return this;
    }

    /** The billing plan options available for this SKU. */
    billingPlan(value: 'Monthly' | 'Upfront'): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--billing-plan", value);
        return this;
    }

    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--instance-flexibility", value);
        return this;
    }

    /** Values from: `az account list-locations`. */
    location(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    renew(value: boolean): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--renew", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_calculate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_order_list_command_builder extends CommandBuilder<az_reservations_reservation_order_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_order_purchase_command_builder extends CommandBuilder<az_reservations_reservation_order_purchase_command_result> {
    constructor(commandPath: string, appliedScopeType: 'Shared' | 'Single', billingScope: string, displayName: string, quantity: string, reservationOrderId: string, reservedResourceType: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines', sku: string, term: 'P1Y' | 'P3Y') {
        super(commandPath);
        this.appliedScopeType(appliedScopeType)
        this.billingScope(billingScope)
        this.displayName(displayName)
        this.quantity(quantity)
        this.reservationOrderId(reservationOrderId)
        this.reservedResourceType(reservedResourceType)
        this.sku(sku)
        this.term(term)
    }

    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--applied-scope-type", value);
        return this;
    }

    /** Subscription that will be charged for purchasing Reservation. */
    billingScope(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--billing-scope", value);
        return this;
    }

    /** Friendly name for user to easily identified the reservation. */
    displayName(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Quantity of product for calculating price or purchasing. */
    quantity(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--quantity", value);
        return this;
    }

    /** Id of reservation order to purchase, generate by `az reservations reservation-order calculate`. */
    reservationOrderId(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Type of the resource for which the skus should be provided. */
    reservedResourceType(value: 'CosmosDb' | 'RedHat' | 'RedHatOsa' | 'SqlDataWarehouse' | 'SqlDatabases' | 'SuseLinux' | 'VMwareCloudSimple' | 'VirtualMachines'): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--reserved-resource-type", value);
        return this;
    }

    /** Sku name, get the sku list by using command az reservations catalog show. */
    sku(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Available reservation terms for this resource. */
    term(value: 'P1Y' | 'P3Y'): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--term", value);
        return this;
    }

    /** Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. */
    appliedScope(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--applied-scope", value);
        return this;
    }

    /** The billing plan options available for this SKU. */
    billingPlan(value: 'Monthly' | 'Upfront'): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--billing-plan", value);
        return this;
    }

    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--instance-flexibility", value);
        return this;
    }

    /** Values from: `az account list-locations`. */
    location(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Set this to true will automatically purchase a new reservation on the expiration date time. */
    renew(value: boolean): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--renew", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_purchase_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_order_show_command_builder extends CommandBuilder<az_reservations_reservation_order_show_command_result> {
    constructor(commandPath: string, reservationOrderId: string) {
        super(commandPath);
        this.reservationOrderId(reservationOrderId)
    }

    /** Id of reservation order to look up. */
    reservationOrderId(value: string): az_reservations_reservation_order_show_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** May be used to expand the planInformation. */
    expand(value: string): az_reservations_reservation_order_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_order_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_order_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_list_command_builder extends CommandBuilder<az_reservations_reservation_list_command_result> {
    constructor(commandPath: string, reservationOrderId: string) {
        super(commandPath);
        this.reservationOrderId(reservationOrderId)
    }

    /** Id of container reservation order. */
    reservationOrderId(value: string): az_reservations_reservation_list_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_list_history_command_builder extends CommandBuilder<az_reservations_reservation_list_history_command_result> {
    constructor(commandPath: string, reservationId: string, reservationOrderId: string) {
        super(commandPath);
        this.reservationId(reservationId)
        this.reservationOrderId(reservationOrderId)
    }

    /** Reservation id of the reservation. */
    reservationId(value: string): az_reservations_reservation_list_history_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Order id of the reservation. */
    reservationOrderId(value: string): az_reservations_reservation_list_history_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_list_history_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_merge_command_builder extends CommandBuilder<az_reservations_reservation_merge_command_result> {
    constructor(commandPath: string, reservationId1: string, reservationId2: string, reservationOrderId: string) {
        super(commandPath);
        this.reservationId1(reservationId1)
        this.reservationId2(reservationId2)
        this.reservationOrderId(reservationOrderId)
    }

    /** Id of the first reservation to merge. */
    reservationId1(value: string): az_reservations_reservation_merge_command_builder {
        this.setFlag("--reservation-id-1", value);
        return this;
    }

    /** Id of the second reservation to merge. */
    reservationId2(value: string): az_reservations_reservation_merge_command_builder {
        this.setFlag("--reservation-id-2", value);
        return this;
    }

    /** Reservation order id of the reservations to merge. */
    reservationOrderId(value: string): az_reservations_reservation_merge_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_merge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_show_command_builder extends CommandBuilder<az_reservations_reservation_show_command_result> {
    constructor(commandPath: string, reservationId: string, reservationOrderId: string) {
        super(commandPath);
        this.reservationId(reservationId)
        this.reservationOrderId(reservationOrderId)
    }

    /** Reservation id of reservation to look up. */
    reservationId(value: string): az_reservations_reservation_show_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Order id of reservation to look up. */
    reservationOrderId(value: string): az_reservations_reservation_show_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Supported value of this query is renewProperties. */
    expand(value: string): az_reservations_reservation_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_reservations_reservation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_split_command_builder extends CommandBuilder<az_reservations_reservation_split_command_result> {
    constructor(commandPath: string, quantity1: string, quantity2: string, reservationId: string, reservationOrderId: string) {
        super(commandPath);
        this.quantity1(quantity1)
        this.quantity2(quantity2)
        this.reservationId(reservationId)
        this.reservationOrderId(reservationOrderId)
    }

    /** Quantity of the first reservation that will be created from split operation. */
    quantity1(value: string): az_reservations_reservation_split_command_builder {
        this.setFlag("--quantity-1", value);
        return this;
    }

    /** Quantity of the second reservation that will be created from split operation. */
    quantity2(value: string): az_reservations_reservation_split_command_builder {
        this.setFlag("--quantity-2", value);
        return this;
    }

    /** Reservation id of the reservation to split. */
    reservationId(value: string): az_reservations_reservation_split_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Reservation order id of the reservation to split. */
    reservationOrderId(value: string): az_reservations_reservation_split_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_split_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_reservations_reservation_update_command_builder extends CommandBuilder<az_reservations_reservation_update_command_result> {
    constructor(commandPath: string, appliedScopeType: 'Shared' | 'Single', reservationId: string, reservationOrderId: string) {
        super(commandPath);
        this.appliedScopeType(appliedScopeType)
        this.reservationId(reservationId)
        this.reservationOrderId(reservationOrderId)
    }

    /** Type of the Applied Scope to update the reservation with. */
    appliedScopeType(value: 'Shared' | 'Single'): az_reservations_reservation_update_command_builder {
        this.setFlag("--applied-scope-type", value);
        return this;
    }

    /** Id of the reservation to update. */
    reservationId(value: string): az_reservations_reservation_update_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Reservation order id of the reservation to update. */
    reservationOrderId(value: string): az_reservations_reservation_update_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Subscription that the benefit will be applied. Do not specify if AppliedScopeType is Shared. */
    appliedScopes(value: string): az_reservations_reservation_update_command_builder {
        this.setFlag("--applied-scopes", value);
        return this;
    }

    /** Type of the Instance Flexibility to update the reservation with. */
    instanceFlexibility(value: 'Off' | 'On'): az_reservations_reservation_update_command_builder {
        this.setFlag("--instance-flexibility", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_reservations_reservation_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
