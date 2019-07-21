interface SanitizeOptions {
	mode?: "passthrough" | "throwInvalid";
}

export const COUNTRY_CODE = "234";

export const verifyPhoneNumber = (phone: string) => {
	return /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g.test(String(phone));
};

export const sanitizePhoneNumber = (phone: string, { mode = "throwInvalid" }: SanitizeOptions = {}) => {
	phone = String(phone);
	if (!verifyPhoneNumber(phone)) {
		if (mode === "throwInvalid") {
			throw new Error("Phone number is invalid");
		}
		return phone;
	}
	if (phone.startsWith("0") || phone.startsWith("+")) {
		phone = phone.substring(1);
	}
	if (phone.startsWith(COUNTRY_CODE)) {
		return phone;
	}
	return `${COUNTRY_CODE}${phone}`;
};
