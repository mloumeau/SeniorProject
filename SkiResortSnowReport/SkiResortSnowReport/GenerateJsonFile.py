import requests;
import json;
import SkiResorts;

def manual_replace(string, char, index):
    return string[:index] + char + string[index +1:]

id = 1001
f = open("SkiResortData.json", "a")

for query in SkiResorts.skiResorts:     
    api_url = 'https://api.worldweatheronline.com/premium/v1/ski.ashx?key=fc1107fe96584732ba6231607222803&q=' + query + '&format=JSON'
    response = requests.get(api_url)
    # Convert data to dict
    data = json.loads(response.text)
    # Convert dict to string
    data = json.dumps(data)
    data = data.replace("data", str(id))
    if query == SkiResorts.skiResorts[0]:
        data = data[:-1] + ','
    elif query != SkiResorts.skiResorts[-1]:
        data = data[1:-1] + ','
    else:
        data = data[1:]
    id += 1
    f.write(data)
f.close()
