# Be sure to restart your server when you modify this file.

#if Rails.application.config.session_store.nil?
#  Rails.application.config.session_store :cookie_store, key: '_dashboard_session', secure: Rails.env.production?
#end
#
#Rails.application.config.session_store :cache_store, { cache: ActiveSupport::Cache::FileStore.new(Dir.mktmpdir.to_s) }
Rails.application.config.session_store :cookie_store, key: '_dashboard_session', secure: false



