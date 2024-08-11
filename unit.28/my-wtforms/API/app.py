from flask import Flask, render_template, request
import requests

API_BASE_URL ='https://www.mapquestapi.com/geocoding/v1/address'

key = '4WiuDGgyNC6lAp94txicEblMUf53z5O0'


app = Flask(__name__)


def get_coords(address):
    res = requests.get(f"{API_BASE_URL}/address",
                params={'key': key, "location": address})
   
    data = res.json()
    lat = data['results'] [0] ['locations'] [0] ['latLng']['lat']
    lng = data['results'] [0] ['locations'] [0] ['latLng']['lng']
    coords = {'lat': lat, 'lng': lng}
    return coords



@app.route('/')
def enter_address_form():
    return render_template('address_form.html')

@app.route('/geocode')
def get_location():
    address = request.args('address')
    coords = get_coords(address)
    return render_template('address_form.html', coords = coords )
























#  import requests

# term = 'Madonna'

# res = requests.get(
#     "https://itunes.apple.com/search", params={'term': term, 'limit': 5}
# )

# data = res.json()

# for result in data['results']:
#     print(result['trackName'])
#     print(result['collectionName'])

# data = {
#     'username': 'chickenz',
#     'tweets': [
#         'helloh', 'goodbye','bock bock', {'id': 1, 'text': 'my first tweet'}
#     ]
# }

# requests.post('https://websiteWeareusingforAPI', json = data)

# key = '4WiuDGgyNC6lAp94txicEblMUf53z5O0'






