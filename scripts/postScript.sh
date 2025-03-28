#!/bin/bash
# Restart the Apache server
sudo systemctl start apache2
# Clean up
rm -rf /tmp/deployment_temp
