#!/bin/sh

set -e

# Function to update environment variables in files recursively
update_env_vars_placeholders() {
  directory="$1"
  old_var="$2"
  new_var_name="$3"

  # Resolve environment variable value dynamically (POSIX-safe)
  eval "new_value=\$$new_var_name"

  # If variable is empty, don't replace with literal empty string
  if [ -z "$new_value" ]; then
    echo "Warning: env var $new_var_name is not set"
    return
  fi

  # Replace occurrences in all files
  find "$directory" -type f -exec \
    sed -i "s|{{$old_var}}|$new_value|g" {} +
}

# Apply replacements
update_env_vars_placeholders "/usr/share/nginx/html" "__GOOGLE_CALENDAR_API_URL__" "GOOGLE_CALENDAR_API_URL"
update_env_vars_placeholders "/usr/share/nginx/html" "__GOOGLE_CALENDAR_API_KEY__" "GOOGLE_CALENDAR_API_KEY"
update_env_vars_placeholders "/usr/share/nginx/html" "__GOOGLE_CALENDAR_ID__" "GOOGLE_CALENDAR_ID"

# Start Nginx
exec nginx -g "daemon off;"
