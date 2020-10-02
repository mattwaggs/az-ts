import { CommandBuilder } from '../base';
import { az_repos_import_create_command_result } from './models/az_repos_import_create_command_result';
import { az_repos_policy_approver_count_create_command_result } from './models/az_repos_policy_approver_count_create_command_result';
import { az_repos_policy_approver_count_update_command_result } from './models/az_repos_policy_approver_count_update_command_result';
import { az_repos_policy_build_create_command_result } from './models/az_repos_policy_build_create_command_result';
import { az_repos_policy_build_update_command_result } from './models/az_repos_policy_build_update_command_result';
import { az_repos_policy_case_enforcement_create_command_result } from './models/az_repos_policy_case_enforcement_create_command_result';
import { az_repos_policy_case_enforcement_update_command_result } from './models/az_repos_policy_case_enforcement_update_command_result';
import { az_repos_policy_comment_required_create_command_result } from './models/az_repos_policy_comment_required_create_command_result';
import { az_repos_policy_comment_required_update_command_result } from './models/az_repos_policy_comment_required_update_command_result';
import { az_repos_policy_file_size_create_command_result } from './models/az_repos_policy_file_size_create_command_result';
import { az_repos_policy_file_size_update_command_result } from './models/az_repos_policy_file_size_update_command_result';
import { az_repos_policy_merge_strategy_create_command_result } from './models/az_repos_policy_merge_strategy_create_command_result';
import { az_repos_policy_merge_strategy_update_command_result } from './models/az_repos_policy_merge_strategy_update_command_result';
import { az_repos_policy_required_reviewer_create_command_result } from './models/az_repos_policy_required_reviewer_create_command_result';
import { az_repos_policy_required_reviewer_update_command_result } from './models/az_repos_policy_required_reviewer_update_command_result';
import { az_repos_policy_work_item_linking_create_command_result } from './models/az_repos_policy_work_item_linking_create_command_result';
import { az_repos_policy_work_item_linking_update_command_result } from './models/az_repos_policy_work_item_linking_update_command_result';
import { az_repos_policy_create_command_result } from './models/az_repos_policy_create_command_result';
import { az_repos_policy_delete_command_result } from './models/az_repos_policy_delete_command_result';
import { az_repos_policy_list_command_result } from './models/az_repos_policy_list_command_result';
import { az_repos_policy_show_command_result } from './models/az_repos_policy_show_command_result';
import { az_repos_policy_update_command_result } from './models/az_repos_policy_update_command_result';
import { az_repos_pr_policy_list_command_result } from './models/az_repos_pr_policy_list_command_result';
import { az_repos_pr_policy_queue_command_result } from './models/az_repos_pr_policy_queue_command_result';
import { az_repos_pr_reviewer_add_command_result } from './models/az_repos_pr_reviewer_add_command_result';
import { az_repos_pr_reviewer_list_command_result } from './models/az_repos_pr_reviewer_list_command_result';
import { az_repos_pr_reviewer_remove_command_result } from './models/az_repos_pr_reviewer_remove_command_result';
import { az_repos_pr_work_item_add_command_result } from './models/az_repos_pr_work_item_add_command_result';
import { az_repos_pr_work_item_list_command_result } from './models/az_repos_pr_work_item_list_command_result';
import { az_repos_pr_work_item_remove_command_result } from './models/az_repos_pr_work_item_remove_command_result';
import { az_repos_pr_checkout_command_result } from './models/az_repos_pr_checkout_command_result';
import { az_repos_pr_create_command_result } from './models/az_repos_pr_create_command_result';
import { az_repos_pr_list_command_result } from './models/az_repos_pr_list_command_result';
import { az_repos_pr_set_vote_command_result } from './models/az_repos_pr_set_vote_command_result';
import { az_repos_pr_show_command_result } from './models/az_repos_pr_show_command_result';
import { az_repos_pr_update_command_result } from './models/az_repos_pr_update_command_result';
import { az_repos_ref_create_command_result } from './models/az_repos_ref_create_command_result';
import { az_repos_ref_delete_command_result } from './models/az_repos_ref_delete_command_result';
import { az_repos_ref_list_command_result } from './models/az_repos_ref_list_command_result';
import { az_repos_ref_lock_command_result } from './models/az_repos_ref_lock_command_result';
import { az_repos_ref_unlock_command_result } from './models/az_repos_ref_unlock_command_result';
import { az_repos_create_command_result } from './models/az_repos_create_command_result';
import { az_repos_delete_command_result } from './models/az_repos_delete_command_result';
import { az_repos_list_command_result } from './models/az_repos_list_command_result';
import { az_repos_show_command_result } from './models/az_repos_show_command_result';
import { az_repos_update_command_result } from './models/az_repos_update_command_result';
/** Manage Git repositories import. */
export declare class az_repos_import {
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
    static create(gitSourceUrl: string): az_repos_import_create_command_builder;
}
/** Manage approver count policy. */
export declare class az_repos_policy_approver_count {
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
    static create(allowDownvotes: boolean, blocking: boolean, branch: string, creatorVoteCounts: boolean, enabled: boolean, minimumApproverCount: string, repositoryId: string, resetOnSourcePush: boolean): az_repos_policy_approver_count_create_command_builder;
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
    static update(policyId: string): az_repos_policy_approver_count_update_command_builder;
}
/** Manage build policy. */
export declare class az_repos_policy_build {
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
    static create(blocking: boolean, branch: string, buildDefinitionId: string, displayName: string, enabled: boolean, manualQueueOnly: boolean, queueOnSourceUpdateOnly: boolean, repositoryId: string, validDuration: string): az_repos_policy_build_create_command_builder;
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
    static update(policyId: string): az_repos_policy_build_update_command_builder;
}
/** Manage case enforcement policy. */
export declare class az_repos_policy_case_enforcement {
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
    static create(blocking: boolean, enabled: boolean, repositoryId: string): az_repos_policy_case_enforcement_create_command_builder;
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
    static update(policyId: string): az_repos_policy_case_enforcement_update_command_builder;
}
/** Manage comment required policy. */
export declare class az_repos_policy_comment_required {
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
    static create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_comment_required_create_command_builder;
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
    static update(policyId: string): az_repos_policy_comment_required_update_command_builder;
}
/** Manage file size policy. */
export declare class az_repos_policy_file_size {
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
    static create(blocking: boolean, enabled: boolean, maximumGitBlobSize: string, repositoryId: string, useUncompressedSize: boolean): az_repos_policy_file_size_create_command_builder;
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
    static update(policyId: string): az_repos_policy_file_size_update_command_builder;
}
/** Manage merge strategy policy. */
export declare class az_repos_policy_merge_strategy {
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
    static create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_merge_strategy_create_command_builder;
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
    static update(policyId: string): az_repos_policy_merge_strategy_update_command_builder;
}
/** Manage required reviewer policy. */
export declare class az_repos_policy_required_reviewer {
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
    static create(blocking: boolean, branch: string, enabled: boolean, message: string, repositoryId: string, requiredReviewerIds: string): az_repos_policy_required_reviewer_create_command_builder;
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
    static update(policyId: string): az_repos_policy_required_reviewer_update_command_builder;
}
/** Manage work item linking policy. */
export declare class az_repos_policy_work_item_linking {
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
    static create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_work_item_linking_create_command_builder;
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
    static update(policyId: string): az_repos_policy_work_item_linking_update_command_builder;
}
/** Manage branch policy. */
export declare class az_repos_policy {
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
    static create(policyConfiguration: string): az_repos_policy_create_command_builder;
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
    static delete(policyId: string): az_repos_policy_delete_command_builder;
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
    static list(): az_repos_policy_list_command_builder;
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
    static show(policyId: string): az_repos_policy_show_command_builder;
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
    static update(policyConfiguration: string, policyId: string): az_repos_policy_update_command_builder;
}
/** Manage pull request policy. */
export declare class az_repos_pr_policy {
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
    static list(id: string): az_repos_pr_policy_list_command_builder;
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
    static queue(evaluationId: string, id: string): az_repos_pr_policy_queue_command_builder;
}
/** Manage pull request reviewers. */
export declare class az_repos_pr_reviewer {
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
    static add(id: string, reviewers: string): az_repos_pr_reviewer_add_command_builder;
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
    static list(id: string): az_repos_pr_reviewer_list_command_builder;
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
    static remove(id: string, reviewers: string): az_repos_pr_reviewer_remove_command_builder;
}
/** Manage work items associated with pull requests. */
export declare class az_repos_pr_work_item {
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
    static add(id: string, workItems: string): az_repos_pr_work_item_add_command_builder;
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
    static list(id: string): az_repos_pr_work_item_list_command_builder;
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
    static remove(id: string, workItems: string): az_repos_pr_work_item_remove_command_builder;
}
/** Manage pull requests. */
export declare class az_repos_pr {
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
    static checkout(id: string): az_repos_pr_checkout_command_builder;
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
    static create(): az_repos_pr_create_command_builder;
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
    static list(): az_repos_pr_list_command_builder;
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
    static set_vote(id: string, vote: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'): az_repos_pr_set_vote_command_builder;
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
    static show(id: string): az_repos_pr_show_command_builder;
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
    static update(id: string): az_repos_pr_update_command_builder;
}
/** Manage Git references. */
export declare class az_repos_ref {
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
    static create(name: string, objectId: string): az_repos_ref_create_command_builder;
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
    static delete(name: string, objectId: string): az_repos_ref_delete_command_builder;
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
    static list(): az_repos_ref_list_command_builder;
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
    static lock(name: string): az_repos_ref_lock_command_builder;
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
    static unlock(name: string): az_repos_ref_unlock_command_builder;
}
/** Manage Azure Repos. */
export declare class az_repos {
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
    static create(name: string): az_repos_create_command_builder;
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
    static delete(id: string): az_repos_delete_command_builder;
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
    static list(): az_repos_list_command_builder;
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
    static show(repository: string): az_repos_show_command_builder;
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
    static update(repository: string): az_repos_update_command_builder;
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
declare class az_repos_import_create_command_builder extends CommandBuilder<az_repos_import_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, gitSourceUrl: string);
    /** Url of the source git repository. */
    gitSourceUrl(value: string): az_repos_import_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_import_create_command_builder;
    /** Service Endpoint for connection to external endpoint. */
    gitServiceEndpointId(value: string): az_repos_import_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_import_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_import_create_command_builder;
    /** Name or ID of the repository to create the import request in. */
    repository(value: string): az_repos_import_create_command_builder;
    /** Flag to tell if source git repository is private. */
    requiresAuthorization(value: string): az_repos_import_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_import_create_command_builder;
    /** User name in case source git repository is private. */
    userName(value: string): az_repos_import_create_command_builder;
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
declare class az_repos_policy_approver_count_create_command_builder extends CommandBuilder<az_repos_policy_approver_count_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, allowDownvotes: boolean, blocking: boolean, branch: string, creatorVoteCounts: boolean, enabled: boolean, minimumApproverCount: string, repositoryId: string, resetOnSourcePush: boolean);
    /** Whether to allow downvotes or not. */
    allowDownvotes(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_approver_count_create_command_builder;
    /** Whether the creator's vote counts or not. */
    creatorVoteCounts(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Minimum number of approvers required. For example: 2. */
    minimumApproverCount(value: string): az_repos_policy_approver_count_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_approver_count_create_command_builder;
    /** Whether to reset source on push. */
    resetOnSourcePush(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_approver_count_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_approver_count_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_approver_count_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_approver_count_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_approver_count_create_command_builder;
}
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
declare class az_repos_policy_approver_count_update_command_builder extends CommandBuilder<az_repos_policy_approver_count_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Whether to allow downvotes or not. */
    allowDownvotes(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_approver_count_update_command_builder;
    /** Whether the creator's vote counts or not. */
    creatorVoteCounts(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Minimum number of approvers required. For example: 2. */
    minimumApproverCount(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_approver_count_update_command_builder;
    /** Whether to reset source on push. */
    resetOnSourcePush(value: boolean): az_repos_policy_approver_count_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_approver_count_update_command_builder;
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
declare class az_repos_policy_build_create_command_builder extends CommandBuilder<az_repos_policy_build_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, branch: string, buildDefinitionId: string, displayName: string, enabled: boolean, manualQueueOnly: boolean, queueOnSourceUpdateOnly: boolean, repositoryId: string, validDuration: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_build_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_build_create_command_builder;
    /** Build Definition Id. */
    buildDefinitionId(value: string): az_repos_policy_build_create_command_builder;
    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    displayName(value: string): az_repos_policy_build_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_build_create_command_builder;
    /** Whether to allow only manual queue of builds. */
    manualQueueOnly(value: boolean): az_repos_policy_build_create_command_builder;
    /** Queue Only on source update. */
    queueOnSourceUpdateOnly(value: boolean): az_repos_policy_build_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_build_create_command_builder;
    /** Policy validity duration (in minutes). */
    validDuration(value: string): az_repos_policy_build_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_build_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_build_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_build_create_command_builder;
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_build_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_build_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_build_create_command_builder;
}
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
declare class az_repos_policy_build_update_command_builder extends CommandBuilder<az_repos_policy_build_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_build_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_build_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_build_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_build_update_command_builder;
    /** Build Definition Id. */
    buildDefinitionId(value: string): az_repos_policy_build_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_build_update_command_builder;
    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    displayName(value: string): az_repos_policy_build_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_build_update_command_builder;
    /** Whether to allow only manual queue of builds. */
    manualQueueOnly(value: boolean): az_repos_policy_build_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_build_update_command_builder;
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_build_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_build_update_command_builder;
    /** Queue Only on source update. */
    queueOnSourceUpdateOnly(value: boolean): az_repos_policy_build_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_build_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_build_update_command_builder;
    /** Policy validity duration (in minutes). */
    validDuration(value: string): az_repos_policy_build_update_command_builder;
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
declare class az_repos_policy_case_enforcement_create_command_builder extends CommandBuilder<az_repos_policy_case_enforcement_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, enabled: boolean, repositoryId: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_case_enforcement_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_case_enforcement_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_case_enforcement_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_case_enforcement_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_case_enforcement_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_case_enforcement_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_case_enforcement_create_command_builder;
}
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
declare class az_repos_policy_case_enforcement_update_command_builder extends CommandBuilder<az_repos_policy_case_enforcement_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_case_enforcement_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_case_enforcement_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_case_enforcement_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_case_enforcement_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_case_enforcement_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_case_enforcement_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_case_enforcement_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_case_enforcement_update_command_builder;
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
declare class az_repos_policy_comment_required_create_command_builder extends CommandBuilder<az_repos_policy_comment_required_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_comment_required_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_comment_required_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_comment_required_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_comment_required_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_comment_required_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_comment_required_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_comment_required_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_comment_required_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_comment_required_create_command_builder;
}
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
declare class az_repos_policy_comment_required_update_command_builder extends CommandBuilder<az_repos_policy_comment_required_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_comment_required_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_comment_required_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_comment_required_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_comment_required_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_comment_required_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_comment_required_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_comment_required_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_comment_required_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_comment_required_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_comment_required_update_command_builder;
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
declare class az_repos_policy_file_size_create_command_builder extends CommandBuilder<az_repos_policy_file_size_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, enabled: boolean, maximumGitBlobSize: string, repositoryId: string, useUncompressedSize: boolean);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_file_size_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_file_size_create_command_builder;
    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    maximumGitBlobSize(value: string): az_repos_policy_file_size_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_file_size_create_command_builder;
    /** Whether to use uncompressed size. */
    useUncompressedSize(value: boolean): az_repos_policy_file_size_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_file_size_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_file_size_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_file_size_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_file_size_create_command_builder;
}
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
declare class az_repos_policy_file_size_update_command_builder extends CommandBuilder<az_repos_policy_file_size_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_file_size_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_file_size_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_file_size_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_file_size_update_command_builder;
    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    maximumGitBlobSize(value: string): az_repos_policy_file_size_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_file_size_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_file_size_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_file_size_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_file_size_update_command_builder;
    /** Whether to use uncompressed size. */
    useUncompressedSize(value: boolean): az_repos_policy_file_size_update_command_builder;
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
declare class az_repos_policy_merge_strategy_create_command_builder extends CommandBuilder<az_repos_policy_merge_strategy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_merge_strategy_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_merge_strategy_create_command_builder;
    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    allowNoFastForward(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    allowRebase(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    allowRebaseMerge(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    allowSquash(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_merge_strategy_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_merge_strategy_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_merge_strategy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_merge_strategy_create_command_builder;
    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    useSquashMerge(value: boolean): az_repos_policy_merge_strategy_create_command_builder;
}
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
declare class az_repos_policy_merge_strategy_update_command_builder extends CommandBuilder<az_repos_policy_merge_strategy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    allowNoFastForward(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    allowRebase(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    allowRebaseMerge(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    allowSquash(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_merge_strategy_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_merge_strategy_update_command_builder;
    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    useSquashMerge(value: boolean): az_repos_policy_merge_strategy_update_command_builder;
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
declare class az_repos_policy_required_reviewer_create_command_builder extends CommandBuilder<az_repos_policy_required_reviewer_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, branch: string, enabled: boolean, message: string, repositoryId: string, requiredReviewerIds: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_required_reviewer_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_required_reviewer_create_command_builder;
    /** Message. */
    message(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    requiredReviewerIds(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_required_reviewer_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_required_reviewer_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_required_reviewer_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_required_reviewer_create_command_builder;
}
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
declare class az_repos_policy_required_reviewer_update_command_builder extends CommandBuilder<az_repos_policy_required_reviewer_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_required_reviewer_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_required_reviewer_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_required_reviewer_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_required_reviewer_update_command_builder;
    /** Message. */
    message(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    requiredReviewerIds(value: string): az_repos_policy_required_reviewer_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_required_reviewer_update_command_builder;
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
declare class az_repos_policy_work_item_linking_create_command_builder extends CommandBuilder<az_repos_policy_work_item_linking_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string);
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_work_item_linking_create_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_work_item_linking_create_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_work_item_linking_create_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_work_item_linking_create_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_work_item_linking_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_work_item_linking_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_work_item_linking_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_work_item_linking_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_work_item_linking_create_command_builder;
}
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
declare class az_repos_policy_work_item_linking_update_command_builder extends CommandBuilder<az_repos_policy_work_item_linking_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_work_item_linking_update_command_builder;
    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_work_item_linking_update_command_builder;
    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_work_item_linking_update_command_builder;
    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_work_item_linking_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_work_item_linking_update_command_builder;
    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_work_item_linking_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_work_item_linking_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_work_item_linking_update_command_builder;
    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_work_item_linking_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_work_item_linking_update_command_builder;
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
declare class az_repos_policy_create_command_builder extends CommandBuilder<az_repos_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyConfiguration: string);
    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    policyConfiguration(value: string): az_repos_policy_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_create_command_builder;
}
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
declare class az_repos_policy_delete_command_builder extends CommandBuilder<az_repos_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_repos_policy_delete_command_builder;
}
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
declare class az_repos_policy_list_command_builder extends CommandBuilder<az_repos_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: --branch master. */
    branch(value: string): az_repos_policy_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_policy_list_command_builder;
    /** ID of the repository to filter results by exact match of the repository ID. For example --repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345. */
    repositoryId(value: string): az_repos_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_list_command_builder;
}
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
declare class az_repos_policy_show_command_builder extends CommandBuilder<az_repos_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyId: string);
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_show_command_builder;
}
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
declare class az_repos_policy_update_command_builder extends CommandBuilder<az_repos_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyConfiguration: string, policyId: string);
    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    policyConfiguration(value: string): az_repos_policy_update_command_builder;
    /** ID of the policy. */
    policyId(value: string): az_repos_policy_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_update_command_builder;
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
declare class az_repos_pr_policy_list_command_builder extends CommandBuilder<az_repos_pr_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_policy_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_policy_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_policy_list_command_builder;
    /** Number of policies to skip. */
    skip(value: string): az_repos_pr_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_policy_list_command_builder;
    /** Maximum number of policies to list. */
    top(value: string): az_repos_pr_policy_list_command_builder;
}
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
declare class az_repos_pr_policy_queue_command_builder extends CommandBuilder<az_repos_pr_policy_queue_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, evaluationId: string, id: string);
    /** ID of the policy evaluation to queue. */
    evaluationId(value: string): az_repos_pr_policy_queue_command_builder;
    /** ID of the pull request. */
    id(value: string): az_repos_pr_policy_queue_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_policy_queue_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_policy_queue_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_policy_queue_command_builder;
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
declare class az_repos_pr_reviewer_add_command_builder extends CommandBuilder<az_repos_pr_reviewer_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, reviewers: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_add_command_builder;
    /** Users or groups to include as reviewers on a pull request. Space separated. */
    reviewers(value: string): az_repos_pr_reviewer_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_add_command_builder;
}
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
declare class az_repos_pr_reviewer_list_command_builder extends CommandBuilder<az_repos_pr_reviewer_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_reviewer_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_list_command_builder;
}
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
declare class az_repos_pr_reviewer_remove_command_builder extends CommandBuilder<az_repos_pr_reviewer_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, reviewers: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_remove_command_builder;
    /** Users or groups to remove as reviewers on a pull request. Space separated. */
    reviewers(value: string): az_repos_pr_reviewer_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_remove_command_builder;
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
declare class az_repos_pr_work_item_add_command_builder extends CommandBuilder<az_repos_pr_work_item_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, workItems: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_add_command_builder;
    /** IDs of the work items to link. Space separated. */
    workItems(value: string): az_repos_pr_work_item_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_add_command_builder;
}
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
declare class az_repos_pr_work_item_list_command_builder extends CommandBuilder<az_repos_pr_work_item_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_work_item_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_list_command_builder;
}
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
declare class az_repos_pr_work_item_remove_command_builder extends CommandBuilder<az_repos_pr_work_item_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, workItems: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_remove_command_builder;
    /** IDs of the work items to unlink. Space separated. */
    workItems(value: string): az_repos_pr_work_item_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_remove_command_builder;
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
declare class az_repos_pr_checkout_command_builder extends CommandBuilder<az_repos_pr_checkout_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_checkout_command_builder;
    /** Name of git remote against which PR is raised. */
    remoteName(value: string): az_repos_pr_checkout_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_checkout_command_builder;
}
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
declare class az_repos_pr_create_command_builder extends CommandBuilder<az_repos_pr_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    autoComplete(value: boolean): az_repos_pr_create_command_builder;
    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    bypassPolicy(value: boolean): az_repos_pr_create_command_builder;
    /** Reason for bypassing the required policies. */
    bypassPolicyReason(value: string): az_repos_pr_create_command_builder;
    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    deleteSourceBranch(value: boolean): az_repos_pr_create_command_builder;
    /** Description for the new pull request. Can include markdown. Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    description(value: string): az_repos_pr_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_create_command_builder;
    /** Use this flag to create the pull request in draft/work in progress mode. */
    draft(value: boolean): az_repos_pr_create_command_builder;
    /** Message displayed when commits are merged. */
    mergeCommitMessage(value: string): az_repos_pr_create_command_builder;
    /** Open the pull request in your web browser. */
    open(value: string): az_repos_pr_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_pr_create_command_builder;
    /** Name or ID of the repository to create the pull request in. */
    repository(value: string): az_repos_pr_create_command_builder;
    /** Additional users or groups to include as reviewers on the new pull request. Space separated. */
    reviewers(value: string): az_repos_pr_create_command_builder;
    /** Name of the source branch. Example: "dev". */
    sourceBranch(value: string): az_repos_pr_create_command_builder;
    /** Squash the commits in the source branch when merging into the target branch. */
    squash(value: boolean): az_repos_pr_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_create_command_builder;
    /** Name of the target branch. If not specified, defaults to the default branch of the target repository. */
    targetBranch(value: string): az_repos_pr_create_command_builder;
    /** Title for the new pull request. */
    title(value: string): az_repos_pr_create_command_builder;
    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    transitionWorkItems(value: boolean): az_repos_pr_create_command_builder;
    /** IDs of the work items to link to the new pull request. Space separated. */
    workItems(value: string): az_repos_pr_create_command_builder;
}
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
declare class az_repos_pr_list_command_builder extends CommandBuilder<az_repos_pr_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Limit results to pull requests created by this user. */
    creator(value: string): az_repos_pr_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_list_command_builder;
    /** Include _links for each pull request. */
    includeLinks(value: string): az_repos_pr_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_pr_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_list_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_pr_list_command_builder;
    /** Limit results to pull requests where this user is a reviewer. */
    reviewer(value: string): az_repos_pr_list_command_builder;
    /** Number of pull requests to skip. */
    skip(value: string): az_repos_pr_list_command_builder;
    /** Limit results to pull requests that originate from this source branch. */
    sourceBranch(value: string): az_repos_pr_list_command_builder;
    /** Limit results to pull requests with this status. */
    status(value: 'abandoned' | 'active' | 'all' | 'completed'): az_repos_pr_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_list_command_builder;
    /** Limit results to pull requests that target this branch. */
    targetBranch(value: string): az_repos_pr_list_command_builder;
    /** Maximum number of pull requests to list. */
    top(value: string): az_repos_pr_list_command_builder;
}
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
declare class az_repos_pr_set_vote_command_builder extends CommandBuilder<az_repos_pr_set_vote_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, vote: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author');
    /** ID of the pull request. */
    id(value: string): az_repos_pr_set_vote_command_builder;
    /** New vote value for the pull request. */
    vote(value: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'): az_repos_pr_set_vote_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_set_vote_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_set_vote_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_set_vote_command_builder;
}
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
declare class az_repos_pr_show_command_builder extends CommandBuilder<az_repos_pr_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_show_command_builder;
    /** Open the pull request in your web browser. */
    open(value: string): az_repos_pr_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_show_command_builder;
}
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
declare class az_repos_pr_update_command_builder extends CommandBuilder<az_repos_pr_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pull request. */
    id(value: string): az_repos_pr_update_command_builder;
    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    autoComplete(value: boolean): az_repos_pr_update_command_builder;
    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    bypassPolicy(value: boolean): az_repos_pr_update_command_builder;
    /** Reason for bypassing the required policies. */
    bypassPolicyReason(value: string): az_repos_pr_update_command_builder;
    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    deleteSourceBranch(value: boolean): az_repos_pr_update_command_builder;
    /** New description for the pull request.  Can include markdown.  Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    description(value: string): az_repos_pr_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_update_command_builder;
    /** Publish the PR or convert to draft mode. */
    draft(value: boolean): az_repos_pr_update_command_builder;
    /** Message displayed when commits are merged. */
    mergeCommitMessage(value: string): az_repos_pr_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_update_command_builder;
    /** Squash the commits in the source branch when merging into the target branch. */
    squash(value: boolean): az_repos_pr_update_command_builder;
    /** Set the new state of pull request. */
    status(value: 'abandoned' | 'active' | 'completed'): az_repos_pr_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_update_command_builder;
    /** New title for the pull request. */
    title(value: string): az_repos_pr_update_command_builder;
    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    transitionWorkItems(value: boolean): az_repos_pr_update_command_builder;
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
declare class az_repos_ref_create_command_builder extends CommandBuilder<az_repos_ref_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, objectId: string);
    /** Name of the reference to create (example: heads/my_branch or tags/my_tag). */
    name(value: string): az_repos_ref_create_command_builder;
    /** Id of the object to create the reference from. */
    objectId(value: string): az_repos_ref_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_create_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_create_command_builder;
}
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
declare class az_repos_ref_delete_command_builder extends CommandBuilder<az_repos_ref_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, objectId: string);
    /** Name of the reference to delete (example: heads/my_branch). */
    name(value: string): az_repos_ref_delete_command_builder;
    /** Id of the reference to delete. */
    objectId(value: string): az_repos_ref_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_delete_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_delete_command_builder;
}
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
declare class az_repos_ref_list_command_builder extends CommandBuilder<az_repos_ref_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_list_command_builder;
    /** A filter to apply to the refs (starts with). Example: head or heads/ for the branches. */
    filter(value: string): az_repos_ref_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_ref_list_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_list_command_builder;
}
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
declare class az_repos_ref_lock_command_builder extends CommandBuilder<az_repos_ref_lock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the reference to update (example: heads/my_branch). */
    name(value: string): az_repos_ref_lock_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_lock_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_lock_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_lock_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_lock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_lock_command_builder;
}
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
declare class az_repos_ref_unlock_command_builder extends CommandBuilder<az_repos_ref_unlock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the reference to update (example: heads/my_branch). */
    name(value: string): az_repos_ref_unlock_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_unlock_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_unlock_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_unlock_command_builder;
    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_unlock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_unlock_command_builder;
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
declare class az_repos_create_command_builder extends CommandBuilder<az_repos_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name for the new repository. */
    name(value: string): az_repos_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_create_command_builder;
    /** Open the repository page in your web browser. */
    open(value: string): az_repos_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_create_command_builder;
}
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
declare class az_repos_delete_command_builder extends CommandBuilder<az_repos_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the repository. */
    id(value: string): az_repos_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_repos_delete_command_builder;
}
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
declare class az_repos_list_command_builder extends CommandBuilder<az_repos_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_list_command_builder;
}
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
declare class az_repos_show_command_builder extends CommandBuilder<az_repos_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, repository: string);
    /** Name or ID of the repository. */
    repository(value: string): az_repos_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_show_command_builder;
    /** Open the repository page in your web browser. */
    open(value: string): az_repos_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_show_command_builder;
}
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
declare class az_repos_update_command_builder extends CommandBuilder<az_repos_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, repository: string);
    /** Name or ID of the repository. */
    repository(value: string): az_repos_update_command_builder;
    /** Default branch to be set for the repository. Example: 'refs/heads/live' or 'live'. */
    defaultBranch(value: string): az_repos_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_repos_update_command_builder;
    /** New name for the repository. */
    name(value: string): az_repos_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_update_command_builder;
}
export {};
