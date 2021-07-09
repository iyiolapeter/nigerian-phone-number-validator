import { sanitizePhoneNumber, verifyPhoneNumber } from "../index";

describe("Nigerian Phone Number Validator", () => {
	it("should return true valid phone numbers", () => {
		expect(verifyPhoneNumber("2348139922348")).toBe(true);
	});

	it("should return false for invalid phone numbers", () => {
		expect(verifyPhoneNumber("23481399223486")).toBe(false);
		expect(verifyPhoneNumber("2438139922348")).toBe(false);
		expect(verifyPhoneNumber("3248139922348")).toBe(false);
		expect(verifyPhoneNumber("3428139922348")).toBe(false);
		expect(verifyPhoneNumber("4238139922348")).toBe(false);
		expect(verifyPhoneNumber("4328139922348")).toBe(false);
	});

	it("should sanitize phone numbers", () => {
		expect(sanitizePhoneNumber("08139922348")).toBe("2348139922348");
		expect(sanitizePhoneNumber("2348139922348")).toBe("2348139922348");
		expect(() => sanitizePhoneNumber("23481399223486", { mode: "throwInvalid" })).toThrowError();
		expect(sanitizePhoneNumber("23481399223486", { mode: "passthrough" })).toBe("23481399223486");
		expect(sanitizePhoneNumber("11111", { mode: "passthrough" })).toBe("11111");
	});
});
