# HTTP-CODE-LIST
Simple package to list http statuses with their codes in the CLI.

## Installation:
`npm install --global http-code-list`
--> Interface with the package using the `http-codes` CLI command.
or
`npm install --save-dev http-code-list`
--> Interface with the package using the `npm run start` CLI command.

## Usage:

**NOTE**: _Examples assume a global installation_
1) Run the command:
```[bash]
> http-codes
... codes show up here
```

2) This program uses a *case-insensitive regular expression* to find matching statuses or codes. The following yields all codes and statuses matching the arguments provided:

```[bash]
> http-codes 300 3_1 request
300: MULTIPLE_CHOICES                   (specified)
301: MOVED_PERMANENTLY                  (matches /3\d1/i)
400: BAD_REQUEST                        (matches /request/i)
408: REQUEST_TIMEOUT                    (matches /request/i)
413: REQUEST_TOO_LONG                   (matches /request/i)
414: REQUEST_URI_TOO_LONG               (matches /request/i)
416: REQUESTED_RANGE_NOT_SATISFIABLE    (matches /request/i)
429: TOO_MANY_REQUESTS                  (matches /request/i)
431: REQUEST_HEADER_FIELDS_TOO_LARGE    (matches /request/i)
```
