export interface Node {
  uid: string;
  name: string;
  summary: string;
  description: string;
  directCommands?: DirectCommand[];
  commands?: string[];
  globalParameters: GlobalParameter[];
  metadata: Metadata;
}

export interface Metadata {
  doc_source_url_repo?: string;
  original_content_git_url?: string;
  gitcommit?: string;
  updated_at?: string;
  'ms.date'?: string;
  description?: string;
}

export interface GlobalParameter {
  name: string;
  summary: string;
  defaultValue?: string;
  parameterValueGroup?: string;
}

export interface DirectCommand {
  uid: string;
  name: string;
  summary: string;
  description: string;
  syntax: string;
  examples?: Example[];
  requiredParameters?: RequiredParameter[];
  optionalParameters?: OptionalParameter[];
  editLink?: string;
}

export interface OptionalParameter {
  name: string;
  summary: string;
  description: string;
  valueFrom?: string;
  defaultValue?: string;
  parameterValueGroup?: string;
}

export interface RequiredParameter {
  isRequired: boolean;
  name: string;
  parameterValueGroup?: string;
  summary: string;
  description: string;
  valueFrom?: string;
  defaultValue?: string;
}

export interface Example {
  summary: string;
  syntax: string;
}