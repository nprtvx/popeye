import requests
import argparse

def send_request(url, method, data=None):
    try:
        if method == 'GET':
            response = requests.get(url)
        elif method == 'POST':
            response = requests.post(url, data=data)
        else:
            raise ValueError("Unsupported HTTP method")

        response.raise_for_status()
        print("Response Status Code:", response.status_code)
        print("Response Content:")
        print(response.text)
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Send HTTP requests to a specified URL")
    parser.add_argument("url", type=str, help="The URL to send the request to")
    parser.add_argument("method", type=str, choices=['GET', 'POST'], help="The HTTP method to use")
    parser.add_argument("--data", type=str, help="Data to send in the request body (for POST requests)")

    args = parser.parse_args()
    send_request(args.url, args.method, args.data)
