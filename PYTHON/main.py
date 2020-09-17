# http request usando python
import requests
URL="http://localhost:5000/abelia/us-central1/agregarMedicion"
movimiento = "1"
ritmo = "180"
user_id = "94444444"
PARAMS = {
  'ritmo':ritmo,'movimiento':movimiento, 'user_id':user_id
    } 
r = requests.post(url = URL, params = PARAMS) 
  
data = r.json() 
  
print(data)