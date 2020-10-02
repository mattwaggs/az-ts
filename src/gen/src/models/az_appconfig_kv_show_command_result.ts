export type az_appconfig_kv_show_command_result = az_appconfig_kv_show_command_result_item[];

interface az_appconfig_kv_show_command_result_item {
  contentType?: string;
  etag: string;
  key: string;
  label?: any;
  lastModified: string;
  locked: boolean;
  tags: Tags;
  value: string;
}

interface Tags {
}