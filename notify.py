from ast import Try
import os
import sys
import requests
headers = {
    "Authorization": "Bearer %s" % os.environ['LIFX_TOKEN'],
}

data = {
    "period": 2,
    "cycles": 3,
    "color": sys.argv[1],
}

requests.post('https://api.lifx.com/v1/lights/all/effects/breathe', data=data, headers=headers)