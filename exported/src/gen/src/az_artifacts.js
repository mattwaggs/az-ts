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
/** Manage Universal Packages. */
var az_artifacts_universal = /** @class */ (function () {
    function az_artifacts_universal() {
    }
    /**
     * Download a package.
     *
     * Syntax:
     * ```
     * az artifacts universal download --feed
     *                                 --name
     *                                 --path
     *                                 --version
     *                                 [--detect {false, true}]
     *                                 [--file-filter]
     *                                 [--org]
     *                                 [--project]
     *                                 [--scope {organization, project}]
     *                                 [--subscription]
     * ```
     *
     * @param {string} feed Name or ID of the feed.
     * @param {string} name Name of the package, e.g. 'foo-package'.
     * @param {string} path Directory to place the package contents.
     * @param {string} version Version of the package, e.g. 1.0.0.
     */
    az_artifacts_universal.download = function (feed, name, path, version) {
        return new az_artifacts_universal_download_command_builder("az artifacts universal download", 'az_artifacts_universal_download_command_result', feed, name, path, version);
    };
    /**
     * Publish a package to a feed.
     *
     * Syntax:
     * ```
     * az artifacts universal publish --feed
     *                                --name
     *                                --path
     *                                --version
     *                                [--description]
     *                                [--detect {false, true}]
     *                                [--org]
     *                                [--project]
     *                                [--scope {organization, project}]
     *                                [--subscription]
     * ```
     *
     * @param {string} feed Name or ID of the feed.
     * @param {string} name Name of the package, e.g. 'foo-package'.
     * @param {string} path Directory containing the package contents.
     * @param {string} version Version of the package, e.g. '1.0.0'.
     */
    az_artifacts_universal.publish = function (feed, name, path, version) {
        return new az_artifacts_universal_publish_command_builder("az artifacts universal publish", 'az_artifacts_universal_publish_command_result', feed, name, path, version);
    };
    return az_artifacts_universal;
}());
exports.az_artifacts_universal = az_artifacts_universal;
/** Manage Azure Artifacts. */
var az_artifacts = /** @class */ (function () {
    function az_artifacts() {
    }
    return az_artifacts;
}());
exports.az_artifacts = az_artifacts;
/**
 * Download a package.
 *
 * Syntax:
 * ```
 * az artifacts universal download --feed
 *                                 --name
 *                                 --path
 *                                 --version
 *                                 [--detect {false, true}]
 *                                 [--file-filter]
 *                                 [--org]
 *                                 [--project]
 *                                 [--scope {organization, project}]
 *                                 [--subscription]
 * ```
 *
 * @param {string} feed Name or ID of the feed.
 * @param {string} name Name of the package, e.g. 'foo-package'.
 * @param {string} path Directory to place the package contents.
 * @param {string} version Version of the package, e.g. 1.0.0.
 */
var az_artifacts_universal_download_command_builder = /** @class */ (function (_super) {
    __extends(az_artifacts_universal_download_command_builder, _super);
    function az_artifacts_universal_download_command_builder(commandPath, resultDataTypeName, feed, name, path, version) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feed(feed);
        _this.name(name);
        _this.path(path);
        _this.version(version);
        return _this;
    }
    /** Name or ID of the feed. */
    az_artifacts_universal_download_command_builder.prototype.feed = function (value) {
        this.setFlag("--feed", value);
        return this;
    };
    /** Name of the package, e.g. 'foo-package'. */
    az_artifacts_universal_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Directory to place the package contents. */
    az_artifacts_universal_download_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Version of the package, e.g. 1.0.0. */
    az_artifacts_universal_download_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Automatically detect organization. */
    az_artifacts_universal_download_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Wildcard filter for file download. */
    az_artifacts_universal_download_command_builder.prototype.fileFilter = function (value) {
        this.setFlag("--file-filter", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_artifacts_universal_download_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_artifacts_universal_download_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    az_artifacts_universal_download_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_artifacts_universal_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_artifacts_universal_download_command_builder;
}(base_1.CommandBuilder));
/**
 * Publish a package to a feed.
 *
 * Syntax:
 * ```
 * az artifacts universal publish --feed
 *                                --name
 *                                --path
 *                                --version
 *                                [--description]
 *                                [--detect {false, true}]
 *                                [--org]
 *                                [--project]
 *                                [--scope {organization, project}]
 *                                [--subscription]
 * ```
 *
 * @param {string} feed Name or ID of the feed.
 * @param {string} name Name of the package, e.g. 'foo-package'.
 * @param {string} path Directory containing the package contents.
 * @param {string} version Version of the package, e.g. '1.0.0'.
 */
var az_artifacts_universal_publish_command_builder = /** @class */ (function (_super) {
    __extends(az_artifacts_universal_publish_command_builder, _super);
    function az_artifacts_universal_publish_command_builder(commandPath, resultDataTypeName, feed, name, path, version) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feed(feed);
        _this.name(name);
        _this.path(path);
        _this.version(version);
        return _this;
    }
    /** Name or ID of the feed. */
    az_artifacts_universal_publish_command_builder.prototype.feed = function (value) {
        this.setFlag("--feed", value);
        return this;
    };
    /** Name of the package, e.g. 'foo-package'. */
    az_artifacts_universal_publish_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Directory containing the package contents. */
    az_artifacts_universal_publish_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Version of the package, e.g. '1.0.0'. */
    az_artifacts_universal_publish_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Description of the package. */
    az_artifacts_universal_publish_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_artifacts_universal_publish_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_artifacts_universal_publish_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_artifacts_universal_publish_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    az_artifacts_universal_publish_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_artifacts_universal_publish_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_artifacts_universal_publish_command_builder;
}(base_1.CommandBuilder));
