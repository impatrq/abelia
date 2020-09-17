# http request usando python
import requests
import json
URL="http://127.0.0.1:5000/abelia/us-central1/agregarMedicion"
headers = {'content-type': 'application/json'}
movimiento = "1"
ritmo = "180"
user_id = "94444444"
PARAMS = {
  "ritmo_cardiaco":ritmo,"movimiento":movimiento, "user_id":user_id
    } 
r = requests.get(URL, params = PARAMS) 
  
data=r
  
print(data.content, PARAMS, r.headers['Content-Type'])