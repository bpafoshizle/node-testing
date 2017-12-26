#!/bin/bash

export GOOGLE_APPLICATION_CREDENTIALS="${HOME}/github/local/node-testing/credentials/translate-testing-8acb2fbd806e.json"
access_token=`gcloud auth application-default print-access-token`
echo "Authorization: Bearer ${access_token}"
curl -s -X POST -H 'Content-Type: application/json' \
	-H "Authorization: Bearer ${access_token}" \
	'https://translation.googleapis.com/language/translate/v2' \
	-d @translate-request.json
# 14547475