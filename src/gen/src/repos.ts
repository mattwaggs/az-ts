import { CommandBuilder } from '../base';

/** Manage Git repositories import. */
export class az_repos_import {
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
    static az_repos_import_create(gitSourceUrl: string): az_repos_import_create_command_builder {
        return new az_repos_import_create_command_builder("az repos import create", gitSourceUrl);
    }
}

/** Manage approver count policy. */
export class az_repos_policy_approver_count {
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
    static az_repos_policy_approver_count_create(allowDownvotes: boolean, blocking: boolean, branch: string, creatorVoteCounts: boolean, enabled: boolean, minimumApproverCount: string, repositoryId: string, resetOnSourcePush: boolean): az_repos_policy_approver_count_create_command_builder {
        return new az_repos_policy_approver_count_create_command_builder("az repos policy approver-count create", allowDownvotes, blocking, branch, creatorVoteCounts, enabled, minimumApproverCount, repositoryId, resetOnSourcePush);
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
    static az_repos_policy_approver_count_update(policyId: string): az_repos_policy_approver_count_update_command_builder {
        return new az_repos_policy_approver_count_update_command_builder("az repos policy approver-count update", policyId);
    }
}

/** Manage build policy. */
export class az_repos_policy_build {
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
    static az_repos_policy_build_create(blocking: boolean, branch: string, buildDefinitionId: string, displayName: string, enabled: boolean, manualQueueOnly: boolean, queueOnSourceUpdateOnly: boolean, repositoryId: string, validDuration: string): az_repos_policy_build_create_command_builder {
        return new az_repos_policy_build_create_command_builder("az repos policy build create", blocking, branch, buildDefinitionId, displayName, enabled, manualQueueOnly, queueOnSourceUpdateOnly, repositoryId, validDuration);
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
    static az_repos_policy_build_update(policyId: string): az_repos_policy_build_update_command_builder {
        return new az_repos_policy_build_update_command_builder("az repos policy build update", policyId);
    }
}

/** Manage case enforcement policy. */
export class az_repos_policy_case_enforcement {
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
    static az_repos_policy_case_enforcement_create(blocking: boolean, enabled: boolean, repositoryId: string): az_repos_policy_case_enforcement_create_command_builder {
        return new az_repos_policy_case_enforcement_create_command_builder("az repos policy case-enforcement create", blocking, enabled, repositoryId);
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
    static az_repos_policy_case_enforcement_update(policyId: string): az_repos_policy_case_enforcement_update_command_builder {
        return new az_repos_policy_case_enforcement_update_command_builder("az repos policy case-enforcement update", policyId);
    }
}

/** Manage comment required policy. */
export class az_repos_policy_comment_required {
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
    static az_repos_policy_comment_required_create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_comment_required_create_command_builder {
        return new az_repos_policy_comment_required_create_command_builder("az repos policy comment-required create", blocking, branch, enabled, repositoryId);
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
    static az_repos_policy_comment_required_update(policyId: string): az_repos_policy_comment_required_update_command_builder {
        return new az_repos_policy_comment_required_update_command_builder("az repos policy comment-required update", policyId);
    }
}

/** Manage file size policy. */
export class az_repos_policy_file_size {
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
    static az_repos_policy_file_size_create(blocking: boolean, enabled: boolean, maximumGitBlobSize: string, repositoryId: string, useUncompressedSize: boolean): az_repos_policy_file_size_create_command_builder {
        return new az_repos_policy_file_size_create_command_builder("az repos policy file-size create", blocking, enabled, maximumGitBlobSize, repositoryId, useUncompressedSize);
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
    static az_repos_policy_file_size_update(policyId: string): az_repos_policy_file_size_update_command_builder {
        return new az_repos_policy_file_size_update_command_builder("az repos policy file-size update", policyId);
    }
}

/** Manage merge strategy policy. */
export class az_repos_policy_merge_strategy {
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
    static az_repos_policy_merge_strategy_create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_merge_strategy_create_command_builder {
        return new az_repos_policy_merge_strategy_create_command_builder("az repos policy merge-strategy create", blocking, branch, enabled, repositoryId);
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
    static az_repos_policy_merge_strategy_update(policyId: string): az_repos_policy_merge_strategy_update_command_builder {
        return new az_repos_policy_merge_strategy_update_command_builder("az repos policy merge-strategy update", policyId);
    }
}

/** Manage required reviewer policy. */
export class az_repos_policy_required_reviewer {
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
    static az_repos_policy_required_reviewer_create(blocking: boolean, branch: string, enabled: boolean, message: string, repositoryId: string, requiredReviewerIds: string): az_repos_policy_required_reviewer_create_command_builder {
        return new az_repos_policy_required_reviewer_create_command_builder("az repos policy required-reviewer create", blocking, branch, enabled, message, repositoryId, requiredReviewerIds);
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
    static az_repos_policy_required_reviewer_update(policyId: string): az_repos_policy_required_reviewer_update_command_builder {
        return new az_repos_policy_required_reviewer_update_command_builder("az repos policy required-reviewer update", policyId);
    }
}

/** Manage work item linking policy. */
export class az_repos_policy_work_item_linking {
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
    static az_repos_policy_work_item_linking_create(blocking: boolean, branch: string, enabled: boolean, repositoryId: string): az_repos_policy_work_item_linking_create_command_builder {
        return new az_repos_policy_work_item_linking_create_command_builder("az repos policy work-item-linking create", blocking, branch, enabled, repositoryId);
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
    static az_repos_policy_work_item_linking_update(policyId: string): az_repos_policy_work_item_linking_update_command_builder {
        return new az_repos_policy_work_item_linking_update_command_builder("az repos policy work-item-linking update", policyId);
    }
}

/** Manage branch policy. */
export class az_repos_policy {
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
    static az_repos_policy_create(policyConfiguration: string): az_repos_policy_create_command_builder {
        return new az_repos_policy_create_command_builder("az repos policy create", policyConfiguration);
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
    static az_repos_policy_delete(policyId: string): az_repos_policy_delete_command_builder {
        return new az_repos_policy_delete_command_builder("az repos policy delete", policyId);
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
    static az_repos_policy_list(): az_repos_policy_list_command_builder {
        return new az_repos_policy_list_command_builder("az repos policy list");
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
    static az_repos_policy_show(policyId: string): az_repos_policy_show_command_builder {
        return new az_repos_policy_show_command_builder("az repos policy show", policyId);
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
    static az_repos_policy_update(policyConfiguration: string, policyId: string): az_repos_policy_update_command_builder {
        return new az_repos_policy_update_command_builder("az repos policy update", policyConfiguration, policyId);
    }
}

/** Manage pull request policy. */
export class az_repos_pr_policy {
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
    static az_repos_pr_policy_list(id: string): az_repos_pr_policy_list_command_builder {
        return new az_repos_pr_policy_list_command_builder("az repos pr policy list", id);
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
    static az_repos_pr_policy_queue(evaluationId: string, id: string): az_repos_pr_policy_queue_command_builder {
        return new az_repos_pr_policy_queue_command_builder("az repos pr policy queue", evaluationId, id);
    }
}

/** Manage pull request reviewers. */
export class az_repos_pr_reviewer {
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
    static az_repos_pr_reviewer_add(id: string, reviewers: string): az_repos_pr_reviewer_add_command_builder {
        return new az_repos_pr_reviewer_add_command_builder("az repos pr reviewer add", id, reviewers);
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
    static az_repos_pr_reviewer_list(id: string): az_repos_pr_reviewer_list_command_builder {
        return new az_repos_pr_reviewer_list_command_builder("az repos pr reviewer list", id);
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
    static az_repos_pr_reviewer_remove(id: string, reviewers: string): az_repos_pr_reviewer_remove_command_builder {
        return new az_repos_pr_reviewer_remove_command_builder("az repos pr reviewer remove", id, reviewers);
    }
}

/** Manage work items associated with pull requests. */
export class az_repos_pr_work_item {
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
    static az_repos_pr_work_item_add(id: string, workItems: string): az_repos_pr_work_item_add_command_builder {
        return new az_repos_pr_work_item_add_command_builder("az repos pr work-item add", id, workItems);
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
    static az_repos_pr_work_item_list(id: string): az_repos_pr_work_item_list_command_builder {
        return new az_repos_pr_work_item_list_command_builder("az repos pr work-item list", id);
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
    static az_repos_pr_work_item_remove(id: string, workItems: string): az_repos_pr_work_item_remove_command_builder {
        return new az_repos_pr_work_item_remove_command_builder("az repos pr work-item remove", id, workItems);
    }
}

/** Manage pull requests. */
export class az_repos_pr {
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
    static az_repos_pr_checkout(id: string): az_repos_pr_checkout_command_builder {
        return new az_repos_pr_checkout_command_builder("az repos pr checkout", id);
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
    static az_repos_pr_create(): az_repos_pr_create_command_builder {
        return new az_repos_pr_create_command_builder("az repos pr create");
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
    static az_repos_pr_list(): az_repos_pr_list_command_builder {
        return new az_repos_pr_list_command_builder("az repos pr list");
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
    static az_repos_pr_set_vote(id: string, vote: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'): az_repos_pr_set_vote_command_builder {
        return new az_repos_pr_set_vote_command_builder("az repos pr set-vote", id, vote);
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
    static az_repos_pr_show(id: string): az_repos_pr_show_command_builder {
        return new az_repos_pr_show_command_builder("az repos pr show", id);
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
    static az_repos_pr_update(id: string): az_repos_pr_update_command_builder {
        return new az_repos_pr_update_command_builder("az repos pr update", id);
    }
}

/** Manage Git references. */
export class az_repos_ref {
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
    static az_repos_ref_create(name: string, objectId: string): az_repos_ref_create_command_builder {
        return new az_repos_ref_create_command_builder("az repos ref create", name, objectId);
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
    static az_repos_ref_delete(name: string, objectId: string): az_repos_ref_delete_command_builder {
        return new az_repos_ref_delete_command_builder("az repos ref delete", name, objectId);
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
    static az_repos_ref_list(): az_repos_ref_list_command_builder {
        return new az_repos_ref_list_command_builder("az repos ref list");
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
    static az_repos_ref_lock(name: string): az_repos_ref_lock_command_builder {
        return new az_repos_ref_lock_command_builder("az repos ref lock", name);
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
    static az_repos_ref_unlock(name: string): az_repos_ref_unlock_command_builder {
        return new az_repos_ref_unlock_command_builder("az repos ref unlock", name);
    }
}

/** Manage Azure Repos. */
export class az_repos {
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
    static az_repos_create(name: string): az_repos_create_command_builder {
        return new az_repos_create_command_builder("az repos create", name);
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
    static az_repos_delete(id: string): az_repos_delete_command_builder {
        return new az_repos_delete_command_builder("az repos delete", id);
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
    static az_repos_list(): az_repos_list_command_builder {
        return new az_repos_list_command_builder("az repos list");
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
    static az_repos_show(repository: string): az_repos_show_command_builder {
        return new az_repos_show_command_builder("az repos show", repository);
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
    static az_repos_update(repository: string): az_repos_update_command_builder {
        return new az_repos_update_command_builder("az repos update", repository);
    }
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
class az_repos_import_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, gitSourceUrl: string) {
        super(commandParent);
        this.gitSourceUrl(gitSourceUrl)
    }

    /** Url of the source git repository. */
    gitSourceUrl(value: string): az_repos_import_create_command_builder {
        this.setFlag("--git-source-url", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_import_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Service Endpoint for connection to external endpoint. */
    gitServiceEndpointId(value: string): az_repos_import_create_command_builder {
        this.setFlag("--git-service-endpoint-id", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_import_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_import_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository to create the import request in. */
    repository(value: string): az_repos_import_create_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Flag to tell if source git repository is private. */
    requiresAuthorization(value: string): az_repos_import_create_command_builder {
        this.setFlag("--requires-authorization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_import_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** User name in case source git repository is private. */
    userName(value: string): az_repos_import_create_command_builder {
        this.setFlag("--user-name", value);
        return this;
    }
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
class az_repos_policy_approver_count_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, allowDownvotes: boolean, blocking: boolean, branch: string, creatorVoteCounts: boolean, enabled: boolean, minimumApproverCount: string, repositoryId: string, resetOnSourcePush: boolean) {
        super(commandParent);
        this.allowDownvotes(allowDownvotes)
        this.blocking(blocking)
        this.branch(branch)
        this.creatorVoteCounts(creatorVoteCounts)
        this.enabled(enabled)
        this.minimumApproverCount(minimumApproverCount)
        this.repositoryId(repositoryId)
        this.resetOnSourcePush(resetOnSourcePush)
    }

    /** Whether to allow downvotes or not. */
    allowDownvotes(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--allow-downvotes", value.toString());
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Whether the creator's vote counts or not. */
    creatorVoteCounts(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--creator-vote-counts", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Minimum number of approvers required. For example: 2. */
    minimumApproverCount(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--minimum-approver-count", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Whether to reset source on push. */
    resetOnSourcePush(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--reset-on-source-push", value.toString());
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_approver_count_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_approver_count_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether to allow downvotes or not. */
    allowDownvotes(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--allow-downvotes", value.toString());
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Whether the creator's vote counts or not. */
    creatorVoteCounts(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--creator-vote-counts", value.toString());
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Minimum number of approvers required. For example: 2. */
    minimumApproverCount(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--minimum-approver-count", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Whether to reset source on push. */
    resetOnSourcePush(value: boolean): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--reset-on-source-push", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_approver_count_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_build_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, branch: string, buildDefinitionId: string, displayName: string, enabled: boolean, manualQueueOnly: boolean, queueOnSourceUpdateOnly: boolean, repositoryId: string, validDuration: string) {
        super(commandParent);
        this.blocking(blocking)
        this.branch(branch)
        this.buildDefinitionId(buildDefinitionId)
        this.displayName(displayName)
        this.enabled(enabled)
        this.manualQueueOnly(manualQueueOnly)
        this.queueOnSourceUpdateOnly(queueOnSourceUpdateOnly)
        this.repositoryId(repositoryId)
        this.validDuration(validDuration)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_build_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Build Definition Id. */
    buildDefinitionId(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--build-definition-id", value);
        return this;
    }

    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    displayName(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_build_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Whether to allow only manual queue of builds. */
    manualQueueOnly(value: boolean): az_repos_policy_build_create_command_builder {
        this.setFlag("--manual-queue-only", value.toString());
        return this;
    }

    /** Queue Only on source update. */
    queueOnSourceUpdateOnly(value: boolean): az_repos_policy_build_create_command_builder {
        this.setFlag("--queue-on-source-update-only", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Policy validity duration (in minutes). */
    validDuration(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--valid-duration", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_build_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_build_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--path-filter", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_build_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_build_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_build_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_build_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Build Definition Id. */
    buildDefinitionId(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--build-definition-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_build_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Display name for this build policy to identify the policy. For example: 'Manual queue policy'. */
    displayName(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_build_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Whether to allow only manual queue of builds. */
    manualQueueOnly(value: boolean): az_repos_policy_build_update_command_builder {
        this.setFlag("--manual-queue-only", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--path-filter", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Queue Only on source update. */
    queueOnSourceUpdateOnly(value: boolean): az_repos_policy_build_update_command_builder {
        this.setFlag("--queue-on-source-update-only", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Policy validity duration (in minutes). */
    validDuration(value: string): az_repos_policy_build_update_command_builder {
        this.setFlag("--valid-duration", value);
        return this;
    }
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
class az_repos_policy_case_enforcement_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, enabled: boolean, repositoryId: string) {
        super(commandParent);
        this.blocking(blocking)
        this.enabled(enabled)
        this.repositoryId(repositoryId)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_case_enforcement_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_case_enforcement_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_case_enforcement_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_comment_required_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string) {
        super(commandParent);
        this.blocking(blocking)
        this.branch(branch)
        this.enabled(enabled)
        this.repositoryId(repositoryId)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_comment_required_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_comment_required_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_comment_required_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_file_size_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, enabled: boolean, maximumGitBlobSize: string, repositoryId: string, useUncompressedSize: boolean) {
        super(commandParent);
        this.blocking(blocking)
        this.enabled(enabled)
        this.maximumGitBlobSize(maximumGitBlobSize)
        this.repositoryId(repositoryId)
        this.useUncompressedSize(useUncompressedSize)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    maximumGitBlobSize(value: string): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--maximum-git-blob-size", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Whether to use uncompressed size. */
    useUncompressedSize(value: boolean): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--use-uncompressed-size", value.toString());
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_file_size_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_file_size_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10. */
    maximumGitBlobSize(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--maximum-git-blob-size", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Whether to use uncompressed size. */
    useUncompressedSize(value: boolean): az_repos_policy_file_size_update_command_builder {
        this.setFlag("--use-uncompressed-size", value.toString());
        return this;
    }
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
class az_repos_policy_merge_strategy_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string) {
        super(commandParent);
        this.blocking(blocking)
        this.branch(branch)
        this.enabled(enabled)
        this.repositoryId(repositoryId)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    allowNoFastForward(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--allow-no-fast-forward", value.toString());
        return this;
    }

    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    allowRebase(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--allow-rebase", value.toString());
        return this;
    }

    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    allowRebaseMerge(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--allow-rebase-merge", value.toString());
        return this;
    }

    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    allowSquash(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--allow-squash", value.toString());
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    useSquashMerge(value: boolean): az_repos_policy_merge_strategy_create_command_builder {
        this.setFlag("--use-squash-merge", value.toString());
        return this;
    }
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
class az_repos_policy_merge_strategy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development. */
    allowNoFastForward(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--allow-no-fast-forward", value.toString());
        return this;
    }

    /** Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit. */
    allowRebase(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--allow-rebase", value.toString());
        return this;
    }

    /** Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit. */
    allowRebaseMerge(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--allow-rebase-merge", value.toString());
        return this;
    }

    /** Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch. */
    allowSquash(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--allow-squash", value.toString());
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Whether to squash merge always. This option does not work for allowing other merge types. */
    useSquashMerge(value: boolean): az_repos_policy_merge_strategy_update_command_builder {
        this.setFlag("--use-squash-merge", value.toString());
        return this;
    }
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
class az_repos_policy_required_reviewer_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, branch: string, enabled: boolean, message: string, repositoryId: string, requiredReviewerIds: string) {
        super(commandParent);
        this.blocking(blocking)
        this.branch(branch)
        this.enabled(enabled)
        this.message(message)
        this.repositoryId(repositoryId)
        this.requiredReviewerIds(requiredReviewerIds)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Message. */
    message(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--message", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    requiredReviewerIds(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--required-reviewer-ids", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--path-filter", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_required_reviewer_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_required_reviewer_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Message. */
    message(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--message", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/\* or \*.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs. */
    pathFilter(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--path-filter", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com. */
    requiredReviewerIds(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--required-reviewer-ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_required_reviewer_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_work_item_linking_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, blocking: boolean, branch: string, enabled: boolean, repositoryId: string) {
        super(commandParent);
        this.blocking(blocking)
        this.branch(branch)
        this.enabled(enabled)
        this.repositoryId(repositoryId)
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_work_item_linking_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_work_item_linking_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Whether the policy should be blocking or not. */
    blocking(value: boolean): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--blocking", value.toString());
        return this;
    }

    /** Branch on which this policy should be applied. For example: master. */
    branch(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument. */
    branchMatchType(value: 'exact' | 'prefix'): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--branch-match-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether the policy is enabled or not. */
    enabled(value: boolean): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Id of the repository on which to apply the policy. */
    repositoryId(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_work_item_linking_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyConfiguration: string) {
        super(commandParent);
        this.policyConfiguration(policyConfiguration)
    }

    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    policyConfiguration(value: string): az_repos_policy_create_command_builder {
        this.setFlag("--policy-configuration", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_delete_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_repos_policy_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_repos_policy_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: --branch master. */
    branch(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** ID of the repository to filter results by exact match of the repository ID. For example --repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345. */
    repositoryId(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--repository-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyId: string) {
        super(commandParent);
        this.policyId(policyId)
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_show_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_policy_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, policyConfiguration: string, policyId: string) {
        super(commandParent);
        this.policyConfiguration(policyConfiguration)
        this.policyId(policyId)
    }

    /** Local file path for configuration file. Please use / backslash when typing in directory path. */
    policyConfiguration(value: string): az_repos_policy_update_command_builder {
        this.setFlag("--policy-configuration", value);
        return this;
    }

    /** ID of the policy. */
    policyId(value: string): az_repos_policy_update_command_builder {
        this.setFlag("--policy-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_policy_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_policy_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_policy_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_policy_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_policy_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Number of policies to skip. */
    skip(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of policies to list. */
    top(value: string): az_repos_pr_policy_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_repos_pr_policy_queue_command_builder extends CommandBuilder {
    constructor(commandPath: string, evaluationId: string, id: string) {
        super(commandParent);
        this.evaluationId(evaluationId)
        this.id(id)
    }

    /** ID of the policy evaluation to queue. */
    evaluationId(value: string): az_repos_pr_policy_queue_command_builder {
        this.setFlag("--evaluation-id", value);
        return this;
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_policy_queue_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_policy_queue_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_policy_queue_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_policy_queue_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_reviewer_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, reviewers: string) {
        super(commandParent);
        this.id(id)
        this.reviewers(reviewers)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Users or groups to include as reviewers on a pull request. Space separated. */
    reviewers(value: string): az_repos_pr_reviewer_add_command_builder {
        this.setFlag("--reviewers", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_reviewer_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_reviewer_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_reviewer_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, reviewers: string) {
        super(commandParent);
        this.id(id)
        this.reviewers(reviewers)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_reviewer_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Users or groups to remove as reviewers on a pull request. Space separated. */
    reviewers(value: string): az_repos_pr_reviewer_remove_command_builder {
        this.setFlag("--reviewers", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_reviewer_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_reviewer_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_reviewer_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_work_item_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, workItems: string) {
        super(commandParent);
        this.id(id)
        this.workItems(workItems)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** IDs of the work items to link. Space separated. */
    workItems(value: string): az_repos_pr_work_item_add_command_builder {
        this.setFlag("--work-items", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_work_item_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_work_item_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_work_item_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, workItems: string) {
        super(commandParent);
        this.id(id)
        this.workItems(workItems)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_work_item_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** IDs of the work items to unlink. Space separated. */
    workItems(value: string): az_repos_pr_work_item_remove_command_builder {
        this.setFlag("--work-items", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_work_item_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_work_item_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_work_item_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_checkout_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_checkout_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of git remote against which PR is raised. */
    remoteName(value: string): az_repos_pr_checkout_command_builder {
        this.setFlag("--remote-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_checkout_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_create_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    autoComplete(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--auto-complete", value.toString());
        return this;
    }

    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    bypassPolicy(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--bypass-policy", value.toString());
        return this;
    }

    /** Reason for bypassing the required policies. */
    bypassPolicyReason(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--bypass-policy-reason", value);
        return this;
    }

    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    deleteSourceBranch(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--delete-source-branch", value.toString());
        return this;
    }

    /** Description for the new pull request. Can include markdown. Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    description(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Use this flag to create the pull request in draft/work in progress mode. */
    draft(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--draft", value.toString());
        return this;
    }

    /** Message displayed when commits are merged. */
    mergeCommitMessage(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--merge-commit-message", value);
        return this;
    }

    /** Open the pull request in your web browser. */
    open(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository to create the pull request in. */
    repository(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Additional users or groups to include as reviewers on the new pull request. Space separated. */
    reviewers(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--reviewers", value);
        return this;
    }

    /** Name of the source branch. Example: "dev". */
    sourceBranch(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--source-branch", value);
        return this;
    }

    /** Squash the commits in the source branch when merging into the target branch. */
    squash(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--squash", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the target branch. If not specified, defaults to the default branch of the target repository. */
    targetBranch(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--target-branch", value);
        return this;
    }

    /** Title for the new pull request. */
    title(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--title", value);
        return this;
    }

    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    transitionWorkItems(value: boolean): az_repos_pr_create_command_builder {
        this.setFlag("--transition-work-items", value.toString());
        return this;
    }

    /** IDs of the work items to link to the new pull request. Space separated. */
    workItems(value: string): az_repos_pr_create_command_builder {
        this.setFlag("--work-items", value);
        return this;
    }
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
class az_repos_pr_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Limit results to pull requests created by this user. */
    creator(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--creator", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Include _links for each pull request. */
    includeLinks(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--include-links", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Limit results to pull requests where this user is a reviewer. */
    reviewer(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--reviewer", value);
        return this;
    }

    /** Number of pull requests to skip. */
    skip(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Limit results to pull requests that originate from this source branch. */
    sourceBranch(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--source-branch", value);
        return this;
    }

    /** Limit results to pull requests with this status. */
    status(value: 'abandoned' | 'active' | 'all' | 'completed'): az_repos_pr_list_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Limit results to pull requests that target this branch. */
    targetBranch(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--target-branch", value);
        return this;
    }

    /** Maximum number of pull requests to list. */
    top(value: string): az_repos_pr_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_repos_pr_set_vote_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, vote: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author') {
        super(commandParent);
        this.id(id)
        this.vote(vote)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_set_vote_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** New vote value for the pull request. */
    vote(value: 'approve' | 'approve-with-suggestions' | 'reject' | 'reset' | 'wait-for-author'): az_repos_pr_set_vote_command_builder {
        this.setFlag("--vote", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_set_vote_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_set_vote_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_set_vote_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the pull request in your web browser. */
    open(value: string): az_repos_pr_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_pr_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_pr_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the pull request. */
    id(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch. */
    autoComplete(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--auto-complete", value.toString());
        return this;
    }

    /** Bypass required policies (if any) and completes the pull request once it can be merged. */
    bypassPolicy(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--bypass-policy", value.toString());
        return this;
    }

    /** Reason for bypassing the required policies. */
    bypassPolicyReason(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--bypass-policy-reason", value);
        return this;
    }

    /** Delete the source branch after the pull request has been completed and merged into the target branch. */
    deleteSourceBranch(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--delete-source-branch", value.toString());
        return this;
    }

    /** New description for the pull request.  Can include markdown.  Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line". */
    description(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Publish the PR or convert to draft mode. */
    draft(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--draft", value.toString());
        return this;
    }

    /** Message displayed when commits are merged. */
    mergeCommitMessage(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--merge-commit-message", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Squash the commits in the source branch when merging into the target branch. */
    squash(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--squash", value.toString());
        return this;
    }

    /** Set the new state of pull request. */
    status(value: 'abandoned' | 'active' | 'completed'): az_repos_pr_update_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** New title for the pull request. */
    title(value: string): az_repos_pr_update_command_builder {
        this.setFlag("--title", value);
        return this;
    }

    /** Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved). */
    transitionWorkItems(value: boolean): az_repos_pr_update_command_builder {
        this.setFlag("--transition-work-items", value.toString());
        return this;
    }
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
class az_repos_ref_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, objectId: string) {
        super(commandParent);
        this.name(name)
        this.objectId(objectId)
    }

    /** Name of the reference to create (example: heads/my_branch or tags/my_tag). */
    name(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Id of the object to create the reference from. */
    objectId(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_ref_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, objectId: string) {
        super(commandParent);
        this.name(name)
        this.objectId(objectId)
    }

    /** Name of the reference to delete (example: heads/my_branch). */
    name(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Id of the reference to delete. */
    objectId(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_ref_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** A filter to apply to the refs (starts with). Example: head or heads/ for the branches. */
    filter(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_ref_lock_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the reference to update (example: heads/my_branch). */
    name(value: string): az_repos_ref_lock_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_lock_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_lock_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_lock_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_lock_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_lock_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_ref_unlock_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the reference to update (example: heads/my_branch). */
    name(value: string): az_repos_ref_unlock_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_ref_unlock_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_ref_unlock_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_ref_unlock_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_ref_unlock_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_ref_unlock_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name for the new repository. */
    name(value: string): az_repos_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the repository page in your web browser. */
    open(value: string): az_repos_create_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** ID of the repository. */
    id(value: string): az_repos_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_repos_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_repos_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, repository: string) {
        super(commandParent);
        this.repository(repository)
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_show_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the repository page in your web browser. */
    open(value: string): az_repos_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_repos_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_repos_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, repository: string) {
        super(commandParent);
        this.repository(repository)
    }

    /** Name or ID of the repository. */
    repository(value: string): az_repos_update_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Default branch to be set for the repository. Example: 'refs/heads/live' or 'live'. */
    defaultBranch(value: string): az_repos_update_command_builder {
        this.setFlag("--default-branch", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_repos_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** New name for the repository. */
    name(value: string): az_repos_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_repos_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_repos_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_repos_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
