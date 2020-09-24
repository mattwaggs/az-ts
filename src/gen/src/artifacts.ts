import { CommandBuilder } from '../base';

/** Manage Universal Packages. */
export class az_artifacts_universal {
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
    static az_artifacts_universal_download(feed: string, name: string, path: string, version: string): az_artifacts_universal_download_command_builder {
        return new az_artifacts_universal_download_command_builder("az artifacts universal download", feed, name, path, version);
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
    static az_artifacts_universal_publish(feed: string, name: string, path: string, version: string): az_artifacts_universal_publish_command_builder {
        return new az_artifacts_universal_publish_command_builder("az artifacts universal publish", feed, name, path, version);
    }
}

/** Manage Azure Artifacts. */
export class az_artifacts {
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
class az_artifacts_universal_download_command_builder extends CommandBuilder {
    constructor(commandPath: string, feed: string, name: string, path: string, version: string) {
        super(commandParent);
        this.feed(feed)
        this.name(name)
        this.path(path)
        this.version(version)
    }

    /** Name or ID of the feed. */
    feed(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--feed", value);
        return this;
    }

    /** Name of the package, e.g. 'foo-package'. */
    name(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Directory to place the package contents. */
    path(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Version of the package, e.g. 1.0.0. */
    version(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_artifacts_universal_download_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Wildcard filter for file download. */
    fileFilter(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--file-filter", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    scope(value: 'organization' | 'project'): az_artifacts_universal_download_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_artifacts_universal_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_artifacts_universal_publish_command_builder extends CommandBuilder {
    constructor(commandPath: string, feed: string, name: string, path: string, version: string) {
        super(commandParent);
        this.feed(feed)
        this.name(name)
        this.path(path)
        this.version(version)
    }

    /** Name or ID of the feed. */
    feed(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--feed", value);
        return this;
    }

    /** Name of the package, e.g. 'foo-package'. */
    name(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Directory containing the package contents. */
    path(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Version of the package, e.g. '1.0.0'. */
    version(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Description of the package. */
    description(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_artifacts_universal_publish_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Scope of the feed: 'project' if the feed was created in a project, and 'organization' otherwise. */
    scope(value: 'organization' | 'project'): az_artifacts_universal_publish_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_artifacts_universal_publish_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
