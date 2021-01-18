# Currency Rates API
### Enye Phase 1 Assignment - Back end 
This is a task creating a service integration to a public API and exposing a RESTful endpoint.

The application must integrate with the [Exchange Rate API](https://api.exchangeratesapi.io/latest) to proxy requests.

- The REST endpoint `/api/rates` **must** return a JSON object of the latest currency rates in the following format/schema:

```
{
    "results": {
        "base": "",
        "date": "",
        "rates": {
        }
    }
}
```

### How to use
- Create a .env file in root directory and set NODE_ENV=development and set PORT

```
npm install
```

- Development mode

```
- npm run dev
```

- Test

```
npm test
```

