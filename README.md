# nigerian-phone-number-validator
Small utility for validating and sanitizing nigerian phone numbers

### Installation

```sh
$ npm install --save nigerian-phone-number-validator
```

### Usage

```typescript
import { verifyPhoneNumber, sanitizePhoneNumber, COUNTRY_CODE } from "nigerian-phone-number-validator"
```
or 

```javascript
const { verifyPhoneNumber, sanitizePhoneNumber, COUNTRY_CODE } = require("nigerian-phone-number-validator")
```
```typescript
verifyPhoneNumber("2348139922348")); // true
verifyPhoneNumber("08139922348"));  // true

verifyPhoneNumber("081399223482"); // false
verifyPhoneNumber("245475693092"); // false

sanitizePhoneNumber("08139922348"); // 2348139922348 (Default Sanitize Mode is throwInvalid)
sanitizePhoneNumber("08139922348", , { mode : "passthrough" | "throwInvalid" }); // 2348139922348

```
### Testing

```sh
$ npm test
```