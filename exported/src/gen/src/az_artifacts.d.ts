import { CommandBuilder } from '../base';
import { az_artifacts_universal_download_command_result } from './models/az_artifacts_universal_download_command_result';
import { az_artifacts_universal_publish_command_result } from './models/az_artifacts_universal_publish_command_result';
/** Manage Universal Packages. */
export declare class az_artifacts_universal {
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
    static download(feed: string, name: string, path: string, version: string): az_artifacts_universal_download_command_builder;
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
    static publish(feed: string, name: string, path: string, version: string): az_artifacts_universal_publish_command_builder;
}
/** Manage Azure Artifacts. */
export declare class az_artifacts {
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
declare class az_artifacts_universal_download_command_builder extends CommandBuilder<az_artifacts_universal_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feed: string, name: string, path: string, version: string);
    /** Name or ID of the feed. */
    feed(value: string): az_artifacts_universal_download_command_builder;
    /** Name of the package, e.g. 'foo-package'. */
    name(value: string): az_artifacts_universal_download_command_builder;
    /** Directory to place the package contents. */
    path(value: string): az_artifacts_universal_download_command_builder;
    /** Version of the package, e.g. 1.0.0. */
    version(value: string): az_artifacts_universal_download_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_artifacts_universal_download_command_builder;
    /** Wildcard filter for file download. */
    fileFilter(value: string): az_artifacts_universal_download_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_artifacts_universal_download_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_artifacts_universal_download_command_builder;
    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    scope(value: 'organization' | 'project'): az_artifacts_universal_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_artifacts_universal_download_command_builder;
}
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
declare class az_artifacts_universal_publish_command_builder extends CommandBuilder<az_artifacts_universal_publish_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feed: string, name: string, path: string, version: string);
    /** Name or ID of the feed. */
    feed(value: string): az_artifacts_universal_publish_command_builder;
    /** Name of the package, e.g. 'foo-package'. */
    name(value: string): az_artifacts_universal_publish_command_builder;
    /** Directory containing the package contents. */
    path(value: string): az_artifacts_universal_publish_command_builder;
    /** Version of the package, e.g. '1.0.0'. */
    version(value: string): az_artifacts_universal_publish_command_builder;
    /** Description of the package. */
    description(value: string): az_artifacts_universal_publish_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_artifacts_universal_publish_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_artifacts_universal_publish_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_artifacts_universal_publish_command_builder;
    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    scope(value: 'organization' | 'project'): az_artifacts_universal_publish_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_artifacts_universal_publish_command_builder;
}
export {};
