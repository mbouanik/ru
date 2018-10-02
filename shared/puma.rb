#!/usr/bin/env puma

rackup "/home/deployer/h2s/current/config.ru"
environment 'production'
pidfile "/home/deployer/h2s/shared/tmp/pids/puma.pid"
state_path "/home/deployer/h2s/shared/tmp/pids/puma.state"
stdout_redirect '/home/deployer/h2s/shared/log/puma_access.log', '/home/deployer/h2s/shared/log/puma_error.log', true
threads 0,16
#bind 'unix:///home/deployer/h2s/shared/tmp/sockets/puma.sock'
port 80
workers 0
prune_bundler
on_restart do
  puts 'Refreshing Gemfile'
  ENV["BUNDLE_GEMFILE"] = "/home/deployer/h2s/current/Gemfile"
end
