"""
this script calls a web api for the weather in qatar using python and 
"""
# below is the code for the gui
import tkinter as tk
import requests

root = tk.Tk()
root.title("Qatar Weather")
# calls API and gets the result
response = requests.get(
    "http://api.openweathermap.org/data/2.5/weather",
    params={
        "q": "Qatar",
        "appid": "a98ea5a721efeed5149551b68c67185d",
    },
)

data = response.json()

temperature = data["main"]["temp"]
humidity = data["main"]["humidity"]
wind_speed = data["wind"]["speed"]

temp_label = tk.Label(root, text=f"Temperature: {temperature} C")
temp_label.pack()

humidity_label = tk.Label(root, text=f"Humidity: {humidity}%")
humidity_label.pack()

wind_label = tk.Label(root, text=f"Wind speed: {wind_speed} m/s")
wind_label.pack()

root.mainloop()

# to check the status code of the response
if response.status_code == 200:
    # The request was successful
    print("Success!")
else:
    # The request failed
    print("Error:", response.status_code)
