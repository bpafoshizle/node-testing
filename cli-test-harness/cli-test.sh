#!/bin/bash

export GOOGLE_APPLICATION_CREDENTIALS=/Users/bpafoshizle/github/local/node-testing/credentials/translate-testing-cef2a66b7ebb.json
access_token=`gcloud auth application-default print-access-token`
echo "Authorization: Bearer ${access_token}"
curl -s -X POST -H 'Content-Type: application/json' \
	-H "Authorization: Bearer ${access_token}" \
	'https://translation.googleapis.com/language/translate/v2' \
	-d @translate-request.json
