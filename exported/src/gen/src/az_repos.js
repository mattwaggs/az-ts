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
/** Manage Git repositories import. */
var az_repos_import = /** @class */ (function () {
    function az_repos_import() {
    }
    /**
     * Create a git import request.
     *
     * Syntax:
     * ```
     * az repos import create --git-source-url
     *                        [--detect {false, true}]
     *                        [--git-service-endpoint-id]
     *                        [--org]
     *                        [--project]
     *                        [--repository]
     *                        [--requires-authorization]
     *                        [--subscription]
     *                        [--user-name]
     * ```
     *
     * @param {string} gitSourceUrl Url of the source git repository.
     */
    az_repos_import.create = function (gitSourceUrl) {
        return new az_repos_import_create_command_builder("az repos import create", 'az_repos_import_create_command_result', gitSourceUrl);
    };
    return az_repos_import;
}());
exports.az_repos_import = az_repos_import;
/** Manage approver count policy. */
var az_repos_policy_approver_count = /** @class */ (function () {
    function az_repos_policy_approver_count() {
    }
    /**
     * Create approver count policy.
     *
     * Syntax:
     * ```
     * az repos policy approver-count create --allow-downvotes {false, true}
     *                                       --blocking {false, true}
     *                                       --branch
     *                                       --creator-vote-counts {false, true}
     *                                       --enabled {false, true}
     *                                       --minimum-approver-count
     *                                       --repository-id
     *                                       --reset-on-source-push {false, true}
     *                                       [--branch-match-type {exact, prefix}]
     *                                       [--detect {false, true}]
     *                                       [--org]
     *                                       [--project]
     *                                       [--subscription]
     * ```
     *
     * @param {boolean} allowDownvotes Whether to allow downvotes or not.
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {boolean} creatorVoteCounts Whether the creator's vote counts or not.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} minimumApproverCount Minimum number of approvers required. For example: 2.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     * @param {boolean} resetOnSourcePush Whether to reset source on push.
     */
    az_repos_policy_approver_count.create = function (allowDownvotes, blocking, branch, creatorVoteCounts, enabled, minimumApproverCount, repositoryId, resetOnSourcePush) {
        return new az_repos_policy_approver_count_create_command_builder("az repos policy approver-count create", 'az_repos_policy_approver_count_create_command_result', allowDownvotes, blocking, branch, creatorVoteCounts, enabled, minimumApproverCount, repositoryId, resetOnSourcePush);
    };
    /**
     * Update approver count policy.
     *
     * Syntax:
     * ```
     * az repos policy approver-count update --id
     *                                       [--allow-downvotes {false, true}]
     *                                       [--blocking {false, true}]
     *                                       [--branch]
     *                                       [--branch-match-type {exact, prefix}]
     *                                       [--creator-vote-counts {false, true}]
     *                                       [--detect {false, true}]
     *                                       [--enabled {false, true}]
     *                                       [--minimum-approver-count]
     *                                       [--org]
     *                                       [--project]
     *                                       [--repository-id]
     *                                       [--reset-on-source-push {false, true}]
     *                                       [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_approver_count.update = function (policyId) {
        return new az_repos_policy_approver_count_update_command_builder("az repos policy approver-count update", 'az_repos_policy_approver_count_update_command_result', policyId);
    };
    return az_repos_policy_approver_count;
}());
exports.az_repos_policy_approver_count = az_repos_policy_approver_count;
/** Manage build policy. */
var az_repos_policy_build = /** @class */ (function () {
    function az_repos_policy_build() {
    }
    /**
     * Create build policy.
     *
     * Syntax:
     * ```
     * az repos policy build create --blocking {false, true}
     *                              --branch
     *                              --build-definition-id
     *                              --display-name
     *                              --enabled {false, true}
     *                              --manual-queue-only {false, true}
     *                              --queue-on-source-update-only {false, true}
     *                              --repository-id
     *                              --valid-duration
     *                              [--branch-match-type {exact, prefix}]
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--path-filter]
     *                              [--project]
     *                              [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {string} buildDefinitionId Build Definition Id.
     * @param {string} displayName Display name for this build policy to identify the policy. For example: 'Manual queue policy'.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {boolean} manualQueueOnly Whether to allow only manual queue of builds.
     * @param {boolean} queueOnSourceUpdateOnly Queue Only on source update.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     * @param {string} validDuration Policy validity duration (in minutes).
     */
    az_repos_policy_build.create = function (blocking, branch, buildDefinitionId, displayName, enabled, manualQueueOnly, queueOnSourceUpdateOnly, repositoryId, validDuration) {
        return new az_repos_policy_build_create_command_builder("az repos policy build create", 'az_repos_policy_build_create_command_result', blocking, branch, buildDefinitionId, displayName, enabled, manualQueueOnly, queueOnSourceUpdateOnly, repositoryId, validDuration);
    };
    /**
     * Update build policy.
     *
     * Syntax:
     * ```
     * az repos policy build update --id
     *                              [--blocking {false, true}]
     *                              [--branch]
     *                              [--branch-match-type {exact, prefix}]
     *                              [--build-definition-id]
     *                              [--detect {false, true}]
     *                              [--display-name]
     *                              [--enabled {false, true}]
     *                              [--manual-queue-only {false, true}]
     *                              [--org]
     *                              [--path-filter]
     *                              [--project]
     *                              [--queue-on-source-update-only {false, true}]
     *                              [--repository-id]
     *                              [--subscription]
     *                              [--valid-duration]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_build.update = function (policyId) {
        return new az_repos_policy_build_update_command_builder("az repos policy build update", 'az_repos_policy_build_update_command_result', policyId);
    };
    return az_repos_policy_build;
}());
exports.az_repos_policy_build = az_repos_policy_build;
/** Manage case enforcement policy. */
var az_repos_policy_case_enforcement = /** @class */ (function () {
    function az_repos_policy_case_enforcement() {
    }
    /**
     * Create case enforcement policy.
     *
     * Syntax:
     * ```
     * az repos policy case-enforcement create --blocking {false, true}
     *                                         --enabled {false, true}
     *                                         --repository-id
     *                                         [--detect {false, true}]
     *                                         [--org]
     *                                         [--project]
     *                                         [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     */
    az_repos_policy_case_enforcement.create = function (blocking, enabled, repositoryId) {
        return new az_repos_policy_case_enforcement_create_command_builder("az repos policy case-enforcement create", 'az_repos_policy_case_enforcement_create_command_result', blocking, enabled, repositoryId);
    };
    /**
     * Update case enforcement policy.
     *
     * Syntax:
     * ```
     * az repos policy case-enforcement update --id
     *                                         [--blocking {false, true}]
     *                                         [--detect {false, true}]
     *                                         [--enabled {false, true}]
     *                                         [--org]
     *                                         [--project]
     *                                         [--repository-id]
     *                                         [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_case_enforcement.update = function (policyId) {
        return new az_repos_policy_case_enforcement_update_command_builder("az repos policy case-enforcement update", 'az_repos_policy_case_enforcement_update_command_result', policyId);
    };
    return az_repos_policy_case_enforcement;
}());
exports.az_repos_policy_case_enforcement = az_repos_policy_case_enforcement;
/** Manage comment required policy. */
var az_repos_policy_comment_required = /** @class */ (function () {
    function az_repos_policy_comment_required() {
    }
    /**
     * Create comment resolution required policy.
     *
     * Syntax:
     * ```
     * az repos policy comment-required create --blocking {false, true}
     *                                         --branch
     *                                         --enabled {false, true}
     *                                         --repository-id
     *                                         [--branch-match-type {exact, prefix}]
     *                                         [--detect {false, true}]
     *                                         [--org]
     *                                         [--project]
     *                                         [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     */
    az_repos_policy_comment_required.create = function (blocking, branch, enabled, repositoryId) {
        return new az_repos_policy_comment_required_create_command_builder("az repos policy comment-required create", 'az_repos_policy_comment_required_create_command_result', blocking, branch, enabled, repositoryId);
    };
    /**
     * Update comment resolution required policy.
     *
     * Syntax:
     * ```
     * az repos policy comment-required update --id
     *                                         [--blocking {false, true}]
     *                                         [--branch]
     *                                         [--branch-match-type {exact, prefix}]
     *                                         [--detect {false, true}]
     *                                         [--enabled {false, true}]
     *                                         [--org]
     *                                         [--project]
     *                                         [--repository-id]
     *                                         [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_comment_required.update = function (policyId) {
        return new az_repos_policy_comment_required_update_command_builder("az repos policy comment-required update", 'az_repos_policy_comment_required_update_command_result', policyId);
    };
    return az_repos_policy_comment_required;
}());
exports.az_repos_policy_comment_required = az_repos_policy_comment_required;
/** Manage file size policy. */
var az_repos_policy_file_size = /** @class */ (function () {
    function az_repos_policy_file_size() {
    }
    /**
     * Create file size policy.
     *
     * Syntax:
     * ```
     * az repos policy file-size create --blocking {false, true}
     *                                  --enabled {false, true}
     *                                  --maximum-git-blob-size
     *                                  --repository-id
     *                                  --use-uncompressed-size {false, true}
     *                                  [--detect {false, true}]
     *                                  [--org]
     *                                  [--project]
     *                                  [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} maximumGitBlobSize Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     * @param {boolean} useUncompressedSize Whether to use uncompressed size.
     */
    az_repos_policy_file_size.create = function (blocking, enabled, maximumGitBlobSize, repositoryId, useUncompressedSize) {
        return new az_repos_policy_file_size_create_command_builder("az repos policy file-size create", 'az_repos_policy_file_size_create_command_result', blocking, enabled, maximumGitBlobSize, repositoryId, useUncompressedSize);
    };
    /**
     * Update file size policy.
     *
     * Syntax:
     * ```
     * az repos policy file-size update --id
     *                                  [--blocking {false, true}]
     *                                  [--detect {false, true}]
     *                                  [--enabled {false, true}]
     *                                  [--maximum-git-blob-size]
     *                                  [--org]
     *                                  [--project]
     *                                  [--repository-id]
     *                                  [--subscription]
     *                                  [--use-uncompressed-size {false, true}]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_file_size.update = function (policyId) {
        return new az_repos_policy_file_size_update_command_builder("az repos policy file-size update", 'az_repos_policy_file_size_update_command_result', policyId);
    };
    return az_repos_policy_file_size;
}());
exports.az_repos_policy_file_size = az_repos_policy_file_size;
/** Manage merge strategy policy. */
var az_repos_policy_merge_strategy = /** @class */ (function () {
    function az_repos_policy_merge_strategy() {
    }
    /**
     * Create merge strategy policy.
     *
     * Syntax:
     * ```
     * az repos policy merge-strategy create --blocking {false, true}
     *                                       --branch
     *                                       --enabled {false, true}
     *                                       --repository-id
     *                                       [--allow-no-fast-forward {false, true}]
     *                                       [--allow-rebase {false, true}]
     *                                       [--allow-rebase-merge {false, true}]
     *                                       [--allow-squash {false, true}]
     *                                       [--branch-match-type {exact, prefix}]
     *                                       [--detect {false, true}]
     *                                       [--org]
     *                                       [--project]
     *                                       [--subscription]
     *                                       [--use-squash-merge {false, true}]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     */
    az_repos_policy_merge_strategy.create = function (blocking, branch, enabled, repositoryId) {
        return new az_repos_policy_merge_strategy_create_command_builder("az repos policy merge-strategy create", 'az_repos_policy_merge_strategy_create_command_result', blocking, branch, enabled, repositoryId);
    };
    /**
     * Update merge strategy policy.
     *
     * Syntax:
     * ```
     * az repos policy merge-strategy update --id
     *                                       [--allow-no-fast-forward {false, true}]
     *                                       [--allow-rebase {false, true}]
     *                                       [--allow-rebase-merge {false, true}]
     *                                       [--allow-squash {false, true}]
     *                                       [--blocking {false, true}]
     *                                       [--branch]
     *                                       [--branch-match-type {exact, prefix}]
     *                                       [--detect {false, true}]
     *                                       [--enabled {false, true}]
     *                                       [--org]
     *                                       [--project]
     *                                       [--repository-id]
     *                                       [--subscription]
     *                                       [--use-squash-merge {false, true}]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_merge_strategy.update = function (policyId) {
        return new az_repos_policy_merge_strategy_update_command_builder("az repos policy merge-strategy update", 'az_repos_policy_merge_strategy_update_command_result', policyId);
    };
    return az_repos_policy_merge_strategy;
}());
exports.az_repos_policy_merge_strategy = az_repos_policy_merge_strategy;
/** Manage required reviewer policy. */
var az_repos_policy_required_reviewer = /** @class */ (function () {
    function az_repos_policy_required_reviewer() {
    }
    /**
     * Create required reviewer policy.
     *
     * Syntax:
     * ```
     * az repos policy required-reviewer create --blocking {false, true}
     *                                          --branch
     *                                          --enabled {false, true}
     *                                          --message
     *                                          --repository-id
     *                                          --required-reviewer-ids
     *                                          [--branch-match-type {exact, prefix}]
     *                                          [--detect {false, true}]
     *                                          [--org]
     *                                          [--path-filter]
     *                                          [--project]
     *                                          [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} message Message.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     * @param {string} requiredReviewerIds Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com.
     */
    az_repos_policy_required_reviewer.create = function (blocking, branch, enabled, message, repositoryId, requiredReviewerIds) {
        return new az_repos_policy_required_reviewer_create_command_builder("az repos policy required-reviewer create", 'az_repos_policy_required_reviewer_create_command_result', blocking, branch, enabled, message, repositoryId, requiredReviewerIds);
    };
    /**
     * Update required reviewer policy.
     *
     * Syntax:
     * ```
     * az repos policy required-reviewer update --id
     *                                          [--blocking {false, true}]
     *                                          [--branch]
     *                                          [--branch-match-type {exact, prefix}]
     *                                          [--detect {false, true}]
     *                                          [--enabled {false, true}]
     *                                          [--message]
     *                                          [--org]
     *                                          [--path-filter]
     *                                          [--project]
     *                                          [--repository-id]
     *                                          [--required-reviewer-ids]
     *                                          [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_required_reviewer.update = function (policyId) {
        return new az_repos_policy_required_reviewer_update_command_builder("az repos policy required-reviewer update", 'az_repos_policy_required_reviewer_update_command_result', policyId);
    };
    return az_repos_policy_required_reviewer;
}());
exports.az_repos_policy_required_reviewer = az_repos_policy_required_reviewer;
/** Manage work item linking policy. */
var az_repos_policy_work_item_linking = /** @class */ (function () {
    function az_repos_policy_work_item_linking() {
    }
    /**
     * Create work item linking policy.
     *
     * Syntax:
     * ```
     * az repos policy work-item-linking create --blocking {false, true}
     *                                          --branch
     *                                          --enabled {false, true}
     *                                          --repository-id
     *                                          [--branch-match-type {exact, prefix}]
     *                                          [--detect {false, true}]
     *                                          [--org]
     *                                          [--project]
     *                                          [--subscription]
     * ```
     *
     * @param {boolean} blocking Whether the policy should be blocking or not.
     * @param {string} branch Branch on which this policy should be applied. For example: master.
     * @param {boolean} enabled Whether the policy is enabled or not.
     * @param {string} repositoryId Id of the repository on which to apply the policy.
     */
    az_repos_policy_work_item_linking.create = function (blocking, branch, enabled, repositoryId) {
        return new az_repos_policy_work_item_linking_create_command_builder("az repos policy work-item-linking create", 'az_repos_policy_work_item_linking_create_command_result', blocking, branch, enabled, repositoryId);
    };
    /**
     * Update work item linking policy.
     *
     * Syntax:
     * ```
     * az repos policy work-item-linking update --id
     *                                          [--blocking {false, true}]
     *                                          [--branch]
     *                                          [--branch-match-type {exact, prefix}]
     *                                          [--detect {false, true}]
     *                                          [--enabled {false, true}]
     *                                          [--org]
     *                                          [--project]
     *                                          [--repository-id]
     *                                          [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy_work_item_linking.update = function (policyId) {
        return new az_repos_policy_work_item_linking_update_command_builder("az repos policy work-item-linking update", 'az_repos_policy_work_item_linking_update_command_result', policyId);
    };
    return az_repos_policy_work_item_linking;
}());
exports.az_repos_policy_work_item_linking = az_repos_policy_work_item_linking;
/** Manage branch policy. */
var az_repos_policy = /** @class */ (function () {
    function az_repos_policy() {
    }
    /**
     * Create a policy using a configuration file.
     *
     * Syntax:
     * ```
     * az repos policy create --config
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--project]
     *                        [--subscription]
     * ```
     *
     * @param {string} policyConfiguration Local file path for configuration file. Please use / backslash when typing in directory path.
     */
    az_repos_policy.create = function (policyConfiguration) {
        return new az_repos_policy_create_command_builder("az repos policy create", 'az_repos_policy_create_command_result', policyConfiguration);
    };
    /**
     * Delete a policy.
     *
     * Syntax:
     * ```
     * az repos policy delete --id
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--project]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy["delete"] = function (policyId) {
        return new az_repos_policy_delete_command_builder("az repos policy delete", 'az_repos_policy_delete_command_result', policyId);
    };
    /**
     * List all policies in a project.
     *
     * Syntax:
     * ```
     * az repos policy list [--branch]
     *                      [--detect {false, true}]
     *                      [--org]
     *                      [--project]
     *                      [--query-examples]
     *                      [--repository-id]
     *                      [--subscription]
     * ```
     */
    az_repos_policy.list = function () {
        return new az_repos_policy_list_command_builder("az repos policy list", 'az_repos_policy_list_command_result');
    };
    /**
     * Show policy details.
     *
     * Syntax:
     * ```
     * az repos policy show --id
     *                      [--detect {false, true}]
     *                      [--org]
     *                      [--project]
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy.show = function (policyId) {
        return new az_repos_policy_show_command_builder("az repos policy show", 'az_repos_policy_show_command_result', policyId);
    };
    /**
     * Update a policy using a configuration file.
     *
     * Syntax:
     * ```
     * az repos policy update --config
     *                        --id
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--project]
     *                        [--subscription]
     * ```
     *
     * @param {string} policyConfiguration Local file path for configuration file. Please use / backslash when typing in directory path.
     * @param {string} policyId ID of the policy.
     */
    az_repos_policy.update = function (policyConfiguration, policyId) {
        return new az_repos_policy_update_command_builder("az repos policy update", 'az_repos_policy_update_command_result', policyConfiguration, policyId);
    };
    return az_repos_policy;
}());
exports.az_repos_policy = az_repos_policy;
/** Manage pull request policy. */
var az_repos_pr_policy = /** @class */ (function () {
    function az_repos_pr_policy() {
    }
    /**
     * List policies of a pull request.
     *
     * Syntax:
     * ```
     * az repos pr policy list --id
     *                         [--detect {false, true}]
     *                         [--org]
     *                         [--query-examples]
     *                         [--skip]
     *                         [--subscription]
     *                         [--top]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr_policy.list = function (id) {
        return new az_repos_pr_policy_list_command_builder("az repos pr policy list", 'az_repos_pr_policy_list_command_result', id);
    };
    /**
     * Queue an evaluation of a policy for a pull request.
     *
     * Syntax:
     * ```
     * az repos pr policy queue --evaluation-id
     *                          --id
     *                          [--detect {false, true}]
     *                          [--org]
     *                          [--subscription]
     * ```
     *
     * @param {string} evaluationId ID of the policy evaluation to queue.
     * @param {string} id ID of the pull request.
     */
    az_repos_pr_policy.queue = function (evaluationId, id) {
        return new az_repos_pr_policy_queue_command_builder("az repos pr policy queue", 'az_repos_pr_policy_queue_command_result', evaluationId, id);
    };
    return az_repos_pr_policy;
}());
exports.az_repos_pr_policy = az_repos_pr_policy;
/** Manage pull request reviewers. */
var az_repos_pr_reviewer = /** @class */ (function () {
    function az_repos_pr_reviewer() {
    }
    /**
     * Add one or more reviewers to a pull request.
     *
     * Syntax:
     * ```
     * az repos pr reviewer add --id
     *                          --reviewers
     *                          [--detect {false, true}]
     *                          [--org]
     *                          [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     * @param {string} reviewers Users or groups to include as reviewers on a pull request. Space separated.
     */
    az_repos_pr_reviewer.add = function (id, reviewers) {
        return new az_repos_pr_reviewer_add_command_builder("az repos pr reviewer add", 'az_repos_pr_reviewer_add_command_result', id, reviewers);
    };
    /**
     * List reviewers of a pull request.
     *
     * Syntax:
     * ```
     * az repos pr reviewer list --id
     *                           [--detect {false, true}]
     *                           [--org]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr_reviewer.list = function (id) {
        return new az_repos_pr_reviewer_list_command_builder("az repos pr reviewer list", 'az_repos_pr_reviewer_list_command_result', id);
    };
    /**
     * Remove one or more reviewers from a pull request.
     *
     * Syntax:
     * ```
     * az repos pr reviewer remove --id
     *                             --reviewers
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     * @param {string} reviewers Users or groups to remove as reviewers on a pull request. Space separated.
     */
    az_repos_pr_reviewer.remove = function (id, reviewers) {
        return new az_repos_pr_reviewer_remove_command_builder("az repos pr reviewer remove", 'az_repos_pr_reviewer_remove_command_result', id, reviewers);
    };
    return az_repos_pr_reviewer;
}());
exports.az_repos_pr_reviewer = az_repos_pr_reviewer;
/** Manage work items associated with pull requests. */
var az_repos_pr_work_item = /** @class */ (function () {
    function az_repos_pr_work_item() {
    }
    /**
     * Link one or more work items to a pull request.
     *
     * Syntax:
     * ```
     * az repos pr work-item add --id
     *                           --work-items
     *                           [--detect {false, true}]
     *                           [--org]
     *                           [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     * @param {string} workItems IDs of the work items to link. Space separated.
     */
    az_repos_pr_work_item.add = function (id, workItems) {
        return new az_repos_pr_work_item_add_command_builder("az repos pr work-item add", 'az_repos_pr_work_item_add_command_result', id, workItems);
    };
    /**
     * List linked work items for a pull request.
     *
     * Syntax:
     * ```
     * az repos pr work-item list --id
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr_work_item.list = function (id) {
        return new az_repos_pr_work_item_list_command_builder("az repos pr work-item list", 'az_repos_pr_work_item_list_command_result', id);
    };
    /**
     * Unlink one or more work items from a pull request.
     *
     * Syntax:
     * ```
     * az repos pr work-item remove --id
     *                              --work-items
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     * @param {string} workItems IDs of the work items to unlink. Space separated.
     */
    az_repos_pr_work_item.remove = function (id, workItems) {
        return new az_repos_pr_work_item_remove_command_builder("az repos pr work-item remove", 'az_repos_pr_work_item_remove_command_result', id, workItems);
    };
    return az_repos_pr_work_item;
}());
exports.az_repos_pr_work_item = az_repos_pr_work_item;
/** Manage pull requests. */
var az_repos_pr = /** @class */ (function () {
    function az_repos_pr() {
    }
    /**
     * Checkout the PR source branch locally, if no local changes are present.
     *
     * Syntax:
     * ```
     * az repos pr checkout --id
     *                      [--remote-name]
     *                      [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr.checkout = function (id) {
        return new az_repos_pr_checkout_command_builder("az repos pr checkout", 'az_repos_pr_checkout_command_result', id);
    };
    /**
     * Create a pull request.
     *
     * Syntax:
     * ```
     * az repos pr create [--auto-complete {false, true}]
     *                    [--bypass-policy {false, true}]
     *                    [--bypass-policy-reason]
     *                    [--delete-source-branch {false, true}]
     *                    [--description]
     *                    [--detect {false, true}]
     *                    [--draft {false, true}]
     *                    [--merge-commit-message]
     *                    [--open]
     *                    [--org]
     *                    [--project]
     *                    [--repository]
     *                    [--reviewers]
     *                    [--source-branch]
     *                    [--squash {false, true}]
     *                    [--subscription]
     *                    [--target-branch]
     *                    [--title]
     *                    [--transition-work-items {false, true}]
     *                    [--work-items]
     * ```
     */
    az_repos_pr.create = function () {
        return new az_repos_pr_create_command_builder("az repos pr create", 'az_repos_pr_create_command_result');
    };
    /**
     * List pull requests.
     *
     * Syntax:
     * ```
     * az repos pr list [--creator]
     *                  [--detect {false, true}]
     *                  [--include-links]
     *                  [--org]
     *                  [--project]
     *                  [--query-examples]
     *                  [--repository]
     *                  [--reviewer]
     *                  [--skip]
     *                  [--source-branch]
     *                  [--status {abandoned, active, all, completed}]
     *                  [--subscription]
     *                  [--target-branch]
     *                  [--top]
     * ```
     */
    az_repos_pr.list = function () {
        return new az_repos_pr_list_command_builder("az repos pr list", 'az_repos_pr_list_command_result');
    };
    /**
     * Vote on a pull request.
     *
     * Syntax:
     * ```
     * az repos pr set-vote --id
     *                      --vote {approve, approve-with-suggestions, reject, reset, wait-for-author}
     *                      [--detect {false, true}]
     *                      [--org]
     *                      [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     * @param {'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'} vote New vote value for the pull request.
     */
    az_repos_pr.set_vote = function (id, vote) {
        return new az_repos_pr_set_vote_command_builder("az repos pr set-vote", 'az_repos_pr_set_vote_command_result', id, vote);
    };
    /**
     * Get the details of a pull request.
     *
     * Syntax:
     * ```
     * az repos pr show --id
     *                  [--detect {false, true}]
     *                  [--open]
     *                  [--org]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr.show = function (id) {
        return new az_repos_pr_show_command_builder("az repos pr show", 'az_repos_pr_show_command_result', id);
    };
    /**
     * Update a pull request.
     *
     * Syntax:
     * ```
     * az repos pr update --id
     *                    [--auto-complete {false, true}]
     *                    [--bypass-policy {false, true}]
     *                    [--bypass-policy-reason]
     *                    [--delete-source-branch {false, true}]
     *                    [--description]
     *                    [--detect {false, true}]
     *                    [--draft {false, true}]
     *                    [--merge-commit-message]
     *                    [--org]
     *                    [--squash {false, true}]
     *                    [--status {abandoned, active, completed}]
     *                    [--subscription]
     *                    [--title]
     *                    [--transition-work-items {false, true}]
     * ```
     *
     * @param {string} id ID of the pull request.
     */
    az_repos_pr.update = function (id) {
        return new az_repos_pr_update_command_builder("az repos pr update", 'az_repos_pr_update_command_result', id);
    };
    return az_repos_pr;
}());
exports.az_repos_pr = az_repos_pr;
/** Manage Git references. */
var az_repos_ref = /** @class */ (function () {
    function az_repos_ref() {
    }
    /**
     * Create a reference.
     *
     * Syntax:
     * ```
     * az repos ref create --name
     *                     --object-id
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--repository]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of the reference to create (example: heads/my_branch or tags/my_tag).
     * @param {string} objectId Id of the object to create the reference from.
     */
    az_repos_ref.create = function (name, objectId) {
        return new az_repos_ref_create_command_builder("az repos ref create", 'az_repos_ref_create_command_result', name, objectId);
    };
    /**
     * Delete a reference.
     *
     * Syntax:
     * ```
     * az repos ref delete --name
     *                     --object-id
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--repository]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of the reference to delete (example: heads/my_branch).
     * @param {string} objectId Id of the reference to delete.
     */
    az_repos_ref["delete"] = function (name, objectId) {
        return new az_repos_ref_delete_command_builder("az repos ref delete", 'az_repos_ref_delete_command_result', name, objectId);
    };
    /**
     * List the references.
     *
     * Syntax:
     * ```
     * az repos ref list [--detect {false, true}]
     *                   [--filter]
     *                   [--org]
     *                   [--project]
     *                   [--query-examples]
     *                   [--repository]
     *                   [--subscription]
     * ```
     */
    az_repos_ref.list = function () {
        return new az_repos_ref_list_command_builder("az repos ref list", 'az_repos_ref_list_command_result');
    };
    /**
     * Lock a reference.
     *
     * Syntax:
     * ```
     * az repos ref lock --name
     *                   [--detect {false, true}]
     *                   [--org]
     *                   [--project]
     *                   [--repository]
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of the reference to update (example: heads/my_branch).
     */
    az_repos_ref.lock = function (name) {
        return new az_repos_ref_lock_command_builder("az repos ref lock", 'az_repos_ref_lock_command_result', name);
    };
    /**
     * Unlock a reference.
     *
     * Syntax:
     * ```
     * az repos ref unlock --name
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--repository]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of the reference to update (example: heads/my_branch).
     */
    az_repos_ref.unlock = function (name) {
        return new az_repos_ref_unlock_command_builder("az repos ref unlock", 'az_repos_ref_unlock_command_result', name);
    };
    return az_repos_ref;
}());
exports.az_repos_ref = az_repos_ref;
/** Manage Azure Repos. */
var az_repos = /** @class */ (function () {
    function az_repos() {
    }
    /**
     * Create a Git repository in a team project.
     *
     * Syntax:
     * ```
     * az repos create --name
     *                 [--detect {false, true}]
     *                 [--open]
     *                 [--org]
     *                 [--project]
     *                 [--subscription]
     * ```
     *
     * @param {string} name Name for the new repository.
     */
    az_repos.create = function (name) {
        return new az_repos_create_command_builder("az repos create", 'az_repos_create_command_result', name);
    };
    /**
     * Delete a Git repository in a team project.
     *
     * Syntax:
     * ```
     * az repos delete --id
     *                 [--detect {false, true}]
     *                 [--org]
     *                 [--project]
     *                 [--subscription]
     *                 [--yes]
     * ```
     *
     * @param {string} id ID of the repository.
     */
    az_repos["delete"] = function (id) {
        return new az_repos_delete_command_builder("az repos delete", 'az_repos_delete_command_result', id);
    };
    /**
     * List Git repositories of a team project.
     *
     * Syntax:
     * ```
     * az repos list [--detect {false, true}]
     *               [--org]
     *               [--project]
     *               [--query-examples]
     *               [--subscription]
     * ```
     */
    az_repos.list = function () {
        return new az_repos_list_command_builder("az repos list", 'az_repos_list_command_result');
    };
    /**
     * Get the details of a Git repository.
     *
     * Syntax:
     * ```
     * az repos show --repository
     *               [--detect {false, true}]
     *               [--open]
     *               [--org]
     *               [--project]
     *               [--query-examples]
     *               [--subscription]
     * ```
     *
     * @param {string} repository Name or ID of the repository.
     */
    az_repos.show = function (repository) {
        return new az_repos_show_command_builder("az repos show", 'az_repos_show_command_result', repository);
    };
    /**
     * Update the Git repository.
     *
     * Syntax:
     * ```
     * az repos update --repository
     *                 [--default-branch]
     *                 [--detect {false, true}]
     *                 [--name]
     *                 [--org]
     *                 [--project]
     *                 [--subscription]
     * ```
     *
     * @param {string} repository Name or ID of the repository.
     */
    az_repos.update = function (repository) {
        return new az_repos_update_command_builder("az repos update", 'az_repos_update_command_result', repository);
    };
    return az_repos;
}());
exports.az_repos = az_repos;
/**
 * Create a git import request.
 *
 * Syntax:
 * ```
 * az repos import create --git-source-url
 *                        [--detect {false, true}]
 *                        [--git-service-endpoint-id]
 *                        [--org]
 *                        [--project]
 *                        [--repository]
 *                        [--requires-authorization]
 *                        [--subscription]
 *                        [--user-name]
 * ```
 *
 * @param {string} gitSourceUrl Url of the source git repository.
 */
var az_repos_import_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_import_create_command_builder, _super);
    function az_repos_import_create_command_builder(commandPath, resultDataTypeName, gitSourceUrl) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.gitSourceUrl(gitSourceUrl);
        return _this;
    }
    /** Url of the source git repository. */
    az_repos_import_create_command_builder.prototype.gitSourceUrl = function (value) {
        this.setFlag("--git-source-url", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_import_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Service Endpoint for connection to external endpoint. */
    az_repos_import_create_command_builder.prototype.gitServiceEndpointId = function (value) {
        this.setFlag("--git-service-endpoint-id", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_import_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_import_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository to create the import request in. */
    az_repos_import_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Flag to tell if source git repository is private. */
    az_repos_import_create_command_builder.prototype.requiresAuthorization = function (value) {
        this.setFlag("--requires-authorization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_import_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** User name in case source git repository is private. */
    az_repos_import_create_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    return az_repos_import_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Create approver count policy.
 *
 * Syntax:
 * ```
 * az repos policy approver-count create --allow-downvotes {false, true}
 *                                       --blocking {false, true}
 *                                       --branch
 *                                       --creator-vote-counts {false, true}
 *                                       --enabled {false, true}
 *                                       --minimum-approver-count
 *                                       --repository-id
 *                                       --reset-on-source-push {false, true}
 *                                       [--branch-match-type {exact, prefix}]
 *                                       [--detect {false, true}]
 *                                       [--org]
 *                                       [--project]
 *                                       [--subscription]
 * ```
 *
 * @param {boolean} allowDownvotes Whether to allow downvotes or not.
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {boolean} creatorVoteCounts Whether the creator's vote counts or not.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} minimumApproverCount Minimum number of approvers required. For example: 2.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 * @param {boolean} resetOnSourcePush Whether to reset source on push.
 */
var az_repos_policy_approver_count_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_approver_count_create_command_builder, _super);
    function az_repos_policy_approver_count_create_command_builder(commandPath, resultDataTypeName, allowDownvotes, blocking, branch, creatorVoteCounts, enabled, minimumApproverCount, repositoryId, resetOnSourcePush) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowDownvotes(allowDownvotes);
        _this.blocking(blocking);
        _this.branch(branch);
        _this.creatorVoteCounts(creatorVoteCounts);
        _this.enabled(enabled);
        _this.minimumApproverCount(minimumApproverCount);
        _this.repositoryId(repositoryId);
        _this.resetOnSourcePush(resetOnSourcePush);
        return _this;
    }
    /** Whether to allow downvotes or not. */
    az_repos_policy_approver_count_create_command_builder.prototype.allowDownvotes = function (value) {
        this.setFlag("--allow-downvotes", value.toString());
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_approver_count_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_approver_count_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Whether the creator's vote counts or not. */
    az_repos_policy_approver_count_create_command_builder.prototype.creatorVoteCounts = function (value) {
        this.setFlag("--creator-vote-counts", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_approver_count_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Minimum number of approvers required. For example: 2. */
    az_repos_policy_approver_count_create_command_builder.prototype.minimumApproverCount = function (value) {
        this.setFlag("--minimum-approver-count", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_approver_count_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Whether to reset source on push. */
    az_repos_policy_approver_count_create_command_builder.prototype.resetOnSourcePush = function (value) {
        this.setFlag("--reset-on-source-push", value.toString());
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_approver_count_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_approver_count_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_approver_count_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_approver_count_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_approver_count_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_approver_count_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update approver count policy.
 *
 * Syntax:
 * ```
 * az repos policy approver-count update --id
 *                                       [--allow-downvotes {false, true}]
 *                                       [--blocking {false, true}]
 *                                       [--branch]
 *                                       [--branch-match-type {exact, prefix}]
 *                                       [--creator-vote-counts {false, true}]
 *                                       [--detect {false, true}]
 *                                       [--enabled {false, true}]
 *                                       [--minimum-approver-count]
 *                                       [--org]
 *                                       [--project]
 *                                       [--repository-id]
 *                                       [--reset-on-source-push {false, true}]
 *                                       [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_approver_count_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_approver_count_update_command_builder, _super);
    function az_repos_policy_approver_count_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_approver_count_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether to allow downvotes or not. */
    az_repos_policy_approver_count_update_command_builder.prototype.allowDownvotes = function (value) {
        this.setFlag("--allow-downvotes", value.toString());
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_approver_count_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_approver_count_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_approver_count_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Whether the creator's vote counts or not. */
    az_repos_policy_approver_count_update_command_builder.prototype.creatorVoteCounts = function (value) {
        this.setFlag("--creator-vote-counts", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_approver_count_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_approver_count_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Minimum number of approvers required. For example: 2. */
    az_repos_policy_approver_count_update_command_builder.prototype.minimumApproverCount = function (value) {
        this.setFlag("--minimum-approver-count", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_approver_count_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_approver_count_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_approver_count_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Whether to reset source on push. */
    az_repos_policy_approver_count_update_command_builder.prototype.resetOnSourcePush = function (value) {
        this.setFlag("--reset-on-source-push", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_approver_count_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_approver_count_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create build policy.
 *
 * Syntax:
 * ```
 * az repos policy build create --blocking {false, true}
 *                              --branch
 *                              --build-definition-id
 *                              --display-name
 *                              --enabled {false, true}
 *                              --manual-queue-only {false, true}
 *                              --queue-on-source-update-only {false, true}
 *                              --repository-id
 *                              --valid-duration
 *                              [--branch-match-type {exact, prefix}]
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--path-filter]
 *                              [--project]
 *                              [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {string} buildDefinitionId Build Definition Id.
 * @param {string} displayName Display name for this build policy to identify the policy. For example: 'Manual queue policy'.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {boolean} manualQueueOnly Whether to allow only manual queue of builds.
 * @param {boolean} queueOnSourceUpdateOnly Queue Only on source update.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 * @param {string} validDuration Policy validity duration (in minutes).
 */
var az_repos_policy_build_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_build_create_command_builder, _super);
    function az_repos_policy_build_create_command_builder(commandPath, resultDataTypeName, blocking, branch, buildDefinitionId, displayName, enabled, manualQueueOnly, queueOnSourceUpdateOnly, repositoryId, validDuration) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.branch(branch);
        _this.buildDefinitionId(buildDefinitionId);
        _this.displayName(displayName);
        _this.enabled(enabled);
        _this.manualQueueOnly(manualQueueOnly);
        _this.queueOnSourceUpdateOnly(queueOnSourceUpdateOnly);
        _this.repositoryId(repositoryId);
        _this.validDuration(validDuration);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_build_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_build_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Build Definition Id. */
    az_repos_policy_build_create_command_builder.prototype.buildDefinitionId = function (value) {
        this.setFlag("--build-definition-id", value);
        return this;
    };
    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    az_repos_policy_build_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_build_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Whether to allow only manual queue of builds. */
    az_repos_policy_build_create_command_builder.prototype.manualQueueOnly = function (value) {
        this.setFlag("--manual-queue-only", value.toString());
        return this;
    };
    /** Queue Only on source update. */
    az_repos_policy_build_create_command_builder.prototype.queueOnSourceUpdateOnly = function (value) {
        this.setFlag("--queue-on-source-update-only", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_build_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Policy validity duration (in minutes). */
    az_repos_policy_build_create_command_builder.prototype.validDuration = function (value) {
        this.setFlag("--valid-duration", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_build_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_build_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_build_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    az_repos_policy_build_create_command_builder.prototype.pathFilter = function (value) {
        this.setFlag("--path-filter", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_build_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_build_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_build_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update build policy.
 *
 * Syntax:
 * ```
 * az repos policy build update --id
 *                              [--blocking {false, true}]
 *                              [--branch]
 *                              [--branch-match-type {exact, prefix}]
 *                              [--build-definition-id]
 *                              [--detect {false, true}]
 *                              [--display-name]
 *                              [--enabled {false, true}]
 *                              [--manual-queue-only {false, true}]
 *                              [--org]
 *                              [--path-filter]
 *                              [--project]
 *                              [--queue-on-source-update-only {false, true}]
 *                              [--repository-id]
 *                              [--subscription]
 *                              [--valid-duration]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_build_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_build_update_command_builder, _super);
    function az_repos_policy_build_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_build_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_build_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_build_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_build_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Build Definition Id. */
    az_repos_policy_build_update_command_builder.prototype.buildDefinitionId = function (value) {
        this.setFlag("--build-definition-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_build_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    az_repos_policy_build_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_build_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Whether to allow only manual queue of builds. */
    az_repos_policy_build_update_command_builder.prototype.manualQueueOnly = function (value) {
        this.setFlag("--manual-queue-only", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_build_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    az_repos_policy_build_update_command_builder.prototype.pathFilter = function (value) {
        this.setFlag("--path-filter", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_build_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Queue Only on source update. */
    az_repos_policy_build_update_command_builder.prototype.queueOnSourceUpdateOnly = function (value) {
        this.setFlag("--queue-on-source-update-only", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_build_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_build_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Policy validity duration (in minutes). */
    az_repos_policy_build_update_command_builder.prototype.validDuration = function (value) {
        this.setFlag("--valid-duration", value);
        return this;
    };
    return az_repos_policy_build_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create case enforcement policy.
 *
 * Syntax:
 * ```
 * az repos policy case-enforcement create --blocking {false, true}
 *                                         --enabled {false, true}
 *                                         --repository-id
 *                                         [--detect {false, true}]
 *                                         [--org]
 *                                         [--project]
 *                                         [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 */
var az_repos_policy_case_enforcement_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_case_enforcement_create_command_builder, _super);
    function az_repos_policy_case_enforcement_create_command_builder(commandPath, resultDataTypeName, blocking, enabled, repositoryId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.enabled(enabled);
        _this.repositoryId(repositoryId);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_case_enforcement_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_case_enforcement_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update case enforcement policy.
 *
 * Syntax:
 * ```
 * az repos policy case-enforcement update --id
 *                                         [--blocking {false, true}]
 *                                         [--detect {false, true}]
 *                                         [--enabled {false, true}]
 *                                         [--org]
 *                                         [--project]
 *                                         [--repository-id]
 *                                         [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_case_enforcement_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_case_enforcement_update_command_builder, _super);
    function az_repos_policy_case_enforcement_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_case_enforcement_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_case_enforcement_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create comment resolution required policy.
 *
 * Syntax:
 * ```
 * az repos policy comment-required create --blocking {false, true}
 *                                         --branch
 *                                         --enabled {false, true}
 *                                         --repository-id
 *                                         [--branch-match-type {exact, prefix}]
 *                                         [--detect {false, true}]
 *                                         [--org]
 *                                         [--project]
 *                                         [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 */
var az_repos_policy_comment_required_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_comment_required_create_command_builder, _super);
    function az_repos_policy_comment_required_create_command_builder(commandPath, resultDataTypeName, blocking, branch, enabled, repositoryId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.branch(branch);
        _this.enabled(enabled);
        _this.repositoryId(repositoryId);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_comment_required_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_comment_required_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_comment_required_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_comment_required_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_comment_required_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_comment_required_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_comment_required_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_comment_required_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_comment_required_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_comment_required_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update comment resolution required policy.
 *
 * Syntax:
 * ```
 * az repos policy comment-required update --id
 *                                         [--blocking {false, true}]
 *                                         [--branch]
 *                                         [--branch-match-type {exact, prefix}]
 *                                         [--detect {false, true}]
 *                                         [--enabled {false, true}]
 *                                         [--org]
 *                                         [--project]
 *                                         [--repository-id]
 *                                         [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_comment_required_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_comment_required_update_command_builder, _super);
    function az_repos_policy_comment_required_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_comment_required_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_comment_required_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_comment_required_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_comment_required_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_comment_required_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_comment_required_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_comment_required_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_comment_required_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_comment_required_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_comment_required_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_comment_required_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create file size policy.
 *
 * Syntax:
 * ```
 * az repos policy file-size create --blocking {false, true}
 *                                  --enabled {false, true}
 *                                  --maximum-git-blob-size
 *                                  --repository-id
 *                                  --use-uncompressed-size {false, true}
 *                                  [--detect {false, true}]
 *                                  [--org]
 *                                  [--project]
 *                                  [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} maximumGitBlobSize Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 * @param {boolean} useUncompressedSize Whether to use uncompressed size.
 */
var az_repos_policy_file_size_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_file_size_create_command_builder, _super);
    function az_repos_policy_file_size_create_command_builder(commandPath, resultDataTypeName, blocking, enabled, maximumGitBlobSize, repositoryId, useUncompressedSize) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.enabled(enabled);
        _this.maximumGitBlobSize(maximumGitBlobSize);
        _this.repositoryId(repositoryId);
        _this.useUncompressedSize(useUncompressedSize);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_file_size_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_file_size_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    az_repos_policy_file_size_create_command_builder.prototype.maximumGitBlobSize = function (value) {
        this.setFlag("--maximum-git-blob-size", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_file_size_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Whether to use uncompressed size. */
    az_repos_policy_file_size_create_command_builder.prototype.useUncompressedSize = function (value) {
        this.setFlag("--use-uncompressed-size", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_file_size_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_file_size_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_file_size_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_file_size_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_file_size_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update file size policy.
 *
 * Syntax:
 * ```
 * az repos policy file-size update --id
 *                                  [--blocking {false, true}]
 *                                  [--detect {false, true}]
 *                                  [--enabled {false, true}]
 *                                  [--maximum-git-blob-size]
 *                                  [--org]
 *                                  [--project]
 *                                  [--repository-id]
 *                                  [--subscription]
 *                                  [--use-uncompressed-size {false, true}]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_file_size_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_file_size_update_command_builder, _super);
    function az_repos_policy_file_size_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_file_size_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_file_size_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_file_size_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_file_size_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    az_repos_policy_file_size_update_command_builder.prototype.maximumGitBlobSize = function (value) {
        this.setFlag("--maximum-git-blob-size", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_file_size_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_file_size_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_file_size_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_file_size_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether to use uncompressed size. */
    az_repos_policy_file_size_update_command_builder.prototype.useUncompressedSize = function (value) {
        this.setFlag("--use-uncompressed-size", value.toString());
        return this;
    };
    return az_repos_policy_file_size_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create merge strategy policy.
 *
 * Syntax:
 * ```
 * az repos policy merge-strategy create --blocking {false, true}
 *                                       --branch
 *                                       --enabled {false, true}
 *                                       --repository-id
 *                                       [--allow-no-fast-forward {false, true}]
 *                                       [--allow-rebase {false, true}]
 *                                       [--allow-rebase-merge {false, true}]
 *                                       [--allow-squash {false, true}]
 *                                       [--branch-match-type {exact, prefix}]
 *                                       [--detect {false, true}]
 *                                       [--org]
 *                                       [--project]
 *                                       [--subscription]
 *                                       [--use-squash-merge {false, true}]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 */
var az_repos_policy_merge_strategy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_merge_strategy_create_command_builder, _super);
    function az_repos_policy_merge_strategy_create_command_builder(commandPath, resultDataTypeName, blocking, branch, enabled, repositoryId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.branch(branch);
        _this.enabled(enabled);
        _this.repositoryId(repositoryId);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.allowNoFastForward = function (value) {
        this.setFlag("--allow-no-fast-forward", value.toString());
        return this;
    };
    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.allowRebase = function (value) {
        this.setFlag("--allow-rebase", value.toString());
        return this;
    };
    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.allowRebaseMerge = function (value) {
        this.setFlag("--allow-rebase-merge", value.toString());
        return this;
    };
    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.allowSquash = function (value) {
        this.setFlag("--allow-squash", value.toString());
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    az_repos_policy_merge_strategy_create_command_builder.prototype.useSquashMerge = function (value) {
        this.setFlag("--use-squash-merge", value.toString());
        return this;
    };
    return az_repos_policy_merge_strategy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update merge strategy policy.
 *
 * Syntax:
 * ```
 * az repos policy merge-strategy update --id
 *                                       [--allow-no-fast-forward {false, true}]
 *                                       [--allow-rebase {false, true}]
 *                                       [--allow-rebase-merge {false, true}]
 *                                       [--allow-squash {false, true}]
 *                                       [--blocking {false, true}]
 *                                       [--branch]
 *                                       [--branch-match-type {exact, prefix}]
 *                                       [--detect {false, true}]
 *                                       [--enabled {false, true}]
 *                                       [--org]
 *                                       [--project]
 *                                       [--repository-id]
 *                                       [--subscription]
 *                                       [--use-squash-merge {false, true}]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_merge_strategy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_merge_strategy_update_command_builder, _super);
    function az_repos_policy_merge_strategy_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.allowNoFastForward = function (value) {
        this.setFlag("--allow-no-fast-forward", value.toString());
        return this;
    };
    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.allowRebase = function (value) {
        this.setFlag("--allow-rebase", value.toString());
        return this;
    };
    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.allowRebaseMerge = function (value) {
        this.setFlag("--allow-rebase-merge", value.toString());
        return this;
    };
    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.allowSquash = function (value) {
        this.setFlag("--allow-squash", value.toString());
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    az_repos_policy_merge_strategy_update_command_builder.prototype.useSquashMerge = function (value) {
        this.setFlag("--use-squash-merge", value.toString());
        return this;
    };
    return az_repos_policy_merge_strategy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create required reviewer policy.
 *
 * Syntax:
 * ```
 * az repos policy required-reviewer create --blocking {false, true}
 *                                          --branch
 *                                          --enabled {false, true}
 *                                          --message
 *                                          --repository-id
 *                                          --required-reviewer-ids
 *                                          [--branch-match-type {exact, prefix}]
 *                                          [--detect {false, true}]
 *                                          [--org]
 *                                          [--path-filter]
 *                                          [--project]
 *                                          [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} message Message.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 * @param {string} requiredReviewerIds Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com.
 */
var az_repos_policy_required_reviewer_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_required_reviewer_create_command_builder, _super);
    function az_repos_policy_required_reviewer_create_command_builder(commandPath, resultDataTypeName, blocking, branch, enabled, message, repositoryId, requiredReviewerIds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.branch(branch);
        _this.enabled(enabled);
        _this.message(message);
        _this.repositoryId(repositoryId);
        _this.requiredReviewerIds(requiredReviewerIds);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Message. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.message = function (value) {
        this.setFlag("--message", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.requiredReviewerIds = function (value) {
        this.setFlag("--required-reviewer-ids", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.pathFilter = function (value) {
        this.setFlag("--path-filter", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_required_reviewer_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_required_reviewer_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update required reviewer policy.
 *
 * Syntax:
 * ```
 * az repos policy required-reviewer update --id
 *                                          [--blocking {false, true}]
 *                                          [--branch]
 *                                          [--branch-match-type {exact, prefix}]
 *                                          [--detect {false, true}]
 *                                          [--enabled {false, true}]
 *                                          [--message]
 *                                          [--org]
 *                                          [--path-filter]
 *                                          [--project]
 *                                          [--repository-id]
 *                                          [--required-reviewer-ids]
 *                                          [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_required_reviewer_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_required_reviewer_update_command_builder, _super);
    function az_repos_policy_required_reviewer_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Message. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.message = function (value) {
        this.setFlag("--message", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.pathFilter = function (value) {
        this.setFlag("--path-filter", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.requiredReviewerIds = function (value) {
        this.setFlag("--required-reviewer-ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_required_reviewer_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_required_reviewer_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create work item linking policy.
 *
 * Syntax:
 * ```
 * az repos policy work-item-linking create --blocking {false, true}
 *                                          --branch
 *                                          --enabled {false, true}
 *                                          --repository-id
 *                                          [--branch-match-type {exact, prefix}]
 *                                          [--detect {false, true}]
 *                                          [--org]
 *                                          [--project]
 *                                          [--subscription]
 * ```
 *
 * @param {boolean} blocking Whether the policy should be blocking or not.
 * @param {string} branch Branch on which this policy should be applied. For example: master.
 * @param {boolean} enabled Whether the policy is enabled or not.
 * @param {string} repositoryId Id of the repository on which to apply the policy.
 */
var az_repos_policy_work_item_linking_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_work_item_linking_create_command_builder, _super);
    function az_repos_policy_work_item_linking_create_command_builder(commandPath, resultDataTypeName, blocking, branch, enabled, repositoryId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.blocking(blocking);
        _this.branch(branch);
        _this.enabled(enabled);
        _this.repositoryId(repositoryId);
        return _this;
    }
    /** Whether the policy should be blocking or not. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_work_item_linking_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_work_item_linking_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Update work item linking policy.
 *
 * Syntax:
 * ```
 * az repos policy work-item-linking update --id
 *                                          [--blocking {false, true}]
 *                                          [--branch]
 *                                          [--branch-match-type {exact, prefix}]
 *                                          [--detect {false, true}]
 *                                          [--enabled {false, true}]
 *                                          [--org]
 *                                          [--project]
 *                                          [--repository-id]
 *                                          [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_work_item_linking_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_work_item_linking_update_command_builder, _super);
    function az_repos_policy_work_item_linking_update_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Whether the policy should be blocking or not. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.blocking = function (value) {
        this.setFlag("--blocking", value.toString());
        return this;
    };
    /** Branch on which this policy should be applied. For example: master. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.branchMatchType = function (value) {
        this.setFlag("--branch-match-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether the policy is enabled or not. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the repository on which to apply the policy. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_work_item_linking_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_work_item_linking_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a policy using a configuration file.
 *
 * Syntax:
 * ```
 * az repos policy create --config
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--project]
 *                        [--subscription]
 * ```
 *
 * @param {string} policyConfiguration Local file path for configuration file. Please use / backslash when typing in directory path.
 */
var az_repos_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_create_command_builder, _super);
    function az_repos_policy_create_command_builder(commandPath, resultDataTypeName, policyConfiguration) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyConfiguration(policyConfiguration);
        return _this;
    }
    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    az_repos_policy_create_command_builder.prototype.policyConfiguration = function (value) {
        this.setFlag("--policy-configuration", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a policy.
 *
 * Syntax:
 * ```
 * az repos policy delete --id
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--project]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_delete_command_builder, _super);
    function az_repos_policy_delete_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_delete_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_repos_policy_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_repos_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all policies in a project.
 *
 * Syntax:
 * ```
 * az repos policy list [--branch]
 *                      [--detect {false, true}]
 *                      [--org]
 *                      [--project]
 *                      [--query-examples]
 *                      [--repository-id]
 *                      [--subscription]
 * ```
 */
var az_repos_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_list_command_builder, _super);
    function az_repos_policy_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: --branch master. */
    az_repos_policy_list_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** ID of the repository to filter results by exact match of the repository ID. For example --repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345. */
    az_repos_policy_list_command_builder.prototype.repositoryId = function (value) {
        this.setFlag("--repository-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show policy details.
 *
 * Syntax:
 * ```
 * az repos policy show --id
 *                      [--detect {false, true}]
 *                      [--org]
 *                      [--project]
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_show_command_builder, _super);
    function az_repos_policy_show_command_builder(commandPath, resultDataTypeName, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyId(policyId);
        return _this;
    }
    /** ID of the policy. */
    az_repos_policy_show_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a policy using a configuration file.
 *
 * Syntax:
 * ```
 * az repos policy update --config
 *                        --id
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--project]
 *                        [--subscription]
 * ```
 *
 * @param {string} policyConfiguration Local file path for configuration file. Please use / backslash when typing in directory path.
 * @param {string} policyId ID of the policy.
 */
var az_repos_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_policy_update_command_builder, _super);
    function az_repos_policy_update_command_builder(commandPath, resultDataTypeName, policyConfiguration, policyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyConfiguration(policyConfiguration);
        _this.policyId(policyId);
        return _this;
    }
    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    az_repos_policy_update_command_builder.prototype.policyConfiguration = function (value) {
        this.setFlag("--policy-configuration", value);
        return this;
    };
    /** ID of the policy. */
    az_repos_policy_update_command_builder.prototype.policyId = function (value) {
        this.setFlag("--policy-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_policy_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_policy_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_policy_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List policies of a pull request.
 *
 * Syntax:
 * ```
 * az repos pr policy list --id
 *                         [--detect {false, true}]
 *                         [--org]
 *                         [--query-examples]
 *                         [--skip]
 *                         [--subscription]
 *                         [--top]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_policy_list_command_builder, _super);
    function az_repos_pr_policy_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_policy_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_policy_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_policy_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_pr_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Number of policies to skip. */
    az_repos_pr_policy_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of policies to list. */
    az_repos_pr_policy_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_repos_pr_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Queue an evaluation of a policy for a pull request.
 *
 * Syntax:
 * ```
 * az repos pr policy queue --evaluation-id
 *                          --id
 *                          [--detect {false, true}]
 *                          [--org]
 *                          [--subscription]
 * ```
 *
 * @param {string} evaluationId ID of the policy evaluation to queue.
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_policy_queue_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_policy_queue_command_builder, _super);
    function az_repos_pr_policy_queue_command_builder(commandPath, resultDataTypeName, evaluationId, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.evaluationId(evaluationId);
        _this.id(id);
        return _this;
    }
    /** ID of the policy evaluation to queue. */
    az_repos_pr_policy_queue_command_builder.prototype.evaluationId = function (value) {
        this.setFlag("--evaluation-id", value);
        return this;
    };
    /** ID of the pull request. */
    az_repos_pr_policy_queue_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_policy_queue_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_policy_queue_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_policy_queue_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_policy_queue_command_builder;
}(base_1.CommandBuilder));
/**
 * Add one or more reviewers to a pull request.
 *
 * Syntax:
 * ```
 * az repos pr reviewer add --id
 *                          --reviewers
 *                          [--detect {false, true}]
 *                          [--org]
 *                          [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 * @param {string} reviewers Users or groups to include as reviewers on a pull request. Space separated.
 */
var az_repos_pr_reviewer_add_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_reviewer_add_command_builder, _super);
    function az_repos_pr_reviewer_add_command_builder(commandPath, resultDataTypeName, id, reviewers) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.reviewers(reviewers);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_reviewer_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Users or groups to include as reviewers on a pull request. Space separated. */
    az_repos_pr_reviewer_add_command_builder.prototype.reviewers = function (value) {
        this.setFlag("--reviewers", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_reviewer_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_reviewer_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_reviewer_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_reviewer_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List reviewers of a pull request.
 *
 * Syntax:
 * ```
 * az repos pr reviewer list --id
 *                           [--detect {false, true}]
 *                           [--org]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_reviewer_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_reviewer_list_command_builder, _super);
    function az_repos_pr_reviewer_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_reviewer_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_reviewer_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_reviewer_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_pr_reviewer_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_reviewer_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_reviewer_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove one or more reviewers from a pull request.
 *
 * Syntax:
 * ```
 * az repos pr reviewer remove --id
 *                             --reviewers
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 * @param {string} reviewers Users or groups to remove as reviewers on a pull request. Space separated.
 */
var az_repos_pr_reviewer_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_reviewer_remove_command_builder, _super);
    function az_repos_pr_reviewer_remove_command_builder(commandPath, resultDataTypeName, id, reviewers) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.reviewers(reviewers);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_reviewer_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Users or groups to remove as reviewers on a pull request. Space separated. */
    az_repos_pr_reviewer_remove_command_builder.prototype.reviewers = function (value) {
        this.setFlag("--reviewers", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_reviewer_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_reviewer_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_reviewer_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_reviewer_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Link one or more work items to a pull request.
 *
 * Syntax:
 * ```
 * az repos pr work-item add --id
 *                           --work-items
 *                           [--detect {false, true}]
 *                           [--org]
 *                           [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 * @param {string} workItems IDs of the work items to link. Space separated.
 */
var az_repos_pr_work_item_add_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_work_item_add_command_builder, _super);
    function az_repos_pr_work_item_add_command_builder(commandPath, resultDataTypeName, id, workItems) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.workItems(workItems);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_work_item_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** IDs of the work items to link. Space separated. */
    az_repos_pr_work_item_add_command_builder.prototype.workItems = function (value) {
        this.setFlag("--work-items", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_work_item_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_work_item_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_work_item_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_work_item_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List linked work items for a pull request.
 *
 * Syntax:
 * ```
 * az repos pr work-item list --id
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_work_item_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_work_item_list_command_builder, _super);
    function az_repos_pr_work_item_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_work_item_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_work_item_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_work_item_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_pr_work_item_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_work_item_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_work_item_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Unlink one or more work items from a pull request.
 *
 * Syntax:
 * ```
 * az repos pr work-item remove --id
 *                              --work-items
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 * @param {string} workItems IDs of the work items to unlink. Space separated.
 */
var az_repos_pr_work_item_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_work_item_remove_command_builder, _super);
    function az_repos_pr_work_item_remove_command_builder(commandPath, resultDataTypeName, id, workItems) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.workItems(workItems);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_work_item_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** IDs of the work items to unlink. Space separated. */
    az_repos_pr_work_item_remove_command_builder.prototype.workItems = function (value) {
        this.setFlag("--work-items", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_work_item_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_work_item_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_work_item_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_work_item_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Checkout the PR source branch locally, if no local changes are present.
 *
 * Syntax:
 * ```
 * az repos pr checkout --id
 *                      [--remote-name]
 *                      [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_checkout_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_checkout_command_builder, _super);
    function az_repos_pr_checkout_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_checkout_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of git remote against which PR is raised. */
    az_repos_pr_checkout_command_builder.prototype.remoteName = function (value) {
        this.setFlag("--remote-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_checkout_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_checkout_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a pull request.
 *
 * Syntax:
 * ```
 * az repos pr create [--auto-complete {false, true}]
 *                    [--bypass-policy {false, true}]
 *                    [--bypass-policy-reason]
 *                    [--delete-source-branch {false, true}]
 *                    [--description]
 *                    [--detect {false, true}]
 *                    [--draft {false, true}]
 *                    [--merge-commit-message]
 *                    [--open]
 *                    [--org]
 *                    [--project]
 *                    [--repository]
 *                    [--reviewers]
 *                    [--source-branch]
 *                    [--squash {false, true}]
 *                    [--subscription]
 *                    [--target-branch]
 *                    [--title]
 *                    [--transition-work-items {false, true}]
 *                    [--work-items]
 * ```
 */
var az_repos_pr_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_create_command_builder, _super);
    function az_repos_pr_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    az_repos_pr_create_command_builder.prototype.autoComplete = function (value) {
        this.setFlag("--auto-complete", value.toString());
        return this;
    };
    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    az_repos_pr_create_command_builder.prototype.bypassPolicy = function (value) {
        this.setFlag("--bypass-policy", value.toString());
        return this;
    };
    /** Reason for bypassing the required policies. */
    az_repos_pr_create_command_builder.prototype.bypassPolicyReason = function (value) {
        this.setFlag("--bypass-policy-reason", value);
        return this;
    };
    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    az_repos_pr_create_command_builder.prototype.deleteSourceBranch = function (value) {
        this.setFlag("--delete-source-branch", value.toString());
        return this;
    };
    /** Description for the new pull request. Can include markdown. Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    az_repos_pr_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Use this flag to create the pull request in draft/work in progress mode. */
    az_repos_pr_create_command_builder.prototype.draft = function (value) {
        this.setFlag("--draft", value.toString());
        return this;
    };
    /** Message displayed when commits are merged. */
    az_repos_pr_create_command_builder.prototype.mergeCommitMessage = function (value) {
        this.setFlag("--merge-commit-message", value);
        return this;
    };
    /** Open the pull request in your web browser. */
    az_repos_pr_create_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_pr_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository to create the pull request in. */
    az_repos_pr_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Additional users or groups to include as reviewers on the new pull request. Space separated. */
    az_repos_pr_create_command_builder.prototype.reviewers = function (value) {
        this.setFlag("--reviewers", value);
        return this;
    };
    /** Name of the source branch. Example: "dev". */
    az_repos_pr_create_command_builder.prototype.sourceBranch = function (value) {
        this.setFlag("--source-branch", value);
        return this;
    };
    /** Squash the commits in the source branch when merging into the target branch. */
    az_repos_pr_create_command_builder.prototype.squash = function (value) {
        this.setFlag("--squash", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the target branch. If not specified, defaults to the default branch of the target repository. */
    az_repos_pr_create_command_builder.prototype.targetBranch = function (value) {
        this.setFlag("--target-branch", value);
        return this;
    };
    /** Title for the new pull request. */
    az_repos_pr_create_command_builder.prototype.title = function (value) {
        this.setFlag("--title", value);
        return this;
    };
    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    az_repos_pr_create_command_builder.prototype.transitionWorkItems = function (value) {
        this.setFlag("--transition-work-items", value.toString());
        return this;
    };
    /** IDs of the work items to link to the new pull request. Space separated. */
    az_repos_pr_create_command_builder.prototype.workItems = function (value) {
        this.setFlag("--work-items", value);
        return this;
    };
    return az_repos_pr_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List pull requests.
 *
 * Syntax:
 * ```
 * az repos pr list [--creator]
 *                  [--detect {false, true}]
 *                  [--include-links]
 *                  [--org]
 *                  [--project]
 *                  [--query-examples]
 *                  [--repository]
 *                  [--reviewer]
 *                  [--skip]
 *                  [--source-branch]
 *                  [--status {abandoned, active, all, completed}]
 *                  [--subscription]
 *                  [--target-branch]
 *                  [--top]
 * ```
 */
var az_repos_pr_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_list_command_builder, _super);
    function az_repos_pr_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Limit results to pull requests created by this user. */
    az_repos_pr_list_command_builder.prototype.creator = function (value) {
        this.setFlag("--creator", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Include _links for each pull request. */
    az_repos_pr_list_command_builder.prototype.includeLinks = function (value) {
        this.setFlag("--include-links", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_pr_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_pr_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_pr_list_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Limit results to pull requests where this user is a reviewer. */
    az_repos_pr_list_command_builder.prototype.reviewer = function (value) {
        this.setFlag("--reviewer", value);
        return this;
    };
    /** Number of pull requests to skip. */
    az_repos_pr_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Limit results to pull requests that originate from this source branch. */
    az_repos_pr_list_command_builder.prototype.sourceBranch = function (value) {
        this.setFlag("--source-branch", value);
        return this;
    };
    /** Limit results to pull requests with this status. */
    az_repos_pr_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Limit results to pull requests that target this branch. */
    az_repos_pr_list_command_builder.prototype.targetBranch = function (value) {
        this.setFlag("--target-branch", value);
        return this;
    };
    /** Maximum number of pull requests to list. */
    az_repos_pr_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_repos_pr_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Vote on a pull request.
 *
 * Syntax:
 * ```
 * az repos pr set-vote --id
 *                      --vote {approve, approve-with-suggestions, reject, reset, wait-for-author}
 *                      [--detect {false, true}]
 *                      [--org]
 *                      [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 * @param {'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'} vote New vote value for the pull request.
 */
var az_repos_pr_set_vote_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_set_vote_command_builder, _super);
    function az_repos_pr_set_vote_command_builder(commandPath, resultDataTypeName, id, vote) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.vote(vote);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_set_vote_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** New vote value for the pull request. */
    az_repos_pr_set_vote_command_builder.prototype.vote = function (value) {
        this.setFlag("--vote", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_set_vote_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_set_vote_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_set_vote_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_set_vote_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a pull request.
 *
 * Syntax:
 * ```
 * az repos pr show --id
 *                  [--detect {false, true}]
 *                  [--open]
 *                  [--org]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_show_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_show_command_builder, _super);
    function az_repos_pr_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the pull request in your web browser. */
    az_repos_pr_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_pr_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_pr_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a pull request.
 *
 * Syntax:
 * ```
 * az repos pr update --id
 *                    [--auto-complete {false, true}]
 *                    [--bypass-policy {false, true}]
 *                    [--bypass-policy-reason]
 *                    [--delete-source-branch {false, true}]
 *                    [--description]
 *                    [--detect {false, true}]
 *                    [--draft {false, true}]
 *                    [--merge-commit-message]
 *                    [--org]
 *                    [--squash {false, true}]
 *                    [--status {abandoned, active, completed}]
 *                    [--subscription]
 *                    [--title]
 *                    [--transition-work-items {false, true}]
 * ```
 *
 * @param {string} id ID of the pull request.
 */
var az_repos_pr_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_pr_update_command_builder, _super);
    function az_repos_pr_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pull request. */
    az_repos_pr_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    az_repos_pr_update_command_builder.prototype.autoComplete = function (value) {
        this.setFlag("--auto-complete", value.toString());
        return this;
    };
    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    az_repos_pr_update_command_builder.prototype.bypassPolicy = function (value) {
        this.setFlag("--bypass-policy", value.toString());
        return this;
    };
    /** Reason for bypassing the required policies. */
    az_repos_pr_update_command_builder.prototype.bypassPolicyReason = function (value) {
        this.setFlag("--bypass-policy-reason", value);
        return this;
    };
    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    az_repos_pr_update_command_builder.prototype.deleteSourceBranch = function (value) {
        this.setFlag("--delete-source-branch", value.toString());
        return this;
    };
    /** New description for the pull request.  Can include markdown.  Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    az_repos_pr_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_pr_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Publish the PR or convert to draft mode. */
    az_repos_pr_update_command_builder.prototype.draft = function (value) {
        this.setFlag("--draft", value.toString());
        return this;
    };
    /** Message displayed when commits are merged. */
    az_repos_pr_update_command_builder.prototype.mergeCommitMessage = function (value) {
        this.setFlag("--merge-commit-message", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_pr_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Squash the commits in the source branch when merging into the target branch. */
    az_repos_pr_update_command_builder.prototype.squash = function (value) {
        this.setFlag("--squash", value.toString());
        return this;
    };
    /** Set the new state of pull request. */
    az_repos_pr_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_pr_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** New title for the pull request. */
    az_repos_pr_update_command_builder.prototype.title = function (value) {
        this.setFlag("--title", value);
        return this;
    };
    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    az_repos_pr_update_command_builder.prototype.transitionWorkItems = function (value) {
        this.setFlag("--transition-work-items", value.toString());
        return this;
    };
    return az_repos_pr_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a reference.
 *
 * Syntax:
 * ```
 * az repos ref create --name
 *                     --object-id
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--repository]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of the reference to create (example: heads/my_branch or tags/my_tag).
 * @param {string} objectId Id of the object to create the reference from.
 */
var az_repos_ref_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_ref_create_command_builder, _super);
    function az_repos_ref_create_command_builder(commandPath, resultDataTypeName, name, objectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.objectId(objectId);
        return _this;
    }
    /** Name of the reference to create (example: heads/my_branch or tags/my_tag). */
    az_repos_ref_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Id of the object to create the reference from. */
    az_repos_ref_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_ref_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_ref_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_ref_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_ref_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_ref_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_ref_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a reference.
 *
 * Syntax:
 * ```
 * az repos ref delete --name
 *                     --object-id
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--repository]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of the reference to delete (example: heads/my_branch).
 * @param {string} objectId Id of the reference to delete.
 */
var az_repos_ref_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_ref_delete_command_builder, _super);
    function az_repos_ref_delete_command_builder(commandPath, resultDataTypeName, name, objectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.objectId(objectId);
        return _this;
    }
    /** Name of the reference to delete (example: heads/my_branch). */
    az_repos_ref_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Id of the reference to delete. */
    az_repos_ref_delete_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_ref_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_ref_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_ref_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_ref_delete_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_ref_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_ref_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the references.
 *
 * Syntax:
 * ```
 * az repos ref list [--detect {false, true}]
 *                   [--filter]
 *                   [--org]
 *                   [--project]
 *                   [--query-examples]
 *                   [--repository]
 *                   [--subscription]
 * ```
 */
var az_repos_ref_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_ref_list_command_builder, _super);
    function az_repos_ref_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_repos_ref_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** A filter to apply to the refs (starts with). Example: head or heads/ for the branches. */
    az_repos_ref_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_ref_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_ref_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_ref_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_ref_list_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_ref_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_ref_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lock a reference.
 *
 * Syntax:
 * ```
 * az repos ref lock --name
 *                   [--detect {false, true}]
 *                   [--org]
 *                   [--project]
 *                   [--repository]
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of the reference to update (example: heads/my_branch).
 */
var az_repos_ref_lock_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_ref_lock_command_builder, _super);
    function az_repos_ref_lock_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the reference to update (example: heads/my_branch). */
    az_repos_ref_lock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_ref_lock_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_ref_lock_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_ref_lock_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_ref_lock_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_ref_lock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_ref_lock_command_builder;
}(base_1.CommandBuilder));
/**
 * Unlock a reference.
 *
 * Syntax:
 * ```
 * az repos ref unlock --name
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--repository]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of the reference to update (example: heads/my_branch).
 */
var az_repos_ref_unlock_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_ref_unlock_command_builder, _super);
    function az_repos_ref_unlock_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the reference to update (example: heads/my_branch). */
    az_repos_ref_unlock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_ref_unlock_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_ref_unlock_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_ref_unlock_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of the repository. */
    az_repos_ref_unlock_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_ref_unlock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_ref_unlock_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Git repository in a team project.
 *
 * Syntax:
 * ```
 * az repos create --name
 *                 [--detect {false, true}]
 *                 [--open]
 *                 [--org]
 *                 [--project]
 *                 [--subscription]
 * ```
 *
 * @param {string} name Name for the new repository.
 */
var az_repos_create_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_create_command_builder, _super);
    function az_repos_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name for the new repository. */
    az_repos_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the repository page in your web browser. */
    az_repos_create_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Git repository in a team project.
 *
 * Syntax:
 * ```
 * az repos delete --id
 *                 [--detect {false, true}]
 *                 [--org]
 *                 [--project]
 *                 [--subscription]
 *                 [--yes]
 * ```
 *
 * @param {string} id ID of the repository.
 */
var az_repos_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_delete_command_builder, _super);
    function az_repos_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the repository. */
    az_repos_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_repos_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_repos_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List Git repositories of a team project.
 *
 * Syntax:
 * ```
 * az repos list [--detect {false, true}]
 *               [--org]
 *               [--project]
 *               [--query-examples]
 *               [--subscription]
 * ```
 */
var az_repos_list_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_list_command_builder, _super);
    function az_repos_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_repos_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a Git repository.
 *
 * Syntax:
 * ```
 * az repos show --repository
 *               [--detect {false, true}]
 *               [--open]
 *               [--org]
 *               [--project]
 *               [--query-examples]
 *               [--subscription]
 * ```
 *
 * @param {string} repository Name or ID of the repository.
 */
var az_repos_show_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_show_command_builder, _super);
    function az_repos_show_command_builder(commandPath, resultDataTypeName, repository) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.repository(repository);
        return _this;
    }
    /** Name or ID of the repository. */
    az_repos_show_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the repository page in your web browser. */
    az_repos_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_repos_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the Git repository.
 *
 * Syntax:
 * ```
 * az repos update --repository
 *                 [--default-branch]
 *                 [--detect {false, true}]
 *                 [--name]
 *                 [--org]
 *                 [--project]
 *                 [--subscription]
 * ```
 *
 * @param {string} repository Name or ID of the repository.
 */
var az_repos_update_command_builder = /** @class */ (function (_super) {
    __extends(az_repos_update_command_builder, _super);
    function az_repos_update_command_builder(commandPath, resultDataTypeName, repository) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.repository(repository);
        return _this;
    }
    /** Name or ID of the repository. */
    az_repos_update_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Default branch to be set for the repository. Example: 'refs/heads/live' or 'live'. */
    az_repos_update_command_builder.prototype.defaultBranch = function (value) {
        this.setFlag("--default-branch", value);
        return this;
    };
    /** Automatically detect organization. */
    az_repos_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name for the repository. */
    az_repos_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_repos_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_repos_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_repos_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_repos_update_command_builder;
}(base_1.CommandBuilder));
