export interface az_appconfig_kv_show_command_result {
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